"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  FileCheck,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

interface StepCardProps {
  step: Step;
  index: number;
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Submit Application",
    description:
      "Fill out our application form with your academic details. For +2: SEE certificate. For Bachelor's: 10+2 or equivalent transcripts.",
  },
  {
    icon: Users,
    number: "02",
    title: "Counseling Session",
    description:
      "Meet our academic advisors for personalized guidance in choosing the right program based on your interests and goals.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Entrance & Interview",
    description:
      "Complete entrance examination and attend a personal interview with parents to assess your readiness and potential.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Confirm Enrollment",
    description:
      "Submit required documents, complete fee payment, and receive your admission confirmation. Welcome to Bridgewater!",
  },
];

const requirements = [
  { program: "+2 Science", requirement: "Min. GPA 3.0 in SEE, C+ in Science & Math" },
  { program: "+2 Management/Humanities/Law", requirement: "Min. GPA 2.40 in SEE, D+ in core subjects" },
  { program: "BCA/BBS", requirement: "10+2 or equivalent, Min. CGPA 2.0, D+ in all subjects" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function StepCard({ step, index }: StepCardProps) {
  const IconComponent = step.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative bg-white rounded-2xl p-6 md:p-8
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_16px_40px_rgba(30,58,95,0.12)]
        border border-gray-100/80 hover:border-[#c9a227]/40
        transition-all duration-300 ease-out cursor-pointer
        overflow-hidden"
    >
      <div className="absolute top-4 right-4 text-5xl md:text-6xl font-bold text-[#1e3a5f]/5 
        group-hover:text-[#c9a227]/10 transition-colors duration-300">
        {step.number}
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16
          bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f]
          rounded-xl flex items-center justify-center mb-5
          group-hover:from-[#c9a227] group-hover:to-[#d4af37]
          group-hover:shadow-lg group-hover:shadow-[#c9a227]/25
          transition-all duration-300 ease-out">
          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-bold text-[#c9a227] uppercase tracking-wider">
            Step {step.number}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3
          group-hover:text-[#c9a227] transition-colors duration-300">
          {step.title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {step.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1
        bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f]
        opacity-0 group-hover:opacity-100
        transform scale-x-0 group-hover:scale-x-100
        transition-all duration-500 origin-center rounded-b-2xl" />
    </motion.div>
  );
}

export default function AdmissionProcessSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            Join Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Admission Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your journey to academic excellence begins here. Follow our simple, 
            guided admission process to become part of the Bridgewater family.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={headerVariants}
          className="mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              Admission Requirements
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <h4 className="text-[#c9a227] font-semibold mb-2">{req.program}</h4>
                  <p className="text-white/80 text-sm">{req.requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={headerVariants}
          className="mt-8 md:mt-10 text-center"
        >
          <a
            href="/admissions/apply"
            className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] 
              text-white px-8 py-4 rounded-xl font-semibold text-base 
              transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/20"
          >
            Start Your Application
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
