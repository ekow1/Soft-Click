"use client"

import * as React from "react"
import { Send, X, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  sender: "ai" | "user"
  timestamp: Date
}

interface AiChatWindowProps {
  isOpen: boolean
  onClose: () => void
}

export function AiChatWindow({ isOpen, onClose }: AiChatWindowProps) {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm SoftClick's AI assistant. How can I help you today with your digital transformation journey?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = React.useState("")
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Mock AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! One of our engineers will review your request shortly. In the meantime, feel free to explore our services or reach out via WhatsApp for more urgent needs.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-28 right-6 w-[350px] sm:w-[400px] h-[500px] bg-slate-950/90 backdrop-blur-2xl border border-white/10 shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-accent text-accent-foreground flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-none bg-black/20 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider">SoftClick AI</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-none bg-green-400 animate-pulse" />
              <span className="text-[10px] font-bold opacity-70">Online</span>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-black/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex w-full mb-4",
              msg.sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] p-3 text-sm font-medium",
                msg.sender === "user"
                  ? "bg-accent text-accent-foreground rounded-none"
                  : "bg-white/5 text-white/90 border border-white/10 rounded-none"
              )}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white/5 border-t border-white/10">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="w-full bg-slate-900 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors pr-12"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="absolute right-2 p-2 text-accent disabled:opacity-30 transition-opacity"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
