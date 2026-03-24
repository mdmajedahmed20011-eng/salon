import { AIAdvisorCTA } from "@/components/home/AIAdvisorCTA";
import { BeforeAfterGallery } from "@/components/home/BeforeAfterGallery";
import { FeaturedStylists } from "@/components/home/FeaturedStylists";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LocationsMap } from "@/components/home/LocationsMap";
import { LoyaltySection } from "@/components/home/LoyaltySection";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { Testimonials } from "@/components/home/Testimonials";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServiceCategories />
      <HowItWorks />
      <FeaturedStylists />
      <BeforeAfterGallery />
      <AIAdvisorCTA />
      <Testimonials />
      <LoyaltySection />
      <LocationsMap />
    </>
  );
}
