"use client"

import {
  IconHome,
  IconClock,
  IconScan,
  IconLayout2,
  IconMessageChatbot,
} from "@tabler/icons-react"
import { useApp, type Screen } from "@/lib/app-context"

const navItems: { icon: typeof IconHome; label: string; screen: Screen }[] = [
  { icon: IconHome, label: "Home", screen: "home" },
  { icon: IconClock, label: "History", screen: "reminders" },
  { icon: IconScan, label: "Scan", screen: "scan" },
  { icon: IconLayout2, label: "Garden", screen: "garden" },
  { icon: IconMessageChatbot, label: "AI Chat", screen: "ai-chat" },
]

export function BottomNav() {
  const { screen, navigate } = useApp()

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-background border-t border-border z-40">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isCenter = item.label === "Scan"
          const isActive = screen === item.screen

          if (isCenter) {
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.screen)}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground -mt-6 shadow-lg shadow-primary/30 active:scale-95 transition-transform"
                aria-label={item.label}
              >
                <item.icon className="w-6 h-6" />
              </button>
            )
          }

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.screen)}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
