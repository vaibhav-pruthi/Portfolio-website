import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience, Education } from "@/components/portfolio/Timeline";
import {
  Certifications,
  GitHubStats,
  // Achievements,
  // Resume,
  Testimonials,
} from "@/components/portfolio/MoreSections";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { ScrollProgressBar, CursorGlow } from "@/components/portfolio/Effects";

let isInitialLoad = true;

export function PortfolioLayout() {
  useEffect(() => {
    if (isInitialLoad) {
      isInitialLoad = false;
      // Ensure it scrolls to the absolute top of the page on refresh/load
      window.scrollTo({ top: 0, behavior: "instant" as any });
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <GitHubStats />
      {/* <Achievements /> */}
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </main>
  );
}
