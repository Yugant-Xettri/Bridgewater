"use client";

import { Clock, Users, BookOpen, Award } from "lucide-react";
import ProgramPage from "@/app/components/ProgramPage";

export default function Plus2ManagementPage() {
  return (
    <ProgramPage
      badge="+2 Management Program"
      title="+2 Management"
      highlightedWord="Management"
      description="Develop business acumen, financial literacy, and entrepreneurial skills with our NEB-affiliated management program designed for future business leaders, accountants, and entrepreneurs."
      heroImage="/images/academics/business_management__5251077d.jpg"
      stats={[
        { label: "Duration", value: "2 Years", icon: Clock },
        { label: "Class Size", value: "40 Max", icon: Users },
        { label: "Affiliation", value: "NEB", icon: Award },
        { label: "Subjects", value: "10 Core", icon: BookOpen },
      ]}
      overview={{
        title: "Shape Your Business Future",
        content: [
          "The +2 Management program at Bridgewater International College is a 2-year higher secondary program affiliated with the National Examination Board (NEB). It provides a solid foundation in business principles, accounting, economics, and organizational management.",
          "Students learn through practical case studies, group projects, and real-world business simulations. We focus on developing analytical thinking, financial literacy, communication skills, and an understanding of market dynamics.",
          "Our experienced faculty brings industry expertise to the classroom. We offer Pre-CMAT preparation classes for BBA/BBS entrance, career counseling workshops, and Personality Development Programs (PDP) for comprehensive student development.",
        ],
      }}
      curriculum={{
        title: "Core Subjects & Curriculum",
        subjects: [
          { name: "Accountancy", description: "Financial Accounting, Cost Accounting" },
          { name: "Business Studies", description: "Business Management, Organization" },
          { name: "Economics", description: "Micro & Macro Economics" },
          { name: "Business Mathematics", description: "Statistics, Commercial Math" },
          { name: "English", description: "Business Communication & Literature" },
          { name: "Nepali", description: "Language & Literature" },
          { name: "Social Studies", description: "Civics, Environment Studies" },
          { name: "Computer Science", description: "IT Applications in Business" },
          { name: "Hotel Management", description: "Hospitality Industry Basics (Optional)" },
          { name: "Tourism & Mountaineering", description: "Nepal Tourism Studies (Optional)" },
        ],
      }}
      eligibility={{
        title: "Eligibility Criteria",
        requirements: [
          "SEE passed from a recognized institution",
          "Minimum GPA 2.40 overall in SEE",
          "Minimum Grade D+ in English",
          "Minimum Grade D+ in Mathematics",
          "Minimum Grade D+ in Social Studies and Nepali",
          "Must pass the entrance examination or qualify on SEE grades",
          "Personal interview with parent/guardian required",
        ],
      }}
      careers={{
        title: "Career Pathways",
        paths: [
          { title: "Chartered Accountant", description: "CA, ACCA, CPA Professional" },
          { title: "Bank Officer", description: "Banking, Finance, Investment" },
          { title: "Business Manager", description: "MBA, Corporate Leadership" },
          { title: "Entrepreneur", description: "Start-up, Business Ownership" },
        ],
      }}
      highlights={[
        "Industry-oriented practical curriculum",
        "Experienced faculty from corporate backgrounds",
        "Pre-CMAT preparation for BBA/BBS entrance",
        "Guest lectures from business professionals",
        "Personality Development Programs (PDP)",
        "Career counseling and guidance workshops",
        "Merit-based and need-based scholarships",
        "Shuttle service from various Kathmandu locations",
        "Hostel and cafeteria facilities available",
      ]}
    />
  );
}
