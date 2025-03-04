"use client"

import React from "react"
import Image from "next/image"
import { Code, Gamepad2, Box, Music, Bot, Wrench, Sparkles, Rocket, Coffee, Headphones } from "lucide-react"

export function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Left Section - Photo */}
      <div className="w-full md:w-1/3">
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
          <Image
            src="/images/content/Marius.jpg"
            alt="Marius Brunet"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white">Marius Brunet, 23 ans</h3>
            <p className="text-white/80 mt-2">et pas du tout destiné à être devant vous aujourd'hui !</p>
          </div>
        </div>
      </div>

      {/* Middle Section - Experiences */}
      <div className="w-full md:w-1/3 relative flex items-center">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
        
        <div className="space-y-8 relative w-full">
          {/* Timeline Item 1 */}
          <div className="relative pl-10">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transform -translate-x-1/2">
              <Wrench className="h-4 w-4 text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold text-blue-300">Vers mes 7 ans ...</h4>
              <p className="text-white/80 text-sm">Je débute le montage</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-10">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center transform -translate-x-1/2">
              <Gamepad2 className="h-4 w-4 text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold text-indigo-300">Vers mes 10 ans ...</h4>
              <p className="text-white/80 text-sm">Je développe mon premier jeu vidéo</p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative pl-10">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center transform -translate-x-1/2">
              <Box className="h-4 w-4 text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold text-violet-300">3D et jeux vidéo</h4>
              <p className="text-white/80 text-sm">Builder (Minecraft, Unity/Blender)</p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative pl-10">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center transform -translate-x-1/2">
              <Music className="h-4 w-4 text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold text-purple-300">Musique & inspirations</h4>
              <p className="text-white/80 text-sm">Électro, rap, Laylow, Luther</p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="relative pl-10">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center transform -translate-x-1/2">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold text-pink-300">Consultant IA</h4>
              <p className="text-white/80 text-sm">Automatisation, LLM, gestion de projet</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Tools Patchwork */}
      <div className="w-full md:w-1/3">
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 h-full">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300 mb-4">
            Outils que j&apos;utilise
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Tool 1 - Python */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="images/icons/Notion.webp"
                  alt="Notion"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 2 - React */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="images/icons/Make.webp"
                  alt="Make"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 3 - Node.js */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="images/icons/N8n.webp"
                  alt="N8N"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 4 - TensorFlow */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="images/icons/openai.webp"
                  alt="Open AI"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 5 - Docker */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="images/icons/perplexity.webp"
                  alt="Perplexity"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 6 - AWS */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="images/icons/LinkedIn.webp"
                  alt="Deepseek"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 7 - VS Code */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="images/icons/deepseek.webp"
                  alt="VS Code"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 8 - GitHub */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Tool 9 - Figma */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="relative w-full h-full">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                  alt="Figma"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/90 italic">
              Mon slogan : Là où le R.O.I est ROI
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}