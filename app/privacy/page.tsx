import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-white/80">Last updated: December 2025</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                Bridgewater International College ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect information about you in various ways, including:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when filling out forms or contacting us.</li>
                <li><strong>Academic Information:</strong> Educational background, transcripts, and other academic records submitted during the admission process.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Process admission applications and enrollment</li>
                <li>Communicate with you about your application or enrollment status</li>
                <li>Send important notices and updates about our programs</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our educational services.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Bridgewater International College</strong></p>
                <p className="text-gray-600">Sinamangal, Kathmandu, Nepal</p>
                <p className="text-gray-600">Phone: +977-1-4481590</p>
                <p className="text-gray-600">Email: info@bridgewater.com.np</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
