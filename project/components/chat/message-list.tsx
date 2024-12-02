import { Message } from '@/types/chat'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect, useRef } from 'react'

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <ScrollArea className="flex-grow p-4 space-y-4">
      {messages.map((msg) => (
        <div 
          key={msg.id} 
          className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div 
            className={`max-w-[75%] p-3 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-600 text-black dark:text-white'
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </ScrollArea>
  )
}