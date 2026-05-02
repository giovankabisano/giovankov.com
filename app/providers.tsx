"use client"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}
