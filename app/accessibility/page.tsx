import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalArticle from "@/components/legal/LegalArticle";
import { ACCESSIBILITY_PAGE } from "@/lib/legal/content/accessibility";

export const metadata: Metadata = {
  title: ACCESSIBILITY_PAGE.title.en,
  description: ACCESSIBILITY_PAGE.meta.en,
  alternates: {
    languages: {
      en: "/accessibility",
      ar: "/accessibility?lang=ar",
    },
  },
};

export default function Page_accessibility() {
  return (
    <>
      <Navbar />
      <main className='relative min-h-screen overflow-x-hidden' id='content'>
        <LegalArticle page={ACCESSIBILITY_PAGE} />
        <Footer />
      </main>
    </>
  );
}
