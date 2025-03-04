"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain, Book, Target, AlertTriangle, GraduationCap, Briefcase, Dumbbell } from "lucide-react"
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

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-between py-4 text-sm gap-4 overflow-x-auto">
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
      </div>
    </nav>
  )
}