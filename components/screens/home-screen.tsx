"use client"

import { useApp } from "@/lib/app-context"
import { plants } from "@/lib/plant-data"
import { BottomNav } from "@/components/bottom-nav"
import {
  Bell,
  CloudSun,
  AlertTriangle,
  Scan,
  BarChart3,
  Droplets,
  Thermometer,
  ChevronRight,
  MoreVertical,
} from "lucide-react"
import Image from "next/image"

export function HomeScreen() {
  const { navigate, setSelectedPlant } = useApp()

  const needsAttention = plants.slice(0, 3)
  const recentScans = plants.slice(2, 5)

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-4">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-4">
          <div>
            <p className="text-sm text-muted-foreground">Good morning,</p>
            <h1 className="text-xl font-bold text-foreground">Gardener</h1>
          </div>
          <button
            onClick={() => navigate("notifications")}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-background" />
          </button>
        </div>

        {/* Weather Card */}
        <div className="px-5 mb-5">
          <div className="bg-primary rounded-2xl p-4 text-primary-foreground">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CloudSun className="w-5 h-5" />
                <span className="text-sm font-medium">Today&apos;s Weather</span>
              </div>
              <div className="px-2.5 py-1 bg-primary-foreground/20 rounded-full text-xs font-medium">
                Low Risk
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">28°C</p>
                <p className="text-sm text-primary-foreground/80">Partly cloudy</p>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Droplets className="w-4 h-4 text-primary-foreground/70" />
                  <span className="text-xs">65%</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Thermometer className="w-4 h-4 text-primary-foreground/70" />
                  <span className="text-xs">28°</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Farm Health Score */}
        <div className="px-5 mb-5">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">Farm Health Score</h3>
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.5"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeDasharray="97.4"
                    strokeDashoffset="19.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">80%</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Your garden is in great shape!</p>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="text-xs text-muted-foreground">Healthy: 8</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-chip-fg" />
                    <span className="text-xs text-muted-foreground">Warning: 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-5 mb-5">
          <div className="flex gap-3">
            <button
              onClick={() => navigate("scan")}
              className="flex-1 flex flex-col items-center gap-2 py-4 rounded-2xl bg-secondary border border-primary/10"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Scan className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">Scan Plant</span>
            </button>
            <button
              onClick={() => navigate("garden")}
              className="flex-1 flex flex-col items-center gap-2 py-4 rounded-2xl bg-secondary border border-primary/10"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">My Garden</span>
            </button>
            <button
              onClick={() => navigate("ai-chat")}
              className="flex-1 flex flex-col items-center gap-2 py-4 rounded-2xl bg-secondary border border-primary/10"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">AI Chat</span>
            </button>
          </div>
        </div>

        {/* Needs Attention */}
        <div className="px-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground">Needs Attention</h3>
            <button className="text-xs text-primary font-medium flex items-center gap-0.5">
              See All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {needsAttention.map((plant) => (
              <button
                key={plant.id}
                onClick={() => {
                  setSelectedPlant(plant.id)
                  navigate("plant-detail")
                }}
                className="flex-shrink-0 w-[140px] bg-card rounded-2xl border border-border overflow-hidden text-left"
              >
                <div className="w-full h-[100px] bg-mint flex items-center justify-center p-2">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    width={80}
                    height={80}
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-foreground truncate">{plant.name}</p>
                  <p className="text-xs text-orange-chip-fg font-medium mt-0.5">Needs water</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Scans */}
        <div className="px-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground">Recent Scans</h3>
            <button className="text-xs text-primary font-medium flex items-center gap-0.5">
              See All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {recentScans.map((plant) => (
              <button
                key={plant.id}
                onClick={() => {
                  setSelectedPlant(plant.id)
                  navigate("plant-detail")
                }}
                className="flex items-center gap-3 bg-card rounded-2xl border border-border p-3 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-mint flex items-center justify-center flex-shrink-0">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    width={44}
                    height={44}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{plant.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Healthy - Scanned 2h ago</p>
                </div>
                <MoreVertical className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
