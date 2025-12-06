"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Beaker, 
  TrendingUp, 
  BookOpen, 
  Scale, 
  Monitor, 
  Briefcase, 
  Calculator,
  ArrowRight,
  Clock,
  Users,
  Award,
  LucideIcon
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import academicsData from "@/json/academics.json";

const iconMap: Record<string, LucideIcon> = {
  Beaker,
  TrendingUp,
  BookOpen,
  Scale,
  Monitor,
  Briefcase,
  Calculator,
  Award,
  GraduationCap,
  Users,
};

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

const programs = academicsData.programs.map((program) => ({
  ...program,
  icon: iconMap[program.icon] || BookOpen,
}));

const stats = academicsData.stats.map((stat) => ({
  ...stat,
  icon: iconMap[stat.icon] || Award,
}));

export default function AcademicsPage() {
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
              Academic Excellence
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Programs</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto">
              Discover our comprehensive range of academic programs designed to shape 
              tomorrow's leaders in science, business, humanities, and technology.
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
              variants={headerVariants}
              className="text-center mb-12"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                +2 Level Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Higher Secondary Education
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                NEB affiliated programs preparing students for higher education and professional careers.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {programs.slice(0, 4).map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.div
                    key={program.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <Link href={program.href}>
                      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-2xl transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={program.image}
                            alt={program.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-white">{program.title}</h3>
                                <div className="flex items-center gap-3 text-white/80 text-sm">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {program.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Award className="w-3 h-3" />
                                    {program.affiliation}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 mb-4">{program.description}</p>
                          <div className="flex items-center text-[#c9a227] font-semibold group-hover:gap-3 gap-2 transition-all">
                            Learn more about {program.title}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
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
              className="text-center mb-12"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                Bachelor & Professional
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Higher Education Programs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                TU affiliated bachelor programs and professional CA coaching for career advancement.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6"
            >
              {programs.slice(4).map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.div
                    key={program.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <Link href={program.href}>
                      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-2xl transition-all duration-300 h-full">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={program.image}
                            alt={program.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent" />
                          <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${program.color} rounded-full text-white text-xs font-semibold`}>
                            {program.affiliation}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-[#1e3a5f]">{program.title}</h3>
                              <p className="text-gray-500 text-sm">{program.duration}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                          <div className="flex items-center text-[#c9a227] font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                            View {program.title} details
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
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
                Ready to Join Bridgewater?
              </h2>
              <p className="text-blue-100/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Take the first step towards your future. Apply now for the upcoming academic session.
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
                  Contact Admissions
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
