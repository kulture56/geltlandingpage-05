import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";

// Sample conversation data
const sampleConversation = [{
  id: 1,
  content: "Jambo! I'm Rafiki, your AI Assistant. How can I help you today?",
  sender: "ai"
}, {
  id: 2,
  content: "Hello, can you tell me about GELT?",
  sender: "user"
}, {
  id: 3,
  content: "GELT is an investment platform designed for the Kenyan market. It helps you learn about investing and provides access to financial opportunities tailored to local needs.",
  sender: "ai"
}, {
  id: 4,
  content: "What types of investments can I make?",
  sender: "user"
}, {
  id: 5,
  content: "With GELT, you can access various investment options including stocks, mutual funds, government bonds, and more. The platform is designed to help Kenyans build wealth through diversified investment strategies.",
  sender: "ai"
}, {
  id: 6,
  content: "Thank you for the information!",
  sender: "user"
}, {
  id: 7,
  content: "Karibu! Is there anything else you'd like to know about investing in Kenya?",
  sender: "ai"
}];
const RafikiAISection = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  return <section id="rafiki" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            {showChat ? <div className="flex justify-center md:justify-start">
                <Button onClick={() => setShowChat(false)} className="bg-geltPurple hover:bg-geltPurple-600">
                  Hide Rafiki AI Chat
                </Button>
              </div> : <div className="flex justify-center md:justify-start">
                
              </div>}
            
            {/* Floating Expandable Chat */}
            <div className="relative h-32">
              <ExpandableChat size="lg" position="bottom-right" icon={<Bot className="h-6 w-6" />}>
                <ExpandableChatHeader className="flex items-center justify-between bg-geltPurple text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src="/lovable-uploads/6db6e250-3ae9-4f5b-b08b-fa270c31751d.png" alt="Rafiki" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="font-medium">Rafiki AI Assistant</h2>
                  </div>
                  <p className="text-xs text-white/70">Conversation History</p>
                </ExpandableChatHeader>

                <ExpandableChatBody>
                  <ChatMessageList>
                    {sampleConversation.map(message => <ChatBubble key={message.id} variant={message.sender === "user" ? "sent" : "received"}>
                        <ChatBubbleAvatar className="h-8 w-8 shrink-0" src={message.sender === "user" ? undefined : "/lovable-uploads/6db6e250-3ae9-4f5b-b08b-fa270c31751d.png"} fallback={message.sender === "user" ? "ME" : "AI"} />
                        <ChatBubbleMessage variant={message.sender === "user" ? "sent" : "received"} className={message.sender === "user" ? "bg-geltPurple text-white" : "bg-slate-200 text-slate-800"}>
                          {message.content}
                        </ChatBubbleMessage>
                      </ChatBubble>)}
                  </ChatMessageList>
                </ExpandableChatBody>

                <ExpandableChatFooter className="text-center p-4 bg-slate-50">
                  <p className="text-slate-500 text-sm">This is a read-only chat history.</p>
                  <p className="text-slate-400 text-xs mt-1">Use the "Chat with Rafiki Now" button to start a real conversation</p>
                </ExpandableChatFooter>
              </ExpandableChat>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">Meet Rafiki AI Assistant</h2>
            <p className="text-lg mb-6 text-zinc-950">
              Your personalized financial companion that speaks both English and Swahili.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-zinc-950">24/7 financial guidance tailored to Kenyan markets.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-zinc-950">Explains complex investment concepts in simple terms.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-zinc-950">Connects you with relevant GELT resources.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-zinc-950">Provides real-time market updates and analysis.</span>
              </li>
            </ul>
            {!showChat && <Button onClick={() => setShowChat(true)} className="bg-geltPurple hover:bg-geltPurple-600 md:hidden">
                Chat with Rafiki Now
              </Button>}
          </div>
        </div>
      </div>
    </section>;
};
export default RafikiAISection;