"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { plants } from "@/lib/plant-data"
import {
  IconChevronLeft,
  IconShare,
  IconBookmark,
  IconRobot,
  IconSun,
  IconTemperature,
  IconDroplet,
  IconPlant,
  IconTree,
  IconShield,
  IconPlus,
  IconDotsVertical,
  IconChevronRight,
} from "@tabler/icons-react"
import Image from "next/image"
import { CanopyMascot } from "@/components/canopy-mascot"

const tabOptions = ["Information", "Plant Care", "Features"]

const conditionIcons = [IconSun, IconTemperature, IconDroplet, IconPlant, IconTree, IconShield]

function getConditionIcon(index: number) {
  return conditionIcons[index] || IconSun
}

function getConditionBg(color: string) {
  switch (color) {
    case "pink":
      return "bg-pink-chip text-pink-chip-fg"
    case "orange":
      return "bg-orange-chip text-orange-chip-fg"
    case "blue":
      return "bg-blue-chip text-blue-chip-fg"
    case "green":
      return "bg-green-chip text-green-chip-fg"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function PlantDetailScreen() {
  const { goBack, selectedPlant } = useApp()
  const [activeTab, setActiveTab] = useState("Information")

  const plant = plants.find((p) => p.id === selectedPlant) || plants[0]

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2">
          <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
            <IconChevronLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Plant</h1>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Share">
              <IconShare size={16} className="text-foreground" />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Bookmark">
              <IconBookmark size={16} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Hero plant image */}
        <div className="mx-5 rounded-2xl bg-mint overflow-hidden mb-4">
          <div className="w-full h-[240px] relative flex items-center justify-center">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-5 mb-4">
          {tabOptions.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Plant name and AI chat */}
        <div className="flex items-start justify-between px-5 mb-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">{plant.name}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{plant.subtitle}</p>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint text-sm font-medium text-foreground">
            <CanopyMascot pose="chatting" size="tiny" circular />
            AI Chat
          </button>
        </div>

        {/* Condition chips grid */}
        {activeTab === "Information" && (
          <>
            <div className="px-5 mb-5">
              <div className="grid grid-cols-3 gap-3">
                {plant.conditions.map((condition, idx) => {
                  const Icon = getConditionIcon(idx)
                  return (
                    <div
                      key={condition.label}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-card border border-border"
                    >
                      <div className={`w-9 h-9 rounded-xl ${getConditionBg(condition.color)} flex items-center justify-center`}>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-semibold text-foreground">{condition.value}</span>
                      <span className="text-[10px] text-muted-foreground">{condition.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="px-5 mb-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">Photo Gallery</h3>
                <button className="text-xs text-primary font-medium flex items-center gap-0.5">
                  See All <IconChevronRight size={14} />
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {plant.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 rounded-xl bg-mint overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={img}
                      alt={`${plant.name} gallery ${idx + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* General Information */}
            <div className="px-5 mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">General Information</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{plant.info}</p>
            </div>
          </>
        )}

        {activeTab === "Plant Care" && (
          <div className="px-5 mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Care Tips</h3>
            <div className="flex flex-col gap-3">
              {plant.careTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-muted">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Features" && (
          <div className="px-5 mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Features</h3>
            <div className="flex flex-wrap gap-2">
              {plant.features.map((feature) => (
                <div
                  key={feature}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add to garden button */}
        <div className="px-5 pb-6">
          <button className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <IconPlus size={20} />
            Add to garden
          </button>
        </div>
      </div>
    </div>
  )
}
