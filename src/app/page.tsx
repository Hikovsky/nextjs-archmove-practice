import GallerySection from "@/components/sections/gallerySection";
import HomeSection from "@/components/sections/homeSection";
import Header from "@/components/header";
import ArchitectsSection from "@/components/sections/architectsSection";
import QuotesSection from "@/components/sections/quotesSection";
import DreamSection from "@/components/sections/dreamSection";
import PartnersSection from "@/components/sections/partnersSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <GallerySection />
        <ArchitectsSection />
        <QuotesSection />
        <DreamSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  )
}
