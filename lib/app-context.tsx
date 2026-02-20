"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Screen =
  | "splash"
  | "onboarding"
  | "signin"
  | "signup"
  | "home"
  | "scan"
  | "scan-result"
  | "garden"
  | "plant-detail"
  | "ai-chat"
  | "settings"
  | "notifications"
  | "reminders"

interface AppContextType {
  screen: Screen
  setScreen: (screen: Screen) => void
  selectedPlant: string | null
  setSelectedPlant: (id: string | null) => void
  previousScreen: Screen | null
  goBack: () => void
  navigate: (screen: Screen) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [screen, setScreenState] = useState<Screen>("splash")
  const [previousScreen, setPreviousScreen] = useState<Screen | null>(null)
  const [selectedPlant, setSelectedPlant] = useState<string | null>(null)

  const navigate = (newScreen: Screen) => {
    setPreviousScreen(screen)
    setScreenState(newScreen)
  }

  const goBack = () => {
    if (previousScreen) {
      setScreenState(previousScreen)
      setPreviousScreen(null)
    }
  }

  const setScreen = (newScreen: Screen) => {
    setPreviousScreen(screen)
    setScreenState(newScreen)
  }

  return (
    <AppContext.Provider
      value={{
        screen,
        setScreen,
        selectedPlant,
        setSelectedPlant,
        previousScreen,
        goBack,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
