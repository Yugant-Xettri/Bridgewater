import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Bridgewater International College Kathmandu",
  description: "Contact Bridgewater International College, Sinamangal, Kathmandu. Phone: +977-1-4481590, Email: info@bridgewater.com.np. Visit our campus for admission inquiries.",
  keywords: [
    "Bridgewater College contact",
    "college Sinamangal Kathmandu",
    "BWIC phone number",
    "college admission inquiry Nepal",
    "Bridgewater location",
    "visit campus Kathmandu"
  ],
  openGraph: {
    title: "Contact Bridgewater International College | Kathmandu, Nepal",
    description: "Get in touch with BWIC. Located in Sinamangal, Kathmandu. Call +977-1-4481590 for admissions and inquiries.",
    url: "https://bridgewater.edu.np/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
