import { toast } from 'sonner'

export class ChatError extends Error {
  constructor(message: string, public code: string) {
    super(message)
    this.name = 'ChatError'
  }
}

export function handleChatError(error: unknown) {
  console.error('Chat error:', error)

  if (error instanceof ChatError) {
    switch (error.code) {
      case 'OPENAI_API_ERROR':
        toast.error('Unable to connect to AI service. Please try again later.')
        break
      case 'RATE_LIMIT_ERROR':
        toast.error('Too many requests. Please wait a moment before trying again.')
        break
      case 'TOKEN_LIMIT_ERROR':
        toast.error('Message too long. Please try a shorter message.')
        break
      case 'NETWORK_ERROR':
        toast.error('Network connection issue. Please check your internet connection.')
        break
      default:
        toast.error('An unexpected error occurred. Please try again.')
    }
  } else {
    toast.error('An unexpected error occurred. Please try again.')
  }
}