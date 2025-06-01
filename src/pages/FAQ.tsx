
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-purple-900">GELT Platform – Frequently Asked Questions (FAQs)</h1>
          <p className="mb-12 text-center text-zinc-950">
            Find answers to common questions about GELT
          </p>

          {/* General Platform Usage Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">General Platform Usage</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">What is GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT is a Pan-African financial education and social investing platform that empowers users to learn about personal finance, track investments, engage with a financial community, and access curated job opportunities. It combines educational tools, community features, and AI assistance to support users on their financial journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">Who can use GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT is open to individuals aged 18 and above. Users under 18 may use the platform under the supervision of a parent or guardian. The platform is tailored for users in Kenya and East Africa, with plans to expand across Africa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-purple-900 font-bold">Is GELT a licensed financial institution?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  No, GELT is not a licensed financial institution. It provides educational content and tools for financial empowerment. While GELT may partner with licensed institutions, it does not offer financial advice or brokerage services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-purple-900 font-bold">How does GELT protect my data?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT is committed to safeguarding your personal information. We employ industry-standard security measures to protect your data. For detailed information, please refer to our Privacy Policy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-purple-900">Are there any fees associated with using GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT offers a freemium model. Basic features are available for free, while premium features, such as advanced analytics and exclusive content, are accessible through a subscription.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">How do I delete my account?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  You can delete your account at any time through the account settings. Upon deletion, your personal data will be removed in accordance with our data retention policy outlined in the Privacy Policy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">How do I access the platform?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  You can access GELT via:
                  <ul className="list-disc ml-5 mt-2">
                    <li>Our official website</li>
                    <li>Google Play Store (for Android devices)</li>
                    <li>Apple App Store (for iOS devices)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">How do I create a post on GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  To create a post, go to the Home section, click the "Post" button, and choose your content type (text, media, or poll). Add hashtags (e.g., #Investing) to categorize your post, include emojis for engagement, and publish. You can tag other users or topics to increase visibility.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">What are Streaks, and how do they work?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Streaks is a gamified feature where you answer three daily questions (worth 1 point each) on Kenyan financial history or current industry topics. Questions vary (multiple choice, yes/no, open-ended) and reset monthly. Your total points determine your leaderboard position. Premium users can create group streaks (up to 10 people) with a separate leaderboard. Share achievements via a unique link.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">How do I use the Learning Center?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  The Learning Center offers videos on investments (e.g., treasury bills, money market funds), savings (e.g., SACCOs, M-Pesa), and financial literacy. Access it via the Learn tab, browse or search for videos, and watch content tailored to Kenya's financial market.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">What is the Glossary, and how can I use it?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  The Glossary provides definitions of Kenyan financial terms (e.g., "chama," "SACCO") and global terms adapted for Kenya. Use the search bar to find terms or click "Ask Rafiki" for AI-assisted explanations. The total number of terms is displayed for reference.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">How do I save or find bookmarked posts?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  To bookmark a post, click the bookmark icon on any post in the Home feed. Access saved posts in the Bookmarks section and use the search bar to find specific content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">How do I manage notifications on GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  In the Notifications section, view all or unread notifications (e.g., likes, replies, mentions). Customize notification frequency and types in Account &gt; Settings &gt; Preferences to suit your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left font-bold text-violet-900">How do I message other users?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Go to the Messages section, use the search bar to find a contact, and send text messages or emojis. This feature connects you with GELT's community for discussions or collaboration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Rafiki AI Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Rafiki AI</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="rafiki-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">What is Rafiki AI?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Rafiki AI is GELT's virtual financial assistant. It provides users with insights into financial topics, answers questions about GELT features and Kenyan finance, and offers personalized guidance to enhance financial literacy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rafiki-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">How can I interact with Rafiki AI?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Rafiki AI is available in the Glossary ("Ask Rafiki" option), Home, and other sections. Ask questions about GELT features (e.g., "How do I start a streak?"), Kenyan finance (e.g., "What is a money market fund?"), or general financial literacy. Rafiki provides accurate, culturally relevant answers with a disclaimer for professional advice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rafiki-3" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">Can Rafiki help me with Kenyan financial questions?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes, Rafiki is trained on Kenyan financial knowledge, including investment vehicles (e.g., treasury bills, SACCOs), institutions (e.g., CBK, NSE), and notable figures (e.g., James Mwangi of Equity Bank). Ask about local terms, regulations, or opportunities, and Rafiki will provide tailored insights.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Kenyan Financial Context Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Kenyan Financial Context</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="kenya-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">What investment options can I learn about on GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT's Learning Center and Glossary cover Kenyan investment options like money market funds (8-12% returns), treasury bills/bonds (via CBK), SACCOs, and stocks on the Nairobi Securities Exchange (NSE). Rafiki can explain these in detail or suggest relevant videos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kenya-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">How does GELT support financial education in Kenya?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT offers a Learning Center with videos on savings, investments, and financial literacy, tailored to Kenya's market. The Glossary defines local terms like "chama" and global concepts like "dividends." Streaks test your knowledge with daily questions, and Rafiki provides personalized guidance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Premium Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Premium Features</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="premium-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">What are the benefits of a premium subscription?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Premium users access advanced analytics (e.g., investment tracking insights), exclusive Learning Center content, and group streaks (compete with up to 10 friends). Upgrade via Account &gt; Settings or check subscription details on the GELT website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="premium-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">How do I join or create a group streak?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Premium users can create a group streak in the Streaks section by selecting "Create Group Streak," inviting up to 10 friends, and starting daily questions. Each member answers unique questions, and a group leaderboard tracks progress.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Technical Support Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Technical Support</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="tech-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">What should I do if I can't log in to GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Check your email and password, or use the "Forgot Password" option to reset your credentials. Ensure your app is updated via the Google Play Store or Apple App Store. If issues persist, contact support via Account &gt; Help Center &gt; Contact Support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tech-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">Why is the GELT app not working on my device?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Ensure your device meets the app's requirements (e.g., Android 8.0+ or iOS 14.0+). Clear the app cache, check your internet connection, or reinstall the app. For further assistance, reach out to support through the Help Center.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Community and Safety Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Community and Safety</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="safety-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">What are GELT's Community Guidelines?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT's Community Guidelines, found in Account &gt; Help Center, prohibit harmful content like violence, hate speech, spam, and impersonation. Follow these rules to maintain a respectful community. Report violations using the report option on posts or profiles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">How do I report harmful or abusive content?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  To help us maintain a safe and respectful community, you can report posts or users directly through the report option available on every post or profile. Content that can be reported includes:
                  <ul className="list-disc ml-5 mt-2">
                    <li>Violence: Physical threats, speech intimidation, harassment</li>
                    <li>Pornography: Unwanted sexual content, NSFW images, graphic objectification</li>
                    <li>Child Safety: Exploitation, grooming, child abuse (online or physical)</li>
                    <li>Hate Speech: Discrimination, slurs, bullying, incitement of fear, hateful symbols/media/emojis</li>
                    <li>Spam: Fake accounts, scams, bots, malicious links</li>
                    <li>Suicide and Self Harm: Content promoting or instructing self-harm</li>
                    <li>Impersonation: Pretending to be someone else, including misleading fan or parody accounts</li>
                    <li>Extremism &amp; Terrorism: Support or promotion of hate groups or extremist networks</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety-3" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">How do I report an account or post on GELT?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  To report an account or post, navigate to the specific post or user profile and click the "Report" option (accessible via the post or profile menu). Select the reason for reporting (e.g., hate speech, spam, impersonation) from the provided categories. Submit the report, and GELT's moderation team will review it within 24-48 hours. You will be notified of the outcome via email or in-app notifications. For urgent issues, contact support through Account &gt; Help Center &gt; Contact Support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety-4" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">How does GELT handle reported content?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Reported content is reviewed by our moderation team within 24-48 hours. Violations may result in content removal, user warnings, or account suspension, depending on severity. Users are notified of the outcome via email or in-app notifications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Accessibility and Localization Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Accessibility and Localization</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="access-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">Does GELT support Swahili or other local languages?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  GELT currently supports English, with plans to add Swahili translations for the Glossary, Learning Center, and FAQs to better serve Kenyan users. Adjust your language preference in Account &gt; Settings &gt; Preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="access-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg text-left text-violet-900 font-bold">Can I use GELT offline?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Some features, like saved Glossary terms or downloaded Learning Center videos, may be available offline in the future. Currently, an internet connection is required for most features. Check for updates in the app store.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
