"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { BottomNav } from "@/components/bottom-nav"
import {
  IconChevronLeft,
  IconBolt,
  IconPhotoPlus,
  IconCamera,
  IconScan,
  IconBug,
  IconLeaf,
  IconDroplet,
  IconX,
  IconCheck,
  IconAlertTriangle,
} from "@tabler/icons-react"
import { CanopyMascot } from "@/components/canopy-mascot"

const detectionTypes = [
  { icon: IconBug, label: "Disease", active: true },
  { icon: IconLeaf, label: "Identify", active: false },
  { icon: IconDroplet, label: "Nutrient", active: false },
]

export function ScanScreen() {
  const { navigate, goBack } = useApp()
  const [showResult, setShowResult] = useState(false)

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-4">
          <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
            <IconChevronLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Scan Plant</h1>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Flash">
            <IconBolt size={20} className="text-foreground" />
          </button>
        </div>

        {/* Detection type chips */}
        <div className="flex gap-2 px-5 mb-4">
          {detectionTypes.map((type) => (
            <button
              key={type.label}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                type.active
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <type.icon size={16} />
              {type.label}
            </button>
          ))}
        </div>

        {/* Camera viewfinder */}
        <div className="mx-5 rounded-2xl overflow-hidden bg-[#1a1a1a] aspect-[3/4] relative flex items-center justify-center">
          {/* Scan overlay */}
          <div className="absolute inset-8 border-2 border-primary-foreground/30 rounded-2xl">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-primary rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-3 border-r-3 border-primary rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-3 border-l-3 border-primary rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-primary rounded-br-xl" />
          </div>

          {/* Scanning line */}
          <div className="absolute inset-x-12 top-1/3 h-0.5 bg-primary/60 animate-pulse" />

          <div className="flex flex-col items-center gap-3 text-primary-foreground/60">
            <CanopyMascot pose="detective" size="large" animation="rock" />
            <p className="text-sm font-medium">Point camera at your plant</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-6 py-6 px-5">
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
              <IconPhotoPlus size={24} className="text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Upload</span>
          </button>

          <button
            onClick={() => setShowResult(true)}
            className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 active:scale-95 transition-transform"
            aria-label="Take photo"
          >
            <IconCamera size={32} className="text-primary-foreground" />
          </button>

          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
              <IconBolt size={24} className="text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Flash</span>
          </button>
        </div>
      </div>

      {/* Result bottom sheet */}
      {showResult && (
        <div className="absolute inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setShowResult(false)} />
          <div className="relative w-full bg-background rounded-t-3xl p-5 animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 bg-border rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">Scan Result</h3>
              <button onClick={() => setShowResult(false)} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center" aria-label="Close results">
                <IconX size={16} className="text-muted-foreground" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-mint flex items-center justify-center overflow-hidden">
                <CanopyMascot pose="worried" size="medium" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">Leaf Spot Disease</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <IconCheck size={12} />
                    94% confidence
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-chip text-orange-chip-fg text-xs font-medium">
                    <IconAlertTriangle size={12} />
                    Moderate
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Leaf spot disease detected on the foliage. This is commonly caused by fungal infections and can spread if untreated.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowResult(false)
                  navigate("scan-result")
                }}
                className="flex-1 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm"
              >
                View Details
              </button>
              <button
                onClick={() => setShowResult(false)}
                className="py-3.5 px-6 rounded-2xl border border-border text-foreground font-medium text-sm"
              >
                Scan Again
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
