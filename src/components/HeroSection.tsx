
import { Button } from "@/components/ui/button";

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
            <div className="relative z-10 md:ml-10 animate-slide-up flex justify-center">
              {/* iPhone with notification overlay */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/b8cb11d4-933e-44b4-b088-9e819e6adf94.png" 
                  alt="iPhone showing GELT notification" 
                  className="max-w-[280px] md:max-w-[320px] rounded-3xl shadow-lg"
                />
                {/* Notification overlay */}
                <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[85%] bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-3 border border-white/30 animate-fade-in">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-geltPurple flex items-center justify-center text-white font-bold text-xs shrink-0">JM</div>
                    <div>
                      <div className="font-medium text-sm">John Makau</div>
                      <div className="text-gray-500 text-xs">2 minutes ago</div>
                      <p className="mt-1 text-sm">
                        Just invested in <span className="hashtag">&#35;SACCO</span> shares after our community discussion. Learned so much, asante! 🚀
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 right-3 w-8 h-3 bg-geltPurple/20 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-geltPurple/20 to-geltPurple-light/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
