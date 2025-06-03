
import { Home, Briefcase, GraduationCap, Book, TrendingUp, Bolt } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [{
  id: 1,
  title: "Home Dashboard",
  date: "Available Now",
  content: "Your personalized feed showing updates from your favorite GELTERs. Share your financial story or thoughts. Quick access to Rafiki your AI investment assistant. #safariyako",
  category: "Dashboard",
  icon: Home,
  relatedIds: [3, 5],
  status: "completed" as const,
  energy: 100
}, {
  id: 2,
  title: "Career Hub",
  date: "Available Now",
  content: "Unemployed? looking for an internship or attachment? want to change your career? navigate your way to the career hub section filter jobs to your preferences apply and manifest. #kazikwawote",
  category: "Careers",
  icon: Briefcase,
  relatedIds: [1, 3],
  status: "completed" as const,
  energy: 90
}, {
  id: 3,
  title: "Learning Center",
  date: "Available Now",
  content: "Video za how to invest in...., soma offline on your way to/from work, binge-learn to build your wealth understanding Kenyan and Global financial markets. #Jifunze",
  category: "Education",
  icon: GraduationCap,
  relatedIds: [1, 4, 5],
  status: "in-progress" as const,
  energy: 80
}, {
  id: 4,
  title: "Financial Glossary",
  date: "Coming Soon",
  content: "Jisomeshe maneno ya kifedha. Je unajua Money Market Funds kwa swahili zinaitwa aje? #Jielimu",
  category: "Education",
  icon: Book,
  relatedIds: [3, 6],
  status: "in-progress" as const,
  energy: 60
}, {
  id: 5,
  title: "Streaks & Rewards",
  date: "Coming Soon",
  content: "Compete with other members in the platform. Earn points and badges for daily streaks. Keep learning stay commited. #Jijenge",
  category: "Engagement",
  icon: Bolt,
  relatedIds: [1, 3],
  status: "pending" as const,
  energy: 40
}, {
  id: 6,
  title: "Trending Categories",
  date: "Coming Soon",
  content: "See what's buzzzing in the community. Real-time updates on investment trends & market news. #mitindo",
  category: "Community",
  icon: TrendingUp,
  relatedIds: [1, 4],
  status: "pending" as const,
  energy: 30
}];

const PlatformFeaturesSection = () => {
  return <section className="relative">
      <div className="text-center pt-12 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-violet-900">Platform Features</h2>
        <p className="text-lg max-w-2xl mx-auto text-zinc-950">Discover the powerful resources that GELT offers to help you build the community, mindset and financial literacy among Kenyans.</p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>;
};

export default PlatformFeaturesSection;
