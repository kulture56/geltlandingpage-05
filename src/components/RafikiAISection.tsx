
import { useState, useRef, useEffect } from "react";
import { Send, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RafikiAISection = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  
  return (
    <section id="rafiki" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            {showChat ? (
              <AIMessageBar onClose={() => setShowChat(false)} />
            ) : (
              <div className="flex justify-center md:justify-start">
                <Button 
                  onClick={() => setShowChat(true)}
                  className="bg-geltPurple hover:bg-geltPurple-600"
                >
                  Chat with Rafiki Now
                </Button>
              </div>
            )}
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
                <span className="text-zinc-950">24/7 financial guidance tailored to Kenyan markets</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-zinc-950">Explains complex investment concepts in simple terms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-zinc-950">Connects you with relevant GELT community members</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-zinc-950">Provides real-time market updates and analysis</span>
              </li>
            </ul>
            {!showChat && (
              <Button 
                onClick={() => setShowChat(true)}
                className="bg-geltPurple hover:bg-geltPurple-600 md:hidden"
              >
                Chat with Rafiki Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const AIMessageBar = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const simulateResponse = (userMessage: string) => {
    setIsTyping(true);
    
    let response = "Jambo, I'm Rafiki, your AI Assistant. How can I help you today?";
    
    if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
      response = "Habari yako, I'm Rafiki your friendly AI assistant. What can I do for you?";
    } else if (userMessage.toLowerCase().includes("help")) {
      response = "I'm here to help! You can ask me questions or request information and recommendations according to your needs. I do not offer financial advice, sell or promote any product or business.";
    } else if (userMessage.toLowerCase().includes("thank")) {
      response = "Karibu! Is there anything else you'd like to know?";
    } else if (userMessage.toLowerCase().includes("advise")) {
      response = "I'm sorry. I do not offer financial advise, sell or promote any product or business. I'm only here to assist you to the best of my knowledge.";
    } else if (userMessage.toLowerCase().includes("who are you")) {
      response = "I'm a bilateral AI assistant in English and Swahili called Rafiki (Friend) designed to be helpful, harmless, and honest! I do not offer financial advice, sell or promote any product or business. My answers and insights are from the instructions and data you have provided. I strongly recommend to do your research before drawing conclusions.";
    }
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 1500);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() === "") return;
    const userMessage = input;
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput("");
    simulateResponse(userMessage);
  };

  const clearChat = () => setMessages([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Card className="w-full max-w-xl mx-auto h-[500px] overflow-hidden shadow-lg border border-indigo-100">
      {/* Header */}
      <div className="bg-geltPurple p-4 border-b flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="/lovable-uploads/6db6e250-3ae9-4f5b-b08b-fa270c31751d.png" alt="Rafiki" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-white font-medium">Rafiki AI Assistant</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={clearChat} className="text-white/70 hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors ml-2">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 h-[calc(100%-132px)] overflow-y-auto bg-slate-50">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img src="/lovable-uploads/6db6e250-3ae9-4f5b-b08b-fa270c31751d.png" alt="Rafiki" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-geltPurple text-xl mb-2">How can I help you today?</h3>
            <p className="text-slate-500 text-sm max-w-xs">Ask me anything about personal finance and investing in Kenya!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.isUser
                      ? "bg-geltPurple text-white rounded-tr-none"
                      : "bg-slate-200 text-slate-800 rounded-tl-none border border-slate-300"
                  } animate-fade-in`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-2xl bg-slate-200 text-slate-800 rounded-tl-none border border-slate-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-geltPurple animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-geltPurple animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-geltPurple animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className={`p-4 border-t ${isFocused ? 'border-geltPurple/40 bg-slate-100' : 'border-slate-200 bg-white'} transition-colors duration-200`}
      >
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Type your message..."
            className="w-full bg-white border border-slate-300 rounded-full py-3 pl-4 pr-12 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-geltPurple/50"
          />
          <button
            type="submit"
            disabled={input.trim() === ""}
            className={`absolute right-1 rounded-full p-2 ${
              input.trim() === ""
                ? "text-slate-400 bg-slate-200 cursor-not-allowed"
                : "text-white bg-geltPurple hover:bg-geltPurple-600"
            } transition-colors`}
          >
            {isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </button>
        </div>
      </form>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
          .delay-75 { animation-delay: 0.2s; }
          .delay-150 { animation-delay: 0.4s; }
        `}
      </style>
    </Card>
  );
};

export default RafikiAISection;
