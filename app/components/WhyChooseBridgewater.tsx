"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Building2,
  BookOpen,
  Users,
  Medal,
  Award,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description:
      "Proficient and experienced teachers committed to academic excellence using participatory learning methodologies.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "Well-equipped labs, smart classrooms, library, auditorium, cafeteria, and in-house futsal ground for holistic development.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Programs",
    description:
      "+2 Science, Management, Humanities, Law programs (NEB) and BCA, BBS degrees (TU) plus CA coaching (ICAN).",
  },
  {
    icon: Users,
    title: "Student-Centered Approach",
    description:
      "Personalized support, career counseling, Personality Development Programs (PDP), and continuous mentoring.",
  },
  {
    icon: Medal,
    title: "Scholarships Available",
    description:
      "Merit-based and need-based scholarships to support deserving students in achieving their academic goals.",
  },
  {
    icon: Award,
    title: "Education Network",
    description:
      "Part of Bridgewater Education Foundation with 5 sister institutions offering education from preschool to professional courses.",
  },
];

export default function WhyChooseBridgewater() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            Since 2010
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-3 md:mb-4">
            Why Choose Bridgewater?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A student-centered college in Sinamangal, Kathmandu creating new dimensions 
            in education through quality teaching and holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1e3a5f]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#c9a227]/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#1e3a5f] group-hover:text-[#c9a227] transition-colors duration-300" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1e3a5f] mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg"
          >
            Learn More About Us
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
