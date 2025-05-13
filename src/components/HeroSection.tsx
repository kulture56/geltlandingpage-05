
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
            <div className="relative z-10 md:ml-10 animate-slide-up">
              <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-100 mb-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-geltPurple-light flex items-center justify-center text-geltPurple font-bold">JM</div>
                  <div>
                    <div className="font-medium">John Makau</div>
                    <div className="text-gray-500 text-sm">2 minutes ago</div>
                    <p className="mt-2">
                      Just invested in <span className="hashtag">#SACCO</span> shares after our community discussion. Learned so much, asante! 🚀
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-100 mb-4 ml-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-geltPurple-light flex items-center justify-center text-geltPurple font-bold">WN</div>
                  <div>
                    <div className="font-medium">Wanjiku Njeri</div>
                    <div className="text-gray-500 text-sm">5 minutes ago</div>
                    <p className="mt-2">
                      Rafiki AI just helped me understand <span className="hashtag">#CRYPTO</span> basics. So easy to follow! Who else is learning?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-100 ml-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-geltPurple-light flex items-center justify-center text-geltPurple font-bold">DO</div>
                  <div>
                    <div className="font-medium">David Omondi</div>
                    <div className="text-gray-500 text-sm">10 minutes ago</div>
                    <p className="mt-2">
                      My <span className="hashtag">#STOCKS</span> portfolio is up 15% since joining GELT's expert webinars. Tuko pamoja! 💪🏾
                    </p>
                  </div>
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
