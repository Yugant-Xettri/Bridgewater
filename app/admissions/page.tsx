"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  ClipboardList, 
  Users, 
  FileCheck, 
  CheckCircle,
  Award,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  FileText,
  Sparkles,
  HelpCircle,
  DollarSign
} from "lucide-react";
import Footer from "@/app/components/Footer";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const admissionSteps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Submit Application",
    description: "Fill out our application form with your academic details. For +2: SEE certificate. For Bachelor's: 10+2 or equivalent transcripts.",
  },
  {
    icon: Users,
    number: "02",
    title: "Counseling Session",
    description: "Meet our academic advisors for personalized guidance in choosing the right program based on your interests and career goals.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Entrance & Interview",
    description: "Complete entrance examination and attend a personal interview with parents to assess your readiness and potential.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Confirm Enrollment",
    description: "Submit required documents, complete fee payment, and receive your admission confirmation within 10 days.",
  },
];

const quickLinks = [
  {
    title: "Apply Now",
    description: "Start your application journey with our online form",
    href: "/admissions/apply",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Requirements",
    description: "Check eligibility criteria for all programs",
    href: "/admissions/requirements",
    icon: ClipboardList,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Scholarships",
    description: "Explore merit and need-based financial aid",
    href: "/admissions/scholarships",
    icon: Award,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Fee Structure",
    description: "View program-wise tuition and fee details",
    href: "/admissions/fees",
    icon: DollarSign,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "FAQs",
    description: "Get answers to common admission questions",
    href: "/admissions/faqs",
    icon: HelpCircle,
    color: "from-rose-500 to-rose-600",
  },
];

const programs = [
  { name: "+2 Science", requirement: "SEE with good grades", duration: "2 Years", affiliation: "NEB" },
  { name: "+2 Management", requirement: "SEE completion", duration: "2 Years", affiliation: "NEB" },
  { name: "+2 Humanities", requirement: "SEE completion", duration: "2 Years", affiliation: "NEB" },
  { name: "+2 Law", requirement: "SEE completion", duration: "2 Years", affiliation: "NEB" },
  { name: "BCA", requirement: "10+2 completion", duration: "4 Years", affiliation: "TU" },
  { name: "BBS", requirement: "10+2 completion", duration: "4 Years", affiliation: "TU" },
];

const importantDates = [
  { event: "Application Opens", date: "Contact admissions office" },
  { event: "Entrance Examination", date: "Scheduled after application" },
  { event: "Result Publication", date: "Shortly after examination" },
  { event: "Classes Begin", date: "Contact for current schedule" },
];

export default function AdmissionsPage() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#c9a227" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Admissions Open
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Begin Your Journey to{" "}
              <span className="text-[#c9a227]">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join Bridgewater International College and become part of a community 
              dedicated to academic excellence, innovation, and holistic development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/30"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+97714481590"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Talk to Admissions
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              Quick Access
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Admissions Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about joining Bridgewater International College
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {quickLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.div key={link.title} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#c9a227]/40 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              How to Apply
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Admission Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your journey to academic excellence begins with these simple steps
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {admissionSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a227]/40 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 text-5xl font-bold text-[#1e3a5f]/5 group-hover:text-[#c9a227]/10 transition-colors">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-xl flex items-center justify-center mb-5 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#c9a227] uppercase tracking-wider">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mt-2 mb-3 group-hover:text-[#c9a227] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              Programs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Available Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of academic programs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {programs.map((program) => (
              <motion.div
                key={program.name}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{program.name}</h3>
                  <span className="bg-[#c9a227] text-xs font-bold px-3 py-1 rounded-full">
                    {program.affiliation}
                  </span>
                </div>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c9a227]" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#c9a227]" />
                    <span>{program.requirement}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="mt-8 text-center"
          >
            <Link
              href="/admissions/requirements"
              className="inline-flex items-center gap-2 text-[#1e3a5f] hover:text-[#c9a227] font-semibold transition-colors"
            >
              View Detailed Requirements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerVariants}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f]">Important Dates</h3>
              </div>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#1e3a5f]/5 transition-colors"
                  >
                    <span className="font-medium text-[#1e3a5f]">{item.event}</span>
                    <span className="text-[#c9a227] font-semibold">{item.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerVariants}
              className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Admissions Office</h3>
              <p className="text-white/80 mb-6">
                Have questions about admissions? Our team is here to help you every step of the way.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+97714481590"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-6 h-6 text-[#c9a227]" />
                  <div>
                    <p className="text-sm text-white/60">Phone</p>
                    <p className="font-semibold">+977-1-4481590, 4480069</p>
                  </div>
                </a>
                <a
                  href="mailto:info@bridgewater.com.np"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-6 h-6 text-[#c9a227]" />
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-semibold">info@bridgewater.com.np</p>
                  </div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  Direct Admissions Contacts:
                </p>
                <p className="text-[#c9a227] font-semibold mt-2">
                  +977-9851056032 | 9803756714 | 9807500491
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-[#c9a227] to-[#d4af37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Application?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Take the first step towards a brighter future at Bridgewater International College
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#0f2a4a] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/admissions/scholarships"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30"
              >
                <Award className="w-5 h-5" />
                Explore Scholarships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
