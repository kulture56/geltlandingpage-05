import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Hero, BgGradient, TextStagger, AnimatedContainer, GRADIENT_COLORS } from "@/components/ui/hero";
const HeroSection = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [currentColorTheme, setCurrentColorTheme] = useState<keyof typeof GRADIENT_COLORS>("purple");
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

  // Rotate through the color themes automatically
  useEffect(() => {
    const colorThemes = Object.keys(GRADIENT_COLORS) as Array<keyof typeof GRADIENT_COLORS>;
    const interval = setInterval(() => {
      setCurrentColorTheme(prevTheme => {
        const currentIndex = colorThemes.indexOf(prevTheme);
        const nextIndex = (currentIndex + 1) % colorThemes.length;
        return colorThemes[nextIndex];
      });
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return <Hero className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28">
      {/* Background gradient that changes color */}
      <BgGradient gradientColors={currentColorTheme} gradientPosition="top" gradientSize="lg" className="transition-opacity duration-1000 ease-in-out" />
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 z-10">
            <AnimatedContainer>
              <TextStagger as="h1" text="GROW. EMPOWER." className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-0 text-black" stagger={0.05} />
              <TextStagger as="h1" text="LEARN. THRIVE." className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-geltPurple" stagger={0.05} direction="right" />
              <TextStagger as="p" text="Karibu! Join Kenya's premier social-fintech platform connecting investors with knowledge, community, and opportunities." className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg" stagger={0.02} direction="bottom" />
            </AnimatedContainer>
            
            <div className="mt-8 flex items-center text-sm text-gray-500 z-10">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium mr-2">New</span>
              Chat with Rafiki AI and get financial advice 24/7!
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <AnimatedContainer className="relative z-10 md:ml-10" transformDirection="left">
              {/* iPhone with notification overlay */}
              <div className="relative mx-auto w-full max-w-[320px]">
                {/* iPhone image */}
                
                
                {/* iOS Notification */}
                {showNotification}
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </Hero>;
};
export default HeroSection;