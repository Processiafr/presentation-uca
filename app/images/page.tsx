import { Navigation } from "../components/Navigation"
import { PageNavigation } from "../components/PageNavigation"
import { LocalImageExample } from "../components/LocalImageExample"

export default function ImagesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-8">
            Gestion des Images Locales
          </h1>
          
          <LocalImageExample />
        </div>
      </section>

      <PageNavigation />
    </div>
  )
}