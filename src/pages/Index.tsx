
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GradientCardSection from "@/components/GradientCardSection";
import PlatformFeaturesSection from "@/components/PlatformFeaturesSection";
import FeaturesSection from "@/components/FeaturesSection";
import RafikiAISection from "@/components/RafikiAISection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialSection from "@/components/SocialSection";
import CallToAction from "@/components/CallToAction";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GradientCardSection />
      <PlatformFeaturesSection />
      <FeaturesSection />
      <RafikiAISection />
      <CommunitySection />
      <TestimonialsSection />
      <SocialSection />
      <CallToAction />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
