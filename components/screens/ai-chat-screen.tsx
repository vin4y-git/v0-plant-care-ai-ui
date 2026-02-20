"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { BottomNav } from "@/components/bottom-nav"
import {
  IconChevronLeft,
  IconSend,
  IconPhotoPlus,
  IconMicrophone,
} from "@tabler/icons-react"
import { CanopyMascot } from "@/components/canopy-mascot"

interface Message {
  id: string
  text: string
  isBot: boolean
}

const quickQuestions = [
  "How to water succulents?",
  "Why are my leaves yellow?",
  "Best indoor plants?",
  "Pest control tips",
]

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! I'm your PlantCare AI assistant. I can help you with plant identification, disease diagnosis, care tips, and more. How can I help you today?",
    isBot: true,
  },
]

export function AIChatScreen() {
  const { goBack } = useApp()
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        isBot: true,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-3 pb-3 border-b border-border">
        <button onClick={goBack} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center" aria-label="Go back">
          <IconChevronLeft size={20} className="text-foreground" />
        </button>
        <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center overflow-hidden">
          <CanopyMascot pose="chatting" size="small" circular />
        </div>
        <div>
          <h1 className="text-sm font-bold text-foreground">PlantCare AI</h1>
          <p className="text-xs text-primary font-medium">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
          >
            <div className="flex items-end gap-2 max-w-[85%]">
              {msg.isBot && (
                <div className="w-7 h-7 rounded-full bg-mint flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <CanopyMascot pose="watering" size="tiny" circular />
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.isBot
                    ? "bg-muted text-foreground rounded-bl-md"
                    : "bg-primary text-primary-foreground rounded-br-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {/* Empty state mascot and quick questions */}
        {messages.length <= 1 && (
          <div className="flex flex-col items-center gap-3 mt-4 mb-2">
            <CanopyMascot pose="chatting" size="large" animation="blink" />
            <p className="text-xs text-muted-foreground">Ask me anything about plants</p>
          </div>
        )}
        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="px-3.5 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-medium active:bg-primary active:text-primary-foreground transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-5 pb-3 pt-2 border-t border-border">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0" aria-label="Attach image">
            <IconPhotoPlus size={20} className="text-muted-foreground" />
          </button>
          <div className="flex-1 flex items-center bg-muted rounded-2xl px-4 py-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask about your plants..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none border-none"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0" aria-label="Voice input">
            <IconMicrophone size={20} className="text-muted-foreground" />
          </button>
          <button
            onClick={() => sendMessage(input)}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform"
            aria-label="Send message"
          >
            <IconSend size={20} className="text-primary-foreground" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

function getBotResponse(query: string): string {
  const q = query.toLowerCase()
  if (q.includes("water") || q.includes("succulents")) {
    return "Succulents should be watered when the soil is completely dry, usually every 1-2 weeks. Water deeply but infrequently, and always use well-draining soil to prevent root rot."
  }
  if (q.includes("yellow") || q.includes("leaves")) {
    return "Yellow leaves can be caused by overwatering, underwatering, nutrient deficiency, or too much direct sunlight. Check the soil moisture first - if it's soggy, reduce watering. If it's bone dry, water more frequently."
  }
  if (q.includes("indoor") || q.includes("best")) {
    return "Great indoor plants include Snake Plants (very hardy), Pothos (trails beautifully), Peace Lilies (flowers), and Rubber Plants (stunning leaves). They all tolerate low light and infrequent watering."
  }
  if (q.includes("pest") || q.includes("control")) {
    return "For organic pest control, try neem oil spray (diluted), insecticidal soap, or a mix of water and dish soap. Regularly inspect leaves (top and bottom) and isolate affected plants to prevent spreading."
  }
  return "That's a great question! Based on my knowledge, I'd recommend examining your plant's current conditions - lighting, watering schedule, and soil type - to provide the most accurate advice. Would you like to scan your plant for a detailed diagnosis?"
}
