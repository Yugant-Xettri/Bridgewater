import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life - Hostel, Sports, Library | Bridgewater International College",
  description: "Experience vibrant campus life at Bridgewater International College. Modern hostel facilities, sports ground, well-equipped library, cafeteria, and student activities.",
  keywords: [
    "college hostel Kathmandu",
    "student life Nepal",
    "college sports facilities",
    "library facilities college",
    "college cafeteria Nepal",
    "student activities Kathmandu",
    "Bridgewater hostel"
  ],
  openGraph: {
    title: "Campus Life | Bridgewater International College",
    description: "Modern hostel, sports facilities, library, cafeteria and vibrant student life at BWIC Kathmandu.",
    url: "https://bridgewater.edu.np/campus-life",
  },
};

export default function CampusLifeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
