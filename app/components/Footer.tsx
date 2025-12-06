"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube,
  Globe,
  ArrowUpRight
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Facilities", href: "/facilities" },
  { name: "Admissions", href: "/admissions" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "Library", href: "/library" },
  { name: "Career Services", href: "/careers" },
  { name: "Student Portal", href: "/portal" },
  { name: "Alumni Network", href: "/alumni" },
  { name: "News & Events", href: "/news" },
  { name: "Gallery", href: "/gallery" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/BridgewaterInternationalCollege" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCJDfxqZ_mbNIbN1dR_iq0jA" },
  { name: "Website", icon: Globe, href: "https://www.bridgewater.com.np" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-[#0f1f2e] to-[#0a1520] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#c9a227" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <img 
                src="/logo.png" 
                alt="Bridgewater International College" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c9a227] transition-colors duration-300">
                  Bridgewater
                </h3>
                <p className="text-xs text-gray-400">International College</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Shaping tomorrow&apos;s leaders through academic excellence, innovative research, and a commitment to global citizenship.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-white/5 hover:bg-[#c9a227] border border-white/10 hover:border-[#c9a227] rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-[#c9a227] to-transparent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-[#c9a227] to-transparent" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-[#c9a227] to-transparent" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+97714481590"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#c9a227] transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 bg-white/5 group-hover:bg-[#c9a227]/10 border border-white/10 group-hover:border-[#c9a227]/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-sm">+977-1-4481590, 4480069, 4581590</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bridgewater.com.np"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#c9a227] transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 bg-white/5 group-hover:bg-[#c9a227]/10 border border-white/10 group-hover:border-[#c9a227]/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm">info@bridgewater.com.np</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Address</p>
                    <p className="text-sm">Baburam Acharya Street<br />Sinamangal, Kathmandu 44600</p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} Bridgewater International College (BWIC). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-[#c9a227] text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#c9a227] text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />
    </footer>
  );
}
