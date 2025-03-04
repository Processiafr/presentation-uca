"use client"

import React, { useState } from "react"
import Image from "next/image"
import { 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft,
  Dumbbell,
  Brain,
  Lightbulb
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface Exercise {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  image: string
}

const exercises: Exercise[] = [
  {
    id: 1,
    question: "Quelle affirmation est correcte concernant les modèles de langage comme ChatGPT ?",
    options: [
      "Ils comprennent réellement le sens des mots qu'ils utilisent",
      "Ils prédisent le mot suivant en fonction des probabilités statistiques",
      "Ils possèdent une conscience similaire à celle des humains",
      "Ils peuvent accéder à toutes les informations du web en temps réel"
    ],
    correctAnswer: 1,
    explanation: "Les modèles de langage comme ChatGPT fonctionnent en prédisant statistiquement le mot suivant le plus probable dans une séquence, sans réelle compréhension du sens ou conscience.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },
  {
    id: 2,
    question: "Quel est l'impact environnemental principal de l'entraînement des grands modèles d'IA ?",
    options: [
      "Pollution sonore des centres de données",
      "Consommation importante d'électricité et d'eau",
      "Émission de gaz toxiques",
      "Déforestation pour l'installation des serveurs"
    ],
    correctAnswer: 1,
    explanation: "L'entraînement des grands modèles d'IA nécessite une consommation massive d'électricité pour alimenter les GPU et d'eau pour refroidir les centres de données.",
    image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d"
  },
  {
    id: 3,
    question: "Quelle est la meilleure pratique pour utiliser l'IA dans un contexte éducatif ?",
    options: [
      "Copier-coller directement les réponses de l'IA dans vos devoirs",
      "Utiliser l'IA pour générer tout votre travail sans vérification",
      "Utiliser l'IA comme outil d'assistance et vérifier ses réponses",
      "Éviter complètement l'utilisation de l'IA"
    ],
    correctAnswer: 2,
    explanation: "L'IA est plus efficace comme outil d'assistance qui vous aide à apprendre, mais ses réponses doivent toujours être vérifiées car elle peut commettre des erreurs ou présenter des biais.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
  },
  {
    id: 4,
    question: "Quel terme désigne le phénomène où une IA génère des informations fausses mais présentées de façon convaincante ?",
    options: [
      "Hallucination",
      "Illusion",
      "Fabrication",
      "Imagination"
    ],
    correctAnswer: 0,
    explanation: "Les 'hallucinations' sont des informations incorrectes ou inventées que l'IA présente comme des faits. Ce phénomène est l'un des défis majeurs des systèmes d'IA actuels.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e"
  },
  {
    id: 5,
    question: "Comment l'IA est-elle susceptible d'impacter le marché du travail ?",
    options: [
      "Elle remplacera tous les emplois humains d'ici 5 ans",
      "Elle n'aura aucun impact significatif sur l'emploi",
      "Elle transformera de nombreux métiers et en créera de nouveaux",
      "Elle affectera uniquement les emplois manuels"
    ],
    correctAnswer: 2,
    explanation: "L'IA transforme les métiers existants et crée de nouvelles opportunités. Elle automatise certaines tâches mais nécessite aussi de nouvelles compétences et crée de nouveaux rôles.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
  }
]

export function Exercises() {
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])
  
  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
    
    if (index === exercises[currentExercise].correctAnswer) {
      if (!completed.includes(currentExercise)) {
        setScore(score + 1)
      }
    }
    
    if (!completed.includes(currentExercise)) {
      setCompleted([...completed, currentExercise])
    }
  }
  
  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }
  
  const prevExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }
  
  const resetExercise = () => {
    setSelectedAnswer(null)
    setShowExplanation(false)
  }
  
  const exercise = exercises[currentExercise]
  const progress = (completed.length / exercises.length) * 100
  
  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-yellow-400" />
            <span className="text-white/80">Progression</span>
          </div>
          <div className="text-white/80">
            <span className="font-bold text-yellow-400">{score}</span>/{exercises.length} correct
          </div>
        </div>
        <Progress value={progress} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-yellow-500 to-amber-500" />
      </div>
      
      {/* Exercise Content */}
      <div className="flex-1 grid grid-cols-12 gap-6">
        {/* Left Navigation */}
        <div className="col-span-1 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/30 backdrop-blur-sm hover:bg-white/10"
            onClick={prevExercise}
            disabled={currentExercise === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="col-span-10 grid grid-cols-2 gap-6 h-full">
          {/* Left Panel - Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <Image
              src={exercise.image}
              alt={`Exercise ${exercise.id}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
            <div className="absolute top-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2">
                <div className="bg-yellow-500/20 p-1 rounded-full">
                  <Brain className="h-5 w-5 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Question {exercise.id}/{exercises.length}
                </h3>
              </div>
              <p className="mt-4 text-lg font-medium text-white/90">
                {exercise.question}
              </p>
            </div>
          </div>
          
          {/* Right Panel - Options */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 flex flex-col">
            <div className="space-y-4 flex-1">
              {exercise.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300",
                    showExplanation && index === exercise.correctAnswer
                      ? "bg-green-900/30 border-green-500/50"
                      : showExplanation && index === selectedAnswer
                        ? "bg-red-900/30 border-red-500/50"
                        : selectedAnswer === index
                          ? "bg-amber-900/30 border-amber-500/50"
                          : "bg-black/30 border-white/10 hover:bg-white/10"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "rounded-full p-1 mt-0.5",
                      showExplanation && index === exercise.correctAnswer
                        ? "bg-green-500/20"
                        : showExplanation && index === selectedAnswer
                          ? "bg-red-500/20"
                          : "bg-amber-500/20"
                    )}>
                      {showExplanation && index === exercise.correctAnswer ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : showExplanation && index === selectedAnswer ? (
                        <XCircle className="h-4 w-4 text-red-400" />
                      ) : (
                        <HelpCircle className="h-4 w-4 text-amber-400" />
                      )}
                    </div>
                    <span className="text-white/90">{option}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {showExplanation && (
              <div className="mt-4 bg-amber-900/20 p-4 rounded-xl border border-amber-500/30">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-amber-300 mb-1">Explication</h4>
                    <p className="text-white/80 text-sm">{exercise.explanation}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-4 flex justify-between">
              {showExplanation ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetExercise}
                    className="border-white/20 bg-black/50 hover:bg-white/10"
                  >
                    Réessayer
                  </Button>
                  <Button
                    onClick={nextExercise}
                    disabled={currentExercise === exercises.length - 1}
                    className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700"
                  >
                    Question suivante
                  </Button>
                </>
              ) : (
                <div className="w-full text-center text-white/60 text-sm">
                  Sélectionnez une réponse
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right Navigation */}
        <div className="col-span-1 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/30 backdrop-blur-sm hover:bg-white/10"
            onClick={nextExercise}
            disabled={currentExercise === exercises.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}