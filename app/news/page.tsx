import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const news = [
  {
    title: "Admissions Open for 2026",
    date: "December 1, 2025",
    category: "Admissions",
    excerpt: "We are now accepting applications for the upcoming academic session. Apply now to secure your seat in our prestigious programs.",
    featured: true
  },
  {
    title: "Annual Sports Week 2025",
    date: "November 25, 2025",
    category: "Events",
    excerpt: "Join us for a week of exciting sports activities including futsal, basketball, and athletics competitions."
  },
  {
    title: "Guest Lecture Series: Industry Insights",
    date: "November 20, 2025",
    category: "Academic",
    excerpt: "Leading professionals share their experiences and insights with our students in this monthly lecture series."
  },
  {
    title: "BWIC Students Excel in Board Exams",
    date: "November 15, 2025",
    category: "Achievement",
    excerpt: "Our students continue to achieve outstanding results in NEB examinations, with multiple students securing positions in the national merit list."
  },
  {
    title: "New Computer Lab Inauguration",
    date: "November 10, 2025",
    category: "Infrastructure",
    excerpt: "State-of-the-art computer lab with 50 new workstations inaugurated to enhance practical learning experience."
  },
  {
    title: "Career Fair 2025",
    date: "November 5, 2025",
    category: "Career",
    excerpt: "Over 30 companies participated in our annual career fair, providing internship and job opportunities to our students."
  }
];

const upcomingEvents = [
  { title: "Parent-Teacher Meeting", date: "December 15, 2025", time: "10:00 AM" },
  { title: "Annual Cultural Program", date: "December 20, 2025", time: "2:00 PM" },
  { title: "Winter Break Begins", date: "December 25, 2025", time: "-" },
];

export default function NewsPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Events</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Stay updated with the latest happenings at BWIC
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">Latest News</h2>
                <div className="space-y-6">
                  {news.map((item, idx) => (
                    <article key={idx} className={`bg-gray-50 rounded-xl overflow-hidden ${item.featured ? 'border-2 border-[#c9a227]' : ''}`}>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-[#c9a227]/10 text-[#c9a227] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {item.category}
                          </span>
                          <span className="text-gray-500 text-sm flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                          {item.featured && (
                            <span className="bg-[#1e3a5f] text-white px-2 py-0.5 rounded text-xs">Featured</span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.excerpt}</p>
                        <button className="text-[#c9a227] hover:text-[#b8921f] font-medium inline-flex items-center gap-1">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-[#1e3a5f] rounded-xl p-6 mb-8 sticky top-24">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#c9a227]" />
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-2">{event.title}</h4>
                        <div className="flex items-center gap-4 text-white/70 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </span>
                          {event.time !== "-" && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Admissions", "Events", "Academic", "Achievement", "Infrastructure", "Career"].map((cat, idx) => (
                      <button
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          cat === "All"
                            ? "bg-[#c9a227] text-white"
                            : "bg-white text-gray-600 hover:bg-[#c9a227]/10 hover:text-[#c9a227]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
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
