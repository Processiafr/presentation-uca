"use client"

import React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export function LocalImageExample() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
        Utilisation d&apos;images locales
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 bg-black/40 backdrop-blur-sm border border-white/10">
          <h3 className="text-lg font-medium text-white mb-2">Comment utiliser des images locales</h3>
          <div className="space-y-2 text-white/80">
            <p>1. Placez vos images dans le dossier <code className="bg-black/30 px-1 py-0.5 rounded">/public/images/</code></p>
            <p>2. Référencez-les avec le chemin <code className="bg-black/30 px-1 py-0.5 rounded">/images/nom-image.png</code></p>
            <p>3. Utilisez le composant Image de Next.js pour un affichage optimisé</p>
          </div>
        </Card>
        
        <Card className="p-4 bg-black/40 backdrop-blur-sm border border-white/10">
          <h3 className="text-lg font-medium text-white mb-2">Exemple de code</h3>
          <pre className="bg-black/30 p-3 rounded-md text-sm overflow-x-auto">
            <code className="text-white/90">
{`import Image from "next/image"

<Image 
  src="/images/votre-image.png" 
  alt="Description" 
  width={500} 
  height={300} 
/>`}
            </code>
          </pre>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="overflow-hidden bg-black border-white/10">
          <div className="p-4">
            <h3 className="font-medium text-white">Images d&apos;icônes</h3>
            <p className="text-sm text-white/70">Placez vos icônes dans <code className="bg-black/30 px-1 py-0.5 rounded text-xs">/images/icons/</code></p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/60 text-sm">Exemple: icône.svg</p>
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden bg-black border-white/10">
          <div className="p-4">
            <h3 className="font-medium text-white">Images d&apos;arrière-plan</h3>
            <p className="text-sm text-white/70">Placez vos fonds dans <code className="bg-black/30 px-1 py-0.5 rounded text-xs">/images/backgrounds/</code></p>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/60 text-sm">Exemple: fond.webp</p>
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden bg-black border-white/10">
          <div className="p-4">
            <h3 className="font-medium text-white">Images de contenu</h3>
            <p className="text-sm text-white/70">Placez vos images dans <code className="bg-black/30 px-1 py-0.5 rounded text-xs">/images/content/</code></p>
          </div>
          <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/50 p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/60 text-sm">Exemple: photo.png</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}