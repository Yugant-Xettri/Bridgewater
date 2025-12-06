import HeroSection from "./components/HeroSection";
import WhyChooseBridgewater from "./components/WhyChooseBridgewater";
import ProgramsSection from "./components/ProgramsSection";
import FacilitiesSection from "./components/FacilitiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AdmissionProcessSection from "./components/AdmissionProcessSection";
import AchievementsSection from "./components/AchievementsSection";
import GalleryCarousel from "./components/GalleryCarousel";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <WhyChooseBridgewater />

      <ProgramsSection />

      <FacilitiesSection />

      <TestimonialsSection />

      <AdmissionProcessSection />

      <AchievementsSection />

      <GalleryCarousel />

      <CallToActionSection />

      <Footer />
    </main>
  );
}
