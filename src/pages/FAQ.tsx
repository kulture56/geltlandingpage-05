import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-purple-900">Frequently Asked Questions</h1>
          <p className="mb-12 text-center text-zinc-950">
            Find answers to common questions about GELT
          </p>

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
                <span className="text-lg text-left font-bold text-purple-900">What is Rafiki AI?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Rafiki AI is GELT's virtual financial assistant. It provides users with insights into financial topics, answers questions, and offers personalized guidance to enhance financial literacy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg text-left font-bold text-violet-900">Are there any fees associated with using GELT?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                GELT offers a freemium model. Basic features are available for free, while premium features, such as advanced analytics and exclusive content, are accessible through a subscription.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg text-left font-bold text-violet-900">How can I delete my account?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You can delete your account at any time through the account settings. Upon deletion, your personal data will be removed in accordance with our data retention policy outlined in the Privacy Policy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm border border-gray-100">
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

            <AccordionItem value="item-9" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg text-left font-bold text-violet-900">How do I report harmful or abusive content?</span>
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
                  <li>Extremism & Terrorism: Support or promotion of hate groups or extremist network</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>;
};
export default FAQ;