
"use client";

import { Bot } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat-message-list";

const sampleConversation = [
  {
    id: 1,
    content: "Jambo! I'm Rafiki, your AI financial assistant. How can I help you with your investment journey today?",
    sender: "ai"
  },
  {
    id: 2,
    content: "Can you help me understand the current performance of Kenyan treasury bills?",
    sender: "user"
  },
  {
    id: 3,
    content: "Absolutely! Current Kenyan treasury bills are offering attractive rates around 15-16% annually. The 91-day T-bills are particularly popular among investors seeking short-term, low-risk returns. The Central Bank of Kenya recently increased rates to combat inflation, making T-bills more appealing than money market funds right now.",
    sender: "ai"
  },
  {
    id: 4,
    content: "That's helpful! What about investment opportunities in the NSE?",
    sender: "user"
  },
  {
    id: 5,
    content: "Great question! The Nairobi Securities Exchange has several promising sectors. Banking stocks like Equity Bank and KCB Group have shown resilience. Safaricom remains a top pick with consistent dividends. For diversification, consider the NSE 20 Share Index ETF. Always remember to invest only what you can afford to lose and consult a CMA-licensed advisor for personalized advice!",
    sender: "ai"
  }
];

export function RafikiChatDemo() {
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-geltPurple text-white border-b">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
          <img 
            src="/lovable-uploads/6db6e250-3ae9-4f5b-b08b-fa270c31751d.png" 
            alt="Rafiki" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-sm">Rafiki AI Assistant</h3>
          <p className="text-xs text-white/80">Financial guidance for Kenya</p>
        </div>
        <Bot className="h-5 w-5 ml-auto" />
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto">
        <ChatMessageList>
          {sampleConversation.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-7 w-7 shrink-0"
                src={message.sender === "user" ? undefined : "/lovable-uploads/6db6e250-3ae9-4f5b-b08b-fa270c31751d.png"}
                fallback={message.sender === "user" ? "YOU" : "AI"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
                className={`text-sm max-w-[240px] ${
                  message.sender === "user" 
                    ? "bg-geltPurple text-white" 
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}
        </ChatMessageList>
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex items-center gap-2 p-3 bg-gray-200 rounded-lg opacity-60">
          <input 
            type="text" 
            placeholder="Chat with Rafiki..." 
            className="flex-1 bg-transparent text-sm text-gray-500 cursor-not-allowed"
            disabled
          />
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <Bot className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Interactive chat available in the full platform
        </p>
      </div>
    </div>
  );
}
