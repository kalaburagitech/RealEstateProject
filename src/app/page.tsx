import CallToAction from "@/components/call-to-action";
import ContactPage from "@/components/contact";
import FAQ from "@/components/FAQ";
import FeaturedProperties from "@/components/featured-properties";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ImageGallery from "@/components/image-gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ImageGallery />
        <FeaturedProperties />
        <CallToAction />
        <FAQ />
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}

