"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export type CanopyPose =
  | "sad"
  | "watering"
  | "detective"
  | "phone"
  | "celebrating"
  | "worried"
  | "waving"
  | "sleeping"
  | "happy"
  | "thinking"
  | "chatting"

const poseImages: Record<CanopyPose, string> = {
  sad: "/mascot/canopy-sad.png",
  watering: "/mascot/canopy-watering.png",
  detective: "/mascot/canopy-detective.png",
  phone: "/mascot/canopy-phone.png",
  celebrating: "/mascot/canopy-celebrating.png",
  worried: "/mascot/canopy-worried.png",
  waving: "/mascot/canopy-waving.png",
  sleeping: "/mascot/canopy-sleeping.png",
  happy: "/mascot/canopy-happy.jpg",
  thinking: "/mascot/canopy-thinking.jpg",
  chatting: "/mascot/canopy-chatting.jpg",
}

const poseAlts: Record<CanopyPose, string> = {
  sad: "Canopy mascot looking sad with drooping leaves",
  watering: "Canopy mascot happily watering with a speech bubble",
  detective: "Canopy mascot holding a magnifying glass and winking",
  phone: "Canopy mascot holding a phone and pointing",
  celebrating: "Canopy mascot celebrating with arms raised and confetti",
  worried: "Canopy mascot tilted sideways looking worried",
  waving: "Canopy mascot waving happily",
  sleeping: "Canopy mascot sleeping with phone and Z's",
  happy: "Canopy mascot standing happily with a welcoming pose",
  thinking: "Canopy mascot thinking with a question mark",
  chatting: "Canopy mascot chatting with a speech bubble",
}

type MascotSize = "tiny" | "small" | "medium" | "large" | "xl"

const sizeMap: Record<MascotSize, { width: number; height: number; className: string }> = {
  tiny: { width: 32, height: 32, className: "w-8 h-8" },
  small: { width: 48, height: 48, className: "w-12 h-12" },
  medium: { width: 80, height: 80, className: "w-20 h-20" },
  large: { width: 120, height: 120, className: "w-[120px] h-[120px]" },
  xl: { width: 160, height: 160, className: "w-[160px] h-[160px]" },
}

type AnimationType = "bob" | "rock" | "blink" | "none"

const animationClasses: Record<AnimationType, string> = {
  bob: "animate-bounce-slow",
  rock: "animate-rock",
  blink: "animate-blink",
  none: "",
}

interface CanopyMascotProps {
  pose: CanopyPose
  size?: MascotSize
  animation?: AnimationType
  circular?: boolean
  glow?: boolean
  className?: string
}

export function CanopyMascot({
  pose,
  size = "medium",
  animation = "none",
  circular = false,
  glow = false,
  className,
}: CanopyMascotProps) {
  const { width, height, className: sizeClass } = sizeMap[size]
  const animClass = animationClasses[animation]

  return (
    <div
      className={cn(
        "relative flex-shrink-0",
        sizeClass,
        animClass,
        circular && "rounded-full overflow-hidden",
        glow && "after:absolute after:inset-[-8px] after:rounded-full after:bg-primary/10 after:blur-xl after:-z-10",
        className
      )}
    >
      <Image
        src={poseImages[pose]}
        alt={poseAlts[pose]}
        width={width}
        height={height}
        className={cn(
          "object-contain w-full h-full",
          circular && "rounded-full object-cover"
        )}
        priority
      />
    </div>
  )
}
