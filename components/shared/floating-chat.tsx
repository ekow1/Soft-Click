"use client"

import * as React from "react"
import { MessageCircle, X, MessageSquare, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { AiChatWindow } from "./ai-chat-window"

export function FloatingChat() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isAiChatOpen, setIsAiChatOpen] = React.useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* AI Chat Window */}
      <AiChatWindow 
        isOpen={isAiChatOpen} 
        onClose={() => setIsAiChatOpen(false)} 
      />

      {/* Selection Menu */}
      <div
        className={cn(
          "flex flex-col gap-3 transition-all duration-300 origin-bottom-right",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        )}
      >
        {/* WhatsApp Chat Option */}
        <a
          href="https://wa.me/233551234567" // Placeholder number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card hover:bg-muted text-foreground border border-border transition-all group flex items-center gap-4 px-5 py-3 shadow-2xl"
        >
          <div className="bg-green-500 rounded-none flex items-center justify-center text-white group-hover:scale-110 transition-transform w-10 h-10">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="flex flex-col font-mono">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-1">Human Support</span>
            <span className="text-sm font-bold">WhatsApp Chat</span>
          </div>
        </a>

        {/* AI Chat Option */}
        <button
          onClick={() => {
            setIsAiChatOpen(true)
            setIsOpen(false)
          }}
          className="bg-slate-950 hover:bg-slate-900 text-white border border-white/10 transition-all group flex items-center gap-4 px-5 py-3 shadow-2xl lg:min-w-[240px]"
        >
          <div className="bg-accent rounded-none flex items-center justify-center text-accent-foreground group-hover:scale-110 transition-transform w-10 h-10">
            <Bot className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start font-mono">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 leading-none mb-1">Instant Assist</span>
            <span className="text-sm font-bold">AI Support Chat</span>
          </div>
        </button>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => {
          if (isAiChatOpen) {
            setIsAiChatOpen(false)
          } else {
            setIsOpen(!isOpen)
          }
        }}
        className={cn(
          "w-16 h-16 rounded-none flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 border-2",
          isOpen || isAiChatOpen
            ? "bg-card border-border text-foreground rotate-90" 
            : "bg-accent border-accent text-accent-foreground"
        )}
      >
        {isOpen || isAiChatOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8 fill-current" />
        )}
      </button>
    </div>
  )
}
