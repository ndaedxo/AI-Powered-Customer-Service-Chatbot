import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { nanoid } from 'nanoid'
import { Message } from '@/types/chat'
import { ChatError } from '@/lib/error'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export const runtime = 'edge'

const SYSTEM_PROMPT = `You are AIda, an advanced AI customer service assistant. 
Your goal is to provide helpful, accurate, and friendly responses to customer queries. 
Always be professional, empathetic, and aim to solve the customer's problem efficiently.

Key Guidelines:
- Provide clear and concise answers
- Reference company policies when relevant
- Offer step-by-step guidance
- Escalate to human support if the query is complex
- Maintain a friendly and supportive tone`

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new ChatError('OpenAI API key not configured', 'OPENAI_API_ERROR')
    }

    const { messages } = await req.json()
    const chatId = nanoid()

    if (!messages || !Array.isArray(messages)) {
      throw new ChatError('Invalid message format', 'INVALID_REQUEST')
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      stream: true,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ]
    })

    if (!response.ok) {
      const error = await response.json()
      if (error.error?.type === 'tokens_exceeded') {
        throw new ChatError('Message too long', 'TOKEN_LIMIT_ERROR')
      }
      if (error.error?.type === 'rate_limit_exceeded') {
        throw new ChatError('Rate limit exceeded', 'RATE_LIMIT_ERROR')
      }
      throw new ChatError('OpenAI API error', 'OPENAI_API_ERROR')
    }

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream, {
      headers: { 'X-Chat-Id': chatId }
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({
        error: error instanceof ChatError ? error.message : 'An unexpected error occurred'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}