"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Question {
  id: number
  text: string
  isTrue: boolean
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    text: "Une intelligence artificielle peut apprendre seule, sans aucune donnée.",
    isTrue: false,
    explanation: "Une IA a besoin de grandes quantités de données pour apprendre."
  },
  {
    id: 2,
    text: "Les IA comprennent réellement ce qu'elles disent ou écrivent.",
    isTrue: false,
    explanation: "Elles génèrent des réponses basées sur des probabilités, mais sans compréhension réelle."
  },
  {
    id: 3,
    text: "ChatGPT et d'autres IA génératives peuvent inventer des informations.",
    isTrue: true,
    explanation: "C'est ce qu'on appelle des hallucinations, où l'IA génère des réponses fausses ou inexactes."
  },
  {
    id: 4,
    text: "Une IA peut reconnaître des visages mieux qu'un humain.",
    isTrue: true,
    explanation: "Dans certaines conditions, les algorithmes de reconnaissance faciale surpassent l'œil humain."
  },
  {
    id: 5,
    text: "L'IA peut écrire un roman entièrement original sans influence extérieure.",
    isTrue: false,
    explanation: "Elle ne fait que recombiner des données existantes, elle n'a pas de créativité \"propre\"."
  },
  {
    id: 6,
    text: "Les IA sont déjà capables de remplacer complètement des emplois entiers.",
    isTrue: false,
    explanation: "Elles assistent et automatisent certaines tâches, mais ne remplacent pas intégralement les compétences humaines."
  },
  {
    id: 7,
    text: "Un robot équipé d'IA peut ressentir des émotions comme un humain.",
    isTrue: false,
    explanation: "L'IA peut imiter des émotions (via des algorithmes) mais ne les ressent pas."
  },
  {
    id: 8,
    text: "Les IA sont utilisées dans les hôpitaux pour aider à détecter certaines maladies.",
    isTrue: true,
    explanation: "Par exemple, elles assistent les radiologues pour détecter des cancers sur des scans."
  },
  {
    id: 9,
    text: "L'IA est totalement infaillible et ne fait jamais d'erreurs.",
    isTrue: false,
    explanation: "Comme elle est entraînée sur des données humaines, elle peut avoir des biais et se tromper."
  },
  {
    id: 10,
    text: "Une IA pourra bientôt avoir une conscience propre et penser par elle-même.",
    isTrue: false,
    explanation: "On est encore très loin de ce concept de \"conscience artificielle\" (AGI)."
  }
]

