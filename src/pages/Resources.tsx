
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['rafiki-ai', 'learning-content', 'career-hub', 'resume-building', 'interview-tips', 'glossary', 'streaks', 'faqs'];
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
      <Navbar showSubTopics={true} currentPage="resources" activeSection={activeSection} />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              GELT Resources
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive tools and resources to accelerate your financial and career growth
            </p>
          </div>

          <section id="rafiki-ai" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Rafiki AI Assistant</h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
              <div className="prose prose-lg text-gray-700">
                <p>
                  Meet Rafiki, your personal AI financial advisor. Get instant answers to your financial questions, 
                  personalized advice, and step-by-step guidance on achieving your financial goals.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">What Rafiki can help you with:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li>Budget planning and optimization</li>
                    <li>Investment strategy recommendations</li>
                    <li>Debt management plans</li>
                    <li>Savings goal tracking</li>
                    <li>Financial literacy education</li>
                    <li>Career advice and planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="learning-content" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Learning Content</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Video Courses</h3>
                <p className="text-gray-600 text-sm">
                  Interactive video lessons covering personal finance, investing, and entrepreneurship.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Articles & Guides</h3>
                <p className="text-gray-600 text-sm">
                  In-depth articles and step-by-step guides on various financial topics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Webinars</h3>
                <p className="text-gray-600 text-sm">
                  Live and recorded webinars with financial experts and successful entrepreneurs.
                </p>
              </div>
            </div>
          </section>

          <section id="career-hub" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Career Hub</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Your one-stop destination for career development resources. Whether you're looking for 
                your first job, planning a career change, or aiming for a promotion, our Career Hub 
                has everything you need.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Job Search Tools</h4>
                  <p className="text-sm">Find opportunities that match your skills and aspirations.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Skill Development</h4>
                  <p className="text-sm">Identify and develop the skills employers are looking for.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="resume-building" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Resume Building</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Create a Winning Resume</h3>
              <p className="text-gray-700 mb-6">
                Use our AI-powered resume builder to create professional resumes that get noticed by employers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Professional templates</li>
                    <li>• AI-powered content suggestions</li>
                    <li>• Industry-specific optimization</li>
                    <li>• Real-time feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Increase interview chances</li>
                    <li>• Stand out from competition</li>
                    <li>• Save time and effort</li>
                    <li>• Expert-level results</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="interview-tips" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Interview Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Before the Interview</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Research the company thoroughly</li>
                  <li>• Practice common interview questions</li>
                  <li>• Prepare your own questions to ask</li>
                  <li>• Plan your outfit and route</li>
                  <li>• Gather required documents</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">During the Interview</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Arrive 10-15 minutes early</li>
                  <li>• Maintain good eye contact</li>
                  <li>• Use the STAR method for examples</li>
                  <li>• Show enthusiasm and interest</li>
                  <li>• Ask thoughtful questions</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="glossary" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Glossary</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Understanding financial terminology is crucial for making informed decisions. 
                Our comprehensive glossary explains financial terms in simple, easy-to-understand language.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-geltPurple">Investment Terms</h4>
                  <p className="text-sm text-gray-600 mt-1">Stocks, bonds, mutual funds, ETFs, and more</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-geltPurple">Banking Terms</h4>
                  <p className="text-sm text-gray-600 mt-1">Interest rates, credit scores, loans, and accounts</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-geltPurple">Insurance Terms</h4>
                  <p className="text-sm text-gray-600 mt-1">Premiums, deductibles, coverage, and claims</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-geltPurple">Tax Terms</h4>
                  <p className="text-sm text-gray-600 mt-1">Deductions, exemptions, and filing requirements</p>
                </div>
              </div>
            </div>
          </section>

          <section id="streaks" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Streaks</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Build Healthy Financial Habits</h3>
              <p className="text-gray-700 mb-6">
                Track your progress and maintain momentum with our streak system. Build consistent habits 
                that lead to long-term financial success.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="font-semibold">Learning Streak</h4>
                  <p className="text-sm text-gray-600">Daily learning activities</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold">Saving Streak</h4>
                  <p className="text-sm text-gray-600">Consistent saving habits</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h4 className="font-semibold">Engagement Streak</h4>
                  <p className="text-sm text-gray-600">Regular platform usage</p>
                </div>
              </div>
            </div>
          </section>

          <section id="faqs" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">FAQs</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">How do I get started with GELT?</h3>
                <p className="text-gray-600 text-sm">
                  Simply sign up for a free account and complete your profile. You'll have immediate access 
                  to our basic features and can upgrade to premium for advanced tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Is GELT free to use?</h3>
                <p className="text-gray-600 text-sm">
                  GELT offers both free and premium tiers. The free tier includes access to basic educational 
                  content and community features. Premium features include advanced AI assistance and personalized planning tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">How secure is my financial information?</h3>
                <p className="text-gray-600 text-sm">
                  We use bank-level security measures to protect your data. All information is encrypted 
                  and we never store sensitive financial account credentials.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
