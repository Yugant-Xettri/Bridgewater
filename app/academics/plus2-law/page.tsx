"use client";

import { Clock, Users, BookOpen, Award } from "lucide-react";
import ProgramPage from "@/app/components/ProgramPage";

export default function Plus2LawPage() {
  return (
    <ProgramPage
      badge="+2 Law Program"
      title="+2 Law"
      highlightedWord="Law"
      description="Begin your journey into the legal profession with our specialized NEB-affiliated law program designed for aspiring lawyers, judges, and legal professionals."
      heroImage="/images/academics/law_students_courtro_bdabbf71.jpg"
      stats={[
        { label: "Duration", value: "2 Years", icon: Clock },
        { label: "Class Size", value: "40 Max", icon: Users },
        { label: "Affiliation", value: "NEB", icon: Award },
        { label: "Focus", value: "Legal Studies", icon: BookOpen },
      ]}
      overview={{
        title: "Foundation for Legal Excellence",
        content: [
          "The +2 Law program at Bridgewater International College is a 2-year intermediate level program affiliated with the National Examination Board (NEB). It provides a foundational understanding of legal principles, constitutional law, and the justice system of Nepal.",
          "Students develop critical reasoning, argumentation, and legal analysis skills. Our curriculum introduces students to jurisprudence, procedural law, and constitutional law, preparing them for admission to prestigious law schools.",
          "With guidance from experienced legal professionals, mock trial sessions, and visits to courts and legal institutions, students gain practical exposure to the legal profession from the very beginning.",
        ],
      }}
      curriculum={{
        title: "Core Subjects & Curriculum",
        subjects: [
          { name: "Constitutional Law", description: "Nepal Constitution, Fundamental Rights" },
          { name: "Jurisprudence & Legal Theories", description: "Philosophy of Law, Legal Concepts" },
          { name: "Procedural Law", description: "Court Procedures, Legal Processes" },
          { name: "English", description: "Legal English, Communication Skills" },
          { name: "Nepali", description: "Language & Literature" },
          { name: "Social Studies", description: "History, Civics, Governance" },
          { name: "Criminal Law Basics", description: "Introduction to Crimes & Punishments" },
          { name: "Civil Law Basics", description: "Contracts, Property, Torts" },
          { name: "Human Rights", description: "International & National HR Laws" },
        ],
      }}
      eligibility={{
        title: "Eligibility Criteria",
        requirements: [
          "SEE passed from a recognized institution",
          "Minimum GPA 2.40 overall in SEE",
          "Minimum Grade D+ in English",
          "Minimum Grade D+ in Social Studies and Nepali",
          "Must pass the entrance examination or qualify on SEE grades",
          "Personal interview with parent/guardian required",
        ],
      }}
      careers={{
        title: "Career Pathways",
        paths: [
          { title: "Advocate", description: "Lawyer, Legal Practitioner" },
          { title: "Judge", description: "Judiciary, Court System" },
          { title: "Legal Advisor", description: "Corporate Law, Legal Consulting" },
          { title: "Public Prosecutor", description: "Government Legal Services" },
        ],
      }}
      highlights={[
        "Introduction to Nepal's legal system and constitution",
        "Mock trials and moot court practice sessions",
        "Guest lectures from practicing advocates and judges",
        "Preparation for law entrance examinations",
        "Visits to courts and legal institutions",
        "Personality Development Programs (PDP)",
        "Merit-based and need-based scholarships",
        "Shuttle service from various Kathmandu locations",
        "Hostel and cafeteria facilities available",
      ]}
    />
  );
}
