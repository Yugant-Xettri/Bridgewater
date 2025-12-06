"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Star,
  Target,
  Crown,
  LucideIcon,
} from "lucide-react";

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "NEB & TU Affiliation",
    description:
      "Officially affiliated with National Examination Board for +2 programs and Tribhuvan University for Bachelor degrees.",
  },
  {
    icon: Award,
    title: "Quality Education Since 2010",
    description:
      "Over 14 years of commitment to academic excellence and creating new dimensions in education in Nepal.",
  },
  {
    icon: Medal,
    title: "ICAN Accredited CA Coaching",
    description:
      "Academy of Commerce, our sister institution, provides ICAN-accredited Chartered Accountancy coaching.",
  },
  {
    icon: Star,
    title: "Modern Campus Facilities",
    description:
      "State-of-the-art infrastructure including smart classrooms, science labs, computer labs, and in-house futsal ground.",
  },
  {
    icon: Target,
    title: "Education Foundation Network",
    description:
      "Part of Bridgewater Education Foundation with 5 institutions covering preschool to professional education.",
  },
  {
    icon: Crown,
    title: "Holistic Development Focus",
    description:
      "Personality Development Programs, career counseling, sports facilities, and participatory learning approach.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const IconComponent = achievement.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative bg-white rounded-2xl p-6 md:p-8
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_16px_40px_rgba(30,58,95,0.12),0_0_0_1px_rgba(201,162,39,0.15)]
        border border-gray-100/80 hover:border-[#c9a227]/40
        transition-all duration-300 ease-out cursor-pointer
        overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 
        bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 
        rounded-full blur-2xl opacity-0 group-hover:opacity-100 
        transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16
          bg-gradient-to-br from-[#c9a227] to-[#d4af37]
          rounded-xl flex items-center justify-center mb-5
          group-hover:shadow-lg group-hover:shadow-[#c9a227]/30
          transition-all duration-300 ease-out">
          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3
          group-hover:text-[#c9a227] transition-colors duration-300">
          {achievement.title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {achievement.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1
        bg-gradient-to-r from-[#c9a227] via-[#1e3a5f] to-[#c9a227]
        opacity-0 group-hover:opacity-100
        transform scale-x-0 group-hover:scale-x-100
        transition-all duration-500 origin-center rounded-b-2xl" />
    </motion.div>
  );
}

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            Our Pride
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating our commitment to excellence, affiliations, and milestones 
            that reflect our dedication to quality education.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
