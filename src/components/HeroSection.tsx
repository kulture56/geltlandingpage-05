import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const HeroSection = () => {
  const [showNotification, setShowNotification] = useState(true);
  const {
    toast
  } = useToast();
  const dismissNotification = () => {
    setShowNotification(false);
    toast({
      title: "Notification dismissed",
      description: "You can always check your notifications in the app",
      duration: 3000
    });
  };
  return <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-black">GROW. EMPOWER.
  </span>
              <span className="text-geltPurple">LEARN. THRIVE.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              <span className="font-medium text-black">Karibu!</span> Join Kenya's premier social-fintech platform connecting investors with knowledge, community, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium mr-2">New</span>
              Chat with Rafiki AI and get financial advice 24/7!
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 md:ml-10 animate-slide-up">
              {/* iPhone with notification overlay */}
              <div className="relative mx-auto w-full max-w-[320px]">
                {/* iPhone image */}
                <img src="/lovable-uploads/0199a015-c35b-4921-affa-55488db74432.png" alt="iPhone lock screen" className="w-full h-auto rounded-3xl shadow-lg" />
                
                {/* iOS Notification - Repositioned with better design */}
                {showNotification && <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-3 animate-fade-in">
                    <div className="flex items-start gap-3 relative">
                      <div className="w-10 h-10 rounded-full bg-geltPurple flex items-center justify-center text-white font-bold shrink-0">
                        G
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">John Makau</div>
                        <div className="text-gray-500 text-xs">2 minutes ago</div>
                        <p className="text-sm mt-1 text-left">
                          Just invested in <span className="text-geltPurple font-medium">#SACCO</span> shares after our community discussion. Learned so much, asante! 🚀
                        </p>
                      </div>
                      <button onClick={dismissNotification} className="absolute top-0 right-0 p-1 rounded-full hover:bg-gray-200 transition-colors" aria-label="Dismiss notification">
                        <X className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>}
              </div>
              
              {/* Conversation bubbles below the phone - keep a few for social proof */}
              <div className="hidden md:block bg-white shadow-xl rounded-2xl p-4 border border-gray-100 mb-4 ml-8 transform hover:-translate-y-1 transition-transform duration-300 mt-6">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10 bg-geltPurple-light text-geltPurple">
                    <AvatarFallback>WN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Wanjiku Njeri</div>
                    <div className="text-gray-500 text-sm">5 minutes ago</div>
                    <p className="mt-2">
                      Rafiki AI just helped me understand <span className="hashtag">#CRYPTO</span> basics. So easy to follow! Who else is learning?
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block bg-white shadow-xl rounded-2xl p-4 border border-gray-100 ml-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10 bg-geltPurple-light text-geltPurple">
                    <AvatarFallback>DO</AvatarFallback>
                  </Avatar>
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
    </section>;
};
export default HeroSection;