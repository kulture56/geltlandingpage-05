
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['our-story', 'vision', 'impact', 'commitment', 'team', 'locations', 'founder'];
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
      <Navbar showSubTopics={true} currentPage="about" activeSection={activeSection} />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About GELT
            </h1>
            <p className="text-xl text-gray-600">
              Empowering Kenyans to build wealth and achieve financial freedom
            </p>
          </div>

          <section id="our-story" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                GELT was born from a simple yet powerful observation: despite Kenya's rapid economic growth 
                and technological advancement, financial literacy remained a significant barrier to wealth 
                creation for many Kenyans.
              </p>
              <p>
                Our founders recognized that traditional financial education was either inaccessible, 
                outdated, or not tailored to the Kenyan context. They envisioned a platform that would 
                democratize financial knowledge and make wealth-building tools available to everyone, 
                regardless of their background or starting point.
              </p>
              <p>
                Today, GELT stands as Kenya's premier financial empowerment platform, combining cutting-edge 
                AI technology with local expertise to serve our growing community of financially ambitious Kenyans.
              </p>
            </div>
          </section>

          <section id="vision" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Vision</h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
              <blockquote className="text-xl italic text-center text-gray-800 mb-6">
                "To create a Kenya where every citizen has the knowledge, tools, and confidence 
                to build generational wealth and achieve financial independence."
              </blockquote>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="font-semibold mb-2">Inclusive</h3>
                  <p className="text-sm text-gray-600">Financial empowerment for all Kenyans</p>
                </div>
                <div className="text-center">
                  <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2">Innovative</h3>
                  <p className="text-sm text-gray-600">Cutting-edge technology for financial growth</p>
                </div>
                <div className="text-center">
                  <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2">Impact-Driven</h3>
                  <p className="text-sm text-gray-600">Measurable results for our community</p>
                </div>
              </div>
            </div>
          </section>

          <section id="impact" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">By the Numbers</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Active Users</span>
                    <span className="font-bold text-geltPurple">50,000+</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Counties Reached</span>
                    <span className="font-bold text-geltPurple">47/47</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Success Stories</span>
                    <span className="font-bold text-geltPurple">5,000+</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Wealth Created</span>
                    <span className="font-bold text-geltPurple">KES 2B+</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Real Impact Stories</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm text-gray-600 mb-2">
                      "GELT helped me start my first investment portfolio. I've grown my savings by 200% in just one year."
                    </p>
                    <div className="text-xs font-semibold">- Mary W., Nakuru</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm text-gray-600 mb-2">
                      "The career resources helped me negotiate a 40% salary increase and land my dream job."
                    </p>
                    <div className="text-xs font-semibold">- John M., Nairobi</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="commitment" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Commitment</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Our commitment goes beyond providing financial education. We are dedicated to creating 
                lasting change in how Kenyans approach wealth building and financial planning.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Continuous Innovation</h4>
                  <p className="text-sm">
                    We constantly improve our platform based on user feedback and emerging financial trends.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Community First</h4>
                  <p className="text-sm">
                    Every decision we make prioritizes the success and well-being of our community members.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Ethical Practices</h4>
                  <p className="text-sm">
                    We maintain the highest standards of transparency and ethics in all our operations.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Local Relevance</h4>
                  <p className="text-sm">
                    Our content and tools are specifically designed for the Kenyan financial landscape.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="team" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Team</h2>
            <div className="prose prose-lg text-gray-700 mb-8">
              <p>
                Our diverse team combines expertise in finance, technology, education, and community development. 
                Together, we bring decades of experience in building successful financial products and services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Leadership Team</h3>
                <p className="text-sm text-gray-600">Experienced executives from top financial institutions</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Technology Team</h3>
                <p className="text-sm text-gray-600">World-class engineers and AI specialists</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Content Team</h3>
                <p className="text-sm text-gray-600">Financial experts and educational specialists</p>
              </div>
            </div>
          </section>

          <section id="locations" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Locations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-geltPurple mb-2">Nairobi Office</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Westlands, Nairobi<br/>
                    Kenya
                  </p>
                  <p className="text-sm text-gray-600">
                    Our main hub for operations, technology development, and customer support.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Regional Presence</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">Mombasa</h4>
                    <p className="text-sm text-gray-600">Coastal region operations</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">Kisumu</h4>
                    <p className="text-sm text-gray-600">Western Kenya outreach</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">Nakuru</h4>
                    <p className="text-sm text-gray-600">Central Kenya operations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="founder" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Founder</h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                  <p className="text-lg text-geltPurple mb-4">Founder & CEO</p>
                  <div className="prose prose-sm text-gray-700">
                    <p>
                      John brings over 15 years of experience in financial services and technology. 
                      Previously, he led fintech initiatives at major Kenyan banks and has a proven 
                      track record of building products that serve millions of users.
                    </p>
                    <p>
                      His vision for GELT stems from his own journey of financial discovery and his 
                      passion for making financial education accessible to all Kenyans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
