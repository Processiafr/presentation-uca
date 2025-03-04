import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Introduction à l'Intelligence Artificielle",
  description: "Découvrez le futur de la technologie et son impact sur notre société",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-black antialiased")}>{children}</body>
    </html>
  )
}