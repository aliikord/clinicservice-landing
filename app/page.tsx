import { Hero } from "@/components/landing/Hero";
import { VslPlayer } from "@/components/landing/VslPlayer";
import { Marquee } from "@/components/landing/Marquee";
import { About } from "@/components/landing/About";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { Features } from "@/components/landing/Features";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import { AllFeatures } from "@/components/landing/AllFeatures";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { Julia } from "@/components/landing/Julia";
import { Process } from "@/components/landing/Process";
import { Testimonial } from "@/components/landing/Testimonial";
import { CompareTable } from "@/components/landing/CompareTable";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VslPlayer />
        <Marquee />
        <About />
        <StatsStrip />
        <Features />
        <FeatureShowcase />
        <AllFeatures />
        <DashboardMockup />
        <Julia />
        <Process />
        <Testimonial />
        <CompareTable />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
