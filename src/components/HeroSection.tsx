
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Hero, BgGradient, TextStagger, AnimatedContainer, GRADIENT_COLORS } from "@/components/ui/hero";

const HeroSection = () => {
  const [currentColorTheme, setCurrentColorTheme] = useState<keyof typeof GRADIENT_COLORS>("purple");
  const { toast } = useToast();

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

  return (
    <Hero className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
      {/* Background gradient that changes color */}
      <BgGradient 
        gradientColors={currentColorTheme}
        gradientPosition="top" 
        gradientSize="lg" 
        className="transition-opacity duration-1000 ease-in-out" 
      />
      
      <div className="container mx-auto px-4 flex items-center justify-center h-full">
        <div className="text-center max-w-3xl z-10">
          <AnimatedContainer>
            <TextStagger 
              as="h1" 
              text="GROW. EMPOWER." 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-0 text-white" 
              stagger={0.05} 
            />
            <TextStagger 
              as="h1" 
              text="LEARN. THRIVE." 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white" 
              stagger={0.05} 
              direction="right" 
            />
            <TextStagger 
              as="p" 
              text="Karibu! Join Kenya's premier social-fintech platform connecting investors with knowledge, community, and opportunities." 
              className="text-lg md:text-xl mb-6 text-white mx-auto" 
              stagger={0.02} 
              direction="bottom" 
            />
          </AnimatedContainer>
        </div>
      </div>
    </Hero>
  );
};

export default HeroSection;
