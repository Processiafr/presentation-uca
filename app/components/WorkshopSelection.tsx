"use client"

import React, { useState } from "react"
import Image from "next/image"
import { 
  Mail, 
  Linkedin, 
  Mic, 
  ChevronRight,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Workshop {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  image: string
  description: string
  steps: string[]
  deliverable: string
  link: string
}

export function WorkshopSelection() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null)
  
  const workshops: Workshop[] = [
    {
      id: "email",
      title: "Rédiger un cold-email efficace",
      icon: <Mail className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2",
      description: "Apprenez à créer des emails percutants pour vendre vos services en freelance",
      steps: [
        "Comprendre l'impact d'un cold-email",
        "Créer et tester différentes versions avec l'IA",
        "Finaliser et optimiser son email"
      ],
      deliverable: "Un cold-email prêt à être envoyé",
      link: "https://changeable-theory-bfb.notion.site/R-diger-un-cold-email-efficace-pour-vendre-ses-services-en-freelance-1ab9aed6272f801fa3a6cf09c6efffbd?pvs=4"
    },
    {
      id: "linkedin",
      title: "Créer un post LinkedIn percutant",
      icon: <Linkedin className="h-6 w-6" />,
      color: "from-indigo-600 to-violet-600",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c",
      description: "Concevez un post LinkedIn engageant de A à Z (Texte + Image)",
      steps: [
        "Trouver une idée forte et un angle engageant",
        "Créer le texte et le visuel avec l'IA",
        "Peaufiner et optimiser son post"
      ],
      deliverable: "Un post LinkedIn finalisé (texte + visuel IA)",
      link: "https://changeable-theory-bfb.notion.site/Cr-er-un-post-LinkedIn-percutant-de-A-Z-Texte-Image-1ab9aed6272f807fbb50fde53e622d32?pvs=4"
    },
    {
      id: "masterclass",
      title: "Concevoir une masterclass gratuite",
      icon: <Mic className="h-6 w-6" />,
      color: "from-amber-600 to-orange-600",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      description: "Créez une masterclass impactante pour des associations",
      steps: [
        "Définir son public et ses objectifs pédagogiques",
        "Construire un programme structuré et engageant",
        "Prévoir des ateliers et du contenu interactif"
      ],
      deliverable: "Un programme détaillé de masterclass avec atelier interactif",
      link: "https://changeable-theory-bfb.notion.site/Concevoir-une-masterclass-gratuite-pour-des-associations-1ab9aed6272f80579944cee2ed02ccd4?pvs=4"
    }
  ]
  
  const handleSelectWorkshop = (id: string) => {
    setSelectedWorkshop(id)
  }
  
  const selectedWorkshopData = workshops.find(w => w.id === selectedWorkshop)
  
  return (
    <div className="h-full flex flex-col">
      {/* Workshop Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {workshops.map((workshop) => (
          <div 
            key={workshop.id}
            onClick={() => handleSelectWorkshop(workshop.id)}
            className={cn(
              "relative rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300",
              selectedWorkshop === workshop.id 
                ? `border-2 border-${workshop.id === 'email' ? 'blue' : workshop.id === 'linkedin' ? 'indigo' : 'amber'}-400 shadow-lg shadow-${workshop.id === 'email' ? 'blue' : workshop.id === 'linkedin' ? 'indigo' : 'amber'}-400/20 scale-[1.02]` 
                : "border-white/10 hover:border-white/30"
            )}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={workshop.image}
                alt={workshop.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              
              <div className={`absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r ${workshop.color}`}>
                {workshop.icon}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{workshop.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{workshop.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Workshop Details */}
      {selectedWorkshopData && (
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 flex-1">
          <div className="flex flex-col md:flex-row gap-6 h-full">
            <div className="w-full md:w-2/3 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full bg-gradient-to-r ${selectedWorkshopData.color}`}>
                  {selectedWorkshopData.icon}
                </div>
                <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${selectedWorkshopData.color}`}>
                  {selectedWorkshopData.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Étapes :</h4>
                <div className="space-y-3">
                  {selectedWorkshopData.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`rounded-full p-1 mt-0.5 bg-${selectedWorkshopData.id === 'email' ? 'blue' : selectedWorkshopData.id === 'linkedin' ? 'indigo' : 'amber'}-500/20 mr-3`}>
                        <ChevronRight className={`h-4 w-4 text-${selectedWorkshopData.id === 'email' ? 'blue' : selectedWorkshopData.id === 'linkedin' ? 'indigo' : 'amber'}-400`} />
                      </div>
                      <span className="text-white/90">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Rendu attendu :</h4>
                <p className="text-white/80 bg-black/30 p-3 rounded-lg border border-white/10">
                  {selectedWorkshopData.deliverable}
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex items-center justify-center">
              <Button
                asChild
                size="lg"
                className={`w-full md:w-auto rounded-full bg-gradient-to-r ${selectedWorkshopData.color} hover:opacity-90 transition-opacity`}
              >
                <a href={selectedWorkshopData.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Commencer l'atelier
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}