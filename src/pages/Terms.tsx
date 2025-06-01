
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-purple-900">GELT Terms and Conditions</h1>
          <p className="mb-12 text-center text-zinc-950">
            Effective Date: May 31, 2025
          </p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-violet-900">1. Acceptance of Terms</h2>
            <p className="mb-6 text-zinc-950">
              By accessing or using the GELT platform, you agree to be bound by these Terms and Conditions, our Privacy Policy, and our Community Guidelines. If you do not agree, please do not use the platform.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">2. Eligibility</h2>
            <p className="mb-6 text-zinc-950">
              You must be at least 18 years old to use GELT. Users under 18 may use the platform under parental or guardian supervision.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">3. Account Registration</h2>
            <p className="mb-6 text-zinc-950">
              You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to update it as necessary.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">4. Use of the Platform</h2>
            <p className="mb-6 text-zinc-950">
              GELT provides educational content and tools for financial empowerment, including the Home feed, Learning Center, Glossary, Streaks, Career Hub, and Messages. You agree not to use the platform for any unlawful or prohibited activities, as outlined in our Community Guidelines.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">5. Intellectual Property</h2>
            <p className="mb-6 text-zinc-950">
              All content on GELT, including text, data, graphics, logos, videos, and software, is the property of GELT or its licensors and is protected by intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">6. User Content</h2>
            <p className="mb-6 text-zinc-950">
              By submitting content to GELT (e.g., posts, messages, streak achievements), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content in connection with the platform. You are responsible for ensuring your content complies with our Community Guidelines.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">7. Community Guidelines</h2>
            <p className="mb-6 text-zinc-950">
              You agree to adhere to GELT's Community Guidelines, which prohibit content such as violence, hate speech, spam, impersonation, and other harmful behaviors. Violations may result in content removal, account warnings, or termination.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">8. Premium Features</h2>
            <p className="mb-6 text-zinc-950">
              GELT offers premium features (e.g., group streaks, advanced analytics) through a subscription model. Subscription terms, including fees, billing, and cancellation, are detailed in the Account > Settings section. You agree to comply with these terms when accessing premium features.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">9. Data Protection</h2>
            <p className="mb-6 text-zinc-950">
              GELT complies with Kenya's Data Protection Act (2019). You have the right to access, export, or delete your personal data via Account > Settings > Security & Privacy. Data used for Rafiki AI training is anonymized and processed in accordance with our Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">10. Rafiki AI Usage</h2>
            <p className="mb-6 text-zinc-950">
              Rafiki AI is a virtual assistant providing educational insights and answers about GELT features and Kenyan financial topics. GELT is not liable for any decisions made based on Rafiki's responses. All financial advice provided by Rafiki is general and should be verified with a CMA-licensed financial advisor.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">11. Reporting Content or Accounts</h2>
            <p className="mb-6 text-zinc-950">
              You may report posts or accounts violating Community Guidelines via the "Report" option (e.g., accessible through post or profile menus). Select a reason (e.g., hate speech, spam), and our moderation team will review within 24-48 hours. Outcomes are communicated via email or in-app notifications.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">12. Career Hub</h2>
            <p className="mb-6 text-zinc-950">
              The Career Hub provides access to job listings curated for the Kenyan market. GELT is not responsible for the accuracy of job listings or outcomes of applications. You agree to use the Career Hub responsibly and verify job opportunities independently.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">13. Streaks and Gamification</h2>
            <p className="mb-6 text-zinc-950">
              Streaks involve answering daily questions to earn points and compete on leaderboards. Premium users may create group streaks (up to 10 participants). You agree not to manipulate leaderboards or share misleading achievement links.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">14. Accessibility and Localization</h2>
            <p className="mb-6 text-zinc-950">
              GELT supports English and plans to offer Swahili translations for key features (e.g., Glossary, Learning Center). Accessibility features, such as text-to-speech, may be added to enhance usability.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">15. Termination</h2>
            <p className="mb-6 text-zinc-950">
              We reserve the right to suspend or terminate your access to GELT at our discretion, without notice, for conduct that we believe violates these Terms and Conditions or Community Guidelines.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">16. Disclaimers and Limitation of Liability</h2>
            <p className="mb-6 text-zinc-950">
              GELT is provided on an "as-is" basis. We do not guarantee the accuracy or completeness of any information on the platform, including Rafiki AI responses or job listings. We are not liable for any damages arising from your use of GELT.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">17. Governing Law and Dispute Resolution</h2>
            <p className="mb-6 text-zinc-950">
              These Terms and Conditions are governed by the laws of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Kenya. GELT may offer mediation as an alternative dispute resolution method, details of which are available upon request.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
