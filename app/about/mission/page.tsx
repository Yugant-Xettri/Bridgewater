"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Heart, Users, BookOpen, Award } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MissionVisionSection from "@/app/components/MissionVisionSection";

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
      delayChildren: 0.15,
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

const coreValues = [
  {
    icon: Heart,
    title: "Excellence",
    description: "Striving for the highest standards in education and personal development.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Building trust through honesty, transparency, and ethical conduct.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "Embracing new ideas and methods to enhance learning experiences.",
  },
  {
    icon: Award,
    title: "Commitment",
    description: "Dedicated to student success and continuous improvement.",
  },
];

export default function MissionVisionPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-[88px] sm:pt-[96px]">
        <div className="relative bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="#c9a227" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a227]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-5 py-2 text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              Our Purpose
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Vision</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto">
              Guided by our commitment to excellence, we strive to create new dimensions 
              in education and shape tomorrow's leaders.
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
        </div>

        <MissionVisionSection />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={headerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
                What We Believe
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                The principles that guide everything we do at Bridgewater International College.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    className="group text-center p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="philosophy-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="#c9a227" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#philosophy-pattern)" />
            </svg>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-6">
                <Heart className="w-4 h-4" />
                Our Philosophy
              </div>
              
              <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 italic">
                "We believe that every mind is a separate knife made up of the same steel, 
                with the difference among them derived from their sharpness — measured not 
                merely by bookish knowledge but by life experience as well."
              </blockquote>
              
              <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We aim not only to help every student become successful, but to make them 
                capable of handling even defeat gracefully and striving to win at the end.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
