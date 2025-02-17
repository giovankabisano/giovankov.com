import AboutSection from "@/app/_components/AboutSection"
import HeroSection from "@/app/_components/HeroSection"
import ProjectsSection from "@/app/_components/ProjectsSection"
import BooksSection from "@/app/_components/BooksSection"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wedding of Ivan & Rosa',
  icons: {
    icon: {
      url: '/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon'
    }
  },
  applicationName: "Giovanka's Portfolio",
  authors: { name: "Giovanka Bisano Putra", url: "https://www.linkedin.com/in/giovankabisano/" },
  generator: "Next.js",
  keywords: ["giovanka", "android", "frontend", "bisano", "google analytics", "firebase"],
  openGraph: {
    title: "Giovanka Bisano Putra",
    description: 'Giovanka Bisano Portfolio | Software Engineer, Frontend & Android! | Kotlin, React Native, React JS, Next JS, Go'
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