export function AIQuiz() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({})
  const [showResults, setShowResults] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  
  const handleAnswer = (questionId: number, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }
  
  const checkAnswers = () => {
    setShowResults(true)
    setDialogOpen(true)
  }
  
  const resetQuiz = () => {
    setAnswers({})
    setShowResults(false)
  }
  
  const getScore = () => {
    return Object.entries(answers).reduce((score, [questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId))
      if (question && answer === question.isTrue) {
        return score + 1
      }
      return score
    }, 0)
  }
  
  return (
    <div className="flex flex-row gap-8 w-full h-[calc(100vh-200px)]">
      {/* Left Section - Quiz */}
      <div className="w-1/4">
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 h-full">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300 mb-4">
            Quiz : Vrai ou Faux ?
          </h3>
          
          <div className="space-y-3 overflow-y-auto h-[calc(100%-80px)] pr-2">
            {questions.map((question) => (
              <div key={question.id} className="bg-black/30 p-3 rounded-xl border border-white/10">
                <p className="text-white mb-2 text-sm">{question.id}. {question.text}</p>
                <div className="flex gap-3">
                  <Button
                    variant={answers[question.id] === true ? "default" : "outline"}
                    size="sm"
                    className={`${
                      answers[question.id] === true 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "border-white/20 bg-black/50 hover:bg-white/10"
                    } text-xs py-1 px-2 h-auto`}
                    onClick={() => handleAnswer(question.id, true)}
                    disabled={showResults}
                  >
                    <Check className="mr-1 h-3 w-3" /> Vrai
                  </Button>
                  <Button
                    variant={answers[question.id] === false ? "default" : "outline"}
                    size="sm"
                    className={`${
                      answers[question.id] === false 
                        ? "bg-red-600 hover:bg-red-700" 
                        : "border-white/20 bg-black/50 hover:bg-white/10"
                    } text-xs py-1 px-2 h-auto`}
                    onClick={() => handleAnswer(question.id, false)}
                    disabled={showResults}
                  >
                    <X className="mr-1 h-3 w-3" /> Faux
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="pt-2">
              {!showResults ? (
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-sm py-1 h-auto"
                  onClick={checkAnswers}
                  disabled={Object.keys(answers).length < questions.length}
                >
                  Vérifier mes réponses
                </Button>
              ) : (
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-1 h-auto"
                  onClick={resetQuiz}
                >
                  Recommencer
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Middle Section - Image */}
      <div className="w-2/4 flex items-center justify-center">
        <div className="relative w-3/4 aspect-square rounded-3xl overflow-hidden border">
          <Image
            src="images/content/ia_arbre.png"
            alt="Intelligence Artificielle"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
          </div>
        </div>
      </div>
      
      {/* Right Section - Forces/Faiblesses */}
      <div className="w-1/4">
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 h-full">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300 mb-4">
            Forces vs Faiblesses
          </h3>
          
          <div className="space-y-4 overflow-y-auto h-[calc(100%-80px)] pr-2">
            <div className="bg-gradient-to-r from-green-900/30 to-green-700/30 p-4 rounded-xl border border-green-500/30">
              <h4 className="text-lg font-bold text-green-300 mb-2 flex items-center">
                <Check className="mr-2 h-4 w-4" /> Forces
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Rapidité d&apos;analyse</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Traitement de gros volumes de données</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Automatisation des tâches répétitives</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Disponibilité 24/7</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Capacité d&apos;apprentissage continue</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Apprentissage sur des ensembles massifs de données</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Modélisation avancée des patterns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Capacité d’amélioration par fine-tuning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/30 to-red-700/30 p-4 rounded-xl border border-red-500/30">
              <h4 className="text-lg font-bold text-red-300 mb-2 flex items-center">
                <X className="mr-2 h-4 w-4" /> Faiblesses
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Pas de compréhension réelle</span>
                </li>
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Dépendance aux données d&apos;entraînement</span>
                </li>
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Pas de créativité &quot;humaine&quot;</span>
                </li>
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Risques de biais algorithmiques</span>
                </li>
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Problèmes de droits d’auteur</span>
                </li>
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Complexité de l’intégration en production</span>
                </li>
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Mauvaise gestion de la continuité temporelle</span>
                </li>
                <li className="flex items-start">
                  <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">La qualité se paye</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-black/90 border-white/20 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-emerald-200">
              Résultats du Quiz
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="text-center mb-6">
              <p className="text-xl">Votre score: <span className="font-bold text-2xl text-emerald-400">{getScore()}/{questions.length}</span></p>
            </div>
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {questions.map((question) => {
                const userAnswer = answers[question.id]
                const isCorrect = userAnswer === question.isTrue
                
                return (
                  <div 
                    key={question.id} 
                    className={`p-4 rounded-xl border ${
                      isCorrect 
                        ? "bg-green-900/20 border-green-500/30" 
                        : "bg-red-900/20 border-red-500/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`rounded-full p-1 ${isCorrect ? "bg-green-500/20" : "bg-red-500/20"}`}>
                        {isCorrect ? (
                          <Check className="h-5 w-5 text-green-400" />
                        ) : (
                          <X className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{question.id}. {question.text}</p>
                        <p className="text-sm mt-1 text-white/70">
                          <span className="font-semibold">Réponse correcte:</span> {question.isTrue ? "Vrai" : "Faux"}
                        </p>
                        <p className="text-sm mt-1 text-white/70">
                          <span className="font-semibold">Explication:</span> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}