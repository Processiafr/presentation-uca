"use client"

import React, { useState } from "react"
import Image from "next/image"
import { 
  Calendar, 
  Store, 
  MessageSquare, 
  Users, 
  ChevronRight, 
  ChevronLeft,
  Briefcase,
  Lightbulb
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImpactCategory {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  image: string
  content: React.ReactNode
}

export function ProfessionalImpact() {
  const [activeCategory, setActiveCategory] = useState<string>("events")
  
  const categories: ImpactCategory[] = [
    {
      id: "events",
      title: "Gestion d'événements et de formations",
      icon: <Calendar className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-cyan-400" />
            <span>Comment l'IA va révolutionner l'événementiel ?</span>
          </h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-cyan-400" />
              </div>
              <span><strong className="text-cyan-300">Planification intelligente :</strong> Organisation automatique des plannings et des invitations.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-cyan-400" />
              </div>
              <span><strong className="text-cyan-300">Analyse de l'audience :</strong> IA pour personnaliser le contenu des événements.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-cyan-400" />
              </div>
              <span><strong className="text-cyan-300">Automatisation des tâches logistiques :</strong> Booking, gestion des lieux, envoi de rappels.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-cyan-400" />
              </div>
              <span><strong className="text-cyan-300">Chatbots et assistances vocales</strong> pour gérer les inscriptions et l'accueil.</span>
            </li>
          </ul>
          
          <div className="bg-cyan-900/30 p-4 rounded-xl border border-cyan-500/30 mt-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
              <p>
                <strong className="text-cyan-300">Exemple concret :</strong> Imagine un assistant IA qui gère ton planning de A à Z pour organiser une masterclass avec un suivi personnalisé pour chaque participant.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "retail",
      title: "Point de vente & gestion commerciale",
      icon: <Store className="h-6 w-6" />,
      color: "from-emerald-600 to-green-600",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Store className="h-5 w-5 text-green-400" />
            <span>L'IA va transformer la gestion des points de vente :</span>
          </h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
              <span><strong className="text-green-300">Optimisation des KPIs :</strong> Analyse des ventes en temps réel, prédictions des tendances.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
              <span><strong className="text-green-300">Automatisation des plannings :</strong> Création dynamique d'horaires en fonction de l'affluence.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
              <span><strong className="text-green-300">Gestion intelligente des stocks :</strong> Anticipation des ruptures et optimisation des commandes.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
              <span><strong className="text-green-300">Merchandising personnalisé :</strong> Recommandations d'agencement basées sur les données clients.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
              <span><strong className="text-green-300">Analyse des flux clients :</strong> L'IA détecte les zones chaudes et froides pour optimiser les espaces.</span>
            </li>
          </ul>
          
          <div className="bg-green-900/30 p-4 rounded-xl border border-green-500/30 mt-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
              <p>
                <strong className="text-green-300">Exemple concret :</strong> L'IA peut analyser les tickets de caisse pour recommander les produits à mettre en avant selon les tendances locales.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "marketing",
      title: "Communication & Marketing IA-driven",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-purple-600 to-violet-600",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-purple-400" />
            <span>L'IA au service du marketing :</span>
          </h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-purple-400" />
              </div>
              <span><strong className="text-purple-300">Automatisation des campagnes publicitaires</strong> (Google Ads, Meta Ads).</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-purple-400" />
              </div>
              <span><strong className="text-purple-300">Génération de contenu personnalisé</strong> (emails, posts, articles, vidéos).</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-purple-400" />
              </div>
              <span><strong className="text-purple-300">Analyse de la réputation</strong> de la marque en temps réel.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-purple-400" />
              </div>
              <span><strong className="text-purple-300">Optimisation des budgets publicitaires</strong> avec l'IA prédictive.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-purple-400" />
              </div>
              <span><strong className="text-purple-300">Growth Hacking :</strong> Stratégies d'acquisition automatisées basées sur l'IA.</span>
            </li>
          </ul>
          
          <div className="bg-purple-900/30 p-4 rounded-xl border border-purple-500/30 mt-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
              <p>
                <strong className="text-purple-300">Exemple concret :</strong> Un étudiant en stage utilise ChatGPT + Notion AI pour créer un plan marketing en quelques minutes et le peaufine avec ses compétences stratégiques.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "customer",
      title: "Relation client & expérience utilisateur",
      icon: <Users className="h-6 w-6" />,
      color: "from-orange-600 to-amber-600",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Users className="h-5 w-5 text-amber-400" />
            <span>Comment l'IA améliore l'expérience client ?</span>
          </h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-amber-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-amber-400" />
              </div>
              <span><strong className="text-amber-300">Chatbots et assistances virtuelles :</strong> Disponibles 24/7 pour répondre aux questions.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-amber-400" />
              </div>
              <span><strong className="text-amber-300">Analyse des feedbacks clients :</strong> Détection automatique des tendances et insatisfactions.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-amber-400" />
              </div>
              <span><strong className="text-amber-300">Recommandations ultra-personnalisées :</strong> IA qui propose des offres sur-mesure.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-500/20 p-1 rounded-full mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-amber-400" />
              </div>
              <span><strong className="text-amber-300">Automatisation du support client :</strong> Réduction des délais de réponse et des coûts.</span>
            </li>
          </ul>
          
          <div className="bg-amber-900/30 p-4 rounded-xl border border-amber-500/30 mt-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
              <p>
                <strong className="text-amber-300">Exemple concret :</strong> Un étudiant technico-commercial gère un portefeuille de clients et utilise un assistant IA pour détecter les prospects les plus chauds et prioriser ses relances.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]
  
  const activeItem = categories.find(cat => cat.id === activeCategory) || categories[0]
  
  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-6">
        <div className="bg-black/40 backdrop-blur-sm p-2 rounded-full border border-white/10 flex gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full flex items-center gap-2 px-4 transition-all duration-300",
                activeCategory === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {category.icon}
              <span className="hidden md:inline">{category.title}</span>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 grid grid-cols-12 gap-6">
        {/* Left Navigation */}
        <div className="col-span-1 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/30 backdrop-blur-sm hover:bg-white/10"
            onClick={() => {
              const currentIndex = categories.findIndex(cat => cat.id === activeCategory)
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1
              setActiveCategory(categories[prevIndex].id)
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="col-span-10 grid grid-cols-2 gap-6 h-full">
          {/* Left Panel - Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
            <div className="absolute top-0 left-0 right-0 p-6">
              <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${activeItem.color}`}>
                {activeItem.title}
              </h3>
              <div className="mt-2 flex items-center">
                <div className={`p-2 rounded-full bg-gradient-to-r ${activeItem.color}`}>
                  {activeItem.icon}
                </div>
                <div className="ml-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  <span className="text-sm text-white/80">Impact professionnel</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Content */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 overflow-y-auto">
            {activeItem.content}
          </div>
        </div>
        
        {/* Right Navigation */}
        <div className="col-span-1 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/30 backdrop-blur-sm hover:bg-white/10"
            onClick={() => {
              const currentIndex = categories.findIndex(cat => cat.id === activeCategory)
              const nextIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0
              setActiveCategory(categories[nextIndex].id)
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}