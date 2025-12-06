import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Target, BookOpen, Building, GraduationCap } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Bridgewater International College Kathmandu",
  description: "Learn about Bridgewater International College (BWIC), a premier NEB & TU affiliated educational institution in Sinamangal, Kathmandu, Nepal. Established in 2010, shaping tomorrow's leaders.",
  keywords: ["about Bridgewater College", "BWIC history", "college in Sinamangal", "Kathmandu college", "NEB affiliated college Nepal"],
  openGraph: {
    title: "About Bridgewater International College | BWIC Kathmandu",
    description: "Premier NEB & TU affiliated college in Sinamangal, Kathmandu. 15+ years of academic excellence since 2010.",
    url: "https://bridgewater.edu.np/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Shaping tomorrow's leaders since 2010
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Welcome to Bridgewater International College</h2>
                <p className="text-gray-600 mb-4">
                  Bridgewater International College (BWIC) is a premier educational institution located in the heart of Kathmandu, Nepal. Established in 2010, we have been committed to providing quality education that prepares students for success in an ever-changing global landscape.
                </p>
                <p className="text-gray-600 mb-4">
                  Affiliated with the National Examinations Board (NEB) and Tribhuvan University (TU), we offer a comprehensive range of academic programs including +2 (Science, Management, Law, Humanities), Bachelor's degrees (BCA, BBS), and professional Chartered Accountancy courses.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission is to nurture intellectual curiosity, foster critical thinking, and develop well-rounded individuals who can contribute meaningfully to society.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about/history" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8921f] font-medium">
                    Our History <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/about/mission" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8921f] font-medium">
                    Mission & Vision <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/about/leadership" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8921f] font-medium">
                    Leadership <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/college-building.jpg"
                    alt="Bridgewater International College Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#c9a227] text-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Why Choose BWIC?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a holistic educational experience that goes beyond textbooks
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Academic Excellence", desc: "Consistently producing top performers in board examinations" },
                { icon: Users, title: "Expert Faculty", desc: "Experienced and dedicated teachers committed to student success" },
                { icon: Target, title: "Career Focused", desc: "Programs designed to prepare students for real-world careers" },
                { icon: BookOpen, title: "Modern Curriculum", desc: "Up-to-date syllabus aligned with industry requirements" },
                { icon: Building, title: "World-Class Facilities", desc: "State-of-the-art labs, library, and sports facilities" },
                { icon: GraduationCap, title: "Holistic Development", desc: "Focus on both academic and personal growth" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1e3a5f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "2000+", label: "Students Enrolled" },
                { number: "100+", label: "Expert Faculty" },
                { number: "15+", label: "Years of Excellence" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-bold text-[#c9a227] mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
