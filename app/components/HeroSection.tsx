import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-screen flex flex-col pt-[88px] sm:pt-[96px]">
      <div className="absolute inset-0">
        <Image
          src="/herosection1.webp"
          alt="BWIC Campus"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/95 via-[#0a1628]/85 to-[#0a1628]/98 lg:from-[#0a1628]/80 lg:via-[#0a1628]/60 lg:to-[#0a1628]/90"></div>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-8 pt-4 pb-2 lg:pt-8 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-[6px] lg:rounded-full px-2.5 py-1 lg:px-4 lg:py-2 mb-3 lg:mb-8">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-white/80 text-[0.65rem] lg:text-sm font-medium tracking-wide uppercase">Admissions Open 2026</span>
          </div>

          <h1 className="text-[1.85rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white lg:leading-[1.1] tracking-tight mb-2.5 lg:mb-6">
            Build Your Future
            <span className="block text-[#d4af37] lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-[#c9a227] lg:to-[#e8c547]">
              Start Here
            </span>
          </h1>

          <p className="text-[0.9rem] leading-[1.55] sm:text-lg lg:text-xl text-white/75 lg:text-white/70 max-w-2xl mx-auto mb-5 lg:mb-10 font-light">
            Quality education meets real-world opportunity. NEB & TU affiliated college in Sinamangal, Kathmandu shaping tomorrow's leaders since 2010.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 lg:gap-4 mb-0 lg:mb-8">
            <Link
              href="/admissions/apply"
              className="w-[85%] sm:w-auto bg-[#c9a227] hover:bg-[#d4af37] text-[#0a1628] px-7 py-3 lg:py-4 rounded-[18px] lg:rounded-full font-semibold text-[0.9rem] lg:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/25 inline-flex items-center justify-center gap-2"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/academics"
              className="w-[85%] sm:w-auto bg-white/8 hover:bg-white/15 text-white border border-white/25 px-7 py-3 lg:py-4 rounded-[18px] lg:rounded-full font-semibold text-[0.9rem] lg:text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-auto">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pb-5 lg:pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8">
            <div className="bg-white/6 backdrop-blur-sm border border-white/8 rounded-[14px] lg:rounded-2xl py-3 px-2 lg:p-5 text-center">
              <div className="text-lg lg:text-4xl font-bold text-white mb-0 lg:mb-1">14+</div>
              <div className="text-white/50 text-[0.65rem] lg:text-sm font-medium">Years Excellence</div>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/8 rounded-[14px] lg:rounded-2xl py-3 px-2 lg:p-5 text-center">
              <div className="text-lg lg:text-4xl font-bold text-white mb-0 lg:mb-1">5+</div>
              <div className="text-white/50 text-[0.65rem] lg:text-sm font-medium">Programs Offered</div>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/8 rounded-[14px] lg:rounded-2xl py-3 px-2 lg:p-5 text-center">
              <div className="text-lg lg:text-4xl font-bold text-white mb-0 lg:mb-1">NEB</div>
              <div className="text-white/50 text-[0.65rem] lg:text-sm font-medium">+2 Affiliated</div>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/8 rounded-[14px] lg:rounded-2xl py-3 px-2 lg:p-5 text-center">
              <div className="text-lg lg:text-4xl font-bold text-white mb-0 lg:mb-1">TU</div>
              <div className="text-white/50 text-[0.65rem] lg:text-sm font-medium">Bachelor Affiliated</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
    </section>
  );
}
