"use client"

import { AppProvider, useApp } from "@/lib/app-context"
import { MobileFrame } from "@/components/mobile-frame"
import { SplashScreen } from "@/components/screens/splash-screen"
import { OnboardingScreen } from "@/components/screens/onboarding-screen"
import { SignInScreen } from "@/components/screens/signin-screen"
import { SignUpScreen } from "@/components/screens/signup-screen"
import { HomeScreen } from "@/components/screens/home-screen"
import { ScanScreen } from "@/components/screens/scan-screen"
import { ScanResultScreen } from "@/components/screens/scan-result-screen"
import { GardenScreen } from "@/components/screens/garden-screen"
import { PlantDetailScreen } from "@/components/screens/plant-detail-screen"
import { AIChatScreen } from "@/components/screens/ai-chat-screen"
import { NotificationsScreen } from "@/components/screens/notifications-screen"
import { RemindersScreen } from "@/components/screens/reminders-screen"
import { SettingsScreen } from "@/components/screens/settings-screen"

function AppScreens() {
  const { screen } = useApp()

  const screens: Record<string, React.ReactNode> = {
    splash: <SplashScreen />,
    onboarding: <OnboardingScreen />,
    signin: <SignInScreen />,
    signup: <SignUpScreen />,
    home: <HomeScreen />,
    scan: <ScanScreen />,
    "scan-result": <ScanResultScreen />,
    garden: <GardenScreen />,
    "plant-detail": <PlantDetailScreen />,
    "ai-chat": <AIChatScreen />,
    notifications: <NotificationsScreen />,
    reminders: <RemindersScreen />,
    settings: <SettingsScreen />,
  }

  return <>{screens[screen] || <HomeScreen />}</>
}

export default function Page() {
  return (
    <AppProvider>
      <MobileFrame>
        <AppScreens />
      </MobileFrame>
    </AppProvider>
  )
}
