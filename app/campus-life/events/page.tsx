"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Calendar,
  PartyPopper,
  Mic2,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight,
  Target,
  Star,
  Lightbulb,
  Trophy,
  BookOpen,
  Megaphone
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

const majorEvents = [
  {
    name: "Bridgewater Fest",
    description: "Annual college festival featuring cultural performances, competitions, exhibitions, and entertainment bringing together the entire college community.",
    icon: PartyPopper,
    color: "from-purple-500 to-purple-600",
    type: "Annual Festival",
    highlights: ["Cultural Shows", "Competitions", "Exhibitions", "Live Performances"],
  },
  {
    name: "Results Distribution",
    description: "Formal ceremonies celebrating student achievements, academic excellence, and recognizing outstanding performers across all programs.",
    icon: Award,
    color: "from-amber-500 to-amber-600",
    type: "Academic Event",
    highlights: ["Award Ceremony", "Academic Recognition", "Parent Participation", "Celebrations"],
  },
  {
    name: "Sports Meet",
    description: "Annual sports event featuring track and field, team sports, and individual competitions fostering athletic spirit and healthy competition.",
    icon: Trophy,
    color: "from-emerald-500 to-emerald-600",
    type: "Sports Event",
    highlights: ["Track & Field", "Team Sports", "Individual Events", "Awards"],
  },
];

const programs = [
  {
    name: "Personality Development Program (PDP)",
    description: "Comprehensive program designed to enhance students' communication skills, confidence, leadership abilities, and overall personality.",
    icon: Star,
    color: "from-blue-500 to-blue-600",
    benefits: ["Communication Skills", "Confidence Building", "Leadership Training", "Soft Skills"],
  },
  {
    name: "Career Counselling",
    description: "Professional guidance sessions helping students explore career paths, make informed decisions about higher education and professional goals.",
    icon: Briefcase,
    color: "from-rose-500 to-rose-600",
    benefits: ["Career Guidance", "Higher Education Options", "Industry Insights", "Goal Setting"],
  },
  {
    name: "Pre-Medical Preparation",
    description: "Specialized preparation classes for students aspiring to pursue medical education, covering entrance exam preparation and guidance.",
    icon: Heart,
    color: "from-red-500 to-red-600",
    benefits: ["Entrance Prep", "Medical Orientation", "Expert Faculty", "Mock Tests"],
  },
  {
    name: "Pre-Engineering Preparation",
    description: "Focused preparation program for engineering aspirants, covering technical subjects and entrance examination training.",
    icon: Target,
    color: "from-cyan-500 to-cyan-600",
    benefits: ["Technical Training", "Entrance Prep", "Problem Solving", "Practical Sessions"],
  },
  {
    name: "Pre-CMAT Preparation",
    description: "Dedicated preparation classes for Common Management Admission Test, helping students secure admissions in top management colleges.",
    icon: GraduationCap,
    color: "from-indigo-500 to-indigo-600",
    benefits: ["CMAT Training", "Aptitude Building", "Time Management", "Practice Tests"],
  },
];

const activities = [
  { icon: Mic2, title: "Cultural Programs", description: "Regular cultural events showcasing music, dance, and artistic talents" },
  { icon: Users, title: "Student-Led Initiatives", description: "Clubs and organizations run by students for various interests" },
  { icon: Lightbulb, title: "Leadership Development", description: "Programs to build leadership skills and civic responsibility" },
  { icon: BookOpen, title: "Academic Workshops", description: "Subject-specific workshops and seminars by experts" },
  { icon: Megaphone, title: "Debate & Public Speaking", description: "Platforms to develop oratory and argumentation skills" },
  { icon: Trophy, title: "Sports Club", description: "Organized sports activities and inter-college competitions" },
];

export default function EventsPage() {
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
              Campus Life
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Activities</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-8">
              A vibrant campus life filled with festivals, cultural programs, career 
              guidance, and student-led initiatives for holistic development.
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
                Beyond Academics
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Holistic Student Development
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
                    At Bridgewater, we believe that education extends far beyond the 
                    classroom. Our diverse range of events and activities is designed 
                    to nurture well-rounded individuals ready to face the challenges 
                    of the modern world.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  From annual festivals that celebrate our vibrant culture to career 
                  counseling workshops that guide students toward their professional 
                  goals, every activity is thoughtfully planned to contribute to 
                  student growth.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Our Personality Development Programs, leadership initiatives, and 
                  student-led clubs provide platforms for students to discover their 
                  potential, develop new skills, and build lasting relationships.
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
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Our Commitment</h3>
                    </div>
                    <blockquote className="text-blue-100/90 text-lg leading-relaxed italic">
                      "We are committed to providing opportunities that help students 
                      grow not just academically, but as confident, capable individuals 
                      ready to make a positive impact in society."
                    </blockquote>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-[#c9a227] font-semibold">Creating Future Leaders</p>
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
                Signature Events
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Major Annual Events
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our calendar is filled with exciting events that bring together 
                students, faculty, and the community.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 md:gap-8"
            >
              {majorEvents.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <motion.div
                    key={event.name}
                    variants={itemVariants}
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

                    <div className="relative z-10">
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${event.color}
                        rounded-2xl flex items-center justify-center mb-5
                        group-hover:scale-110 group-hover:rotate-3
                        shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>

                      <span className="inline-block px-3 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] 
                        text-xs font-bold rounded-full mb-3"
                      >
                        {event.type}
                      </span>

                      <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3
                        group-hover:text-[#c9a227] transition-colors duration-300"
                      >
                        {event.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-medium rounded-full"
                          >
                            {highlight}
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
                Development Programs
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Career & Personal Growth
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Specialized programs designed to prepare students for their future 
                careers and personal development.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.div
                    key={program.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group relative bg-gradient-to-b from-[#f8f9fa] to-white rounded-3xl p-6
                      shadow-[0_4px_30px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_25px_60px_rgba(30,58,95,0.12)]
                      border border-gray-100/80 hover:border-[#c9a227]/40
                      transition-all duration-300 ease-out overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/0 
                      group-hover:from-[#c9a227]/[0.02] group-hover:to-[#1e3a5f]/[0.02] 
                      transition-all duration-500 rounded-3xl" />

                    <div className="relative z-10">
                      <div className={`w-12 h-12 bg-gradient-to-br ${program.color}
                        rounded-xl flex items-center justify-center mb-4
                        group-hover:scale-110 group-hover:rotate-3
                        shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-[#1e3a5f] mb-2
                        group-hover:text-[#c9a227] transition-colors duration-300"
                      >
                        {program.name}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {program.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-medium rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 
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
                Activities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Student Activities & Clubs
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Regular activities and student organizations that foster creativity, 
                leadership, and community engagement.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <motion.div
                    key={activity.title}
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
                      <h3 className="font-bold text-[#1e3a5f] mb-1">{activity.title}</h3>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
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
                Be Part of Our Vibrant Community
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join Bridgewater International College and experience a campus life 
                filled with opportunities for growth, learning, and memorable experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-white 
                    px-8 py-4 rounded-full font-semibold transition-all duration-300
                    shadow-lg hover:shadow-xl hover:shadow-[#c9a227]/25"
                >
                  Apply Now
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
