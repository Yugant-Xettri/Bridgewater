"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search, BookOpen } from "lucide-react";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="error-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#1e3a5f" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#error-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <span className="text-[150px] sm:text-[200px] font-bold bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] bg-clip-text text-transparent leading-none">
                404
              </span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-full flex items-center justify-center shadow-lg"
              >
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Oops! The page you&apos;re looking for seems to have wandered off campus. 
              Let&apos;s help you find your way back.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] hover:from-[#2a4a6f] hover:to-[#1e3a5f] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1e3a5f] border-2 border-[#1e3a5f] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              Explore Programs
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 text-sm mb-4">Popular destinations:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { name: "Admissions", href: "/admissions" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Scholarships", href: "/admissions/scholarships" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#c9a227] text-gray-700 hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
