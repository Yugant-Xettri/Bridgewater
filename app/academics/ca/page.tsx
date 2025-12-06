"use client";

import { Clock, Users, BookOpen, Award } from "lucide-react";
import ProgramPage from "@/app/components/ProgramPage";

export default function CAPage() {
  return (
    <ProgramPage
      badge="Professional Course - ICAN Affiliated"
      title="CA Coaching"
      highlightedWord="CA"
      description="Prepare for the prestigious Chartered Accountancy qualification with our comprehensive coaching program through Academy of Commerce, affiliated with the Institute of Chartered Accountants of Nepal (ICAN)."
      heroImage="/images/academics/chartered_accountant_aa215377.jpg"
      stats={[
        { label: "Levels", value: "CAP I, II, III", icon: Clock },
        { label: "Faculty", value: "Expert CAs", icon: Users },
        { label: "Affiliation", value: "ICAN", icon: Award },
        { label: "Articleship", value: "3 Years", icon: BookOpen },
      ]}
      overview={{
        title: "Become a Chartered Accountant",
        content: [
          "The CA Coaching program at Bridgewater International College, offered through our sister institution Academy of Commerce, prepares students for the prestigious Chartered Accountancy qualification from the Institute of Chartered Accountants of Nepal (ICAN).",
          "Our comprehensive coaching covers all three levels of the CA curriculum: CAP I (Foundation), CAP II (Intermediate), and CAP III (Final). Students receive expert guidance from practicing Chartered Accountants and industry professionals.",
          "With a structured study plan, regular mock examinations, personalized attention in small batches, and articleship placement assistance, we help students achieve their goal of becoming certified Chartered Accountants.",
        ],
      }}
      curriculum={{
        title: "CA Curriculum Levels",
        subjects: [
          { name: "CAP I - Foundation", description: "Financial Accounting, Business Law, Economics" },
          { name: "CAP I - Papers", description: "Quantitative Methods, IT & Management" },
          { name: "CAP II - Intermediate", description: "Advanced Accounting, Taxation, Audit" },
          { name: "CAP II - Core", description: "Corporate Laws, Cost & Management Accounting" },
          { name: "CAP III - Final", description: "Advanced Financial Reporting & Analysis" },
          { name: "CAP III - Professional", description: "Strategic Management, Advanced Audit" },
          { name: "Articleship Training", description: "3 Years Practical Training Required" },
          { name: "Mock Examinations", description: "Regular Practice Tests & Assessments" },
          { name: "Case Studies", description: "Real-world Business Scenarios" },
        ],
      }}
      eligibility={{
        title: "Eligibility Criteria",
        requirements: [
          "+2 or equivalent passed in any stream for CAP I registration",
          "Bachelor's degree graduates may get exemptions in certain papers",
          "Registration with ICAN is mandatory before starting classes",
          "Articleship training required during or after CAP II level",
          "Strong aptitude for numbers, accounting, and analytical thinking",
          "Dedication to complete the rigorous CA curriculum",
        ],
      }}
      careers={{
        title: "Career Pathways",
        paths: [
          { title: "Chartered Accountant", description: "Practice, Audit, Tax Consulting" },
          { title: "CFO", description: "Chief Financial Officer, Finance Director" },
          { title: "Tax Consultant", description: "Tax Planning, Compliance Advisory" },
          { title: "Auditor", description: "Internal/External Audit, Assurance" },
        ],
      }}
      highlights={[
        "ICAN registered and affiliated coaching center",
        "Expert CA faculty with practical industry experience",
        "Structured study materials and comprehensive notes",
        "Regular mock tests matching ICAN exam pattern",
        "Small batch sizes for personalized attention",
        "Articleship placement assistance with firms",
        "Library with extensive CA resources",
        "Also provides ICAI (India) preparation guidance",
        "High success rate in CA examinations",
      ]}
    />
  );
}
