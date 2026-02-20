"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { Leaf, Eye, EyeOff, Mail, Lock, User, MapPin, ChevronLeft } from "lucide-react"

export function SignUpScreen() {
  const { navigate, goBack } = useApp()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col h-full bg-background px-6 pt-4 pb-8">
      {/* Header */}
      <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-4" aria-label="Go back">
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Create Account</h1>
        </div>
        <p className="text-sm text-muted-foreground">Join PlantCare AI and start your garden journey</p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Full name"
            className="w-full py-4 pl-12 pr-4 rounded-2xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 border-none"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full py-4 pl-12 pr-4 rounded-2xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 border-none"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-4 pl-12 pr-12 rounded-2xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 border-none"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Location (optional)"
            className="w-full py-4 pl-12 pr-4 rounded-2xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 border-none"
          />
        </div>

        <button
          onClick={() => navigate("home")}
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base active:scale-[0.98] transition-transform mt-2"
        >
          Create Account
        </button>
      </div>

      {/* Sign in link */}
      <div className="mt-auto pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            onClick={() => navigate("signin")}
            className="text-primary font-semibold"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}
