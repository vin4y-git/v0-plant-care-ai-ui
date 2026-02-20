"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { plants } from "@/lib/plant-data"
import { BottomNav } from "@/components/bottom-nav"
import { ChevronLeft, MoreVertical } from "lucide-react"
import Image from "next/image"

const tabs = ["Identify", "Plant Care", "Diagnose"]

export function GardenScreen() {
  const { navigate, goBack, setSelectedPlant } = useApp()
  const [activeTab, setActiveTab] = useState("Plant Care")

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-4">
          <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">My Garden</h1>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="More options">
            <MoreVertical className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-5 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Plant list */}
        <div className="flex flex-col gap-3 px-5 pb-4">
          {plants.map((plant) => (
            <button
              key={plant.id}
              onClick={() => {
                setSelectedPlant(plant.id)
                navigate("plant-detail")
              }}
              className="flex items-center gap-3 bg-card rounded-2xl border border-border p-3 text-left active:bg-muted/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-xl bg-mint flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  width={56}
                  height={56}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">{plant.name}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                  {plant.description}
                </p>
              </div>
              <MoreVertical className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
