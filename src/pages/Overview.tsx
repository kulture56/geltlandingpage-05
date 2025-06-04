
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Overview = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'platform-features', 'who-can-join', 'benefits', 'community-posts', 'trending-topics', 'testimonials', 'newsletter'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar showSubTopics={true} currentPage="overview" activeSection={activeSection} />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              GELT Overview
            </h1>
            <p className="text-xl text-gray-600">
              Discover everything about GELT and how we're transforming financial literacy in Kenya
            </p>
          </div>

          <section id="mission" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Mission</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Our mission is to bridge the financial literacy gaps among Kenyans wherever they are. 
                We aim to equip Kenyans with the tools, resources, and education needed to build wealth 
                for their future generations.
              </p>
              <p>
                GELT is more than just a platform; it's a movement towards financial empowerment and 
                economic inclusion for all Kenyans.
              </p>
            </div>
          </section>

          <section id="platform-features" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Platform Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">AI-Powered Learning</h3>
                <p className="text-gray-600">
                  Our Rafiki AI assistant provides personalized financial guidance and learning experiences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  Connect with like-minded individuals and share financial knowledge and experiences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Career Development</h3>
                <p className="text-gray-600">
                  Access career resources, resume building tools, and interview preparation materials.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Financial Tools</h3>
                <p className="text-gray-600">
                  Use our comprehensive suite of financial planning and management tools.
                </p>
              </div>
            </div>
          </section>

          <section id="who-can-join" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Who Can Join GELT?</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                GELT is open to everyone who wants to improve their financial literacy and build wealth. 
                Whether you're an entrepreneur, student, professional, or anyone looking to secure your 
                financial future, GELT welcomes you.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entrepreneurs seeking business financial guidance</li>
                <li>Students learning about personal finance</li>
                <li>Professionals planning for retirement</li>
                <li>Families building generational wealth</li>
                <li>Anyone interested in financial literacy</li>
              </ul>
            </div>
          </section>

          <section id="benefits" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Benefits of Joining</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold mb-2">Learn</h3>
                <p className="text-sm text-gray-600">Access comprehensive financial education resources</p>
              </div>
              <div className="text-center">
                <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Connect</h3>
                <p className="text-sm text-gray-600">Join a community of financially motivated individuals</p>
              </div>
              <div className="text-center">
                <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold mb-2">Grow</h3>
                <p className="text-sm text-gray-600">Build wealth with personalized guidance and tools</p>
              </div>
            </div>
          </section>

          <section id="community-posts" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Community Posts</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Our vibrant community shares insights, experiences, and knowledge about financial success. 
                Join discussions, ask questions, and learn from others' experiences.
              </p>
              <p>
                Community posts cover topics ranging from investment strategies to budgeting tips, 
                career advice, and entrepreneurship stories.
              </p>
            </div>
          </section>

          <section id="trending-topics" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Trending Topics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-geltPurple">#InvestmentTips</h4>
                <p className="text-sm text-gray-600 mt-1">Latest investment strategies and opportunities</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-geltPurple">#BudgetingBasics</h4>
                <p className="text-sm text-gray-600 mt-1">Essential budgeting techniques for beginners</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-geltPurple">#CareerGrowth</h4>
                <p className="text-sm text-gray-600 mt-1">Professional development and career advancement</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-geltPurple">#EntrepreneurLife</h4>
                <p className="text-sm text-gray-600 mt-1">Stories and tips from successful entrepreneurs</p>
              </div>
            </div>
          </section>

          <section id="testimonials" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "GELT has transformed how I think about money. The AI assistant helped me create 
                  a budget that actually works for my lifestyle."
                </p>
                <div className="font-semibold">- Sarah M., Nairobi</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "The community support is incredible. I've learned more about investing in 3 months 
                  than I did in years of trying to figure it out alone."
                </p>
                <div className="font-semibold">- David K., Mombasa</div>
              </div>
            </div>
          </section>

          <section id="newsletter" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Newsletter Signup</h2>
            <div className="bg-geltPurple/5 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Stay Updated with GELT</h3>
              <p className="text-gray-600 mb-6">
                Get the latest financial tips, community highlights, and platform updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-geltPurple"
                />
                <button className="bg-geltPurple text-white px-6 py-2 rounded-md hover:bg-geltPurple/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Overview;
