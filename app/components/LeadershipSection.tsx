"use client";

import { motion, Variants } from "framer-motion";
import { Quote, Award, GraduationCap, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import leadershipData from "../../json/leadership.json";

interface Leader {
  name: string;
  role: string;
  credentials: string;
  initials: string;
  image: string;
  message: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const leaders: Leader[] = leadershipData.leaders;

export default function LeadershipSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c9a227]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider">
              Leadership
            </span>
            <Award className="w-5 h-5 text-[#c9a227]" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4"
          >
            Message from Our Leaders
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Meet the visionaries guiding Bridgewater International College towards 
            excellence in education and holistic development.
          </motion.p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={containerVariants}
            >
              <Card className="group relative bg-white rounded-2xl border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-500 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(30,58,95,0.12)]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-0">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <motion.div
                      variants={imageVariants}
                      className="w-full md:w-2/5 lg:w-1/3 bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] p-8 md:p-10 flex flex-col items-center justify-center relative"
                    >
                      <div className="absolute inset-0 opacity-[0.04]">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`leader-pattern-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                              <circle cx="15" cy="15" r="1" fill="#c9a227" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#leader-pattern-${index})`} />
                        </svg>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-full opacity-20 blur-lg" />
                        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-[#c9a227]/30 shadow-2xl relative">
                          <AvatarImage src={leader.image} alt={leader.name} />
                          <AvatarFallback className="bg-gradient-to-br from-[#c9a227] to-[#d4af37] text-white text-3xl md:text-4xl font-bold">
                            {leader.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="mt-6 text-center relative">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-[#c9a227] font-semibold text-base md:text-lg">
                          {leader.role}
                        </p>
                        <p className="text-blue-200/70 text-sm mt-1">
                          {leader.credentials}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#c9a227]/20 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-[#c9a227]" />
                        </div>
                        <div className="w-10 h-10 bg-[#c9a227]/20 rounded-xl flex items-center justify-center">
                          <Award className="w-5 h-5 text-[#c9a227]" />
                        </div>
                        <div className="w-10 h-10 bg-[#c9a227]/20 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-[#c9a227]" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="w-full md:w-3/5 lg:w-2/3 p-8 md:p-10 lg:p-12 flex flex-col justify-center"
                    >
                      <div className="mb-6">
                        <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#c9a227]/30" />
                      </div>

                      <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                        {leader.message.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>

                      <Separator className="my-6 bg-gradient-to-r from-[#c9a227]/30 via-[#c9a227]/50 to-[#c9a227]/30" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                          <span className="text-[#1e3a5f] font-semibold text-sm">
                            Bridgewater International College
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm italic">
                          Since 2010
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#1e3a5f]/5 via-[#c9a227]/10 to-[#1e3a5f]/5 rounded-2xl px-6 py-4 md:px-8 md:py-5 border border-[#c9a227]/20">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-xl flex items-center justify-center shadow-lg shadow-[#c9a227]/20">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <p className="text-[#1e3a5f] font-medium text-sm md:text-base">
              Led by experienced professionals committed to excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
