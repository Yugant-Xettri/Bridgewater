"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Building2, 
  GraduationCap, 
  Award, 
  Users, 
  Globe, 
  Landmark,
  Calendar,
  Target,
  Eye,
  Heart,
  BookOpen,
  School,
  Briefcase,
  Trophy,
  MapPin,
  Sparkles
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Bridgewater International College was established in Sinamangal, Kathmandu by a team of visionary academicians with the mission to bring world-class education to Nepalese students and make global education accessible at the local level.",
    icon: Building2,
    highlight: "The Beginning",
    color: "from-blue-500 to-blue-600",
  },
  {
    year: "2012",
    title: "NEB Affiliation",
    description: "Received official affiliation from National Examination Board (NEB) under the Ministry of Education for +2 programs in Science, Management, Humanities, and Law streams.",
    icon: Landmark,
    highlight: "Academic Recognition",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    year: "2015",
    title: "Higher Education Launch",
    description: "Expanded academic offerings with Bachelor of Business Studies (BBS) and Bachelor of Computer Application (BCA) programs under Tribhuvan University affiliation, offering 4-year degree programs.",
    icon: GraduationCap,
    highlight: "Bachelor Programs",
    color: "from-purple-500 to-purple-600",
  },
  {
    year: "2018",
    title: "Infrastructure Expansion",
    description: "Inaugurated state-of-the-art facilities including well-equipped science and computer laboratories, modern library, auditorium hall, and an in-house futsal ground for student recreation.",
    icon: Award,
    highlight: "Modern Campus",
    color: "from-amber-500 to-amber-600",
  },
  {
    year: "2020",
    title: "Education Network",
    description: "Became part of Bridgewater Education Foundation & Research Center, joining sister institutions including Academy of Commerce (CA coaching), Danfe College, Bridgewater International School, and Bridgewater Pre-School.",
    icon: Globe,
    highlight: "Growing Family",
    color: "from-rose-500 to-rose-600",
  },
  {
    year: "2024",
    title: "Continued Excellence",
    description: "Continuing our mission with merit-based and need-based scholarships, shuttle services, hostel facilities, career counseling, and Personality Development Programs (PDP) for holistic student growth.",
    icon: Sparkles,
    highlight: "Future Focused",
    color: "from-cyan-500 to-cyan-600",
  },
];

const foundationInstitutions = [
  {
    name: "Bridgewater International College",
    description: "+2 Programs (Science, Management, Humanities, Law)",
    icon: School,
  },
  {
    name: "Danfe College",
    description: "Bachelor Programs (BCA, BBS)",
    icon: GraduationCap,
  },
  {
    name: "Academy of Commerce",
    description: "CA Coaching (ICAN Accredited)",
    icon: Briefcase,
  },
  {
    name: "Bridgewater International School",
    description: "Classes 1-10",
    icon: BookOpen,
  },
  {
    name: "Bridgewater Pre-School",
    description: "Play Group to UKG",
    icon: Users,
  },
];

