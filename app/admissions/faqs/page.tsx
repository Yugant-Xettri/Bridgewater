"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Search,
  GraduationCap,
  FileText,
  Calendar,
  DollarSign,
  Home,
  Users
} from "lucide-react";
import Footer from "@/app/components/Footer";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const faqCategories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "admission", name: "Admission Process", icon: FileText },
  { id: "programs", name: "Programs", icon: GraduationCap },
  { id: "fees", name: "Fees & Payment", icon: DollarSign },
  { id: "facilities", name: "Facilities", icon: Home },
  { id: "academic", name: "Academic", icon: Calendar },
];

const faqs = [
  {
    category: "admission",
    question: "What are the admission requirements for +2 programs?",
    answer: "Requirements vary by program. +2 Science requires strong performance in SEE Science and Mathematics with Optional Math. +2 Management, Humanities, and Law require SEE completion with passing grades in core subjects. Contact our admissions office at +977-1-4481590 for specific eligibility criteria.",
  },
  {
    category: "admission",
    question: "How do I apply for admission to Bridgewater?",
    answer: "You can submit an inquiry online through our website or visit our campus in Sinamangal, Kathmandu. Complete the application form, submit required documents (SEE certificate, character certificate, photographs), appear for the entrance test, and attend an interview with your parent/guardian.",
  },
  {
    category: "admission",
    question: "When does the admission process start?",
    answer: "Admissions typically open in the summer months each year. Contact our admissions office at +977-1-4481590 for the current academic year schedule, entrance exam dates, and class start dates. We recommend applying early as seats are limited.",
  },
  {
    category: "admission",
    question: "Is there an entrance examination?",
    answer: "Yes, all applicants must appear for an entrance examination. The test evaluates your aptitude in English, Mathematics, and subject-specific knowledge based on your chosen program. Contact admissions for current exam schedules and result publication timelines.",
  },
  {
    category: "admission",
    question: "What documents are required for admission?",
    answer: "Required documents include: SEE/+2 mark sheet and certificate (original + copy), character certificate from previous institution, transfer/migration certificate (if applicable), 2 passport-size photographs, and copy of citizenship/birth certificate.",
  },
  {
    category: "programs",
    question: "What programs does Bridgewater offer?",
    answer: "We offer +2 programs (Science, Management, Humanities, Law) under NEB affiliation, and bachelor programs (BCA - Bachelor of Computer Application, BBS - Bachelor of Business Studies) under Tribhuvan University. We also offer CA coaching through Academy of Commerce.",
  },
  {
    category: "programs",
    question: "What is the duration of the BCA program?",
    answer: "The BCA program is a 4-year, 8-semester degree program with 126 credit hours, affiliated with Tribhuvan University's Faculty of Humanities and Social Sciences. It covers programming, database management, web development, networking, and more.",
  },
  {
    category: "programs",
    question: "Can I switch programs after admission?",
    answer: "Program switching is possible within the first month of admission, subject to meeting the eligibility criteria for the new program and seat availability. A nominal fee may apply. Contact the academic department for guidance.",
  },
  {
    category: "fees",
    question: "What is the fee structure for programs?",
    answer: "Fee structures vary by program and are updated annually. Please contact our admissions office at +977-1-4481590 or visit our campus in Sinamangal for the current fee details. Fees typically include tuition, lab facilities, library access, and ID card.",
  },
  {
    category: "fees",
    question: "Are there any scholarships available?",
    answer: "Yes, Bridgewater offers various scholarship programs including merit-based scholarships for academic achievers, need-based financial aid for students with demonstrated financial need, sports scholarships for athletes, and sibling discounts. Contact our admissions office for eligibility criteria and application process.",
  },
  {
    category: "fees",
    question: "What payment methods are accepted?",
    answer: "We accept bank transfers, online payments (eSewa, Khalti, Connect IPS), cheques payable to Bridgewater International College, and cash payments at our accounts department. Contact the accounts office for payment schedules and due dates.",
  },
  {
    category: "fees",
    question: "Is there a discount for annual payment?",
    answer: "Yes, students who pay fees in advance may be eligible for discounts. Please contact our accounts department at +977-1-4481590 for specific discount rates and payment plan options.",
  },
  {
    category: "facilities",
    question: "Does Bridgewater have hostel facilities?",
    answer: "Yes, we offer hostel facilities with different room options: Deluxe, Standard, and Normal rooms. Meals are included with both vegetarian and non-vegetarian options. Contact the administration office for current hostel fees and availability.",
  },
  {
    category: "facilities",
    question: "Is transportation available for students?",
    answer: "Yes, we provide transportation services from major city points in Kathmandu Valley. Routes and fees vary depending on location. You can inquire about transportation options during the admission process.",
  },
  {
    category: "facilities",
    question: "What sports facilities are available?",
    answer: "We have an in-house futsal ground, and students can participate in football, basketball, cricket, and table tennis through our sports club. Regular inter-college competitions and sports events are organized throughout the year.",
  },
  {
    category: "facilities",
    question: "Does the college have a library?",
    answer: "Yes, we have a well-equipped library with a comprehensive collection of textbooks, reference materials, journals, and digital resources. The library provides a quiet study environment and is accessible during college hours.",
  },
  {
    category: "academic",
    question: "What is the class size at Bridgewater?",
    answer: "We maintain an optimal class size of approximately 40 students per section to ensure personalized attention and effective learning. This allows for interactive teaching methods and better student-teacher engagement.",
  },
  {
    category: "academic",
    question: "Are there any preparation classes for competitive exams?",
    answer: "Yes, we offer pre-medical, pre-engineering, and pre-CMAT preparation classes for +2 students. These classes are designed to help students prepare for entrance examinations to pursue higher education in medicine, engineering, or MBA.",
  },
  {
    category: "academic",
    question: "What extra-curricular activities are offered?",
    answer: "We offer a Personality Development Program (PDP), career counseling workshops, cultural programs, debate competitions, quiz contests, and various club activities. Students are encouraged to participate in these activities for holistic development.",
  },
  {
    category: "academic",
    question: "When does the academic year start?",
    answer: "The academic year begins on Shrawan 1 (approximately July 15) each year. Classes run from Sunday to Friday, with Saturday as a holiday. Mid-term and final examinations are conducted as per the NEB/TU schedule.",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-24 md:pt-28">
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#c9a227" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-[#c9a227]">Questions</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Find answers to common questions about admissions, programs, fees, and campus life at Bridgewater
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-4 bg-white border-b sticky top-24 md:top-28 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-[#1e3a5f] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-4"
          >
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-[#1e3a5f] pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c9a227] flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600">
              Our admissions team is here to help you with any queries
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.a
              href="tel:+97714481590"
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-6 text-center text-white hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-white/70 text-sm mb-3">Mon-Fri, 9AM-5PM</p>
              <p className="text-[#c9a227] font-semibold">+977-1-4481590</p>
            </motion.a>

            <motion.a
              href="mailto:info@bridgewater.com.np"
              variants={itemVariants}
              className="bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-2xl p-6 text-center text-white hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-white/80 text-sm mb-3">We reply within 24 hours</p>
              <p className="font-semibold">info@bridgewater.com.np</p>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-[#1e3a5f]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Visit Campus</h3>
              <p className="text-gray-600 text-sm mb-3">Talk to our counselors</p>
              <p className="text-[#c9a227] font-semibold">Sinamangal, Kathmandu</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-[#c9a227] to-[#d4af37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Bridgewater?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Take the first step towards your academic journey
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#0f2a4a] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30"
              >
                Back to Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
