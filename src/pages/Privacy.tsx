
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-purple-900">GELT Privacy Policy</h1>
          <p className="mb-12 text-center text-zinc-950">
            Effective Date: May 31, 2025
          </p>
          <p className="mb-8 text-center text-zinc-950">
            At GELT, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal information. This Privacy Policy explains our data practices for the GELT platform, a Kenyan fintech social investment platform offering features like the Home feed, Learning Center, Glossary, Streaks, Career Hub, Messages, Bookmarks, Notifications, and Rafiki AI. We comply with Kenya's Data Protection Act (2019) and other applicable laws.
          </p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-purple-900">1. Information We Collect</h2>
            <p className="mb-4 text-zinc-950">We collect the following types of information to provide and improve our services:</p>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li><strong>Personal Information:</strong> Full name, username, email, bio, investment interests (entered in Account > Profile), and connected account details (e.g., Google, Apple IDs).</li>
              <li><strong>User-Generated Content:</strong> Posts, replies, polls, and messages created in the Home feed or Messages section; Streaks answers and shared achievements; and job applications submitted via the Career Hub.</li>
              <li><strong>Usage Data:</strong> Interactions with features (e.g., likes, bookmarks, notification preferences, video views in the Learning Center, Glossary searches, Streaks participation).</li>
              <li><strong>Device and Technical Data:</strong> IP address, browser type, device information, and app usage data (e.g., time spent on features).</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies to enhance navigation, personalize content (e.g., Home feed recommendations), and analyze usage. You can manage cookie preferences in Account > Settings > Preferences.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">2. How We Use Your Information</h2>
            <p className="mb-4 text-zinc-950">We use your information to:</p>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>Provide platform functionality (e.g., posting, messaging, job applications, Streaks leaderboards).</li>
              <li>Personalize your experience (e.g., "For You" feed, recommended Learning Center videos).</li>
              <li>Power Rafiki AI to answer queries about GELT features and Kenyan financial topics. User queries are anonymized and used to improve Rafiki's performance.</li>
              <li>Analyze usage to improve the platform (e.g., tracking popular Glossary terms or Streaks questions).</li>
              <li>Send notifications or emails based on your preferences (e.g., likes, mentions, job application updates).</li>
              <li>Comply with legal obligations, such as responding to court orders.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">3. Rafiki AI Data Usage</h2>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>Rafiki AI processes your queries (e.g., via the Glossary's "Ask Rafiki" option) to provide educational insights. Queries are anonymized and may be used to train Rafiki, with no personally identifiable information stored.</li>
              <li>Rafiki does not provide personalized financial advice. All responses include a disclaimer to consult a CMA-licensed advisor.</li>
              <li>You can opt out of data usage for Rafiki training in Account > Settings > Security & Privacy.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">4. Data Sharing</h2>
            <p className="mb-4 text-zinc-950">We may share your information with:</p>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li><strong>Third-Party Service Providers:</strong> Partners like Supabase (for database storage and authentication) and Google/Apple (for connected accounts) to enable platform functionality. These providers are contractually obligated to protect your data.</li>
              <li><strong>Verified Institutions:</strong> With your consent, we may share anonymized data with Kenyan financial institutions (e.g., for job applications in the Career Hub).</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect GELT's rights (e.g., fraud prevention). We do not sell your personal information to third parties.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">5. Data Security</h2>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>We use industry-standard measures, such as AES-256 encryption, to protect your data during transmission and storage.</li>
              <li>Connected accounts (e.g., Google, Apple) are secured via OAuth protocols, ensuring safe authentication.</li>
              <li>Despite our efforts, no system is completely secure. In case of a data breach, we will notify affected users within 72 hours, as required by Kenya's Data Protection Act (2019).</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">6. Your Data Rights</h2>
            <p className="mb-4 text-zinc-950">Under Kenya's Data Protection Act (2019), you have the right to:</p>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>Access your personal data via Account > Settings > Security & Privacy.</li>
              <li>Request a data export in a machine-readable format.</li>
              <li>Delete your account and associated data through Account > Settings.</li>
              <li>Opt out of non-essential data uses, such as analytics or Rafiki AI training. To exercise these rights, contact us via Account > Help Center > Contact Support.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">7. Children's Privacy</h2>
            <p className="mb-6 text-zinc-950">
              GELT is not intended for users under 18 without parental or guardian supervision. We do not knowingly collect personal data from children under 13. If we become aware of such data, we will delete it promptly.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">8. Cookies and Tracking</h2>
            <p className="mb-6 text-zinc-950">
              We use cookies for essential functions (e.g., login sessions), personalization (e.g., Home feed), and analytics. You can disable non-essential cookies in Account > Settings > Preferences, though this may limit some features.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">9. Data Retention</h2>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>We retain personal data only as long as necessary to provide services or comply with legal obligations. Deleted accounts are removed within 30 days, except where required by law.</li>
              <li>Anonymized data (e.g., for Rafiki training or analytics) may be retained longer to improve the platform.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">10. Third-Party Integrations</h2>
            <p className="mb-6 text-zinc-950">
              GELT integrates with Supabase for backend services (e.g., database, authentication) and Google/Apple for account connections. These integrations involve data sharing as described in Section 4. You can manage connected accounts in Account > Settings > Connected Accounts.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">11. Feature-Specific Data Practices</h2>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li><strong>Home Feed:</strong> Posts and interactions (e.g., likes, replies) are stored to display content and personalize feeds.</li>
              <li><strong>Learning Center:</strong> Video views are tracked to recommend relevant content.</li>
              <li><strong>Glossary:</strong> Search queries are anonymized and used to improve term suggestions.</li>
              <li><strong>Streaks:</strong> Answers and leaderboard data are stored to track progress and display rankings.</li>
              <li><strong>Career Hub:</strong> Job application data is shared with employers only with your consent.</li>
              <li><strong>Messages:</strong> Messages are encrypted and accessible only to you and the recipient.</li>
              <li><strong>Bookmarks and Notifications:</strong> Saved posts and notification preferences are stored to customize your experience.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">12. Data Breach Notification</h2>
            <p className="mb-6 text-zinc-950">
              In the event of a data breach, we will notify affected users via email or in-app notifications within 72 hours, detailing the breach's scope, impact, and mitigation steps, in compliance with Kenya's Data Protection Act (2019).
            </p>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">13. Localization and Accessibility</h2>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>GELT is developing Swahili translations for features like the Glossary and Learning Center. Data from these features (e.g., translation preferences) is used to enhance accessibility.</li>
              <li>Accessibility features, such as text-to-speech, may collect usage data to improve functionality, with your consent.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">14. Changes to This Privacy Policy</h2>
            <p className="mb-6 text-zinc-950">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or in-app notifications at least 30 days before they take effect.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">15. Contact Us</h2>
            <p className="mb-6 text-zinc-950">
              For questions, concerns, or to exercise your data rights, contact our support team via Account > Help Center > Contact Support or email [insert email address]. You may also contact Kenya's Office of the Data Protection Commissioner for complaints.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-zinc-950">
              By using GELT, you consent to the collection and use of information as described in this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
