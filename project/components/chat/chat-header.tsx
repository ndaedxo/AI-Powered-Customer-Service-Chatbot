import { FileText, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ChatHeaderProps {
  onToggleSupport: () => void;
}

export function ChatHeader({ onToggleSupport }: ChatHeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <FileText className="mr-2" />
        <h2 className="text-lg font-semibold">AIda Customer Support</h2>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onToggleSupport}
        className="text-white hover:bg-blue-600"
      >
        <PhoneCall className="h-5 w-5" />
      </Button>
    </div>
  )
}