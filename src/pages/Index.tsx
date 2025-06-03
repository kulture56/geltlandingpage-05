
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
import TrendingTopicsSection from "@/components/TrendingTopicsSection";
import { FloatingSocial } from "@/components/ui/floating-social";

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
      <TrendingTopicsSection />
      <SocialSection />
      <CallToAction />
      <NewsletterSection />
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Index;
