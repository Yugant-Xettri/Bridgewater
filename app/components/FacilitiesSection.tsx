"use client";

import { motion } from "framer-motion";
import {
  MonitorPlay,
  FlaskConical,
  Library,
  Home,
  UtensilsCrossed,
  Volleyball,
  LucideIcon,
} from "lucide-react";

interface Facility {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FacilityCardProps {
  facility: Facility;
  index: number;
}

const facilities: Facility[] = [
  {
    icon: MonitorPlay,
    title: "Smart Classrooms",
    description:
      "State-of-the-art digital learning spaces equipped with interactive boards, projectors, and high-speed connectivity for immersive education.",
  },
  {
    icon: FlaskConical,
    title: "Science & Computer Labs",
    description:
      "Fully equipped science laboratories and modern computer labs with the latest technology for hands-on practical learning experiences.",
  },
  {
    icon: Library,
    title: "Library & Resources",
    description:
      "A vast collection of books, journals, and digital resources in a serene environment designed to inspire academic excellence and research.",
  },
  {
    icon: Volleyball,
    title: "In-house Futsal Ground",
    description:
      "Modern indoor futsal facility and sports amenities to nurture physical well-being, teamwork, and athletic talent among students.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cafeteria",
    description:
      "Dietician-supervised cafeteria serving 2000+ calorie meals daily with vegetarian and non-vegetarian options including Continental, Indian, and Chinese cuisines.",
  },
  {
    icon: Home,
    title: "Hostel & Boarding",
    description:
      "Safe residential facilities with Deluxe, Standard, and Normal room options. Includes hot water, study desks, cupboards, and 24/7 security.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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

function FacilityCard({ facility, index }: FacilityCardProps) {
  const IconComponent = facility.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 
        shadow-[0_4px_20px_rgba(0,0,0,0.06)] 
        hover:shadow-[0_20px_50px_rgba(30,58,95,0.15),0_0_0_1px_rgba(201,162,39,0.1)]
        border border-gray-100/80 hover:border-[#c9a227]/40
        transition-all duration-300 ease-out cursor-pointer
        overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/0 
        group-hover:from-[#c9a227]/[0.02] group-hover:to-[#1e3a5f]/[0.02] 
        transition-all duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 
          bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] 
          rounded-xl flex items-center justify-center mb-5 
          group-hover:from-[#c9a227] group-hover:to-[#d4af37] 
          group-hover:shadow-lg group-hover:shadow-[#c9a227]/25
          transition-all duration-300 ease-out">
          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3 
          group-hover:text-[#c9a227] transition-colors duration-300">
          {facility.title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {facility.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 
        bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] 
        opacity-0 group-hover:opacity-100 
        transform scale-x-0 group-hover:scale-x-100 
        transition-all duration-500 origin-center rounded-b-2xl" />
    </motion.div>
  );
}

export default function FacilitiesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            Campus Life
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Modern Campus Facilities
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience a supportive learning environment at our Sinamangal campus with 
            modern infrastructure designed to inspire excellence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
        >
          {facilities.map((facility, index) => (
            <FacilityCard key={facility.title} facility={facility} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
