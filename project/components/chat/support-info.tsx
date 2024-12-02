import { CUSTOMER_SUPPORT_CONFIG } from '@/types/chat'

interface SupportInfoProps {
  show: boolean;
}

export function SupportInfo({ show }: SupportInfoProps) {
  if (!show) return null

  return (
    <div className="bg-blue-50 dark:bg-gray-700 p-4 text-sm">
      <h3 className="font-bold text-blue-800 dark:text-blue-200">Contact Information</h3>
      <p>Email: {CUSTOMER_SUPPORT_CONFIG.supportEmail}</p>
      <p>Phone: {CUSTOMER_SUPPORT_CONFIG.supportPhone}</p>
      <p>Business Hours: {CUSTOMER_SUPPORT_CONFIG.businessHours}</p>
    </div>
  )
}