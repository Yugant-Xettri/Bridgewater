"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, RefreshCw, AlertTriangle, Mail } from "lucide-react";
import Footer from "./components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-red-50/20">
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
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-full flex items-center justify-center mx-auto shadow-xl">
                <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 -right-2 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-xl sm:text-2xl">!</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Something Went Wrong
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              We apologize for the inconvenience. An unexpected error has occurred. 
              Please try again or contact us if the problem persists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#b8921f] hover:to-[#c9a227] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] hover:from-[#2a4a6f] hover:to-[#1e3a5f] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 text-sm mb-4">Need assistance?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#1e3a5f] hover:text-[#c9a227] font-medium transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact our support team
            </Link>
          </motion.div>

          {error.digest && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 text-gray-400 text-xs"
            >
              Error ID: {error.digest}
            </motion.p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
