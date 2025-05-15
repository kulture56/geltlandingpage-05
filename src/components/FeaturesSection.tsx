import { Shield, TrendingUp, MessageSquare, BookOpen } from "lucide-react";
const features = [{
  icon: <BookOpen className="h-8 w-8 text-geltPurple" />,
  title: "Elimu ya Kifedha",
  subtitle: "Financial Education",
  description: "Access expert-led resources to build your financial knowledge and make informed investment decisions."
}, {
  icon: <MessageSquare className="h-8 w-8 text-geltPurple" />,
  title: "Jumuiya",
  subtitle: "Community",
  description: "Connect with like-minded Kenyan investors to share insights, strategies, and opportunities."
}, {
  icon: <TrendingUp className="h-8 w-8 text-geltPurple" />,
  title: "Uwekezaji",
  subtitle: "Investment Insights",
  description: "Get real-time updates, analysis, and trending investment opportunities in Kenya's markets."
}, {
  icon: <Shield className="h-8 w-8 text-geltPurple" />,
  title: "Usalama",
  subtitle: "Security",
  description: "Enjoy peace of mind with our secure platform designed to protect your information and investments."
}];
const FeaturesSection = () => {
  return <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-geltPurple-light/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of GELT</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines social connection with financial empowerment to create a uniquely Kenyan investment experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              
              <h3 className="font-bold text-xl mb-1">{feature.title}</h3>
              <p className="text-sm text-geltPurple mb-3">{feature.subtitle}</p>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;