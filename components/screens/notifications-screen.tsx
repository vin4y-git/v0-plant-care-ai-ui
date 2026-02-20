"use client"

import { useApp } from "@/lib/app-context"
import {
  IconChevronLeft,
  IconAlertTriangle,
  IconCloudRain,
  IconClock,
  IconCircleCheck,
  IconBug,
  IconDroplet,
} from "@tabler/icons-react"

const notifications = [
  {
    id: "1",
    icon: IconAlertTriangle,
    iconColor: "bg-orange-chip text-orange-chip-fg",
    title: "Disease Risk Alert",
    description: "High humidity levels detected. Your Monstera may be at risk for fungal infection.",
    time: "2 min ago",
    unread: true,
  },
  {
    id: "2",
    icon: IconCloudRain,
    iconColor: "bg-blue-chip text-blue-chip-fg",
    title: "Weather Warning",
    description: "Heavy rain expected tomorrow. Consider moving outdoor plants to covered area.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: "3",
    icon: IconClock,
    iconColor: "bg-orange-chip text-orange-chip-fg",
    title: "Watering Reminder",
    description: "Time to water your Snake Plant and Areca Palm.",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: "4",
    icon: IconCircleCheck,
    iconColor: "bg-green-chip text-green-chip-fg",
    title: "Recovery Confirmed",
    description: "Your Aloe Vera has recovered from the leaf spot disease. Great job!",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "5",
    icon: IconBug,
    iconColor: "bg-pink-chip text-pink-chip-fg",
    title: "Pest Detection",
    description: "Possible aphid infestation detected on your Bonsai Tree during last scan.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "6",
    icon: IconDroplet,
    iconColor: "bg-blue-chip text-blue-chip-fg",
    title: "Humidity Alert",
    description: "Indoor humidity dropped below 40%. Consider using a humidifier for your ferns.",
    time: "2 days ago",
    unread: false,
  },
]

export function NotificationsScreen() {
  const { goBack } = useApp()

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-4">
          <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
            <IconChevronLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Notifications</h1>
          <button className="text-xs text-primary font-medium">Mark all read</button>
        </div>

        {/* Notifications list */}
        <div className="flex flex-col gap-2 px-5 pb-6">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`flex items-start gap-3 p-4 rounded-2xl border transition-colors ${
                notif.unread
                  ? "bg-secondary/50 border-primary/10"
                  : "bg-card border-border"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl ${notif.iconColor} flex items-center justify-center flex-shrink-0`}>
                <notif.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">{notif.title}</p>
                  {notif.unread && (
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {notif.description}
                </p>
                <p className="text-[10px] text-muted-foreground/70 mt-1.5">{notif.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
