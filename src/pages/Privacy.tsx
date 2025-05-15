
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Privacy Policy</h1>
          <p className="text-gray-600 mb-12 text-center">
            Last updated: May 15, 2025
          </p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              GELT respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>

            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>Personal Information: Name, email address, and other information you provide during account registration.</li>
              <li>Usage Data: Information about how you use the platform, including interactions and preferences.</li>
              <li>Cookies: We use cookies to enhance your experience on GELT.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc ml-5 mb-6 text-gray-600 space-y-2">
              <li>To provide and maintain the platform.</li>
              <li>To personalize your experience.</li>
              <li>To communicate with you about updates and promotions.</li>
              <li>To analyze usage and improve our services.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-600 mb-6">
              We do not sell your personal data. We may share your information with third-party service providers who assist us in operating the platform, subject to confidentiality agreements.
            </p>

            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data.
            </p>

            <h2 className="text-xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our platform.
            </p>

            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at support@gelt.co.ke.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
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
