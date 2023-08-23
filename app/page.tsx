import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import BooksSection from "@/components/BooksSection"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giovanka Bisano',
  description: 'Software Engineer, Frontend & Android!',
  icons: {
    icon: '/favicon.ico'
  },
  applicationName: "Giovanka's Portfolio",
  authors: { name: "Giovanka Bisano Putra", url: "https://www.linkedin.com/in/giovankabisano/" },
  generator: "Next.js",
  keywords: ["giovanka", "android", "frontend", "bisano", "google analytics", "firebase"],
  openGraph: {
    title: "Giovanka Bisano",
    description: 'Software Engineer, Frontend & Android!'
  }
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
