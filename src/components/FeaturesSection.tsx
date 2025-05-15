
import { Shield, TrendingUp, MessageSquare, BookOpen } from "lucide-react";

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

const FeaturesSection = () => {
  return <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-geltPurple-light/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-violet-900">Benefits of GELT</h2>
          <p className="text-lg max-w-2xl mx-auto text-zinc-950">
            Our platform combines social connection with financial empowerment to create a uniquely Kenyan investment experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4">
                <img 
                  src={feature.iconSrc} 
                  alt={feature.title} 
                  className="w-16 h-16 text-geltPurple"
                />
              </div>
              <h3 className="font-bold text-xl mb-1 text-center">{feature.title}</h3>
              <p className="text-sm text-geltPurple mb-3 text-center">{feature.subtitle}</p>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default FeaturesSection;
