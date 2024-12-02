export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: number;
}

export interface ChatSettings {
  model: string;
  temperature: number;
  maxTokens: number;
}

export interface CustomerSupportConfig {
  businessHours: string;
  supportEmail: string;
  supportPhone: string;
  returnPolicy: string;
  warrantyInfo: string;
}

export const DEFAULT_CHAT_SETTINGS: ChatSettings = {
  model: 'gpt-4',
  temperature: 0.7,
  maxTokens: 1000
}

export const CUSTOMER_SUPPORT_CONFIG: CustomerSupportConfig = {
  businessHours: 'Monday to Friday, 9 AM to 5 PM EST',
  supportEmail: 'support@example.com',
  supportPhone: '1-800-123-4567',
  returnPolicy: '30-day return policy for unused items in original packaging',
  warrantyInfo: '1-year limited warranty on most products'
}