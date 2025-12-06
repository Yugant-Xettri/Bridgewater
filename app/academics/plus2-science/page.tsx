"use client";

import { Clock, Users, BookOpen, Award } from "lucide-react";
import ProgramPage from "@/app/components/ProgramPage";

export default function Plus2SciencePage() {
  return (
    <ProgramPage
      badge="+2 Science Program"
      title="+2 Science"
      highlightedWord="Science"
      description="Build a strong foundation in Physics, Chemistry, Biology, and Mathematics with our comprehensive NEB-affiliated science program designed for future doctors, engineers, and scientists."
      heroImage="/images/academics/science_students_lab_cf9128c4.jpg"
      stats={[
        { label: "Duration", value: "2 Years", icon: Clock },
        { label: "Class Size", value: "40 Max", icon: Users },
        { label: "Affiliation", value: "NEB", icon: Award },
        { label: "Opt. Math", value: "Compulsory", icon: BookOpen },
      ]}
      overview={{
        title: "Excel in Science Education",
        content: [
          "The +2 Science program at Bridgewater International College is a 2-year higher secondary program affiliated with the National Examination Board (NEB) under the Ministry of Education. Our program provides students with a comprehensive understanding of scientific principles and their real-world applications.",
          "With state-of-the-art Physics, Chemistry, and Biology laboratories, experienced faculty, and a focus on conceptual learning, we prepare students for competitive entrance examinations including Medical (MBBS, BDS) and Engineering entrance tests.",
          "Our teaching methodology combines traditional lectures with hands-on experiments, Pre-medical and Pre-engineering preparation classes, career counseling workshops, and Personality Development Programs (PDP) for holistic student growth.",
        ],
      }}
      curriculum={{
        title: "Core Subjects & Curriculum",
        subjects: [
          { name: "Physics", description: "Mechanics, Heat, Optics, Modern Physics" },
          { name: "Chemistry", description: "Organic, Inorganic, Physical Chemistry" },
          { name: "Mathematics", description: "Calculus, Algebra, Trigonometry (Compulsory)" },
          { name: "Biology", description: "Botany & Zoology (Optional)" },
          { name: "Computer Science", description: "Programming & IT Fundamentals (Optional)" },
          { name: "English", description: "Communication Skills & Literature" },
          { name: "Nepali", description: "Language & Literature" },
          { name: "Social Studies", description: "Civics, Economics, Environment" },
          { name: "Health & PE", description: "Physical Education & Health Studies" },
        ],
      }}
      eligibility={{
        title: "Eligibility Criteria",
        requirements: [
          "SEE passed from a recognized institution",
          "Minimum GPA 3.0 overall in SEE",
          "Minimum Grade C+ in Science and Mathematics",
          "Minimum Grade D+ in English and other subjects",
          "Optional Mathematics is compulsory for this program",
          "Must pass the comprehensive entrance examination",
          "Personal interview with parent/guardian required",
        ],
      }}
      careers={{
        title: "Career Pathways",
        paths: [
          { title: "Medical Doctor", description: "MBBS, BDS, Nursing, Pharmacy, BMLT" },
          { title: "Engineer", description: "Civil, Computer, Electrical, Mechanical" },
          { title: "Scientist", description: "Research, Academia, Laboratory Work" },
          { title: "IT Professional", description: "Software Developer, Data Analyst" },
        ],
      }}
      highlights={[
        "Well-equipped Physics, Chemistry & Biology laboratories",
        "Experienced and qualified faculty members",
        "Pre-medical and Pre-engineering entrance preparation",
        "Regular mock tests and practice sessions",
        "Personality Development Programs (PDP)",
        "Career counseling and guidance workshops",
        "Merit-based and need-based scholarships available",
        "Shuttle service from various Kathmandu locations",
        "Hostel and cafeteria facilities on campus",
      ]}
    />
  );
}
