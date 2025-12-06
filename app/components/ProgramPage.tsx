"use client";

import type { ElementType } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Clock, 
  Users, 
  BookOpen, 
  Target, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Calendar,
  Award,
  Building2,
  Lightbulb
} from "lucide-react";
import Header from "@/app/components/Header";
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

interface ProgramStat {
  label: string;
  value: string;
  icon: ElementType;
}

interface Subject {
  name: string;
  description?: string;
}

interface CareerPath {
  title: string;
  description: string;
}

interface ProgramPageProps {
  badge: string;
  title: string;
  highlightedWord: string;
  description: string;
  heroImage: string;
  stats: ProgramStat[];
  overview: {
    title: string;
    content: string[];
  };
  curriculum: {
    title: string;
    subjects: Subject[];
  };
  eligibility: {
    title: string;
    requirements: string[];
  };
  careers: {
    title: string;
    paths: CareerPath[];
  };
  highlights: string[];
}

export default function ProgramPage({
  badge,
  title,
  highlightedWord,
  description,
  heroImage,
  stats,
  overview,
  curriculum,
  eligibility,
  careers,
  highlights,
}: ProgramPageProps) {
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
              <GraduationCap className="w-4 h-4" />
              {badge}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title.split(highlightedWord)[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">{highlightedWord}</span>
              {title.split(highlightedWord)[1] || ""}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative -mt-10 z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-xl flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-[#1e3a5f]">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                  Program Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {overview.title}
                </h2>
                <div className="space-y-4">
                  {overview.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroImage}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-2xl p-5 shadow-xl">
                  <Award className="w-8 h-8 text-white mb-2" />
                  <p className="text-white font-bold text-lg">NEB Affiliated</p>
                  <p className="text-white/80 text-sm">Quality Assured</p>
                </div>
              </motion.div>
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
              className="text-center mb-12"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                What You'll Learn
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                {curriculum.title}
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {curriculum.subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e3a5f] text-lg mb-1">{subject.name}</h3>
                      {subject.description && (
                        <p className="text-gray-600 text-sm">{subject.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                    Admission Requirements
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                    {eligibility.title}
                  </h2>
                </motion.div>

                <div className="space-y-4">
                  {eligibility.requirements.map((req, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-4 bg-gray-50 rounded-xl p-4"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-700">{req}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="mt-8">
                  <Link
                    href="/admissions/apply"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#b8921f] hover:to-[#c9a227] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-8 text-white"
              >
                <motion.div variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Why Choose This Program?</h3>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-[#c9a227]" />
                      </div>
                      <p className="text-blue-100">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                After Graduation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                {careers.title}
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {careers.paths.map((career, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl flex items-center justify-center mb-4 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{career.title}</h3>
                  <p className="text-gray-600 text-sm">{career.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="#c9a227" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerVariants}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-blue-100/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Join hundreds of successful students who have built their careers through our programs. Admissions are now open.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#b8921f] hover:to-[#c9a227] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
