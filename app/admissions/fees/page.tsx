"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  DollarSign,
  CheckCircle,
  ArrowRight,
  CreditCard,
  Building2,
  Calendar,
  Phone,
  Mail,
  AlertTriangle
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

const programs = [
  {
    program: "+2 Science",
    affiliation: "NEB",
    duration: "2 Years",
    includes: ["Tuition", "Lab Facilities", "Library", "ID Card"],
    color: "from-blue-500 to-blue-600",
  },
  {
    program: "+2 Management",
    affiliation: "NEB",
    duration: "2 Years",
    includes: ["Tuition", "Computer Lab", "Library", "ID Card"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    program: "+2 Humanities",
    affiliation: "NEB",
    duration: "2 Years",
    includes: ["Tuition", "Library", "Activities", "ID Card"],
    color: "from-purple-500 to-purple-600",
  },
  {
    program: "+2 Law",
    affiliation: "NEB",
    duration: "2 Years",
    includes: ["Tuition", "Moot Court", "Library", "ID Card"],
    color: "from-amber-500 to-amber-600",
  },
  {
    program: "BCA",
    affiliation: "TU",
    duration: "4 Years (8 Semesters)",
    includes: ["Tuition", "Computer Lab", "Internet", "Library", "ID Card"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    program: "BBS",
    affiliation: "TU",
    duration: "4 Years",
    includes: ["Tuition", "Library", "Activities", "ID Card"],
    color: "from-rose-500 to-rose-600",
  },
];

const additionalServices = [
  { item: "Examination Fee", description: "As per NEB/TU board schedule" },
  { item: "Transportation", description: "Optional - route dependent" },
  { item: "Hostel", description: "Deluxe, Standard, and Normal options available" },
  { item: "Sports & Activities", description: "Annual activity fee" },
  { item: "CA Coaching", description: "Separate fee structure through Academy of Commerce" },
];

const paymentMethods = [
  { method: "Bank Transfer", icon: Building2, description: "Direct deposit to college account" },
  { method: "Online Payment", icon: CreditCard, description: "eSewa, Khalti, Connect IPS" },
  { method: "Cheque", icon: DollarSign, description: "Payable to Bridgewater International College" },
  { method: "Cash", icon: DollarSign, description: "At college accounts department" },
];

export default function FeesPage() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] overflow-hidden">
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
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4" />
              Tuition & Fees
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Fee <span className="text-[#c9a227]">Structure</span>
            </h1>
            <p className="text-lg text-white/80">
              Quality education at competitive rates. Contact our admissions office 
              for the latest fee information.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800 text-sm md:text-base">
              <strong>Important:</strong> Fee structures are updated annually. Please contact the admissions office 
              at <a href="tel:+97714481590" className="underline font-semibold">+977-1-4481590</a> for the current 
              fee details for your program of interest.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              Programs Offered
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Our Academic Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each program includes various facilities and services. Contact us for detailed fee breakdown.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs.map((program) => (
              <motion.div
                key={program.program}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${program.color} p-5 text-white`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{program.program}</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                      {program.affiliation}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">{program.duration}</p>
                </div>

                <div className="p-5">
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What&apos;s Included:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.includes.map((item, index) => (
                        <span key={index} className="bg-white text-gray-600 text-xs px-2 py-1 rounded-lg border border-gray-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href="tel:+97714481590"
                    className="block w-full text-center bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white py-3 rounded-xl font-semibold transition-colors text-sm"
                  >
                    Call for Fee Details
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              Additional Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Other Fees & Services
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-8"
          >
            <div className="space-y-4">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/10 rounded-xl"
                >
                  <div>
                    <h4 className="font-semibold text-white">{service.item}</h4>
                    <p className="text-white/60 text-sm">{service.description}</p>
                  </div>
                  <span className="text-[#c9a227] font-bold mt-2 sm:mt-0">Contact Office</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              How to Pay
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Payment Methods
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">{method.method}</h4>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#c9a227]" />
                <h4 className="font-bold text-[#1e3a5f]">Payment Schedule</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Admission fee: At the time of enrollment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Monthly/Semester fee: As per payment schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Examination fee: Before each board exam</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Annual payment discount may be available</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-xl p-6 text-white">
              <h4 className="font-bold text-xl mb-4">Get Fee Information</h4>
              <p className="text-white/90 text-sm mb-4">
                Contact our accounts department for detailed fee breakdowns, 
                payment plans, and scholarship information.
              </p>
              <div className="space-y-2">
                <a href="tel:+97714481590" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+977-1-4481590, 4480069</span>
                </a>
                <a href="mailto:info@bridgewater.com.np" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@bridgewater.com.np</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enroll?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Start your application today or explore our scholarship options
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/admissions/scholarships"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20"
              >
                View Scholarships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
