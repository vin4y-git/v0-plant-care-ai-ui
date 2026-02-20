"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { ScanLine, Sprout, MessageCircle, ChevronRight } from "lucide-react"

const slides = [
  {
    icon: ScanLine,
    title: "Detect Plant Diseases",
    description: "Snap a photo of your plant and our AI will instantly identify diseases and suggest treatments.",
    color: "bg-pink-chip text-pink-chip-fg",
  },
  {
    icon: Sprout,
    title: "Manage Your Garden",
    description: "Track all your plants, set reminders for watering, and monitor growth over time.",
    color: "bg-green-chip text-green-chip-fg",
  },
  {
    icon: MessageCircle,
    title: "AI Plant Expert",
    description: "Chat with our AI assistant to get personalized advice for your specific plants and conditions.",
    color: "bg-blue-chip text-blue-chip-fg",
  },
]

export function OnboardingScreen() {
  const { navigate } = useApp()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      navigate("signin")
    }
  }

  const slide = slides[currentSlide]

  return (
    <div className="flex flex-col h-full bg-background px-6 pt-12 pb-8">
      {/* Skip */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("signin")}
          className="text-sm text-muted-foreground font-medium"
        >
          Skip
        </button>
      </div>

      {/* Illustration area */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <div className={`w-32 h-32 rounded-[2rem] ${slide.color} flex items-center justify-center`}>
          <slide.icon className="w-16 h-16" />
        </div>

        <div className="text-center px-4">
          <h2 className="text-2xl font-bold text-foreground mb-3 text-balance">{slide.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{slide.description}</p>
        </div>
      </div>

      {/* Dots and Button */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
