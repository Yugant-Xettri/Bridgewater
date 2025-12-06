"use client";

import { Clock, Users, BookOpen, Award } from "lucide-react";
import ProgramPage from "@/app/components/ProgramPage";

export default function BCAPage() {
  return (
    <ProgramPage
      badge="Bachelor Program - TU Affiliated"
      title="BCA Program"
      highlightedWord="BCA"
      description="Master computer applications, programming, and software development with our comprehensive 4-year bachelor's degree program under Tribhuvan University's Faculty of Humanities and Social Sciences."
      heroImage="/images/academics/computer_programming_9e891944.jpg"
      stats={[
        { label: "Duration", value: "4 Years", icon: Clock },
        { label: "Semesters", value: "8", icon: Users },
        { label: "Credits", value: "126", icon: BookOpen },
        { label: "Affiliation", value: "TU", icon: Award },
      ]}
      overview={{
        title: "Become a Tech Professional",
        content: [
          "The Bachelor of Computer Application (BCA) program at Bridgewater International College (through Danfe College) is a 4-year, 8-semester degree program with 126 credit hours, affiliated with Tribhuvan University's Faculty of Humanities and Social Sciences.",
          "Our curriculum covers programming languages, database management, web development, software engineering, networking, security systems, and emerging technologies. Students gain hands-on experience through real-world projects and internships.",
          "We provide specialized training in modern frameworks and technologies including Laravel, Django, REST API, Node.js, Angular, React, and Ruby on Rails. Network administration certifications (Red Hat, Cisco, Microsoft, Ethical Hacking) are also available.",
        ],
      }}
      curriculum={{
        title: "Core Subjects & Curriculum",
        subjects: [
          { name: "Programming Languages", description: "C, C++, Java, Python, PHP" },
          { name: "Database Management", description: "SQL, Oracle, MongoDB, Database Design" },
          { name: "Web Development", description: "HTML, CSS, JavaScript, React, Node.js" },
          { name: "Software Engineering", description: "SDLC, Agile, Project Management" },
          { name: "Computer Networks", description: "Networking, Security, Protocols" },
          { name: "Data Structures & Algorithms", description: "Problem Solving, Optimization" },
          { name: "Operating Systems", description: "Linux, Windows, System Admin" },
          { name: "Mobile Development", description: "Android, iOS App Development" },
          { name: "API Development", description: "Laravel, Django, REST API, Ruby on Rails" },
        ],
      }}
      eligibility={{
        title: "Eligibility Criteria",
        requirements: [
          "+2 or PCL or equivalent passed from recognized board",
          "Minimum 40% marks or CGPA 2.0 in +2 level",
          "Minimum Grade D+ in each subject in Grade 11 & 12",
          "From Higher Secondary Board, TU, or TU-recognized institution",
          "Must pass TU entrance examination or college entrance test",
          "Basic computer literacy preferred",
        ],
      }}
      careers={{
        title: "Career Pathways",
        paths: [
          { title: "Software Developer", description: "Web, Mobile & Application Development" },
          { title: "Network Administrator", description: "IT Infrastructure, Security" },
          { title: "Data Analyst", description: "Data Science, Business Intelligence" },
          { title: "Database Administrator", description: "DBA, Data Management" },
        ],
      }}
      highlights={[
        "Tribhuvan University affiliated program",
        "Modern computer labs with latest hardware and software",
        "Training in Laravel, Django, React, Node.js, Angular",
        "Network certifications: Red Hat, Cisco, Microsoft",
        "Ethical Hacking and Cybersecurity training",
        "Internship opportunities with IT companies",
        "Project-based learning approach",
        "Career placement assistance",
        "Hostel and transport facilities available",
      ]}
    />
  );
}