export default function OurHistoryPage() {
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
              <Calendar className="w-4 h-4" />
              Established 2010
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">History</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-8">
              From a vision to reality — discover how Bridgewater International College 
              has been creating new dimensions in education since 2010.
            </p>

            <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 text-[#c9a227]" />
              <span>Sinamangal, Kathmandu, Nepal</span>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
        </div>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={headerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
                The Beginning
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Our Founding Story
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9a227] to-[#1e3a5f] rounded-full" />
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg pl-6">
                    In 2010, a team of visionary academicians came together with a shared dream — 
                    to bring world-class education to Nepalese students right here at home. 
                    They believed that every student deserves the opportunity to explore and 
                    nurture their potential across diverse educational fields.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Located in the heart of Sinamangal, Kathmandu, Bridgewater International College 
                  was founded with the mission to deliver optimum quality education and accelerate 
                  the pace of Nepal's educational sector by generating productivity and efficiency.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Our philosophy goes beyond academic excellence — we believe in making students 
                  capable of handling life's challenges gracefully, combining bookish knowledge 
                  with practical life experience.
                </p>
              </motion.div>

              <motion.div 
                variants={scaleVariants}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a227]/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Our Philosophy</h3>
                    </div>
                    <blockquote className="text-blue-100/90 text-lg leading-relaxed italic">
                      "We believe in not only helping students succeed academically but making 
                      them capable of handling life's challenges gracefully — through both 
                      knowledge and experience."
                    </blockquote>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-[#c9a227] font-semibold">Creating New Dimensions in Education</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f9fa] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={headerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
                Vision & Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                What Drives Us
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 md:gap-8"
            >
              <motion.div
                variants={itemVariants}
                className="group bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,58,95,0.1)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl flex items-center justify-center group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  To introduce the largest, most practical, innovative, and productive educational 
                  network in Nepal through national and international collaboration — producing 
                  leaders with integrity who can make a difference in today's rapidly changing world.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="group bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,58,95,0.1)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl flex items-center justify-center group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  To deliver optimum quality education and accelerate the pace of Nepal's educational 
                  sector by generating productivity and efficiency — creating new dimensions in 
                  education and contributing to national progress.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

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
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Key Milestones
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover the defining moments that have shaped our institution into what it is today.
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a227]/0 via-[#c9a227]/50 to-[#c9a227]/0 transform -translate-x-1/2" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={containerVariants}
                className="relative"
              >
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={milestone.year}
                      variants={itemVariants}
                      className={`relative flex flex-col lg:flex-row items-center mb-12 lg:mb-20 last:mb-0
                        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                      <div className={`w-full lg:w-[calc(50%-50px)] ${isEven ? "lg:pr-10 lg:text-right" : "lg:pl-10 lg:text-left"}`}>
                        <motion.div
                          whileHover={{ 
                            y: -8,
                            transition: { duration: 0.3, ease: "easeOut" }
                          }}
                          className="group relative bg-white rounded-3xl p-6 md:p-8
                            shadow-[0_4px_30px_rgba(0,0,0,0.06)]
                            hover:shadow-[0_25px_60px_rgba(30,58,95,0.15)]
                            border border-gray-100/80 hover:border-[#c9a227]/40
                            transition-all duration-300 ease-out overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/0 
                            group-hover:from-[#c9a227]/[0.02] group-hover:to-[#1e3a5f]/[0.02] 
                            transition-all duration-500 rounded-3xl" />

                          <div className={`relative z-10 flex items-start gap-4 mb-5
                            ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                          >
                            <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${milestone.color}
                              rounded-2xl flex items-center justify-center flex-shrink-0
                              group-hover:scale-110 group-hover:rotate-3
                              shadow-lg transition-all duration-300`}
                            >
                              <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f]
                                text-white text-sm font-bold rounded-full mb-2 shadow-sm"
                              >
                                {milestone.year}
                              </span>
                              <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] 
                                group-hover:text-[#c9a227] transition-colors duration-300"
                              >
                                {milestone.title}
                              </h3>
                              <p className="text-xs text-[#c9a227] font-semibold mt-1 uppercase tracking-wider">
                                {milestone.highlight}
                              </p>
                            </div>
                          </div>
                          
                          <p className={`relative z-10 text-gray-600 leading-relaxed text-sm md:text-base
                            ${isEven ? "lg:text-right" : "lg:text-left"}`}
                          >
                            {milestone.description}
                          </p>

                          <div className="absolute bottom-0 left-0 right-0 h-1.5 
                            bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] 
                            opacity-0 group-hover:opacity-100 
                            transform scale-x-0 group-hover:scale-x-100 
                            transition-all duration-500 origin-center rounded-b-3xl" />
                        </motion.div>
                      </div>

                      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                        <motion.div
                          whileHover={{ scale: 1.4 }}
                          className={`w-7 h-7 bg-gradient-to-br ${milestone.color} rounded-full 
                            border-4 border-white shadow-xl
                            transition-all duration-300 cursor-pointer`}
                        />
                      </div>

                      <div className="lg:hidden w-full flex justify-center my-4">
                        <div className={`w-4 h-4 bg-gradient-to-br ${milestone.color} rounded-full shadow-md`} />
                      </div>

                      <div className="hidden lg:block w-[calc(50%-50px)]" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="foundation-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="#c9a227" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#foundation-pattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={headerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
                Our Network
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Bridgewater Education Foundation
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                A comprehensive educational network created by visionary individuals 
                to reform Nepal's education system from preschool to professional courses.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
            >
              {foundationInstitutions.map((institution, index) => {
                const IconComponent = institution.icon;
                return (
                  <motion.div
                    key={institution.name}
                    variants={itemVariants}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
                      hover:bg-white/10 hover:border-[#c9a227]/40 transition-all duration-300
                      text-center"
                  >
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#c9a227] to-[#d4af37] 
                      rounded-xl flex items-center justify-center mb-4
                      group-hover:scale-110 transition-transform duration-300"
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2 leading-tight">
                      {institution.name}
                    </h3>
                    <p className="text-blue-100/70 text-xs md:text-sm">
                      {institution.description}
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
              viewport={{ once: true, margin: "-50px" }}
              variants={headerVariants}
              className="text-center mb-12"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
                By The Numbers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Our Legacy in Numbers
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { number: "14+", label: "Years of Excellence", icon: Calendar },
                { number: "5", label: "Institutions in Network", icon: Building2 },
                { number: "NEB & TU", label: "Affiliations", icon: Trophy },
                { number: "100%", label: "Committed to Quality", icon: Users },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="group bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-6 md:p-8 text-center
                      shadow-lg shadow-[#1e3a5f]/20 hover:shadow-xl hover:shadow-[#1e3a5f]/30
                      hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 mx-auto bg-[#c9a227]/20 rounded-xl flex items-center justify-center mb-4
                      group-hover:bg-[#c9a227]/30 transition-colors duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[#c9a227] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm md:text-base font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#c9a227] to-[#d4af37] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-pattern-history" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="#1e3a5f" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern-history)" />
            </svg>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-[#1e3a5f]/80 text-base md:text-lg mb-8 leading-relaxed">
              Join the next chapter of Bridgewater's legacy. Become part of a community 
              that has been shaping futures and creating leaders for over 14 years.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2a4a6f]
                  text-white px-8 py-4 rounded-xl font-semibold text-base
                  shadow-lg shadow-[#1e3a5f]/30 hover:shadow-[#1e3a5f]/50
                  transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30
                  text-[#1e3a5f] px-8 py-4 rounded-xl font-semibold text-base
                  border-2 border-[#1e3a5f]/20 hover:border-[#1e3a5f]/30
                  transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
