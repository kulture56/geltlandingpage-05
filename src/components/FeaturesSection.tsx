import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
const features = [{
  iconSrc: "/lovable-uploads/f9ff53da-960f-44e2-a008-c367965e0034.png",
  title: "Elimu ya Kifedha",
  subtitle: "Financial Education",
  description: "Access expert-led resources to build your financial knowledge and make informed investment decisions."
}, {
  iconSrc: "/lovable-uploads/0e0cf61d-a633-4585-a5e9-5f1bc939785e.png",
  title: "Jumuiya",
  subtitle: "Community",
  description: "Connect with like-minded Kenyan investors to share insights, strategies, and opportunities."
}, {
  iconSrc: "/lovable-uploads/a195f4b8-794b-4b08-9462-447336cf7d82.png",
  title: "Uwekezaji",
  subtitle: "Investment Insights",
  description: "Get real-time updates, analysis, and trending investment opportunities in Kenya's markets."
}, {
  iconSrc: "/lovable-uploads/ac6c8dd7-1217-4fca-b7b4-91c99c6674cb.png",
  title: "Usalama",
  subtitle: "Security",
  description: "Enjoy peace of mind with our secure platform designed to protect your information and investments."
}];
interface GlowingFeatureCardProps {
  feature: typeof features[0];
  index: number;
}
const GlowingFeatureCard = ({
  feature,
  index
}: GlowingFeatureCardProps) => {
  return <div className="min-h-[18rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-200 p-2 md:rounded-[1.5rem] md:p-3 bg-slate-100">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] p-6 shadow-sm bg-zinc-950">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="flex justify-center">
              <div className="w-fit rounded-lg border-[0.75px] border-gray-200 bg-gray-50 p-3">
                <img src={feature.iconSrc} alt={feature.title} className="w-8 h-8" />
              </div>
            </div>
            <div className="space-y-3 text-center">
              <h3 className="text-xl leading-[1.375rem] font-bold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.875rem] text-balance text-purple-700">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-violet-700">
                {feature.subtitle}
              </p>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-50">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const FeaturesSection = () => {
  return <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-geltPurple-light/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-violet-900">Benefits of GELT</h2>
          <p className="text-lg max-w-2xl mx-auto text-zinc-950">Our platform combines social connection with financial empowerment to create a uniquely Kenyan community investment experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <GlowingFeatureCard key={index} feature={feature} index={index} />)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;