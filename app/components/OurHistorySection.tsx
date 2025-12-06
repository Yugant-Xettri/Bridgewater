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
  Sparkles,
  ArrowRight,
  Calendar
} from "lucide-react";

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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Established in Sinamangal, Kathmandu by visionary academicians with a mission to bring world-class education to Nepal.",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
  },
  {
    year: "2012",
    title: "NEB Affiliation",
    description: "Received affiliation from National Examination Board for +2 Science, Management, Humanities & Law programs.",
    icon: Landmark,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    year: "2015",
    title: "Bachelor Programs",
    description: "Launched BBS and BCA programs under Tribhuvan University affiliation.",
    icon: GraduationCap,
    color: "from-purple-500 to-purple-600",
  },
  {
    year: "2018",
    title: "Infrastructure Growth",
    description: "Expanded with modern labs, library, auditorium, and in-house futsal ground.",
    icon: Award,
    color: "from-amber-500 to-amber-600",
  },
  {
    year: "2020",
    title: "Education Network",
    description: "Joined Bridgewater Education Foundation with 5 sister institutions.",
    icon: Globe,
    color: "from-rose-500 to-rose-600",
  },
  {
    year: "2024",
    title: "Continued Excellence",
    description: "Advancing with scholarships, career counseling, and holistic student development.",
    icon: Sparkles,
    color: "from-cyan-500 to-cyan-600",
  },
];

export default function OurHistorySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#f8f9fa] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4" />
            Our Journey Since 2010
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Our History
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From a vision to reality — discover the milestones that have shaped Bridgewater 
            International College into a leading educational institution in Nepal.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a227]/0 via-[#c9a227]/40 to-[#c9a227]/0 transform -translate-x-1/2" />

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
                  className={`relative flex flex-col lg:flex-row items-center mb-8 lg:mb-14 last:mb-0
                    ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                    <motion.div
                      whileHover={{ 
                        y: -6,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      className="group relative bg-white rounded-2xl p-6 md:p-8
                        shadow-[0_4px_24px_rgba(0,0,0,0.05)]
                        hover:shadow-[0_20px_50px_rgba(30,58,95,0.12)]
                        border border-gray-100/80 hover:border-[#c9a227]/30
                        transition-all duration-300 ease-out overflow-hidden"
                    >
                      <div className={`flex items-center gap-4 mb-4
                        ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                      >
                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${milestone.color}
                          rounded-xl flex items-center justify-center flex-shrink-0
                          group-hover:scale-110 group-hover:rotate-2
                          shadow-lg transition-all duration-300`}
                        >
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div className={`${isEven ? "lg:text-right" : "lg:text-left"}`}>
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] 
                            text-white text-xs font-bold rounded-full mb-1 shadow-sm"
                          >
                            {milestone.year}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-[#1e3a5f] 
                            group-hover:text-[#c9a227] transition-colors duration-300"
                          >
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className={`text-gray-600 leading-relaxed text-sm md:text-base
                        ${isEven ? "lg:text-right" : "lg:text-left"}`}
                      >
                        {milestone.description}
                      </p>

                      <div className="absolute bottom-0 left-0 right-0 h-1 
                        bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] 
                        opacity-0 group-hover:opacity-100 
                        transform scale-x-0 group-hover:scale-x-100 
                        transition-all duration-500 origin-center rounded-b-2xl" />
                    </motion.div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`w-5 h-5 bg-gradient-to-br ${milestone.color} rounded-full 
                        border-4 border-white shadow-lg
                        transition-all duration-300`}
                    />
                  </div>

                  <div className="lg:hidden w-full flex justify-center my-3">
                    <div className={`w-3 h-3 bg-gradient-to-br ${milestone.color} rounded-full shadow-sm`} />
                  </div>

                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/about/history"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] 
              hover:from-[#c9a227] hover:to-[#d4af37]
              text-white px-8 py-4 rounded-xl font-semibold text-base 
              transition-all duration-300 shadow-lg hover:shadow-xl 
              hover:shadow-[#c9a227]/20 group"
          >
            Explore Our Full Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
