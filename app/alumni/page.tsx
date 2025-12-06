import Link from "next/link";
import { Users, Award, Briefcase, Globe, Heart, Calendar, ArrowRight } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const successStories = [
  { name: "Rajesh Sharma", batch: "2015", role: "Software Engineer", company: "Google" },
  { name: "Priya Thapa", batch: "2016", role: "Financial Analyst", company: "Standard Chartered" },
  { name: "Ankit Pradhan", batch: "2017", role: "Doctor", company: "Grande Hospital" },
  { name: "Suman Karki", batch: "2018", role: "Entrepreneur", company: "Tech Startup" },
];

const benefits = [
  { icon: Users, title: "Networking", desc: "Connect with fellow alumni across the globe" },
  { icon: Calendar, title: "Events", desc: "Exclusive alumni meetups and reunions" },
  { icon: Briefcase, title: "Career Support", desc: "Job referrals and mentorship programs" },
  { icon: Heart, title: "Give Back", desc: "Opportunities to support current students" },
];

export default function AlumniPage() {
  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Alumni Network</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Once a Bridgewaterian, always a Bridgewaterian
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Join Our Growing Community</h2>
                <p className="text-gray-600 mb-4">
                  Our alumni network spans across Nepal and the world, with graduates making significant contributions in various fields including business, medicine, engineering, law, and public service.
                </p>
                <p className="text-gray-600 mb-6">
                  As a BWIC alumnus, you are part of a lifelong community that values connection, support, and shared success.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">5000+</div>
                    <div className="text-sm text-gray-600">Alumni Worldwide</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">20+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-[#c9a227]" />
                  <h3 className="text-xl font-semibold text-[#1e3a5f]">Alumni Benefits</h3>
                </div>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-[#c9a227]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1e3a5f]">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Success Stories</h2>
              <p className="text-gray-600">Our alumni are making a difference around the world</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successStories.map((story, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{story.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-[#1e3a5f]">{story.name}</h3>
                  <p className="text-sm text-[#c9a227] mb-2">Batch of {story.batch}</p>
                  <p className="text-sm text-gray-600">{story.role}</p>
                  <p className="text-sm text-gray-500">{story.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1e3a5f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Are You a BWIC Alumnus?</h2>
            <p className="text-white/80 mb-8">
              Register with our alumni network to stay connected and access exclusive benefits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#c9a227] hover:bg-[#b8921f] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
