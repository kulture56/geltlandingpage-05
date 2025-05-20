
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Hero, BgGradient, TextStagger, AnimatedContainer, GRADIENT_COLORS } from "@/components/ui/hero";
import { GradientCard } from "@/components/ui/gradient-card";

const GradientCardSection = () => {
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
    <section className="py-20 relative">
      {/* Visual break between hero and gradient card section */}
      <div className="border-t border-white/20 w-full absolute top-0 left-0"></div>
      <div className="w-full h-12 bg-gradient-to-b from-black/10 to-transparent absolute top-0 left-0"></div>
      
      {/* Background gradient that changes color */}
      <BgGradient 
        gradientColors={currentColorTheme}
        gradientPosition="center" 
        gradientSize="lg" 
        className="transition-opacity duration-1000 ease-in-out" 
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 z-10">
            <AnimatedContainer>
              <TextStagger 
                as="h2" 
                text="Interactive AI" 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-0 text-white" 
                stagger={0.05} 
              />
              <TextStagger 
                as="h2" 
                text="Financial Assistant" 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white" 
                stagger={0.05} 
                direction="right" 
              />
              <TextStagger 
                as="p" 
                text="Meet Rafiki, your AI guide to Kenya's financial landscape. Available 24/7 to help you navigate investments, savings, and financial growth." 
                className="text-lg md:text-xl mb-6 mx-auto text-white" 
                stagger={0.02} 
                direction="bottom" 
              />
            </AnimatedContainer>
          </div>
          
          <div className="w-full md:w-1/2 h-[500px] flex justify-center items-center z-10">
            <GradientCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientCardSection;
