
import { Button } from "@/components/ui/button";
import { RafikiChatDemo } from "@/components/ui/rafiki-chat-demo";

const RafikiAISection = () => {
  return (
    <section id="rafiki" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Chat Demo - Left side */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex justify-center md:justify-start">
              <RafikiChatDemo />
            </div>
          </div>
          
          {/* Content - Right side */}
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
            <Button className="bg-geltPurple hover:bg-geltPurple-600">
              Try Rafiki AI Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RafikiAISection;
