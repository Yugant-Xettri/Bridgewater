"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Award,
  Star,
  Users,
  Heart,
  Trophy,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  BookOpen,
  Medal
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

const scholarshipTypes = [
  {
    title: "Merit-Based Scholarship",
    icon: Trophy,
    description: "Rewarding academic excellence and outstanding performance",
    color: "from-amber-500 to-amber-600",
    benefits: [
      "Tuition fee waiver based on academic performance",
      "Evaluated based on SEE/+2 GPA scores",
      "Renewable each year based on continued performance",
      "Contact admissions for current scholarship rates",
    ],
    criteria: [
      "Strong academic record in previous studies",
      "Top performers in entrance examination",
      "Maintain good academic standing",
      "Meet program-specific requirements",
    ],
  },
  {
    title: "Need-Based Scholarship",
    icon: Heart,
    description: "Supporting students with financial constraints",
    color: "from-rose-500 to-rose-600",
    benefits: [
      "Tuition fee support based on financial need",
      "Flexible payment options available",
      "Work-study opportunities may be offered",
      "Additional support for deserving students",
    ],
    criteria: [
      "Demonstrated financial need",
      "Family income documentation required",
      "Maintain satisfactory academic progress",
      "Active participation in college activities",
    ],
  },
  {
    title: "Sports Scholarship",
    icon: Medal,
    description: "Encouraging athletic talent and sportsmanship",
    color: "from-blue-500 to-blue-600",
    benefits: [
      "Tuition fee support for athletes",
      "Access to sports facilities",
      "Sports equipment support",
      "Training and coaching opportunities",
    ],
    criteria: [
      "District/National level sports achievements",
      "Active participation in college sports teams",
      "Maintain minimum academic standards",
      "Represent college in competitions",
    ],
  },
  {
    title: "Sibling Discount",
    icon: Users,
    description: "Special discount for family members",
    color: "from-emerald-500 to-emerald-600",
    benefits: [
      "Discount on tuition fees for siblings",
      "Combined fee payment option",
      "Applicable from second sibling onwards",
      "Valid for concurrent enrollment",
    ],
    criteria: [
      "Siblings currently enrolled at Bridgewater",
      "Valid for all programs",
      "Proof of relationship required",
      "Both students must maintain good standing",
    ],
  },
];

const applicationProcess = [
  {
    step: 1,
    title: "Apply for Admission",
    description: "Complete the regular admission application process",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Submit Scholarship Form",
    description: "Fill out the scholarship application with supporting documents",
    icon: Target,
  },
  {
    step: 3,
    title: "Committee Review",
    description: "Your application is reviewed by the scholarship committee",
    icon: Users,
  },
  {
    step: 4,
    title: "Award Decision",
    description: "Receive notification of scholarship decision within 2 weeks",
    icon: Award,
  },
];

const highlights = [
  { value: "Merit-Based", label: "For Academic Achievers" },
  { value: "Need-Based", label: "Financial Support" },
  { value: "Sports", label: "For Athletes" },
  { value: "Sibling", label: "Family Discounts" },
];

export default function ScholarshipsPage() {
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
              <Sparkles className="w-4 h-4" />
              Financial Aid
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Scholarships & <span className="text-[#c9a227]">Financial Aid</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              We believe financial constraints should never be a barrier to quality education. 
              Explore our scholarship programs designed to support deserving students.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/10"
              >
                <p className="text-xl md:text-2xl font-bold text-[#c9a227] mb-1">{item.value}</p>
                <p className="text-white/70 text-xs md:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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
              Scholarship Programs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Types of Scholarships
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from various scholarship options based on your qualifications and needs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {scholarshipTypes.map((scholarship) => {
              const IconComponent = scholarship.icon;
              return (
                <motion.div
                  key={scholarship.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${scholarship.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{scholarship.title}</h3>
                        <p className="text-white/80 text-sm">{scholarship.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#c9a227]" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {scholarship.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#c9a227]" />
                        Eligibility Criteria
                      </h4>
                      <ul className="space-y-2">
                        {scholarship.criteria.map((criterion, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              How to Apply
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Scholarship Application Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to apply for a scholarship at Bridgewater
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-6">
              {applicationProcess.map((process) => {
                const IconComponent = process.icon;
                return (
                  <motion.div
                    key={process.step}
                    variants={itemVariants}
                    className="relative text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-8 h-8 bg-[#c9a227] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Required Documents for Scholarship Application
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Completed scholarship application form",
                "Academic transcripts (SEE/+2)",
                "Character certificate",
                "Recommendation letter from previous school",
                "Income certificate (for need-based)",
                "Sports certificates (for sports scholarship)",
                "Passport-size photographs",
                "Any other relevant certificates",
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                  <span className="text-white/90 text-sm">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Apply for a Scholarship?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Don&apos;t let financial constraints hold you back. Apply today and unlock your potential.
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
                href="/admissions"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30"
              >
                Back to Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
