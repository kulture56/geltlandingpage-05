
import { Button } from "@/components/ui/button";
import AppMockup from "./AppMockup";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-black">Learn. Empower. </span>
              <span className="text-geltPurple">Invest.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              <span className="font-medium text-black">Karibu!</span> Join Kenya's premier social-fintech platform connecting investors with knowledge, community, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-geltPurple hover:bg-geltPurple-600 text-white font-medium px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-geltPurple text-geltPurple hover:text-white hover:bg-geltPurple font-medium">
                Sign Up Free
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium mr-2">New</span>
              Chat with Rafiki AI and get financial advice 24/7!
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
