"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  UtensilsCrossed,
  Droplets,
  Leaf,
  ChefHat,
  Salad,
  Heart,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  Apple,
  Users,
  Shield
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

const cuisineOptions = [
  {
    type: "Nepali Cuisine",
    description: "Traditional Nepali dishes including dal bhat, momo, and seasonal vegetables prepared with authentic flavors.",
    icon: Flame,
    color: "from-red-500 to-red-600",
    items: ["Dal Bhat", "Momo", "Sel Roti", "Seasonal Vegetables"],
  },
  {
    type: "Continental",
    description: "Western-style dishes including pasta, sandwiches, and grilled items for students who prefer international flavors.",
    icon: ChefHat,
    color: "from-blue-500 to-blue-600",
    items: ["Pasta", "Sandwiches", "Grilled Items", "Soups"],
  },
  {
    type: "Indian Cuisine",
    description: "Rich and flavorful Indian dishes including curries, biryani, and traditional breads like naan and roti.",
    icon: Salad,
    color: "from-amber-500 to-amber-600",
    items: ["Curries", "Biryani", "Naan & Roti", "Paneer Dishes"],
  },
  {
    type: "Chinese Cuisine",
    description: "Popular Chinese dishes including noodles, fried rice, and various stir-fried options.",
    icon: UtensilsCrossed,
    color: "from-emerald-500 to-emerald-600",
    items: ["Noodles", "Fried Rice", "Chow Mein", "Spring Rolls"],
  },
];

const features = [
  { icon: Droplets, title: "Pure Drinking Water", description: "Clean and purified drinking water available throughout the day" },
  { icon: Leaf, title: "Fresh Ingredients", description: "Daily procurement of fresh vegetables and quality ingredients" },
  { icon: ChefHat, title: "Professional Kitchen", description: "Modern kitchen with trained staff maintaining hygiene standards" },
  { icon: Heart, title: "Dietician Supervised", description: "Menu planned with guidance from professional dieticians" },
  { icon: Shield, title: "School Doctor Oversight", description: "Regular health inspections and quality control" },
  { icon: Users, title: "Spacious Seating", description: "Comfortable dining area with ample seating capacity" },
];

const nutritionHighlights = [
  {
    value: "2000+",
    label: "Calories Per Day",
    description: "Balanced nutrition to fuel academic performance",
  },
  {
    value: "4",
    label: "Cuisine Types",
    description: "Diverse menu options to suit all preferences",
  },
  {
    value: "100%",
    label: "Hygienic",
    description: "Strict adherence to food safety standards",
  },
];

export default function CafeteriaPage() {
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
              <UtensilsCrossed className="w-4 h-4" />
              Campus Life
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Cafeteria</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-8">
              A hygienic and spacious facility serving fresh, healthy, balanced, 
              and nutritious meals to fuel your academic journey.
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
                Nutrition First
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Fresh, Healthy & Nutritious Meals
              </h2>
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
                    Our cafeteria is located right on the college premises, providing convenient 
                    access to fresh, nutritious meals throughout the day. We believe that proper 
                    nutrition is essential for academic success.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  With a variable daily menu that meets strict quality standards, students can 
                  enjoy diverse food options including vegetarian and non-vegetarian dishes. 
                  Color-coded crockery ensures clear separation for dietary preferences.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Every meal is prepared under the supervision of professional dieticians and 
                  our school doctor, ensuring that students receive balanced nutrition with 
                  over 2000 calories per day.
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
                        <Apple className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Our Commitment</h3>
                    </div>
                    <blockquote className="text-blue-100/90 text-lg leading-relaxed italic">
                      "We are committed to providing fresh, healthy, balanced, and nutritious 
                      meals that not only satisfy hunger but also support the overall health 
                      and academic performance of our students."
                    </blockquote>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-[#c9a227] font-semibold">Quality & Hygiene Guaranteed</p>
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
                Nutrition Stats
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                By The Numbers
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16"
            >
              {nutritionHighlights.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                    border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#c9a227] mb-2">{stat.value}</div>
                  <div className="text-xl font-bold text-[#1e3a5f] mb-2">{stat.label}</div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </motion.div>
              ))}
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
                Menu Options
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Diverse Cuisine Selection
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our cafeteria offers a variety of cuisines to cater to different tastes 
                and dietary preferences, with both vegetarian and non-vegetarian options.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {cuisineOptions.map((cuisine, index) => {
                const IconComponent = cuisine.icon;
                return (
                  <motion.div
                    key={cuisine.type}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group relative bg-white rounded-3xl p-6
                      shadow-[0_4px_30px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_25px_60px_rgba(30,58,95,0.15)]
                      border border-gray-100/80 hover:border-[#c9a227]/40
                      transition-all duration-300 ease-out overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/0 
                      group-hover:from-[#c9a227]/[0.02] group-hover:to-[#1e3a5f]/[0.02] 
                      transition-all duration-500 rounded-3xl" />

                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br ${cuisine.color}
                        rounded-2xl flex items-center justify-center mb-4
                        group-hover:scale-110 group-hover:rotate-3
                        shadow-lg transition-all duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-[#1e3a5f] mb-2
                        group-hover:text-[#c9a227] transition-colors duration-300"
                      >
                        {cuisine.type}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {cuisine.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {cuisine.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-medium rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
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
                Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Cafeteria Features
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our cafeteria is equipped with modern facilities and maintains the highest 
                standards of hygiene and food safety.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="group flex items-start gap-4 p-6 bg-white 
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
                      <h3 className="font-bold text-[#1e3a5f] mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border border-emerald-100"
            >
              <motion.div variants={itemVariants} className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Veg & Non-Veg Options</h3>
                <p className="text-gray-600">Clearly separated with color-coded crockery</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2">Vegetarian</h4>
                  <p className="text-gray-600 text-sm">Green-coded crockery for all vegetarian dishes</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2">Non-Vegetarian</h4>
                  <p className="text-gray-600 text-sm">Red-coded crockery for all non-vegetarian dishes</p>
                </div>
              </motion.div>
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
                Experience Our Campus Dining
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Visit our campus to see our cafeteria facilities firsthand and learn more 
                about our commitment to student nutrition and well-being.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-white 
                    px-8 py-4 rounded-full font-semibold transition-all duration-300
                    shadow-lg hover:shadow-xl hover:shadow-[#c9a227]/25"
                >
                  Schedule a Visit
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
