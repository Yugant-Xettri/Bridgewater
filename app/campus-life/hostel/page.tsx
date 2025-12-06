"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Home,
  Bed,
  Shield,
  Wifi,
  Droplets,
  BookOpen,
  Users,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Ban,
  Heart,
  GraduationCap
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

const roomTypes = [
  {
    type: "Deluxe Room",
    beds: "1 Bed",
    description: "Private accommodation for students who prefer individual space with premium amenities and maximum comfort.",
    icon: Bed,
    color: "from-amber-500 to-amber-600",
    features: ["Single Occupancy", "Premium Furnishing", "Extra Space", "Private Study Area"],
  },
  {
    type: "Standard Room",
    beds: "2 Beds",
    description: "Shared accommodation ideal for students who enjoy company while maintaining personal space and comfort.",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    features: ["Double Occupancy", "Shared Space", "Study Desks", "Personal Storage"],
  },
  {
    type: "Normal Room",
    beds: "4 Beds",
    description: "Budget-friendly option with all essential amenities, perfect for students who thrive in a social environment.",
    icon: Home,
    color: "from-emerald-500 to-emerald-600",
    features: ["Quad Occupancy", "Essential Amenities", "Community Living", "Cost Effective"],
  },
];

const amenities = [
  { icon: Droplets, title: "Hot Water", description: "24/7 hot water supply for comfortable living" },
  { icon: Bed, title: "Bed Boxes", description: "Spacious storage under each bed for belongings" },
  { icon: BookOpen, title: "Writing Table & Chair", description: "Dedicated study space in every room" },
  { icon: Wifi, title: "Internet Access", description: "High-speed WiFi throughout the hostel" },
  { icon: Sparkles, title: "Laundry Facilities", description: "On-site laundry services available" },
  { icon: BookOpen, title: "Self-Reading Room", description: "Quiet spaces for individual study sessions" },
];

const safetyFeatures = [
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock security personnel and surveillance" },
  { icon: ShieldCheck, title: "Dedicated Teacher Team", description: "Teachers assigned for discipline and guidance" },
  { icon: Heart, title: "Student Counseling", description: "Professional counseling services available" },
  { icon: Ban, title: "No Smoking Policy", description: "Strictly enforced smoke-free environment" },
];

export default function HostelPage() {
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
              <Home className="w-4 h-4" />
              Campus Life
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hostel & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Boarding</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-8">
              A clean, homely environment with spacious, well-furnished rooms 
              designed to make students feel at home while pursuing their academic goals.
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
                Accommodation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Separate Hostels for Boys & Girls
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We provide separate, secure hostel facilities for male and female students, 
                ensuring a safe and comfortable living environment for all.
              </p>
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
                    Our hostel provides a clean, homely environment that makes students feel 
                    comfortable and focused on their studies. Every room is spacious and 
                    well-furnished with all essential amenities.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  We understand that for many students, this may be their first time living 
                  away from home. Our dedicated staff ensures that every student receives 
                  the care and support they need to thrive.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  With 24/7 security, dedicated teacher teams for discipline and guidance, 
                  and professional counseling services, parents can rest assured that their 
                  children are in safe hands.
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
                      <h3 className="text-xl font-bold">Home Away From Home</h3>
                    </div>
                    <blockquote className="text-blue-100/90 text-lg leading-relaxed italic">
                      "Our hostel is designed to provide a nurturing environment where students 
                      can focus on their academic goals while enjoying the comfort and security 
                      of a well-managed residential facility."
                    </blockquote>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-[#c9a227] font-semibold">Safe, Secure & Supportive</p>
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
                Room Options
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Choose Your Room Type
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We offer three types of rooms to suit different preferences and budgets, 
                all equipped with essential amenities for comfortable living.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 md:gap-8"
            >
              {roomTypes.map((room, index) => {
                const IconComponent = room.icon;
                return (
                  <motion.div
                    key={room.type}
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
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${room.color}
                        rounded-2xl flex items-center justify-center mb-5
                        group-hover:scale-110 group-hover:rotate-3
                        shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>

                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f]
                        text-white text-sm font-bold rounded-full mb-3 shadow-sm"
                      >
                        {room.beds}
                      </span>

                      <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3
                        group-hover:text-[#c9a227] transition-colors duration-300"
                      >
                        {room.type}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                        {room.description}
                      </p>

                      <ul className="space-y-2">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-[#c9a227]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
                Amenities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Room Amenities & Facilities
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Every room comes equipped with essential amenities to ensure a comfortable 
                stay and productive study environment.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <motion.div
                    key={amenity.title}
                    variants={itemVariants}
                    className="group flex items-start gap-4 p-6 bg-gradient-to-b from-[#f8f9fa] to-white 
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
                      <h3 className="font-bold text-[#1e3a5f] mb-1">{amenity.title}</h3>
                      <p className="text-gray-600 text-sm">{amenity.description}</p>
                    </div>
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
                Safety & Security
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Your Safety is Our Priority
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We maintain strict safety protocols and provide comprehensive support 
                systems to ensure the well-being of every student.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="group bg-white rounded-2xl p-6 text-center
                      shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100
                      hover:border-[#c9a227]/30 transition-all duration-300
                      hover:shadow-[0_15px_40px_rgba(30,58,95,0.1)]"
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] 
                      rounded-2xl flex items-center justify-center mb-4
                      group-hover:from-[#c9a227] group-hover:to-[#d4af37] 
                      group-hover:scale-110 transition-all duration-300"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-[#1e3a5f] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
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
                Interested in Our Hostel Facilities?
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us to learn more about room availability, pricing, and the 
                admission process for our hostel accommodations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-white 
                    px-8 py-4 rounded-full font-semibold transition-all duration-300
                    shadow-lg hover:shadow-xl hover:shadow-[#c9a227]/25"
                >
                  Contact Us
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
