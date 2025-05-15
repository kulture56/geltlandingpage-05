import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const RafikiAISection = () => {
  return <section id="rafiki" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-md mx-auto">
              <div className="text-center mb-4 text-sm text-gray-500">Today</div>
              
              {/* AI Message */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-geltPurple flex items-center justify-center text-white font-bold">AI</div>
                <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
                  <p>Habari! I'm Rafiki, your financial assistant. How can I help you today?</p>
                </div>
              </div>
              
              {/* User Message */}
              <div className="flex items-start gap-3 justify-end mb-6">
                <div className="bg-geltPurple/10 rounded-2xl p-3 max-w-[80%]">
                  <p>I want to start investing in stocks but don't know where to begin.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-geltPurple-light flex items-center justify-center text-geltPurple font-bold">ME</div>
              </div>
              
              {/* AI Message */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-geltPurple flex items-center justify-center text-white font-bold">AI</div>
                <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
                  <p>Sawa! That's a great first step. Based on Kenyan markets, I recommend:</p>
                  <ol className="list-decimal ml-5 mt-2">
                    <li>Start with NSE education resources on GELT</li>
                    <li>Consider joining our weekly "Stock Basics" webinar</li>
                    <li>Begin with blue-chip companies like Safaricom or KCB</li>
                  </ol>
                  <p className="mt-2">Would you like me to connect you with a stock investment mentor from our community?</p>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="flex gap-2 mt-6">
                <div className="flex-1 border rounded-full px-4 py-2 text-gray-400">Type your question...</div>
                <Button size="icon" className="rounded-full bg-geltPurple hover:bg-geltPurple-600">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Rafiki AI Assistant</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your personalized financial companion that speaks both English and Swahili.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">24/7 financial guidance tailored to Kenyan markets</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Explains complex investment concepts in simple terms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Connects you with relevant GELT community members</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-geltPurple-light p-1 rounded-full">
                  <svg className="w-5 h-5 text-geltPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Provides real-time market updates and analysis</span>
              </li>
            </ul>
            <Button className="bg-geltPurple hover:bg-geltPurple-600">Chat with Rafiki Now</Button>
          </div>
        </div>
      </div>
    </section>;
};
export default RafikiAISection;