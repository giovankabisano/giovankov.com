import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import BooksSection from "@/components/BooksSection"
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Giovanka Bisano',
  description: 'Software Engineer, Frontend & Android!',
  icons: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
  applicationName: "Giovanka's Portfolio",
  authors: { name: "Giovanka Bisano Putra", url: "https://www.linkedin.com/in/giovankabisano/" },
  generator: "Next.js",
  keywords: ["giovanka", "android", "frontend", "bisano", "google analytics", "firebase"]
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BooksSection />
    </main>
  )
}
