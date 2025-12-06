import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
              <p className="text-white/80">Last updated: December 2025</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using the Bridgewater International College website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Use of Website</h2>
              <p className="text-gray-600 mb-4">You agree to use our website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Infringe the rights of others</li>
                <li>Restrict or inhibit anyone else's use of the website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content on this website, including text, graphics, logos, images, and software, is the property of Bridgewater International College and is protected by copyright and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Admission and Enrollment</h2>
              <p className="text-gray-600 mb-4">By applying for admission through our website:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>You confirm that all information provided is accurate and complete</li>
                <li>You understand that submission of an application does not guarantee admission</li>
                <li>You agree to comply with the college's rules and regulations upon enrollment</li>
                <li>You acknowledge that fees paid are subject to the college's refund policy</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                The information on this website is provided for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Bridgewater International College shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions about these Terms of Service, please contact us:
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
