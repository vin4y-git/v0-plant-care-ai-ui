"use client"

import { useApp } from "@/lib/app-context"
import {
  ChevronLeft,
  ChevronRight,
  User,
  Lock,
  Bell,
  Palette,
  Globe,
  HelpCircle,
  Shield,
  LogOut,
  Camera,
} from "lucide-react"

const settingGroups = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Edit Profile", color: "bg-blue-chip text-blue-chip-fg" },
      { icon: Lock, label: "Change Password", color: "bg-orange-chip text-orange-chip-fg" },
      { icon: Globe, label: "Language", color: "bg-green-chip text-green-chip-fg", value: "English" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Bell, label: "Notifications", color: "bg-pink-chip text-pink-chip-fg" },
      { icon: Palette, label: "Appearance", color: "bg-blue-chip text-blue-chip-fg", value: "Light" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help Center", color: "bg-green-chip text-green-chip-fg" },
      { icon: Shield, label: "Privacy Policy", color: "bg-orange-chip text-orange-chip-fg" },
    ],
  },
]

export function SettingsScreen() {
  const { goBack, navigate } = useApp()

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-4">
          <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Settings</h1>
          <div className="w-10" />
        </div>

        {/* Profile card */}
        <div className="mx-5 mb-6 p-4 rounded-2xl bg-secondary border border-primary/10 flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center" aria-label="Change photo">
              <Camera className="w-3 h-3 text-primary-foreground" />
            </button>
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground">Gardener</h3>
            <p className="text-sm text-muted-foreground">gardener@plantcare.ai</p>
          </div>
        </div>

        {/* Setting groups */}
        <div className="flex flex-col gap-6 px-5 pb-6">
          {settingGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group.title}
              </h3>
              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-card border border-border active:bg-muted/50 transition-colors text-left"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
                    <div className="flex items-center gap-1">
                      {"value" in item && (
                        <span className="text-xs text-muted-foreground">{item.value}</span>
                      )}
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Logout */}
          <button
            onClick={() => navigate("signin")}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-destructive/5 border border-destructive/10 active:bg-destructive/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <LogOut className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-sm font-medium text-destructive">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}
