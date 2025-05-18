
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GradientCardSection from "@/components/GradientCardSection";
import FeaturesSection from "@/components/FeaturesSection";
import RafikiAISection from "@/components/RafikiAISection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GradientCardSection />
      <FeaturesSection />
      <RafikiAISection />
      <CommunitySection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
