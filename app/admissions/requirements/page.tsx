"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle,
  FileText,
  ClipboardList,
  Beaker,
  TrendingUp,
  BookOpen,
  Scale,
  Monitor,
  Briefcase,
  ArrowRight,
  AlertCircle,
  Award
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

const programRequirements = [
  {
    program: "+2 Science",
    icon: Beaker,
    affiliation: "NEB",
    duration: "2 Years",
    color: "from-blue-500 to-blue-600",
    eligibility: [
      "SEE certificate with good academic standing",
      "Strong performance in Science and Mathematics",
      "Optional Mathematics is required",
      "Contact admissions for specific GPA requirements",
    ],
    subjects: "Physics, Chemistry, Biology, Mathematics",
    career: "Medicine, Engineering, IT, Research",
  },
  {
    program: "+2 Management",
    icon: TrendingUp,
    affiliation: "NEB",
    duration: "2 Years",
    color: "from-emerald-500 to-emerald-600",
    eligibility: [
      "SEE certificate completion",
      "Passing grades in core subjects",
      "Interest in business and commerce",
      "Contact admissions for specific requirements",
    ],
    subjects: "Accountancy, Economics, Business Studies, Mathematics",
    career: "CA, Banking, Finance, Business, MBA",
  },
  {
    program: "+2 Humanities",
    icon: BookOpen,
    affiliation: "NEB",
    duration: "2 Years",
    color: "from-purple-500 to-purple-600",
    eligibility: [
      "SEE certificate completion",
      "Passing grades in core subjects",
      "Interest in social sciences",
      "Contact admissions for specific requirements",
    ],
    subjects: "Sociology, Mass Communication, Rural Development, English",
    career: "Journalism, NGO, Public Service, Social Work",
  },
  {
    program: "+2 Law",
    icon: Scale,
    affiliation: "NEB",
    duration: "2 Years",
    color: "from-amber-500 to-amber-600",
    eligibility: [
      "SEE certificate completion",
      "Passing grades in core subjects",
      "Interest in legal studies",
      "Contact admissions for specific requirements",
    ],
    subjects: "Constitutional Law, Jurisprudence, Procedural Law, English",
    career: "Legal Profession, Judiciary, Law Entrance",
  },
  {
    program: "BCA",
    icon: Monitor,
    affiliation: "TU",
    duration: "4 Years (8 Semesters)",
    color: "from-cyan-500 to-cyan-600",
    eligibility: [
      "Completed 10+2 or equivalent",
      "Passing grades in Grade 11 and 12",
      "Science/Management background preferred",
      "Contact admissions for specific requirements",
    ],
    subjects: "Programming, Database, Web Development, Networking, Software Engineering",
    career: "Software Developer, IT Manager, Web Developer, System Analyst",
  },
  {
    program: "BBS",
    icon: Briefcase,
    affiliation: "TU",
    duration: "4 Years",
    color: "from-rose-500 to-rose-600",
    eligibility: [
      "Completed 10+2 in Business/Commerce or equivalent",
      "Passing grades in Grade 11 and 12",
      "Management background preferred",
      "Contact admissions for specific requirements",
    ],
    subjects: "Accounting, Finance, Marketing, Economics, Management",
    career: "Accountant, Banker, Business Manager, Entrepreneur",
  },
];

const requiredDocuments = [
  "SEE/Grade 10 mark sheet and certificate (original + photocopy)",
  "+2/Grade 12 mark sheet and certificate (for bachelor programs)",
  "Character certificate from previous institution",
  "Transfer certificate (if applicable)",
  "Migration certificate (if applicable)",
  "2 recent passport-size photographs",
  "Copy of citizenship certificate or birth certificate",
  "Testimonials from previous institution (can be submitted during interview)",
];

export default function RequirementsPage() {
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
              <ClipboardList className="w-4 h-4" />
              Admission Criteria
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Admission <span className="text-[#c9a227]">Requirements</span>
            </h1>
            <p className="text-lg text-white/80">
              Review the eligibility criteria for each program to ensure you meet the requirements before applying
            </p>
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
              Program-wise Criteria
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Eligibility by Program
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each program has specific academic requirements. Find your desired program below.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            {programRequirements.map((program) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.program}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className={`bg-gradient-to-br ${program.color} p-6 md:p-8 text-white`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{program.program}</h3>
                          <p className="text-white/80">{program.affiliation} Affiliated</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-white/90 text-sm">
                        <p><strong>Duration:</strong> {program.duration}</p>
                        <p><strong>Subjects:</strong> {program.subjects}</p>
                        <p><strong>Career Paths:</strong> {program.career}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-6 md:p-8">
                      <h4 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#c9a227]" />
                        Eligibility Requirements
                      </h4>
                      <ul className="space-y-3">
                        {program.eligibility.map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <Link
                          href="/admissions/apply"
                          className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#d4af37] font-semibold transition-colors"
                        >
                          Apply for {program.program}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Required Documents
            </h2>
            <p className="text-gray-600">
              Prepare these documents before visiting the admissions office
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Document Checklist</h3>
            </div>
            <ul className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-white/90"
                >
                  <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6"
          >
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Note</h3>
                <p className="text-amber-700 text-sm">
                  All applicants must appear for an entrance examination and personal interview with 
                  their parents/guardians. Admission is granted within 10 days after the entrance 
                  result, subject to quota availability. Early application is recommended.
                </p>
              </div>
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
              Meet the Requirements?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Start your application today and join Bridgewater International College
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
