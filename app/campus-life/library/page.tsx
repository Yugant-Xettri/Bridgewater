"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  BookOpen,
  Library,
  Search,
  Laptop,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  BookMarked,
  FileText,
  Globe,
  Users,
  Brain
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

const resources = [
  {
    type: "Books Collection",
    description: "Comprehensive collection of textbooks, reference materials, and academic literature across all programs.",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    items: ["Textbooks", "Reference Books", "Academic Literature", "Course Materials"],
  },
  {
    type: "Journals & Periodicals",
    description: "Access to academic journals, research papers, and periodicals for in-depth research and study.",
    icon: FileText,
    color: "from-emerald-500 to-emerald-600",
    items: ["Academic Journals", "Research Papers", "Periodicals", "Magazines"],
  },
  {
    type: "Digital Resources",
    description: "Modern digital library with e-books, online databases, and educational software.",
    icon: Laptop,
    color: "from-purple-500 to-purple-600",
    items: ["E-Books", "Online Databases", "Educational Software", "Digital Archives"],
  },
  {
    type: "Study Materials",
    description: "Curated study guides, past papers, and preparation materials for examinations.",
    icon: BookMarked,
    color: "from-amber-500 to-amber-600",
    items: ["Study Guides", "Past Papers", "Exam Prep", "Notes"],
  },
];

const features = [
  { icon: Search, title: "Easy Search System", description: "Efficient cataloging and search system to find resources quickly" },
  { icon: Clock, title: "Extended Hours", description: "Library open during extended hours for student convenience" },
  { icon: Users, title: "Quiet Study Areas", description: "Dedicated quiet zones for focused individual study" },
  { icon: Lightbulb, title: "Research Support", description: "Staff available to assist with research and resource finding" },
  { icon: Globe, title: "Internet Access", description: "High-speed internet for online research and learning" },
  { icon: Brain, title: "Modern Methodologies", description: "Resources supporting innovative teaching approaches" },
];

const programs = [
  {
    level: "+2 Programs",
    streams: ["Science", "Management", "Humanities", "Law"],
    description: "Complete study resources for all +2 streams with subject-specific materials and reference books.",
  },
  {
    level: "Bachelor Programs",
    streams: ["BCA", "BBS"],
    description: "Comprehensive library collection supporting undergraduate programs with specialized academic resources.",
  },
];

export default function LibraryPage() {
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
              <Library className="w-4 h-4" />
              Campus Life
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Library</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-8">
              A vast collection of books, journals, and digital resources in a serene 
              environment designed to inspire academic excellence and research.
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
                Knowledge Hub
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Gateway to Academic Excellence
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
                    Our library serves as the intellectual heart of Bridgewater International 
                    College, providing students with access to a comprehensive collection of 
                    academic resources essential for their educational journey.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  The serene environment is specifically designed to foster concentration, 
                  deep learning, and academic research. Whether you need to prepare for 
                  examinations or conduct research for projects, our library has everything 
                  you need.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  We support modern teaching methodologies with a focus on innovation and 
                  practical learning, ensuring our resources complement the classroom 
                  experience effectively.
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
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Our Philosophy</h3>
                    </div>
                    <blockquote className="text-blue-100/90 text-lg leading-relaxed italic">
                      "A library is not just a collection of books — it's a gateway to 
                      knowledge, a space for discovery, and a foundation for academic 
                      excellence and lifelong learning."
                    </blockquote>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-[#c9a227] font-semibold">Empowering Through Knowledge</p>
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
                Resources
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Library Collection
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Access a diverse range of resources designed to support your academic 
                journey and research needs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={resource.type}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group relative bg-white rounded-3xl p-6
                      shadow-[0_4px_30px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_25px_60px_rgba(30,58,95,0.15)]
                      border border-gray-100/80 hover:border-[#c9a227]/40
                      transition-all duration-300 ease-out overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/0 
                      group-hover:from-[#c9a227]/[0.02] group-hover:to-[#1e3a5f]/[0.02] 
                      transition-all duration-500 rounded-3xl" />

                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br ${resource.color}
                        rounded-2xl flex items-center justify-center mb-4
                        group-hover:scale-110 group-hover:rotate-3
                        shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-[#1e3a5f] mb-2
                        group-hover:text-[#c9a227] transition-colors duration-300"
                      >
                        {resource.type}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {resource.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-medium rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1.5 
                      bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] 
                      opacity-0 group-hover:opacity-100 
                      transform scale-x-0 group-hover:scale-x-100 
                      transition-all duration-500 origin-center rounded-b-3xl" />
                  </motion.div>
                );
              })}
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
                Program Support
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Resources for All Programs
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our library maintains comprehensive collections tailored to each 
                academic program offered at the college.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 md:gap-8"
            >
              {programs.map((program, index) => (
                <motion.div
                  key={program.level}
                  variants={itemVariants}
                  className="group bg-gradient-to-b from-[#f8f9fa] to-white rounded-3xl p-8 
                    border border-gray-100 hover:border-[#c9a227]/30 
                    transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,58,95,0.1)]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] 
                      rounded-2xl flex items-center justify-center
                      group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300"
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f]">{program.level}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.streams.map((stream, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#1e3a5f]/5 text-[#1e3a5f] text-sm font-medium rounded-full"
                      >
                        {stream}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
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
                Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Library Features
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Modern facilities and services designed to enhance your learning 
                and research experience.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="group flex items-start gap-4 p-6 bg-white 
                      rounded-2xl border border-gray-100 hover:border-[#c9a227]/30 
                      transition-all duration-300 hover:shadow-[0_10px_30px_rgba(30,58,95,0.08)]"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] 
                      rounded-xl flex items-center justify-center flex-shrink-0
                      group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e3a5f] mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] relative overflow-hidden">
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

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleVariants}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Explore Our Library Resources
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Visit our campus to experience our library facilities firsthand and 
                discover the resources available to support your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-white 
                    px-8 py-4 rounded-full font-semibold transition-all duration-300
                    shadow-lg hover:shadow-xl hover:shadow-[#c9a227]/25"
                >
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/campus-life"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white 
                    px-8 py-4 rounded-full font-semibold transition-all duration-300
                    border border-white/20 hover:border-white/40"
                >
                  Explore Campus Life
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
