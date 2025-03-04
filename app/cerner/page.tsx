import { Navigation } from "../components/Navigation"
import { PageNavigation } from "../components/PageNavigation"
import { AIQuiz } from "../components/AIQuiz"

export default function Cerner() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="relative flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-transparent" />
        <div className="relative z-10 w-full mx-auto px-6">
          <div className="w-full px-6">
            <AIQuiz />
          </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  )
}