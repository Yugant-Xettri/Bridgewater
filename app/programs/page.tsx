import Link from "next/link";
import { ArrowRight, FlaskConical, TrendingUp, Scale, BookOpen, Monitor, Briefcase, Calculator } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const programs = [
  {
    category: "+2 Programs (NEB Affiliated)",
    items: [
      { name: "+2 Science", href: "/academics/plus2-science", icon: FlaskConical, desc: "Physics, Chemistry, Biology/Math - Gateway to medicine, engineering & research" },
      { name: "+2 Management", href: "/academics/plus2-management", icon: TrendingUp, desc: "Business studies, economics & accounting - Foundation for business careers" },
      { name: "+2 Law", href: "/academics/plus2-law", icon: Scale, desc: "Legal studies with comprehensive law curriculum - Path to legal profession" },
      { name: "+2 Humanities", href: "/academics/plus2-humanities", icon: BookOpen, desc: "Social sciences & liberal arts - Diverse career opportunities" },
    ]
  },
  {
    category: "Bachelor Programs (TU Affiliated)",
    items: [
      { name: "BCA", href: "/academics/bca", icon: Monitor, desc: "Bachelor of Computer Application - IT & software development careers" },
      { name: "BBS", href: "/academics/bbs", icon: Briefcase, desc: "Bachelor of Business Studies - Business management & administration" },
    ]
  },
  {
    category: "Professional Courses",
    items: [
      { name: "Chartered Accountancy (CA)", href: "/academics/ca", icon: Calculator, desc: "Professional accounting certification - Path to becoming a CA" },
    ]
  }
];

export default function ProgramsPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Discover the right academic path for your future
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {programs.map((category, catIdx) => (
              <div key={catIdx} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 pb-4 border-b-2 border-[#c9a227]">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((program, idx) => (
                    <Link
                      key={idx}
                      href={program.href}
                      className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#c9a227]/30 rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-[#c9a227]/10 group-hover:bg-[#c9a227] rounded-xl flex items-center justify-center transition-colors">
                          <program.icon className="w-7 h-7 text-[#c9a227] group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-[#1e3a5f] group-hover:text-[#c9a227] mb-2 transition-colors">
                            {program.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">{program.desc}</p>
                          <span className="inline-flex items-center gap-1 text-[#c9a227] text-sm font-medium">
                            Learn more about {program.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#1e3a5f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/80 mb-8">
              Take the first step towards a bright future. Apply now for the upcoming academic session.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions/apply"
                className="bg-[#c9a227] hover:bg-[#b8921f] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
