"use client"

import { useEffect } from "react"
import { useApp } from "@/lib/app-context"
import { Leaf } from "lucide-react"

export function SplashScreen() {
  const { navigate } = useApp()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("onboarding")
    }, 2500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-full bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full bg-primary/5" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-primary/5" />
      <div className="absolute top-[30%] left-[-40px] w-[100px] h-[100px] rounded-full bg-primary/8" />

      {/* Logo */}
      <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 rounded-[1.75rem] bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <Leaf className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">PlantCare AI</h1>
          <p className="text-sm text-muted-foreground mt-1">Your smart plant companion</p>
        </div>
      </div>

      {/* Loading dots */}
      <div className="absolute bottom-32 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0ms]" />
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:200ms]" />
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:400ms]" />
      </div>
    </div>
  )
}
