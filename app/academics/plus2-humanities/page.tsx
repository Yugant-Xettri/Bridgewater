"use client";

import { Clock, Users, BookOpen, Award } from "lucide-react";
import ProgramPage from "@/app/components/ProgramPage";

export default function Plus2HumanitiesPage() {
  return (
    <ProgramPage
      badge="+2 Humanities Program"
      title="+2 Humanities"
      highlightedWord="Humanities"
      description="Explore the depths of human society, culture, and communication with our NEB-affiliated humanities program designed for future journalists, social workers, and public servants."
      heroImage="/images/academics/humanities_social_st_c472baaf.jpg"
      stats={[
        { label: "Duration", value: "2 Years", icon: Clock },
        { label: "Class Size", value: "40 Max", icon: Users },
        { label: "Affiliation", value: "NEB", icon: Award },
        { label: "Focus", value: "Social Sciences", icon: BookOpen },
      ]}
      overview={{
        title: "Understanding Society & Culture",
        content: [
          "The +2 Humanities program at Bridgewater International College is a 2-year higher secondary program affiliated with the National Examination Board (NEB). It offers comprehensive study of human society, culture, communication, and social dynamics.",
          "Students develop critical thinking, analytical skills, and a deep understanding of social issues. Our curriculum covers sociology, rural development, mass communication, and major English studies.",
          "Through debates, research projects, and field visits, students learn to analyze complex social phenomena and develop solutions for contemporary challenges. The program prepares students for careers in journalism, social work, NGOs, and public service.",
        ],
      }}
      curriculum={{
        title: "Core Subjects & Curriculum",
        subjects: [
          { name: "Sociology", description: "Social Structures, Institutions, Change" },
          { name: "Mass Communication", description: "Media Studies, Journalism Basics" },
          { name: "Major English", description: "Advanced English Literature & Writing" },
          { name: "Rural Development", description: "Community Development Studies" },
          { name: "English", description: "Literature, Creative Writing" },
          { name: "Nepali", description: "Language & Literature" },
          { name: "Social Studies", description: "History, Geography, Civics" },
          { name: "Economics", description: "Basic Economics (Optional)" },
          { name: "Psychology", description: "Human Behavior Studies (Optional)" },
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
          { title: "Journalist", description: "Media, Broadcasting, Publishing" },
          { title: "Social Worker", description: "NGO, Community Development" },
          { title: "Civil Servant", description: "Government, Public Administration" },
          { title: "Educator", description: "Teacher, Professor, Researcher" },
        ],
      }}
      highlights={[
        "Focus on critical thinking and analytical skills",
        "Regular debates and discussion forums",
        "Mass communication and journalism training",
        "Preparation for public service examinations",
        "Guest lectures from media professionals",
        "Personality Development Programs (PDP)",
        "Merit-based and need-based scholarships",
        "Shuttle service from various Kathmandu locations",
        "Hostel and cafeteria facilities available",
      ]}
    />
  );
}
