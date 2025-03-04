"use client"

import Image from "next/image"
import React from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Shield, AlertTriangle, Leaf, Globe } from "lucide-react"

interface DangerCardProps {
  title: string
  imageSrc: string
  icon: React.ReactNode
  content?: React.ReactNode
  clickable?: boolean
}

function DangerCard({ title, imageSrc, icon, content, clickable = false }: DangerCardProps) {
  const cardElement = (
    <Card className={`overflow-hidden ${clickable ? "cursor-pointer" : ""} transition-all duration-300 hover:scale-105 hover:shadow-xl bg-black border-white/10 h-full w-full rounded-3xl`}>
      <div className="relative w-full h-full aspect-[9/16]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
          {icon}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
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
      <DialogContent className="bg-black/90 border-white/20 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-orange-200">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="text-white/80 mt-4">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function DangerCards() {
  return (
    <div className="flex flex-row gap-6 w-full h-[70vh]">
      <div className="w-1/4">
        <DangerCard
          title="Sécurité des données"
          imageSrc="images/content/data.jpg"
          icon={<Shield className="h-6 w-6 text-red-400" />}
          clickable={true}
          content={
            <div className="space-y-4">
              <div>
                <strong className="text-red-400">Non, vos recherches ne sont pas privées</strong>
              </div>
              <div>
                <strong>📢 Points clés :</strong>
                <div className="ml-5 mt-2 space-y-2">
                  <div>• Quand vous utilisez une IA ou un moteur de recherche, vos requêtes sont souvent enregistrées et analysées.</div>
                  <div>• Exemple marquant : Google enregistre vos recherches, ChatGPT peut stocker certaines interactions (sauf en mode incognito, et encore ...).</div>
                </div>
              </div>
              <div>
                <strong>💰 La guerre des données :</strong> Pourquoi des entreprises comme OpenAI, Google et Meta investissent-elles autant ? Parce que les données sont le nouveau pétrole.
                <div className="ml-5 mt-2">
                  <div>• Cas récent : OpenAI et Microsoft poursuivis pour collecte illégale de données web.</div>
                </div>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="w-1/4">
        <DangerCard
          title="Hallucinations des IA"
          imageSrc="images/content/dream.jpg"
          icon={<AlertTriangle className="h-6 w-6 text-yellow-400" />}
          clickable={true}
          content={
            <div className="space-y-4">
              <div>
                <strong className="text-yellow-400">Non, l'IA n'as pas toujours raison</strong>
              </div>
              <div>
                <strong>📢 Points clés :</strong>
                <div className="ml-5 mt-2 space-y-2">
                  <div>• L'IA ne sait pas ce qu'elle dit. Elle prédit des mots, elle n'a aucune compréhension réelle.</div>
                  <div>• Les chiffres parlent : Étude OpenAI (octobre 2024) sur 4 000 questions factuelles :</div>
                  <div className="ml-5">
                    <div>- OpenAI o1-preview : 47 % de bonnes réponses</div>
                    <div>- Claude 3.5 Sonnet : 44,5 %</div>
                    <div>- GPT-4o : 38 %</div>
                  </div>
                </div>
              </div>
              <div>
                <strong>⚠ Implication :</strong> Une IA peut générer des informations fausses mais très convaincantes (exemple : faux articles de presse).
              </div>
            </div>
          }
        />
      </div>
      
      <div className="w-1/4">
        <DangerCard
          title="L'impact écologique"
          imageSrc="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d"
          icon={<Leaf className="h-6 w-6 text-green-400" />}
          clickable={true}
          content={
            <div className="space-y-4">
              <div>
                <strong>📢 Points clés :</strong>
                <div className="ml-5 mt-2 space-y-2">
                  <div>• Un chatbot, c'est 10x plus gourmand qu'une recherche Google.</div>
                  <div>• ⚡ Entraîner GPT-4 aurait consommé autant d'électricité qu'une ville de 100 000 habitants pendant plusieurs mois.</div>
                  <div>• L'eau ? Les data centers utilisent des milliards de litres d'eau pour le refroidissement.</div>
                  <div>• Extraction des métaux rares (lithium, cobalt) pour les puces nécessaires à l'IA.</div>
                </div>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="w-1/4">
        <DangerCard
          title="Les enjeux géopolitiques"
          imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          icon={<Globe className="h-6 w-6 text-blue-400" />}
          clickable={true}
          content={
            <div className="space-y-4">
              <div>
                <strong>📢 Points clés :</strong>
                <div className="ml-5 mt-2 space-y-2">
                  <div>• OpenAI, Microsoft et Google dominent le marché, mais qui contrôle vraiment l'IA ?</div>
                  <div>• 🏆 Course à la puissance : OpenAI, Google et Meta vs China AI Alliance.</div>
                  <div>• Open Source vs Fermé : La guerre entre des modèles comme Llama (Meta) et ceux fermés comme GPT-4.</div>
                  <div>• Régulations en cours : L'UE impose un cadre (AI Act), la Chine surveille strictement, les USA hésitent.</div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}