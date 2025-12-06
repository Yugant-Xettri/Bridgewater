"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Youtube,
  Globe,
  MessageCircle,
  User,
  FileText,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Baburam Acharya Street",
    secondary: "Sinamangal, Kathmandu 44600",
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=Bridgewater+International+College+Sinamangal+Kathmandu"
    }
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+977-1-4481590",
    secondary: "+977-1-4480069",
    action: {
      label: "Call Now",
      href: "tel:+97714481590"
    }
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@bridgewater.com.np",
    secondary: "Quick response guaranteed",
    action: {
      label: "Send Email",
      href: "mailto:info@bridgewater.com.np"
    }
  },
  {
    icon: Clock,
    title: "Office Hours",
    primary: "Sun - Fri: 6AM - 5PM",
    secondary: "Saturday: Closed",
    action: null
  }
];

const phoneNumbers = {
  landlines: ["+977-1-4481590", "+977-1-4480069", "+977-1-4581590"],
  mobiles: ["+977 9807500491", "+977 9609555948", "+977 9802344649", "+977 9802334186", "+977 9851056032", "+977 9803756714"]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/BridgewaterInternationalCollege", bg: "bg-blue-600" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCJDfxqZ_mbNIbN1dR_iq0jA", bg: "bg-red-600" },
  { name: "Website", icon: Globe, href: "https://www.bridgewater.com.np", bg: "bg-[#c9a227]" }
];

const faqs = [
  {
    q: "What are the admission requirements?",
    a: "For +2, you need to pass SEE. For Bachelor programs, complete +2 with relevant subjects."
  },
  {
    q: "Do you offer scholarships?",
    a: "Yes, we offer merit-based scholarships for outstanding students."
  },
  {
    q: "What programs do you offer?",
    a: "+2 (Science, Management, Law, Humanities), Bachelor (BCA, BBS), and CA courses."
  },
  {
    q: "How can I schedule a campus visit?",
    a: "Call us at +977-1-4481590 or fill out the contact form above."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showAllPhones, setShowAllPhones] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, email, phone, subject, message } = formData;
    const subjectLine = subject ? `Inquiry: ${subject}` : 'Website Inquiry';
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone || 'Not provided'}%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:info@bridgewater.com.np?subject=${encodeURIComponent(subjectLine)}&body=${body}`;
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-[100px] pb-8 lg:pt-[120px] lg:pb-16 bg-gradient-to-b from-[#0a1628] via-[#0f1f2e] to-[#162a3f]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-4 w-32 h-32 lg:w-72 lg:h-72 bg-[#c9a227]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 w-40 h-40 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 mb-4 lg:mb-6">
              <MessageCircle className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#c9a227]" />
              <span className="text-white/80 text-xs lg:text-sm font-medium">Get in Touch</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 lg:mb-4">
              Contact{" "}
              <span className="text-[#c9a227]">Us</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto px-2">
              Ready to start your journey? We&apos;re here to help with admissions, programs, or any questions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
          >
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-5 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#c9a227] rounded-xl flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm lg:text-base mb-1">{info.title}</h3>
                  <p className="text-white/90 text-xs lg:text-sm font-medium truncate">{info.primary}</p>
                  <p className="text-white/50 text-[10px] lg:text-xs truncate">{info.secondary}</p>
                  {info.action && (
                    <a
                      href={info.action.href}
                      target={info.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-[#c9a227] text-xs font-semibold mt-2 hover:gap-2 transition-all"
                    >
                      {info.action.label}
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-2 mb-4">
                <Send className="w-4 h-4 lg:w-5 lg:h-5 text-[#c9a227]" />
                <span className="text-[#c9a227] text-sm font-semibold">Send a Message</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Have Questions?
              </h2>
              <p className="text-gray-500 text-sm lg:text-base mb-6">
                Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4"
                >
                  <p className="text-green-700 text-sm font-medium">Message sent! We&apos;ll respond soon.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/20 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone (Optional)"
                      className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/20 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/20 transition-all appearance-none"
                    >
                      <option value="">Select Subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="programs">Programs Info</option>
                      <option value="fees">Fee Structure</option>
                      <option value="scholarship">Scholarship</option>
                      <option value="campus-visit">Campus Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={4}
                    className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#c9a227] hover:bg-[#b8922a] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=Bridgewater%20international%20college%20sinamangal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bridgewater International College Location"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Bridgewater International College</p>
                      <p className="text-gray-500 text-xs">Baburam Acharya Street, Sinamangal, Kathmandu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a1628] rounded-2xl p-4">
                <h3 className="text-white font-semibold text-sm mb-3">All Phone Numbers</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-white/50 text-xs mb-1.5">Landlines</p>
                    <div className="flex flex-wrap gap-2">
                      {phoneNumbers.landlines.map((num, idx) => (
                        <a
                          key={idx}
                          href={`tel:${num.replace(/[^0-9+]/g, '')}`}
                          className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-white/50 text-xs mb-1.5">Mobile</p>
                    <div className="flex flex-wrap gap-2">
                      {(showAllPhones ? phoneNumbers.mobiles : phoneNumbers.mobiles.slice(0, 3)).map((num, idx) => (
                        <a
                          key={idx}
                          href={`tel:${num.replace(/[^0-9+]/g, '')}`}
                          className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                        >
                          {num}
                        </a>
                      ))}
                      {!showAllPhones && phoneNumbers.mobiles.length > 3 && (
                        <button
                          onClick={() => setShowAllPhones(true)}
                          className="bg-[#c9a227] hover:bg-[#b8922a] text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                        >
                          +{phoneNumbers.mobiles.length - 3} more
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9a227]/10 border border-[#c9a227]/20 rounded-2xl p-4">
                <h3 className="text-gray-900 font-semibold text-sm mb-3">Follow Us</h3>
                <div className="flex gap-2">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.bg} text-white p-2.5 rounded-xl hover:opacity-90 transition-all flex items-center gap-2`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-xs font-medium hidden sm:inline">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 lg:mb-10"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Quick Answers</h2>
            <p className="text-gray-500 text-sm">Common questions about admissions</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3 lg:gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-4 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16 bg-gradient-to-r from-[#0a1628] to-[#162a3f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">
              Ready to Join Bridgewater?
            </h2>
            <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto">
              Take the first step towards your future. Apply now or schedule a campus visit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/admissions/apply"
                className="w-full sm:w-auto bg-[#c9a227] hover:bg-[#b8922a] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all inline-flex items-center justify-center gap-2"
              >
                Apply Now
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="tel:+97714481590"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call: +977-1-4481590
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
