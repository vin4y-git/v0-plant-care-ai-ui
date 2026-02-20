"use client"

import type { ReactNode } from "react"

export function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f4f0] p-4">
      <div className="relative w-[393px] h-[852px] rounded-[3rem] border-[8px] border-[#1a1a1a] overflow-hidden bg-background shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[34px] bg-[#1a1a1a] rounded-b-[1.2rem] z-50" />
        {/* Status bar */}
        <div className="relative z-40 flex items-center justify-between px-8 pt-3 pb-1 text-[12px] font-semibold text-foreground">
          <span>9:41</span>
          <div className="w-[126px]" />
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <rect x="0" y="7" width="3" height="5" rx="0.5" opacity="0.3" />
              <rect x="4" y="5" width="3" height="7" rx="0.5" opacity="0.5" />
              <rect x="8" y="3" width="3" height="9" rx="0.5" opacity="0.7" />
              <rect x="12" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor">
              <path d="M7.5 3.6a5.8 5.8 0 0 1 4.1 1.7l1.2-1.2A7.7 7.7 0 0 0 7.5 1.6a7.7 7.7 0 0 0-5.3 2.5l1.2 1.2A5.8 5.8 0 0 1 7.5 3.6z" opacity="0.5" />
              <path d="M7.5 6.6a3 3 0 0 1 2.1.9l1.2-1.2a4.9 4.9 0 0 0-3.3-1.4 4.9 4.9 0 0 0-3.3 1.4l1.2 1.2a3 3 0 0 1 2.1-.9z" opacity="0.7" />
              <circle cx="7.5" cy="10" r="1.5" />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
              <rect x="0" y="1" width="21" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
              <rect x="1.5" y="2.5" width="16" height="7" rx="1" />
              <rect x="22" y="4" width="2" height="4" rx="0.5" opacity="0.4" />
            </svg>
          </div>
        </div>
        {/* Screen content */}
        <div className="h-[calc(100%-44px)] overflow-y-auto no-scrollbar">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-foreground/20 rounded-full z-50" />
      </div>
    </div>
  )
}
