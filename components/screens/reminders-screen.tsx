"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { BottomNav } from "@/components/bottom-nav"
import { ChevronLeft, Plus, Droplets, Scissors, Sun, Pill } from "lucide-react"
import Image from "next/image"

const reminderTabs = ["Upcoming", "Done"]

const reminders = [
  {
    id: "1",
    plant: "Areca Palm",
    image: "/images/areca-palm.jpg",
    type: "Water",
    icon: Droplets,
    iconColor: "bg-blue-chip text-blue-chip-fg",
    time: "Today, 8:00 AM",
    done: false,
  },
  {
    id: "2",
    plant: "Bonsai Tree",
    image: "/images/bonsai-tree.jpg",
    type: "Prune",
    icon: Scissors,
    iconColor: "bg-orange-chip text-orange-chip-fg",
    time: "Today, 10:00 AM",
    done: false,
  },
  {
    id: "3",
    plant: "Snake Plant",
    image: "/images/snake-plant.jpg",
    type: "Sunlight",
    icon: Sun,
    iconColor: "bg-pink-chip text-pink-chip-fg",
    time: "Tomorrow, 7:00 AM",
    done: false,
  },
  {
    id: "4",
    plant: "Monstera",
    image: "/images/monstera.jpg",
    type: "Fertilize",
    icon: Pill,
    iconColor: "bg-green-chip text-green-chip-fg",
    time: "Feb 22, 9:00 AM",
    done: false,
  },
  {
    id: "5",
    plant: "Aloe Vera",
    image: "/images/aloe-vera.jpg",
    type: "Water",
    icon: Droplets,
    iconColor: "bg-blue-chip text-blue-chip-fg",
    time: "Yesterday, 8:00 AM",
    done: true,
  },
  {
    id: "6",
    plant: "Fern",
    image: "/images/fern.jpg",
    type: "Mist",
    icon: Droplets,
    iconColor: "bg-blue-chip text-blue-chip-fg",
    time: "Yesterday, 6:00 PM",
    done: true,
  },
]

export function RemindersScreen() {
  const { goBack } = useApp()
  const [activeTab, setActiveTab] = useState("Upcoming")

  const filtered = reminders.filter((r) =>
    activeTab === "Upcoming" ? !r.done : r.done
  )

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-4">
          <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Reminders</h1>
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center" aria-label="Add reminder">
            <Plus className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-5 mb-5">
          {reminderTabs.map((tab) => (
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

        {/* Reminders list */}
        <div className="flex flex-col gap-3 px-5 pb-4">
          {filtered.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-mint overflow-hidden flex-shrink-0">
                <Image
                  src={reminder.image}
                  alt={reminder.plant}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{reminder.plant}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-6 h-6 rounded-lg ${reminder.iconColor} flex items-center justify-center`}>
                    <reminder.icon className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-muted-foreground">{reminder.type}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[11px] text-muted-foreground">{reminder.time}</p>
                {reminder.done && (
                  <span className="text-[10px] text-primary font-medium">Completed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
