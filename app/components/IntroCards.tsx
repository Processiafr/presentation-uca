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

interface IntroCardProps {
  title: string
  imageSrc: string
  content?: React.ReactNode
  clickable?: boolean
}

function IntroCard({ title, imageSrc, content, clickable = false }: IntroCardProps) {
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
          <DialogTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-red-200">
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

export function IntroCards() {
  return (
    <div className="flex flex-row gap-6 w-full h-[70vh]">
      <div className="w-1/4">
      <IntroCard
        title="Anne Hathaway & Brad Pitt"
        imageSrc="/images/content/deep-learning-fond-dintelligence-artificielle.webp"
        clickable={false}
      />
      </div>
      
      <div className="w-1/4">
        <IntroCard
          title="Brève histoire de l'IA"
          imageSrc="/images/content/5bddb15e6ac645d490a616d54706f045.webp"
          clickable={true}
          content={
            <div className="space-y-4">
              <div>
                <strong>Définition simple :</strong> L'IA est un ensemble de technologies capables d'imiter certaines fonctions cognitives humaines (raisonnement, prise de décision, reconnaissance d'images/sons, génération de texte, etc.).
              </div>
              <div>
                <strong>Brève évolution historique :</strong>
                <div className="ml-5 mt-2 space-y-2">
                  <div>• Années 1950 : Alan Turing & le concept de machine intelligente.</div>
                  <div>• Années 1980 : Apparition du machine learning.</div>
                  <div>• Années 2010-2020 : Explosion du deep learning et IA générative.</div>
                </div>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="w-1/4">
        <IntroCard
          title="L'IA dans notre quotidien"
          imageSrc="/images/content/owen-beard-K21Dn4OVxNw-unsplash.jpg"
          clickable={true}
          content={
            <div className="space-y-4">
              <div className="ml-5 space-y-2">
                <div>• <strong>Voitures :</strong> capteurs pour phares adaptatifs, freinage d'urgence automatique.</div>
                <div>• <strong>Smartphones :</strong> reconnaissance faciale, filtres photo IA.</div>
                <div>• <strong>Santé :</strong> détection précoce de maladies par IA.</div>
                <div>• <strong>Industrie :</strong> robots dans les usines, maintenance prédictive.</div>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="w-1/4">
        <IntroCard
          title="Les mythes et réalités autour de l'IA"
          imageSrc="/images/content/portrait-ai-robot-urban-area_23-2151015332.webp"
          clickable={false}
        />
      </div>
    </div>
  )
}