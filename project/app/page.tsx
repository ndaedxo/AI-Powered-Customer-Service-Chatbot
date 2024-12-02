import { CustomerServiceChat } from '@/components/CustomerServiceChat'

export default function Home() {
  const currentDate = new Date()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to AIda Customer Support</h1>
      <p className="text-xl text-center max-w-2xl mb-4">
        Experience our advanced AI chatbot, AIda, designed to provide quick and accurate answers to your questions.
      </p>
      <p className="text-lg text-center mb-12">
        Current Date: {currentDate.toLocaleString()}
      </p>
      <CustomerServiceChat />
    </main>
  )
}