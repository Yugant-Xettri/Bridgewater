import Link from "next/link";
import { GraduationCap, Clock, Bell, ArrowRight } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function PortalPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] p-8 text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Student Portal</h1>
              <p className="text-white/80">Your gateway to academic resources</p>
            </div>

            <div className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Coming Soon
              </div>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                We're Building Something Amazing
              </h2>

              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Our student portal is currently under development. Soon you'll be able to access your grades, attendance, course materials, and more - all in one place.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { title: "View Grades", desc: "Check your academic performance" },
                  { title: "Track Attendance", desc: "Monitor your attendance record" },
                  { title: "Course Materials", desc: "Access study resources online" },
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1e3a5f]/5 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center gap-2 text-[#1e3a5f] mb-3">
                  <Bell className="w-5 h-5" />
                  <span className="font-medium">Get Notified</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Want to know when the portal launches? Contact our office to be added to the notification list.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8921f] font-medium"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <p className="text-gray-500 text-sm mb-4">In the meantime, you can:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/academics"
                    className="text-[#1e3a5f] hover:text-[#c9a227] font-medium text-sm"
                  >
                    Explore Programs →
                  </Link>
                  <Link
                    href="/campus-life"
                    className="text-[#1e3a5f] hover:text-[#c9a227] font-medium text-sm"
                  >
                    Campus Life →
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#1e3a5f] hover:text-[#c9a227] font-medium text-sm"
                  >
                    Contact Office →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
