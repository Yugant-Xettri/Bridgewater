"use client";

import { Clock, Users, BookOpen, Award } from "lucide-react";
import ProgramPage from "@/app/components/ProgramPage";

export default function BBSPage() {
  return (
    <ProgramPage
      badge="Bachelor Program - TU Affiliated"
      title="BBS Program"
      highlightedWord="BBS"
      description="Build a strong foundation in business and management with our 4-year Bachelor of Business Studies program under Tribhuvan University's Faculty of Management."
      heroImage="/images/academics/business_studies_stu_8a63f617.jpg"
      stats={[
        { label: "Duration", value: "4 Years", icon: Clock },
        { label: "Faculty", value: "Management", icon: Users },
        { label: "Specializations", value: "Finance/Marketing/HR", icon: BookOpen },
        { label: "Affiliation", value: "TU", icon: Award },
      ]}
      overview={{
        title: "Master Business & Commerce",
        content: [
          "The Bachelor of Business Studies (BBS) program at Bridgewater International College (through Danfe College) is a 4-year degree program under Tribhuvan University's Faculty of Management. It provides comprehensive knowledge in business administration, accounting, economics, and management.",
          "Students develop skills in financial analysis, marketing strategies, organizational behavior, human resource management, and business decision-making. The program includes specializations in Finance, Marketing, and Human Resource Management.",
          "With a blend of theoretical learning and practical applications through case studies, projects, and internships, graduates are prepared for diverse careers in the business world including banking, finance, marketing, and entrepreneurship.",
        ],
      }}
      curriculum={{
        title: "Core Subjects & Curriculum",
        subjects: [
          { name: "Accounting", description: "Financial, Cost & Management Accounting" },
          { name: "Business Finance", description: "Financial Management, Investment Analysis" },
          { name: "Marketing Management", description: "Consumer Behavior, Sales, Branding" },
          { name: "Economics", description: "Business & Macro Economics" },
          { name: "Business Organization", description: "Management Principles, HRM" },
          { name: "Business Law", description: "Commercial Law, Company Law" },
          { name: "Business Statistics", description: "Quantitative Methods, Research" },
          { name: "Banking & Insurance", description: "Financial Institutions, Operations" },
          { name: "Taxation", description: "Income Tax, VAT, Tax Planning" },
        ],
      }}
      eligibility={{
        title: "Eligibility Criteria",
        requirements: [
          "+2 or PCL or equivalent passed in any stream",
          "From Higher Secondary Board, TU, or TU-recognized institution",
          "Minimum Grade D+ in each subject in Grade 11 & 12",
          "Business/Commerce background preferred but not mandatory",
          "Must pass TU entrance examination or college entrance test",
          "Basic knowledge of accounting and mathematics preferred",
        ],
      }}
      careers={{
        title: "Career Pathways",
        paths: [
          { title: "Bank Officer", description: "Banking, Financial Services" },
          { title: "Accountant", description: "Finance, Audit, Taxation" },
          { title: "Marketing Manager", description: "Brand Management, Sales" },
          { title: "Entrepreneur", description: "Start-up, Business Ownership" },
        ],
      }}
      highlights={[
        "Tribhuvan University affiliated program",
        "Experienced faculty from industry backgrounds",
        "Specialization options in Finance, Marketing, HR",
        "Internship with business organizations",
        "Case study and project-based learning",
        "Pathway to MBA and higher studies",
        "Career counseling and placement assistance",
        "Hostel and transport facilities available",
        "Merit-based scholarships offered",
      ]}
    />
  );
}
