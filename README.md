# AIda Customer Service Chatbot

A modern, AI-powered customer service chatbot built with Next.js 13+, OpenAI GPT-4, and Tailwind CSS.

## Features

- 🤖 AI-Powered Responses using GPT-4
- 💬 Real-time Chat Interface
- 🌓 Dark Mode Support
- 📱 Responsive Design
- 🔒 Type-Safe Implementation
- ⚡ Edge Runtime Support
- 🎨 Modern UI with Tailwind CSS
- 🛠️ Built with shadcn/ui Components

## Prerequisites

- Node.js 18+
- OpenAI API Key

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/ndaedxo/AI-Powered-Customer-Service-Chatbot.git
cd aida-chatbot
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts    # Chat API endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── chat/              # Chat components
│   │   ├── chat-header.tsx
│   │   ├── chat-input.tsx
│   │   ├── message-list.tsx
│   │   └── support-info.tsx
│   ├── ui/               # UI components
│   └── theme-provider.tsx
├── types/
│   └── chat.ts           # Type definitions
└── lib/
    └── utils.ts          # Utility functions
```

## Configuration

The chatbot can be configured through the following files:

- `types/chat.ts` - Chat settings and customer support configuration
- `app/api/chat/route.ts` - System prompt and OpenAI settings

## Error Handling

The application includes comprehensive error handling for:
- API failures
- Network issues
- Invalid input
- Rate limiting
- Token limits

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 👤 Author

Ndaedzo Austin Mukhuba
- GitHub: [@ndaedzo](https://github.com/ndaedxo)
- LinkedIn: [Ndaedzo Austin Mukhuba](https://linkedin.com/in/ndaedzo-mukhuba-71759033b)
- Email: [ndaemukhuba](ndaemukhuba@gmail.com)
## License

MIT License - See LICENSE file for details
