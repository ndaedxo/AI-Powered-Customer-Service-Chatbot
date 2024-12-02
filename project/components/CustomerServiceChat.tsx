'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { ChatHeader } from '@/components/chat/chat-header'
import { SupportInfo } from '@/components/chat/support-info'
import { MessageList } from '@/components/chat/message-list'
import { ChatInput } from '@/components/chat/chat-input'
import { handleChatError } from '@/lib/error'
import { Toaster } from '@/components/ui/toaster'

export function CustomerServiceChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    onError: handleChatError
  })
  const [showSupportInfo, setShowSupportInfo] = useState(false)

  const toggleSupportInfo = () => {
    setShowSupportInfo(!showSupportInfo)
  }

  return (
    <>
      <div className="flex flex-col w-full max-w-2xl h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <ChatHeader onToggleSupport={toggleSupportInfo} />
        <SupportInfo show={showSupportInfo} />
        <MessageList messages={messages} />
        <ChatInput
          input={input}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          onChange={handleInputChange}
        />
      </div>
      <Toaster />
    </>
  )
}