import Link from "next/link";
import { Briefcase, Users, FileText, Target, Building, GraduationCap, MessageSquare, Calendar } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const services = [
  {
    icon: FileText,
    title: "Resume Building",
    description: "Professional guidance on creating impactful resumes and CVs that stand out to employers."
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Mock interviews and coaching to help you ace your job interviews with confidence."
  },
  {
    icon: Target,
    title: "Career Counseling",
    description: "One-on-one sessions to help you identify your career path and set achievable goals."
  },
  {
    icon: Building,
    title: "Industry Connections",
    description: "Direct connections with leading companies and organizations for internship and job opportunities."
  },
  {
    icon: Calendar,
    title: "Job Fairs",
    description: "Regular job fairs bringing top employers to campus for recruitment drives."
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Workshops and training programs to enhance your professional skills."
  }
];

export default function CareersPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Services</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Empowering students for professional success
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive career support to help you transition from student life to professional success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Placement Success</h2>
                <p className="text-gray-600 mb-4">
                  Our career services team has helped hundreds of students secure positions at top companies and organizations in Nepal and abroad.
                </p>
                <p className="text-gray-600 mb-6">
                  We maintain strong relationships with industry partners, ensuring our students have access to the best opportunities available.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">500+</div>
                    <div className="text-sm text-gray-600">Students Placed</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">50+</div>
                    <div className="text-sm text-gray-600">Partner Companies</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1e3a5f] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Our Recruiting Partners</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg aspect-video flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white/50" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#c9a227]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Career Journey?</h2>
            <p className="text-white/90 mb-8">
              Visit our career services office or contact us to schedule a consultation.
            </p>
            <Link
              href="/contact"
              className="bg-white text-[#1e3a5f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Career Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
