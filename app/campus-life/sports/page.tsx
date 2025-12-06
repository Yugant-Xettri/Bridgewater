"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Trophy,
  Target,
  Users,
  Heart,
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Medal,
  Flame,
  Zap,
  Award,
  Star
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

const sports = [
  {
    name: "Futsal",
    description: "In-house futsal ground with professional-grade turf for competitive matches and practice sessions.",
    icon: Target,
    color: "from-emerald-500 to-emerald-600",
    highlight: "In-House Ground",
  },
  {
    name: "Football",
    description: "Full-sized football training with opportunities to participate in inter-school competitions.",
    icon: Trophy,
    color: "from-blue-500 to-blue-600",
    highlight: "Team Sport",
  },
  {
    name: "Basketball",
    description: "Basketball court facilities for both practice sessions and competitive games.",
    icon: Zap,
    color: "from-amber-500 to-amber-600",
    highlight: "Court Sports",
  },
  {
    name: "Cricket",
    description: "Cricket facilities including nets for practice and opportunities to play in tournaments.",
    icon: Medal,
    color: "from-red-500 to-red-600",
    highlight: "National Sport",
  },
  {
    name: "Table Tennis",
    description: "Indoor table tennis facilities for recreational play and competitive practice.",
    icon: Flame,
    color: "from-purple-500 to-purple-600",
    highlight: "Indoor Sport",
  },
];

const tournaments = [
  {
    name: "Bridgewater Cup",
    description: "Annual inter-school futsal tournament bringing together teams from schools across Kathmandu for competitive matches.",
    icon: Trophy,
    color: "from-amber-500 to-amber-600",
    type: "Inter-School",
  },
  {
    name: "SEE Futsal Tournament",
    description: "Special tournament organized for SEE-level students to showcase their athletic talent and sportsmanship.",
    icon: Medal,
    color: "from-blue-500 to-blue-600",
    type: "SEE Level",
  },
  {
    name: "Bridgewater Sports Meet",
    description: "Annual comprehensive sports event featuring multiple disciplines, track and field events, and team competitions.",
    icon: Award,
    color: "from-emerald-500 to-emerald-600",
    type: "Annual Event",
  },
];

const benefits = [
  { icon: Heart, title: "Physical Well-being", description: "Regular physical activity promotes better health and fitness" },
  { icon: Users, title: "Teamwork", description: "Learn collaboration and coordination through team sports" },
  { icon: Target, title: "Focus & Discipline", description: "Sports teach concentration, dedication, and self-discipline" },
  { icon: Star, title: "Athletic Talent", description: "Discover and nurture your sporting potential" },
  { icon: Zap, title: "Stress Relief", description: "Physical activity helps manage academic stress effectively" },
  { icon: Medal, title: "Leadership", description: "Develop leadership skills through team captaincy and coordination" },
];

export default function SportsPage() {
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
              <Trophy className="w-4 h-4" />
              Campus Life
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sports & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Futsal</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Nurturing physical well-being, teamwork, and athletic talent through 
              comprehensive sports facilities and competitive tournaments.
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
                Our Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                In-House Futsal Ground
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
                    Bridgewater International College is proud to offer an in-house futsal 
                    ground right on our campus. This modern facility allows students to 
                    practice and play competitive matches without leaving the premises.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  We believe that physical fitness is integral to academic success. Our 
                  sports program is designed to help students develop not just athletic 
                  skills, but also important life skills like teamwork, discipline, and 
                  perseverance.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Students have access to multiple sports including football, basketball, 
                  cricket, and table tennis, with regular practice sessions and 
                  opportunities to participate in inter-school tournaments.
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
                        <Flame className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Sports Excellence</h3>
                    </div>
                    <blockquote className="text-blue-100/90 text-lg leading-relaxed italic">
                      "Sports at Bridgewater is about more than just competition — it's about 
                      building character, fostering teamwork, and developing the physical 
                      and mental strength to excel in all areas of life."
                    </blockquote>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-[#c9a227] font-semibold">Building Champions On & Off the Field</p>
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
                Sports Offered
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Available Sports Activities
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Choose from a variety of sports activities designed to promote physical 
                fitness, teamwork, and competitive spirit.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {sports.map((sport, index) => {
                const IconComponent = sport.icon;
                return (
                  <motion.div
                    key={sport.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group relative bg-white rounded-3xl p-6
                      shadow-[0_4px_30px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_25px_60px_rgba(30,58,95,0.15)]
                      border border-gray-100/80 hover:border-[#c9a227]/40
                      transition-all duration-300 ease-out overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/0 
                      group-hover:from-[#c9a227]/[0.02] group-hover:to-[#1e3a5f]/[0.02] 
                      transition-all duration-500 rounded-3xl" />

                    <div className="relative z-10">
                      <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${sport.color}
                        rounded-2xl flex items-center justify-center mb-4
                        group-hover:scale-110 group-hover:rotate-3
                        shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-[#1e3a5f] mb-2
                        group-hover:text-[#c9a227] transition-colors duration-300"
                      >
                        {sport.name}
                      </h3>

                      <span className="inline-block px-3 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] 
                        text-xs font-medium rounded-full mb-3"
                      >
                        {sport.highlight}
                      </span>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {sport.description}
                      </p>
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
                Competitions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Annual Tournaments
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Participate in exciting annual tournaments that bring together students 
                from across the region for competitive sports action.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 md:gap-8"
            >
              {tournaments.map((tournament, index) => {
                const IconComponent = tournament.icon;
                return (
                  <motion.div
                    key={tournament.name}
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
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${tournament.color}
                          rounded-2xl flex items-center justify-center
                          group-hover:scale-110 group-hover:rotate-3
                          shadow-lg transition-all duration-300`}
                        >
                          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] 
                            text-xs font-bold rounded-full mb-1"
                          >
                            {tournament.type}
                          </span>
                          <h3 className="text-xl font-bold text-[#1e3a5f]
                            group-hover:text-[#c9a227] transition-colors duration-300"
                          >
                            {tournament.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {tournament.description}
                      </p>
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
                Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Why Sports Matter
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Participation in sports offers benefits that extend far beyond physical 
                fitness and athletic performance.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
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
                      <h3 className="font-bold text-[#1e3a5f] mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                Ready to Join Our Sports Program?
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover your athletic potential and be part of our vibrant sports 
                community. Contact us to learn more about our facilities and programs.
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
