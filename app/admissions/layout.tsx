import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions Open 2025 - Apply Now | Bridgewater International College",
  description: "Apply for admission at Bridgewater International College Kathmandu. Admissions open for +2 Science, Management, Humanities, Law, BCA, BBS programs. Merit-based scholarships available.",
  keywords: [
    "college admission Nepal 2025",
    "admission open Kathmandu",
    "+2 admission Nepal",
    "BCA admission Kathmandu",
    "BBS admission Nepal",
    "college scholarship Nepal",
    "Bridgewater admission",
    "best college admission",
    "entrance exam Nepal college"
  ],
  openGraph: {
    title: "Admissions Open 2025 | Apply to Bridgewater International College",
    description: "Join the best college in Kathmandu. Apply now for +2, BCA, BBS programs. Scholarships available for meritorious students.",
    url: "https://bridgewater.edu.np/admissions",
  },
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
