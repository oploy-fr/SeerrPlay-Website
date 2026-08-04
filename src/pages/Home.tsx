import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Screenshots } from "@/sections/Screenshots";
import { Features } from "@/sections/Features";
import { HowItWorks } from "@/sections/HowItWorks";
import { OpenSource } from "@/sections/OpenSource";
import { Download } from "@/sections/Download";
import { Faq } from "@/sections/Faq";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-seerr-night font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Screenshots />
        <Features />
        <HowItWorks />
        <OpenSource />
        <Download />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
