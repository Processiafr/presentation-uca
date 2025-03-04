"use client"

import React from "react"
import Image from "next/image"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Lightbulb, CheckCircle, BookOpen, PenTool as Tool, Check, X } from "lucide-react"

interface StudentCardProps {
  title: string
  imageSrc: string
  icon: React.ReactNode
  content?: React.ReactNode
  clickable?: boolean
  variant?: "left" | "right" | "center"
}

function StudentCard({ 
  title, 
  imageSrc, 
  icon, 
  content, 
  clickable = false,
  variant = "left"
}: StudentCardProps) {
  const cardElement = (
    <Card className={`overflow-hidden ${clickable ? "cursor-pointer" : ""} transition-all duration-300 hover:scale-105 hover:shadow-xl bg-black border-white/10 h-full w-full rounded-3xl relative`}>
      <div className="relative w-full h-full aspect-video">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {variant === "left" && (
          <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-indigo-900/70 to-transparent" />
        )}
        
        {variant === "right" && (
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-violet-900/70 to-transparent" />
        )}
        
        {variant === "center" && (
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-black via-indigo-900/40 to-transparent" />
        )}
        
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
          {icon}
        </div>
        
        <div className={`absolute bottom-0 p-6 ${variant === "right" ? "right-0 text-right w-1/2" : variant === "left" ? "left-0 w-1/2" : "left-0 right-0 text-center"}`}>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </Card>
  )

  if (!clickable || !content) {
    return cardElement
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {cardElement}
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-white/20 text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-violet-200">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="text-white/80 mt-4 max-h-[70vh] overflow-y-auto pr-2">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function StudentCards() {
  return (
    <div className="flex flex-col gap-6 w-full h-[70vh]">
      <div className="h-1/3">
        <StudentCard
          title="Outils IA utiles pour les étudiants"
          imageSrc="images/backgrounds/2.jpg"
          icon={<Tool className="h-6 w-6 text-indigo-400" />}
          clickable={true}
          variant="left"
          content={
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-3 px-4 text-left text-indigo-300">Outil</th>
                      <th className="py-3 px-4 text-left text-indigo-300">Utilité</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">Perplexity</td>
                      <td className="py-3 px-4">Recherche en temps réel sur le net avec citations</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">Qwen</td>
                      <td className="py-3 px-4">Génération d'images et vidéos gratuites</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">Dola.ia</td>
                      <td className="py-3 px-4">Calendrier et organisation via WhatsApp</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">GPT-4o vocal</td>
                      <td className="py-3 px-4">Structurer des échanges et discussions</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">Notion AI</td>
                      <td className="py-3 px-4">Gestion de projet et prise de notes intelligente</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">Gamma.ia</td>
                      <td className="py-3 px-4">Génération automatique de présentations PPT</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">Elicit</td>
                      <td className="py-3 px-4">Recherche académique assistée par IA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="h-1/3">
        <StudentCard
          title="Bonnes & mauvaises pratiques"
          imageSrc="images/backgrounds/3.jpg"
          icon={<CheckCircle className="h-6 w-6 text-green-400" />}
          clickable={true}
          variant="center"
          content={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-900/30 to-green-700/30 p-5 rounded-xl border border-green-500/30">
                <h4 className="text-xl font-bold text-green-300 mb-3 flex items-center">
                  <Check className="mr-2 h-5 w-5" /> Bonnes pratiques
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Toujours vérifier les sources (Google Scholar, sites académiques, Elicit).</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Utiliser l'IA comme assistant, pas comme remplaçant.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Comparer les résultats de plusieurs outils pour éviter les biais.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Reformuler les réponses IA pour mieux comprendre.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-red-900/30 to-red-700/30 p-5 rounded-xl border border-red-500/30">
                <h4 className="text-xl font-bold text-red-300 mb-3 flex items-center">
                  <X className="mr-2 h-5 w-5" /> Mauvaises pratiques
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Faire ses devoirs sans compréhension.</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Copier-coller sans analyse critique.</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Croire que l'IA ne fait pas d'erreurs.</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Partager des données personnelles sur des IA non sécurisées.</span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="h-1/3">
        <StudentCard
          title="Cas pratiques"
          imageSrc="images/backgrounds/4.jpg"
          icon={<BookOpen className="h-6 w-6 text-violet-400" />}
          clickable={true}
          variant="right"
          content={
            <div className="space-y-6">
              <div className="bg-indigo-900/20 p-5 rounded-xl border border-indigo-500/30">
                <h4 className="text-xl font-bold text-indigo-300 mb-3">
                  ✏️ Cas 1 : Améliorer un texte académique
                </h4>
                <div className="space-y-2">
                  <p><strong className="text-indigo-200">📍 Contexte :</strong> Un étudiant doit rédiger un rapport en marketing, mais son texte manque de clarté et de structure.</p>
                </div>
              </div>
              
              <div className="bg-violet-900/20 p-5 rounded-xl border border-violet-500/30">
                <h4 className="text-xl font-bold text-violet-300 mb-3">
                  📊 Cas 2 : Préparer une présentation commerciale
                </h4>
                <div className="space-y-2">
                  <p><strong className="text-violet-200">📍 Contexte :</strong> Un étudiant doit présenter un produit technique à un client.</p>
                </div>
              </div>
              
              <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-300 mb-3">
                  📌 Cas 3 : Vérifier une information et éviter les biais
                </h4>
                <div className="space-y-2">
                  <p><strong className="text-blue-200">📍 Contexte :</strong> Un étudiant trouve une information sur l'IA mais ne sait pas si elle est fiable.</p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}