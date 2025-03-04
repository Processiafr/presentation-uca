"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const pages = [
  "/introduction",
  "/connaitre",
  "/cerner",
  "/limites",
  "/etudiant",
  "/futur",
  "/exercices"
]

export function PageNavigation() {
  const pathname = usePathname()
  const currentIndex = pages.indexOf(pathname)
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null
  const isIntroduction = pathname === "/introduction"

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
      {isIntroduction && (
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/20"
        >
          <Link href="/">
            <Home className="h-4 w-4" />
          </Link>
        </Button>
      )}
      {prevPage && (
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/20"
        >
          <Link href={prevPage}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
      )}
      {nextPage && (
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/20"
        >
          <Link href={nextPage}>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}