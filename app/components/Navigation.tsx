"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Brain, Book, Target, AlertTriangle, GraduationCap, Briefcase, Dumbbell, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { href: "/introduction", text: "Introduction", icon: Brain },
  { href: "/connaitre", text: "Mieux me connaître", icon: Book },
  { href: "/cerner", text: "Mieux la cerner", icon: Target },
  { href: "/limites", text: "Limites et dangers", icon: AlertTriangle },
  { href: "/etudiant", text: "Utilisation étudiante", icon: GraduationCap },
  { href: "/futur", text: "Impact professionnel", icon: Briefcase },
  { href: "/exercices", text: "Exercices", icon: Dumbbell },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-between py-4 text-sm gap-4 overflow-x-auto">
          {navigation.map(({ href, text, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-2 transition-colors whitespace-nowrap px-3 py-1",
                  pathname === href
                    ? "text-blue-400"
                    : "text-white/80 hover:text-blue-400"
                )}
              >
                <Icon className="h-4 w-4" />
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center justify-between py-4">
          <Link 
            href="/"
            className="text-white font-semibold"
          >
            UCA Présentation
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col py-2 px-4">
            {navigation.map(({ href, text, icon: Icon }) => (
              <li key={href} className="py-2">
                <Link
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 transition-colors px-3 py-2 rounded-md",
                    pathname === href
                      ? "text-blue-400 bg-blue-950/50"
                      : "text-white/80 hover:text-blue-400 hover:bg-blue-950/30"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}