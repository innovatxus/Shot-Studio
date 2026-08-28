import Hero from "@/components/Hero";
import DeferredSection from "@/components/DeferredSection";
import NichesSection from "@/components/NichesSection";
import SubCategoriesSection from "@/components/SubCategoriesSection";
import CreativePowerSection from "@/components/CreativePowerSection";
import ServicesSection from "@/components/ServicesSection";
import PhoneShowcase from "@/components/PhoneShowcase";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import SocialSizes from "@/components/SocialSizes";
import Pricing from "@/components/Pricing";
import Integrations from "@/components/Integrations";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import BentoSection from "@/components/BentoSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id='content' className='relative min-h-screen overflow-x-hidden'>
      {/*
       * Hero is full-width and full-height.
       * It owns the Navbar + video background layout internally.
       * All other sections start after the fold.
       */}
      <Hero />

      {/*
       * ── Below-the-fold sections ──
       *
       * Each is wrapped in DeferredSection so the browser can skip its layout
       * and paint until it approaches the viewport. The estimates are the
       * measured desktop heights — they only govern scrollbar length before a
       * section has been rendered once, after which the browser uses the real
       * height. Order is fixed; see the skill file before changing it.
       */}
      <DeferredSection estimatedHeight={3200}>
        <NichesSection />
      </DeferredSection>

      <DeferredSection estimatedHeight={1800}>
        <CreativePowerSection />
      </DeferredSection>

      <DeferredSection estimatedHeight={2000}>
        <SubCategoriesSection />
      </DeferredSection>

      <DeferredSection estimatedHeight={3400}>
        <ServicesSection />
      </DeferredSection>

      <DeferredSection estimatedHeight={1600}>
        <PhoneShowcase />
      </DeferredSection>

      <DeferredSection estimatedHeight={1400}>
        <BeforeAfterGallery />
      </DeferredSection>

      <DeferredSection estimatedHeight={1200}>
        <SocialSizes />
      </DeferredSection>

      <DeferredSection estimatedHeight={1600}>
        <Pricing />
      </DeferredSection>

      <DeferredSection estimatedHeight={1000}>
        <Integrations />
      </DeferredSection>

      <DeferredSection estimatedHeight={1400}>
        <AIFeaturesSection />
      </DeferredSection>

      <DeferredSection estimatedHeight={800}>
        <div className='pb-60 max-[720px]:pb-40'>
          <FinalCTA />
        </div>
      </DeferredSection>

      <DeferredSection estimatedHeight={1600}>
        <BentoSection />
      </DeferredSection>

      <DeferredSection estimatedHeight={900}>
        <Footer />
      </DeferredSection>
    </main>
  );
}
