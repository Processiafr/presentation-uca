import { Navigation } from "../components/Navigation"
import { PageNavigation } from "../components/PageNavigation"
import { DangerCards } from "../components/DangerCards"

export default function Limites() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="relative flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 via-orange-800/20 to-transparent" />
        <div className="relative z-10 w-full mx-auto px-6">
          <div className="w-full px-6">
            <DangerCards />
          </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  )
}