import { Navigation } from "../components/Navigation"
import { PageNavigation } from "../components/PageNavigation"
import { StudentCards } from "../components/StudentCards"

export default function Etudiant() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="relative flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-transparent" />
        <div className="relative z-10 w-full mx-auto px-6">
          <div className="w-full px-6">
            <StudentCards />
          </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  )
}