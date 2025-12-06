import Link from "next/link";
import { Monitor, BookOpen, Utensils, Dumbbell, Bus, Wifi, Shield, Users } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const facilities = [
  {
    icon: Monitor,
    title: "Computer Labs",
    description: "State-of-the-art computer laboratories equipped with the latest hardware and software. High-speed internet connectivity and modern workstations for practical learning.",
    features: ["100+ Workstations", "High-Speed Internet", "Latest Software", "24/7 Access"]
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "A vast collection of books, journals, and digital resources in a serene environment designed to inspire academic excellence and research.",
    features: ["50,000+ Books", "Digital Resources", "Study Rooms", "E-Library Access"],
    link: "/library"
  },
  {
    icon: Utensils,
    title: "Cafeteria",
    description: "Spacious cafeteria serving nutritious and hygienic meals. A variety of food options available at affordable prices.",
    features: ["Hygienic Food", "Variety of Options", "Affordable Prices", "Seating for 200+"]
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    description: "Comprehensive sports facilities including futsal court, basketball court, and indoor games. Encouraging physical fitness alongside academics.",
    features: ["Futsal Court", "Basketball Court", "Table Tennis", "Indoor Games"],
    link: "/campus-life/sports"
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Safe and reliable transportation service covering major routes in Kathmandu valley. GPS-enabled buses with experienced drivers.",
    features: ["Multiple Routes", "GPS Tracking", "Safe & Reliable", "Affordable Fees"]
  },
  {
    icon: Wifi,
    title: "Campus WiFi",
    description: "High-speed WiFi connectivity throughout the campus. Stay connected for research, assignments, and academic resources.",
    features: ["Campus-Wide Coverage", "High Speed", "Secure Network", "Free Access"]
  },
  {
    icon: Shield,
    title: "Security",
    description: "24/7 security with CCTV surveillance and trained security personnel ensuring a safe learning environment for all students.",
    features: ["24/7 Surveillance", "CCTV Cameras", "ID Card System", "Emergency Response"]
  },
  {
    icon: Users,
    title: "Hostel & Boarding",
    description: "Comfortable hostel facilities for students from outside Kathmandu. Well-furnished rooms with all modern amenities.",
    features: ["Furnished Rooms", "24/7 Security", "Mess Facility", "Study Environment"],
    link: "/campus-life/hostel"
  }
];

export default function FacilitiesPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Facilities</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                World-class infrastructure for a complete educational experience
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-7 h-7 text-[#c9a227]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{facility.title}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {facility.features.map((feature, fIdx) => (
                      <span key={fIdx} className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                  {facility.link && (
                    <Link 
                      href={facility.link} 
                      className="inline-block mt-4 text-[#c9a227] hover:text-[#b8921f] text-sm font-medium"
                      aria-label={`Learn more about ${facility.title}`}
                    >
                      Learn more about {facility.title} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Experience Our Campus</h2>
            <p className="text-gray-600 mb-8">
              Visit us to see our facilities firsthand. Schedule a campus tour today.
            </p>
            <Link
              href="/contact"
              className="bg-[#c9a227] hover:bg-[#b8921f] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Schedule a Visit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
