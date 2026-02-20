"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import {
  IconChevronLeft,
  IconBookmark,
  IconShare,
  IconSun,
  IconTemperature,
  IconDroplet,
  IconCheck,
  IconAlertTriangle,
  IconLeaf,
  IconShield,
} from "@tabler/icons-react"
import Image from "next/image"

const tabs = ["Information", "Treatment", "Prevention"]

const conditions = [
  { icon: IconSun, label: "Severity", value: "Moderate", color: "bg-orange-chip text-orange-chip-fg" },
  { icon: IconTemperature, label: "Spread Risk", value: "Medium", color: "bg-pink-chip text-pink-chip-fg" },
  { icon: IconDroplet, label: "Moisture", value: "High", color: "bg-blue-chip text-blue-chip-fg" },
  { icon: IconLeaf, label: "Affected", value: "Leaves", color: "bg-green-chip text-green-chip-fg" },
  { icon: IconShield, label: "Treatable", value: "Yes", color: "bg-green-chip text-green-chip-fg" },
  { icon: IconAlertTriangle, label: "Urgency", value: "Soon", color: "bg-orange-chip text-orange-chip-fg" },
]

export function ScanResultScreen() {
  const { goBack } = useApp()
  const [activeTab, setActiveTab] = useState("Information")

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2">
          <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
            <IconChevronLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Scan Result</h1>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Share">
              <IconShare size={16} className="text-foreground" />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Bookmark">
              <IconBookmark size={16} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Plant image */}
        <div className="mx-5 rounded-2xl bg-mint overflow-hidden mb-4">
          <div className="w-full h-[220px] flex items-center justify-center relative">
            <Image
              src="/images/monstera.jpg"
              alt="Scanned plant with leaf spot disease"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Disease info chips */}
        <div className="flex items-center gap-2 px-5 mb-3">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <IconCheck size={12} />
            94% match
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-chip text-orange-chip-fg text-xs font-medium">
            <IconAlertTriangle size={12} />
            Moderate severity
          </div>
        </div>

        {/* Title */}
        <div className="px-5 mb-4">
          <h2 className="text-xl font-bold text-foreground">Leaf Spot Disease</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Fungal infection</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-5 mb-4">
          {tabs.map((tab) => (
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

        {/* Condition chips grid */}
        <div className="px-5 mb-4">
          <div className="grid grid-cols-3 gap-3">
            {conditions.map((condition) => (
              <div
                key={condition.label}
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-card border border-border"
              >
                <div className={`w-9 h-9 rounded-xl ${condition.color} flex items-center justify-center`}>
                  <condition.icon size={16} />
                </div>
                <span className="text-xs font-semibold text-foreground">{condition.value}</span>
                <span className="text-[10px] text-muted-foreground">{condition.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content based on tab */}
        <div className="px-5 mb-6">
          {activeTab === "Information" && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">About This Disease</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leaf spot is a common term for various fungal and bacterial diseases that cause spots on leaves. The spots can vary in size, shape, and color depending on the pathogen involved. Most leaf spot diseases are caused by fungi, though some are caused by bacteria.
              </p>
            </div>
          )}
          {activeTab === "Treatment" && (
            <div className="flex flex-col gap-3">
              {["Remove affected leaves immediately", "Apply fungicide spray every 7-10 days", "Improve air circulation around plant", "Avoid overhead watering"].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-muted">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Prevention" && (
            <div className="flex flex-col gap-3">
              {["Maintain proper spacing between plants", "Water at the base, not the leaves", "Use disease-resistant plant varieties", "Keep garden area clean of debris"].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-muted">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Save button */}
        <div className="px-5 pb-6">
          <button className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <IconBookmark size={20} />
            Save to History
          </button>
        </div>
      </div>
    </div>
  )
}
