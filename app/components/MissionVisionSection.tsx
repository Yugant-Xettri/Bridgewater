"use client";

import { motion, Variants } from "framer-motion";
import { Target, Telescope, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MissionVisionSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#c9a227]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={iconVariants} className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider">
              Our Purpose
            </span>
            <Sparkles className="w-5 h-5 text-[#c9a227]" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4"
          >
            Mission & Vision
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Guided by our commitment to excellence, we strive to create new dimensions 
            in education and shape tomorrow's leaders.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,58,95,0.12)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              variants={iconVariants}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-500 shadow-lg group-hover:shadow-[#c9a227]/20"
            >
              <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4 group-hover:text-[#c9a227] transition-colors duration-300">
              Our Mission
            </h3>
            
            <div className="w-12 h-1 bg-gradient-to-r from-[#c9a227] to-[#c9a227]/50 rounded-full mb-6" />
            
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              To deliver optimum quality education and accelerate the pace of Nepal's educational 
              sector by generating productivity and efficiency. We are committed to nurturing 
              students who shall contribute to the overall progress of the nation, combining 
              academic excellence with practical life skills that prepare them for future challenges.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,58,95,0.12)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              variants={iconVariants}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-500 shadow-lg group-hover:shadow-[#c9a227]/20"
            >
              <Telescope className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4 group-hover:text-[#c9a227] transition-colors duration-300">
              Our Vision
            </h3>
            
            <div className="w-12 h-1 bg-gradient-to-r from-[#c9a227] to-[#c9a227]/50 rounded-full mb-6" />
            
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              To introduce the largest, most practical, innovative, and productive educational 
              network in Nepal through collective involvement of national and international 
              collaboration. We aspire to produce leaders with integrity who can make a meaningful 
              difference in today's rapidly changing world and drive positive transformation.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#1e3a5f]/5 via-[#c9a227]/10 to-[#1e3a5f]/5 rounded-2xl px-6 py-4 md:px-8 md:py-5 border border-[#c9a227]/20">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-xl flex items-center justify-center shadow-lg shadow-[#c9a227]/20">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <p className="text-[#1e3a5f] font-medium text-sm md:text-base italic">
              "Creating new dimensions in education since 2010"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
