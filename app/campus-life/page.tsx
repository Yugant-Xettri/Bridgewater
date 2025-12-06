"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Home,
  UtensilsCrossed,
  Trophy,
  BookOpen,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  Users,
  Heart
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

const facilities = [
  {
    title: "Hostel & Boarding",
    description: "Safe and comfortable residential facilities with separate hostels for boys and girls, featuring deluxe, standard, and normal room options with 24/7 security.",
    icon: Home,
    href: "/campus-life/hostel",
    color: "from-blue-500 to-blue-600",
    features: ["Separate Boys & Girls Hostels", "24/7 Security", "Study Rooms"],
  },
  {
    title: "Cafeteria",
    description: "Hygienic and spacious dining facility serving nutritious meals including Nepali, Continental, Indian, and Chinese cuisines supervised by a dietician.",
    icon: UtensilsCrossed,
    href: "/campus-life/cafeteria",
    color: "from-emerald-500 to-emerald-600",
    features: ["2000+ Calories Daily", "Multi-Cuisine Menu", "Dietician Supervised"],
  },
  {
    title: "Sports & Futsal",
    description: "In-house futsal ground and comprehensive sports facilities including football, basketball, cricket, and table tennis to nurture athletic talent.",
    icon: Trophy,
    href: "/campus-life/sports",
    color: "from-amber-500 to-amber-600",
    features: ["In-house Futsal Ground", "Multiple Sports", "Annual Tournaments"],
  },
  {
    title: "Library",
    description: "A vast collection of books, journals, and digital resources in a serene environment designed to inspire academic excellence and research.",
    icon: BookOpen,
    href: "/campus-life/library",
    color: "from-purple-500 to-purple-600",
    features: ["Digital Resources", "Research Support", "Quiet Study Areas"],
  },
  {
    title: "Events & Activities",
    description: "Vibrant campus life with annual festivals, cultural programs, career counseling, personality development programs, and student-led initiatives.",
    icon: Calendar,
    href: "/campus-life/events",
    color: "from-rose-500 to-rose-600",
    features: ["Bridgewater Fest", "PDP Programs", "Career Counseling"],
  },
];

const highlights = [
  {
    icon: Users,
    title: "Student Community",
    description: "A diverse and vibrant student body fostering lifelong friendships and professional networks.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Programs designed to nurture not just academic excellence but also personal growth and character.",
  },
  {
    icon: Sparkles,
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure designed to support learning, recreation, and overall well-being.",
  },
];

export default function CampusLifePage() {
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
              Experience BWIC
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Life</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover the vibrant community, modern facilities, and enriching experiences 
              that make Bridgewater International College a home away from home.
            </p>

            <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 text-[#c9a227]" />
              <span>Sinamangal, Kathmandu, Nepal</span>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
        </div>

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
                Why BWIC
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                More Than Just Education
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                At Bridgewater, we believe in nurturing the complete individual. Our campus 
                offers everything you need to thrive academically, socially, and personally.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 md:gap-8"
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    variants={itemVariants}
                    className="group bg-gradient-to-b from-[#f8f9fa] to-white rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,58,95,0.1)]"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
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
                Explore
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Campus Facilities
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                From comfortable accommodations to world-class sports facilities, explore 
                everything our campus has to offer.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <motion.div
                    key={facility.title}
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
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${facility.color}
                        rounded-2xl flex items-center justify-center mb-5
                        group-hover:scale-110 group-hover:rotate-3
                        shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3
                        group-hover:text-[#c9a227] transition-colors duration-300"
                      >
                        {facility.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                        {facility.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {facility.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={facility.href}
                        className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm
                          group-hover:gap-3 transition-all duration-300"
                        aria-label={`Learn more about ${facility.title}`}
                      >
                        Learn more about {facility.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
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
                Ready to Experience Campus Life?
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our vibrant community and discover a learning environment that nurtures 
                your academic journey while helping you grow as a complete individual.
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
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white 
                    px-8 py-4 rounded-full font-semibold transition-all duration-300
                    border border-white/20 hover:border-white/40"
                >
                  Schedule a Visit
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
