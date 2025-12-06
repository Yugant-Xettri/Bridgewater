import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Programs - +2, BCA, BBS, CA | Bridgewater International College",
  description: "Explore academic programs at Bridgewater International College: +2 Science, Management, Humanities, Law (NEB), BCA, BBS (TU Affiliated), and CA Coaching. Best college in Kathmandu for higher education.",
  keywords: [
    "+2 Science Kathmandu",
    "+2 Management Nepal", 
    "+2 Law college",
    "+2 Humanities",
    "BCA college Kathmandu",
    "BBS college Nepal",
    "CA coaching Nepal",
    "NEB affiliated college",
    "TU affiliated college",
    "best college for +2 Science",
    "computer science college Nepal"
  ],
  openGraph: {
    title: "Academic Programs | Bridgewater International College",
    description: "+2 Science, Management, Humanities, Law, BCA, BBS & CA programs. NEB & TU affiliated college in Kathmandu.",
    url: "https://bridgewater.edu.np/academics",
  },
};

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
