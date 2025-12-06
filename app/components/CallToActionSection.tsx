"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const decorVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut" as const,
    },
  },
};

interface CallToActionSectionProps {
  headline?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CallToActionSection({
  headline = "Ready to Join Bridgewater?",
  subtitle = "Take the first step toward quality education. Join a community of learners at Sinamangal, Kathmandu that has been creating new dimensions in education since 2010.",
  buttonText = "Apply Now",
  buttonHref = "/admissions/apply",
  secondaryButtonText = "Contact Us",
  secondaryButtonHref = "/contact",
}: CallToActionSectionProps) {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1e3a5f]" />
      
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#c9a227" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={decorVariants}
        className="absolute top-10 left-10 md:top-16 md:left-20"
      >
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#c9a227]/20 to-transparent blur-2xl" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={decorVariants}
        className="absolute bottom-10 right-10 md:bottom-16 md:right-20"
      >
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-tl from-[#c9a227]/15 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl md:rounded-3xl 
            border border-white/10 p-8 md:p-12 lg:p-16
            shadow-[0_8px_40px_rgba(0,0,0,0.2),0_0_0_1px_rgba(201,162,39,0.1)]"
        >
          <motion.div
            variants={decorVariants}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#c9a227] to-[#d4af37] 
              rounded-xl md:rounded-2xl flex items-center justify-center
              shadow-lg shadow-[#c9a227]/30 rotate-12"
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={headerVariants}>
              <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
                Start Your Journey
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {headline}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href={buttonHref}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(201, 162, 39, 0.35)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a227] to-[#d4af37] 
                  text-white px-8 py-4 rounded-xl font-semibold text-base md:text-lg
                  shadow-lg shadow-[#c9a227]/25
                  transition-all duration-300 w-full sm:w-auto justify-center"
              >
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={secondaryButtonHref}
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15
                  text-white px-8 py-4 rounded-xl font-semibold text-base md:text-lg
                  border border-white/20 hover:border-white/30
                  transition-all duration-300 w-full sm:w-auto justify-center
                  backdrop-blur-sm"
              >
                {secondaryButtonText}
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8"
            >
              <div className="flex items-center gap-2 text-blue-100/70">
                <svg className="w-5 h-5 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">NEB & TU Affiliated</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100/70">
                <svg className="w-5 h-5 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">Scholarships Available</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100/70">
                <svg className="w-5 h-5 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">Hostel & Transport</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 
            bg-gradient-to-r from-transparent via-[#c9a227] to-transparent 
            opacity-50 rounded-b-2xl md:rounded-b-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
