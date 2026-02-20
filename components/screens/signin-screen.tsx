"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { Leaf, Eye, EyeOff, Mail, Lock } from "lucide-react"

export function SignInScreen() {
  const { navigate } = useApp()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col h-full bg-background px-6 pt-12 pb-8">
      {/* Logo */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
          <Leaf className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold text-foreground">Welcome Back</h1>
        <p className="text-sm text-muted-foreground">Sign in to continue to PlantCare AI</p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
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

        <button className="text-sm text-primary font-medium text-right">
          Forgot Password?
        </button>

        <button
          onClick={() => navigate("home")}
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base active:scale-[0.98] transition-transform mt-2"
        >
          Sign In
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">Or continue with</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Social buttons */}
      <div className="flex gap-4">
        <button className="flex-1 py-3.5 rounded-2xl border border-border flex items-center justify-center gap-2 text-sm font-medium text-foreground active:bg-muted transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>
        <button className="flex-1 py-3.5 rounded-2xl border border-border flex items-center justify-center gap-2 text-sm font-medium text-foreground active:bg-muted transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-2.13 4.45-3.74 4.25z" />
          </svg>
          Apple
        </button>
      </div>

      {/* Sign up link */}
      <div className="mt-auto pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          {"Don't have an account? "}
          <button
            onClick={() => navigate("signup")}
            className="text-primary font-semibold"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}
