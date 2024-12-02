import { Send, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ChatInput({ input, isLoading, onSubmit, onChange }: ChatInputProps) {
  return (
    <form 
      onSubmit={onSubmit} 
      className="flex items-center p-4 border-t dark:border-gray-700"
    >
      <Input
        value={input}
        onChange={onChange}
        placeholder="Ask a question about our products or services..."
        className="flex-grow mr-2"
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="mr-2"
      >
        {isLoading ? (
          <RefreshCw className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
      </Button>
    </form>
  )
}