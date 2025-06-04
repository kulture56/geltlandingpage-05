
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['email', 'social-media', 'office-address', 'phone-number'];
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
      <Navbar showSubTopics={true} currentPage="contact" activeSection={activeSection} />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact GELT
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help you on your financial journey. Reach out to us anytime!
            </p>
          </div>

          <section id="email" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Email Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-geltPurple mb-2">General Inquiries</h4>
                    <p className="text-gray-600 mb-2">hello@gelt.co.ke</p>
                    <p className="text-sm text-gray-500">For general questions and information</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-geltPurple mb-2">Customer Support</h4>
                    <p className="text-gray-600 mb-2">support@gelt.co.ke</p>
                    <p className="text-sm text-gray-500">Technical issues and account help</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-geltPurple mb-2">Partnerships</h4>
                    <p className="text-gray-600 mb-2">partnerships@gelt.co.ke</p>
                    <p className="text-sm text-gray-500">Business partnerships and collaborations</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-geltPurple"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-geltPurple"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-geltPurple"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-geltPurple"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-geltPurple text-white py-2 rounded-md hover:bg-geltPurple/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section id="social-media" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Social Media</h2>
            <div className="prose prose-lg text-gray-700 mb-8">
              <p>
                Follow us on social media for the latest updates, financial tips, and community highlights. 
                Join the conversation and connect with fellow GELT members!
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="https://instagram.com/gelt_official" target="_blank" rel="noopener noreferrer" 
                 className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">📷</div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-sm opacity-90">@gelt_official</p>
              </a>
              <a href="https://linkedin.com/company/gelt" target="_blank" rel="noopener noreferrer"
                 className="bg-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">💼</div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm opacity-90">GELT Kenya</p>
              </a>
              <a href="https://x.com/__GELT__" target="_blank" rel="noopener noreferrer"
                 className="bg-black text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">𝕏</div>
                <h3 className="font-semibold">X (Twitter)</h3>
                <p className="text-sm opacity-90">@__GELT__</p>
              </a>
              <a href="https://tiktok.com/@gelt_official" target="_blank" rel="noopener noreferrer"
                 className="bg-red-500 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🎵</div>
                <h3 className="font-semibold">TikTok</h3>
                <p className="text-sm opacity-90">@gelt_official</p>
              </a>
            </div>
          </section>

          <section id="office-address" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Office Address</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-geltPurple mb-4">GELT Kenya Ltd.</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>Westlands Business Center</p>
                    <p>Ring Road, Westlands</p>
                    <p>P.O. Box 12345-00100</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="font-semibold mb-2">Office Hours</h5>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Directions</h3>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Interactive map coming soon</p>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <h5 className="font-semibold mb-2">Public Transport</h5>
                  <ul className="space-y-1">
                    <li>• Accessible via Ring Road matatus</li>
                    <li>• Walking distance from Westlands stage</li>
                    <li>• Uber/Bolt friendly location</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="phone-number" className="mb-16">
            <h2 className="text-3xl font-bold text-geltPurple mb-6">Phone Number</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-semibold mb-2">Main Line</h3>
                <p className="text-geltPurple font-bold text-lg mb-2">+254 700 123 456</p>
                <p className="text-sm text-gray-600">General inquiries and support</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🆘</span>
                </div>
                <h3 className="font-semibold mb-2">Emergency Support</h3>
                <p className="text-geltPurple font-bold text-lg mb-2">+254 700 123 457</p>
                <p className="text-sm text-gray-600">24/7 urgent technical issues</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-geltPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-geltPurple font-bold text-lg mb-2">+254 700 123 458</p>
                <p className="text-sm text-gray-600">Quick questions and chat support</p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold mb-4">Call Center Hours</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Customer Support</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Monday - Friday: 7:00 AM - 8:00 PM</li>
                    <li>Saturday: 8:00 AM - 5:00 PM</li>
                    <li>Sunday: 10:00 AM - 4:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Technical Support</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Monday - Friday: 24/7</li>
                    <li>Weekend: Emergency only</li>
                    <li>Response time: Under 30 minutes</li>
                  </ul>
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

export default Contact;
