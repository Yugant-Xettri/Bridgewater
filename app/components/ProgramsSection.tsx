"use client";

import { useEffect, useRef, useState } from "react";
import {
  Atom,
  TrendingUp,
  BookOpen,
  Scale,
  Monitor,
  Briefcase,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { programLinks } from "../../seo";

const programs = [
  {
    icon: Atom,
    title: "+2 Science",
    seoId: "plus2-science",
    affiliation: "NEB Affiliated",
    duration: "2 Years",
    description:
      "Build a strong foundation in Physics, Chemistry, Biology, and Mathematics. Prepare for medicine, engineering, or research careers with hands-on lab experience.",
  },
  {
    icon: TrendingUp,
    title: "+2 Management",
    seoId: "plus2-management",
    affiliation: "NEB Affiliated",
    duration: "2 Years",
    description:
      "Develop business acumen with Accountancy, Economics, Business Studies, and Hotel Management. Perfect for careers in commerce, banking, and finance.",
  },
  {
    icon: BookOpen,
    title: "+2 Humanities",
    seoId: "plus2-humanities",
    affiliation: "NEB Affiliated",
    duration: "2 Years",
    description:
      "Explore Sociology, Rural Development, Mass Communication, and Major English. Ideal for careers in education, journalism, and public service.",
  },
  {
    icon: Scale,
    title: "+2 Law",
    seoId: "plus2-law",
    affiliation: "NEB Affiliated",
    duration: "2 Years",
    description:
      "Study Jurisprudence, Constitutional Law, and Procedural Law. Build a strong foundation for a distinguished career in the legal profession.",
  },
  {
    icon: Monitor,
    title: "BCA",
    seoId: "bca",
    affiliation: "Tribhuvan University",
    duration: "4 Years | 8 Semesters",
    description:
      "Master programming, database management, networking, and security systems. A 126 credit-hour program preparing you for the IT industry.",
  },
  {
    icon: Briefcase,
    title: "BBS",
    seoId: "bbs",
    affiliation: "Tribhuvan University",
    duration: "4 Years",
    description:
      "Comprehensive knowledge in accounting, finance, marketing, and entrepreneurship. Open doors to banking, insurance, and corporate careers.",
  },
  {
    icon: Calculator,
    title: "CA Coaching",
    seoId: "ca-coaching",
    affiliation: "ICAN Accredited",
    duration: "Professional Course",
    description:
      "Through Academy of Commerce, prepare for Chartered Accountancy certification. Expert coaching by experienced CA professionals.",
  },
];

function useRevealOnScroll(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, hasEntered };
}

interface ProgramCardProps {
  program: typeof programs[0];
  index: number;
}

function ProgramCard({ program, index }: ProgramCardProps) {
  const { ref, hasEntered } = useRevealOnScroll(0.1);
  const IconComponent = program.icon;
  const seoLink = programLinks.find(link => link.id === program.seoId);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 
        transition-all duration-300 ease-out cursor-pointer
        hover:-translate-y-2 hover:border-[#c9a227]/30
        ${hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{
        transitionDelay: hasEntered ? "0ms" : `${index * 80}ms`,
      }}
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-xl flex items-center justify-center mb-5 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-block px-2.5 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-semibold rounded-full">
          {program.affiliation}
        </span>
        <span className="inline-block px-2.5 py-1 bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold rounded-full">
          {program.duration}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c9a227] transition-colors duration-300">
        {program.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
        {program.description}
      </p>

      <a
        href={seoLink?.href || `/programs/${program.title.toLowerCase().replace(/\+|\s/g, "-")}`}
        className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold text-sm md:text-base group-hover:text-[#c9a227] transition-colors duration-300"
        aria-label={seoLink?.ariaLabel || `Learn more about ${program.title} program`}
      >
        {seoLink?.linkText || `Learn more about ${program.title}`}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default function ProgramsSection() {
  const { ref: sectionRef, hasEntered: sectionVisible } = useRevealOnScroll(0.05);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-500 ease-out
            ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            Academic Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Our Academic Programs
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            NEB and Tribhuvan University affiliated programs designed to unlock your potential 
            and prepare you for a successful future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>

        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-500 delay-300
            ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <a
            href="/academics"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#c9a227] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/20"
            aria-label="View all academic programs at Bridgewater International College"
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
