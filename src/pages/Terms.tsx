import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Terms = () => {
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-purple-900">Terms & Conditions</h1>
          <p className="mb-12 text-center text-zinc-950">
            Last updated: May 15, 2025
          </p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-violet-900">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using the GELT platform, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use the platform.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">2. Eligibility</h2>
            <p className="text-gray-600 mb-6">
              You must be at least 18 years old to use GELT. Users under 18 may use the platform under parental or guardian supervision.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">3. Account Registration</h2>
            <p className="text-gray-600 mb-6">
              You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to update it as necessary.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">4. Use of the Platform</h2>
            <p className="text-gray-600 mb-6">
              GELT provides educational content and tools for financial empowerment. You agree not to use the platform for any unlawful or prohibited activities.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on GELT, including text, data, graphics, logos, and software, is the property of GELT or its licensors and is protected by intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">6. User Content</h2>
            <p className="text-gray-600 mb-6">
              By submitting content to GELT, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content in connection with the platform.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">7. Termination</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to suspend or terminate your access to GELT at our discretion, without notice, for conduct that we believe violates these Terms and Conditions.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-violet-900">8. Disclaimers and Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              GELT is provided on an "as-is" basis. We do not guarantee the accuracy or completeness of any information on the platform. We are not liable for any damages arising from your use of GELT.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-purple-900">9. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms and Conditions are governed by the laws of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
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
    </div>;
};
export default Terms;