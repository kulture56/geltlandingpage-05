
import { Home, Briefcase, GraduationCap, Book, TrendingUp, Bolt } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Home Dashboard",
    date: "Available Now",
    content: "Your main dashboard. A personalized feed showing updates, featured tools, financial news, and quick access to the platform's core features.",
    category: "Dashboard",
    icon: Home,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Career Hub",
    date: "Available Now",
    content: "Explore verified jobs and internship opportunities —curated for Kenyan professionals and students.",
    category: "Careers",
    icon: Briefcase,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Learning Center",
    date: "Available Now",
    content: "Your go-to section for investing education. Offers lessons, short courses, and guides to help users understand Kenyan and global financial markets.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [1, 4, 5],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Financial Glossary",
    date: "Coming Soon",
    content: "A simplified dictionary of financial terms. This section helps users decode financial jargon.",
    category: "Education",
    icon: Book,
    relatedIds: [3, 6],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 5,
    title: "Streaks & Rewards",
    date: "Coming Soon",
    content: "Tracks your learning and engagement progress. Earn points and unlock badges for daily logins, completed lessons, or quiz wins. Keeps learning fun and consistent.",
    category: "Engagement",
    icon: Bolt,
    relatedIds: [1, 3],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 6,
    title: "Trending Categories",
    date: "Coming Soon",
    content: "See what's buzzing in the GELT community. Real-time updates on popular discussions and investment trends.",
    category: "Community",
    icon: TrendingUp,
    relatedIds: [1, 4],
    status: "pending" as const,
    energy: 30,
  },
];

const PlatformFeaturesSection = () => {
  return (
    <section className="relative">
      <div className="text-center pt-12 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-violet-900">Platform Features</h2>
        <p className="text-lg max-w-2xl mx-auto text-zinc-700">
          Discover the powerful tools that GELT offers to help you build wealth and financial literacy
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
};

export default PlatformFeaturesSection;
