import { Button } from "@/components/ui/button"
import { Users, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "./components/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/météorite_article.webp"
          alt="AI Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-transparent" />
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
          Future Sales
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
          L’IA au service du commerce et du marketing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              asChild
            >
              <Link href="https://processia.fr" target="_blank">
                <Building className="mr-2 h-4 w-4" /> Découvrir Processia
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              <Link href="/introduction">
                Commencer
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              asChild
            >
              <Link href="https://chat.whatsapp.com/KEyxhGFxQo17V5XXSUgOIe" target="_blank">
                <Users className="mr-2 h-4 w-4" /> Rejoindre le groupe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Navigation />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <p className="text-white/60">
            © {new Date().getFullYear()} - Introduction à l&apos;Intelligence Artificielle
          </p>
          <p className="text-sm text-white/40">
            Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  )
}