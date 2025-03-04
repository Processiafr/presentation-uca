import { Navigation } from "../components/Navigation"
import { PageNavigation } from "../components/PageNavigation"
import Image from "next/image"

export default function Bilan() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-amber-600/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-amber-200">
            Bilan
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                L&apos;IA est plus qu&apos;une simple technologie ; c&apos;est un catalyseur de changement 
                qui redéfinit notre façon de vivre, d&apos;apprendre et de travailler. Sa maîtrise 
                devient essentielle pour naviguer dans le monde moderne.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                En comprenant ses forces, ses limites et ses implications, nous pouvons 
                mieux nous préparer à un avenir où l&apos;IA jouera un rôle central dans nos vies.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
                alt="AI Future"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  )
}