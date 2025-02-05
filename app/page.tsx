import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import GallerySection from "@/components/GallerySection"
import JoinUsSection from "@/components/JoinUsSection"

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <section id="home">
        <HeroSection />
      </section>
      <AboutSection />
      <GallerySection />
      <JoinUsSection />
    </div>
  )
}

