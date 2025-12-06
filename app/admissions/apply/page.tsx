"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  FileText,
  Send,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  ChevronDown,
  Users,
  ClipboardCheck
} from "lucide-react";
import Footer from "@/app/components/Footer";

const programs = [
  { value: "plus2-science", label: "+2 Science (NEB)" },
  { value: "plus2-management", label: "+2 Management (NEB)" },
  { value: "plus2-humanities", label: "+2 Humanities (NEB)" },
  { value: "plus2-law", label: "+2 Law (NEB)" },
  { value: "bca", label: "BCA - Bachelor of Computer Application (TU)" },
  { value: "bbs", label: "BBS - Bachelor of Business Studies (TU)" },
  { value: "ca", label: "CA Coaching (ICAN)" },
];

const steps = [
  { id: 1, title: "Personal Info", icon: User, description: "Your basic details" },
  { id: 2, title: "Academic Info", icon: GraduationCap, description: "Educational background" },
  { id: 3, title: "Guardian Info", icon: Users, description: "Parent/Guardian details" },
  { id: 4, title: "Review & Submit", icon: ClipboardCheck, description: "Confirm your application" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    program: "",
    previousSchool: "",
    previousGrade: "",
    passedYear: "",
    parentName: "",
    parentRelation: "",
    parentPhone: "",
    parentEmail: "",
    parentOccupation: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
      if (!formData.gender) newErrors.gender = "Please select your gender";
      if (!formData.address.trim()) newErrors.address = "Address is required";
    }

    if (step === 2) {
      if (!formData.program) newErrors.program = "Please select a program";
      if (!formData.previousSchool.trim()) newErrors.previousSchool = "Previous school is required";
      if (!formData.previousGrade.trim()) newErrors.previousGrade = "Previous grade is required";
      if (!formData.passedYear.trim()) newErrors.passedYear = "Passed year is required";
    }

    if (step === 3) {
      if (!formData.parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";
      if (!formData.parentRelation) newErrors.parentRelation = "Please select relationship";
      if (!formData.parentPhone.trim()) newErrors.parentPhone = "Parent phone is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    if (step < currentStep) {
      setDirection(-1);
      setCurrentStep(step);
    } else if (step === currentStep + 1 && validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep(step);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const InputField = ({ 
    label, 
    name, 
    type = "text", 
    placeholder, 
    icon: Icon,
    required = true 
  }: { 
    label: string; 
    name: keyof typeof formData; 
    type?: string; 
    placeholder?: string;
    icon?: React.ElementType;
    required?: boolean;
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />}
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full ${Icon ? 'pl-12' : 'px-4'} pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c9a227]/20 focus:border-[#c9a227] transition-colors ${
            errors[name] ? 'border-red-300 bg-red-50' : 'border-gray-200'
          }`}
          placeholder={placeholder}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const SelectField = ({ 
    label, 
    name, 
    options,
    placeholder,
    icon: Icon,
    required = true 
  }: { 
    label: string; 
    name: keyof typeof formData; 
    options: { value: string; label: string }[];
    placeholder: string;
    icon?: React.ElementType;
    required?: boolean;
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />}
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full ${Icon ? 'pl-12' : 'px-4'} pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-[#c9a227]/20 focus:border-[#c9a227] transition-colors appearance-none bg-white ${
            errors[name] ? 'border-red-300 bg-red-50' : 'border-gray-200'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (isSubmitted) {
    return (
      <main className="pt-24 md:pt-28 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Application Submitted!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Thank you for applying to Bridgewater International College. 
              Our admissions team will contact you within 2-3 business days.
            </p>
            <div className="bg-[#1e3a5f]/5 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-[#1e3a5f] mb-4">What happens next?</h3>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c9a227] text-white flex items-center justify-center text-sm flex-shrink-0">1</div>
                  <span>Our admissions team will review your application</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c9a227] text-white flex items-center justify-center text-sm flex-shrink-0">2</div>
                  <span>We'll contact you to schedule an entrance test</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c9a227] text-white flex items-center justify-center text-sm flex-shrink-0">3</div>
                  <span>Interview with the admissions committee</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c9a227] text-white flex items-center justify-center text-sm flex-shrink-0">4</div>
                  <span>Final admission decision and enrollment</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Please bring original documents during your campus visit. 
                Contact us at <a href="tel:+97714481590" className="underline font-semibold">+977-1-4481590</a> for any queries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Return Home
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 border border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f]/5 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Admissions Info
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="pt-24 md:pt-28">
      <section className="relative py-10 md:py-14 bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Step {currentStep} of 4
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Apply to <span className="text-[#c9a227]">Bridgewater</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Complete the application form below. Your journey to excellence begins here.
          </p>
        </div>
      </section>

      <section className="py-6 bg-white border-b sticky top-[88px] z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <button
                    onClick={() => goToStep(step.id)}
                    className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-3 transition-all ${
                      isActive || isCompleted ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                    }`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      isCompleted 
                        ? "bg-emerald-500 text-white" 
                        : isActive 
                          ? "bg-[#c9a227] text-white shadow-lg shadow-[#c9a227]/30" 
                          : "bg-gray-100 text-gray-400"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>
                    <div className="hidden md:block text-left">
                      <p className={`font-semibold text-sm ${
                        isActive ? "text-[#1e3a5f]" : isCompleted ? "text-emerald-600" : "text-gray-400"
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </div>
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 sm:mx-4 rounded-full transition-colors ${
                      isCompleted ? "bg-emerald-500" : "bg-gray-200"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentStep === 1 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#1e3a5f]">Personal Information</h2>
                      <p className="text-sm text-gray-500">Tell us about yourself</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputField label="First Name" name="firstName" placeholder="Enter your first name" />
                    <InputField label="Last Name" name="lastName" placeholder="Enter your last name" />
                    <InputField label="Email Address" name="email" type="email" placeholder="your.email@example.com" icon={Mail} />
                    <InputField label="Phone Number" name="phone" type="tel" placeholder="+977-98XXXXXXXX" icon={Phone} />
                    <InputField label="Date of Birth" name="dateOfBirth" type="date" icon={Calendar} />
                    <SelectField 
                      label="Gender" 
                      name="gender" 
                      placeholder="Select gender"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                      ]}
                    />
                    <div className="md:col-span-2">
                      <InputField label="Current Address" name="address" placeholder="Your full address" icon={MapPin} />
                    </div>
                    <InputField label="City" name="city" placeholder="e.g., Kathmandu" required={false} />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#1e3a5f]">Academic Information</h2>
                      <p className="text-sm text-gray-500">Your educational background</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <SelectField 
                        label="Program of Interest" 
                        name="program" 
                        placeholder="Select a program"
                        icon={GraduationCap}
                        options={programs}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <InputField label="Previous School/College" name="previousSchool" placeholder="Name of your previous institution" />
                    </div>
                    <InputField label="GPA/Grade Obtained" name="previousGrade" placeholder="e.g., 3.5 GPA or 85%" />
                    <InputField label="Year of Passing" name="passedYear" placeholder="e.g., 2024" />
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-blue-800 text-sm font-medium">Required Documents</p>
                        <p className="text-blue-700 text-sm mt-1">
                          Please have the following ready for your interview: SEE/+2 transcripts, character certificate, 2 passport photos, and citizenship/birth certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#1e3a5f]">Parent/Guardian Information</h2>
                      <p className="text-sm text-gray-500">Contact details of your parent or guardian</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputField label="Parent/Guardian Full Name" name="parentName" placeholder="Full name" />
                    <SelectField 
                      label="Relationship" 
                      name="parentRelation" 
                      placeholder="Select relationship"
                      options={[
                        { value: "father", label: "Father" },
                        { value: "mother", label: "Mother" },
                        { value: "guardian", label: "Guardian" },
                        { value: "other", label: "Other" },
                      ]}
                    />
                    <InputField label="Contact Number" name="parentPhone" type="tel" placeholder="+977-98XXXXXXXX" icon={Phone} />
                    <InputField label="Email Address" name="parentEmail" type="email" placeholder="parent.email@example.com" icon={Mail} required={false} />
                    <div className="md:col-span-2">
                      <InputField label="Occupation" name="parentOccupation" placeholder="e.g., Business, Teacher, Engineer" required={false} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c9a227]/20 focus:border-[#c9a227] transition-colors resize-none"
                        placeholder="Any additional information or questions..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                        <ClipboardCheck className="w-6 h-6 text-[#c9a227]" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#1e3a5f]">Review Your Application</h2>
                        <p className="text-sm text-gray-500">Please verify all information before submitting</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h3 className="font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
                          <User className="w-5 h-5 text-[#c9a227]" />
                          Personal Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div><span className="text-gray-500">Name:</span> <span className="font-medium">{formData.firstName} {formData.lastName}</span></div>
                          <div><span className="text-gray-500">Email:</span> <span className="font-medium">{formData.email}</span></div>
                          <div><span className="text-gray-500">Phone:</span> <span className="font-medium">{formData.phone}</span></div>
                          <div><span className="text-gray-500">Date of Birth:</span> <span className="font-medium">{formData.dateOfBirth}</span></div>
                          <div><span className="text-gray-500">Gender:</span> <span className="font-medium capitalize">{formData.gender}</span></div>
                          <div><span className="text-gray-500">Address:</span> <span className="font-medium">{formData.address}{formData.city ? `, ${formData.city}` : ''}</span></div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-5">
                        <h3 className="font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-[#c9a227]" />
                          Academic Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div className="sm:col-span-2"><span className="text-gray-500">Program:</span> <span className="font-medium">{programs.find(p => p.value === formData.program)?.label}</span></div>
                          <div><span className="text-gray-500">Previous School:</span> <span className="font-medium">{formData.previousSchool}</span></div>
                          <div><span className="text-gray-500">Grade:</span> <span className="font-medium">{formData.previousGrade}</span></div>
                          <div><span className="text-gray-500">Year of Passing:</span> <span className="font-medium">{formData.passedYear}</span></div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-5">
                        <h3 className="font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#c9a227]" />
                          Parent/Guardian Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div><span className="text-gray-500">Name:</span> <span className="font-medium">{formData.parentName}</span></div>
                          <div><span className="text-gray-500">Relation:</span> <span className="font-medium capitalize">{formData.parentRelation}</span></div>
                          <div><span className="text-gray-500">Phone:</span> <span className="font-medium">{formData.parentPhone}</span></div>
                          {formData.parentEmail && <div><span className="text-gray-500">Email:</span> <span className="font-medium">{formData.parentEmail}</span></div>}
                          {formData.parentOccupation && <div><span className="text-gray-500">Occupation:</span> <span className="font-medium">{formData.parentOccupation}</span></div>}
                        </div>
                      </div>

                      {formData.message && (
                        <div className="bg-gray-50 rounded-xl p-5">
                          <h3 className="font-semibold text-[#1e3a5f] mb-2">Additional Message</h3>
                          <p className="text-sm text-gray-600">{formData.message}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-amber-800 text-sm font-medium">Before You Submit</p>
                        <p className="text-amber-700 text-sm mt-1">
                          By submitting this application, you confirm that all information provided is accurate. 
                          Our admissions team will contact you within 2-3 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                currentStep === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[#1e3a5f] hover:bg-[#1e3a5f]/5 border border-gray-200'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
              >
                Next Step
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
