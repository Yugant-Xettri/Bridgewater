import Link from "next/link";
import { BookOpen, Clock, Search, Laptop, Users, BookMarked, FileText, Wifi } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function LibraryPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Library</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                A treasure trove of knowledge and resources
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">BWIC Central Library</h2>
                <p className="text-gray-600 mb-4">
                  Our library is the heart of academic life at BWIC. With over 50,000 books, journals, and digital resources, it provides students with everything they need for academic success.
                </p>
                <p className="text-gray-600 mb-6">
                  The library features comfortable reading areas, private study rooms, computer terminals with internet access, and a dedicated team of librarians to assist students in their research.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: BookOpen, label: "50,000+ Books" },
                    { icon: FileText, label: "Academic Journals" },
                    { icon: Laptop, label: "E-Library Access" },
                    { icon: Wifi, label: "Free WiFi" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <item.icon className="w-5 h-5 text-[#c9a227]" />
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-24 h-24 text-[#c9a227] mx-auto mb-4" />
                  <p className="text-gray-500">Library Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Library Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookMarked, title: "Book Lending", desc: "Borrow books for up to 14 days" },
                { icon: Search, title: "Research Assistance", desc: "Get help with research projects" },
                { icon: Laptop, title: "Digital Resources", desc: "Access e-books and online journals" },
                { icon: Users, title: "Study Rooms", desc: "Private spaces for group study" },
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Library Hours</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#c9a227]" />
                <h3 className="text-lg font-semibold text-[#1e3a5f]">Operating Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Sunday - Friday</span>
                  <span className="font-medium text-[#1e3a5f]">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-[#1e3a5f]">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Public Holidays</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
