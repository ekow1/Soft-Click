"use client"
import * as React from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoItem {
  title: string
  subtitle: string
  image: string
}

export function VideoCarousel({ items }: { items: VideoItem[] }) {
  const [current, setCurrent] = React.useState(0)

  const next = () => setCurrent((c) => (c + 1) % items.length)
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="group relative aspect-video bg-muted/20 border-2 border-border overflow-hidden cursor-pointer">
        <img 
          src={items[current].image} 
          alt={items[current].title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="swiss-headline text-2xl text-white">{items[current].title}</h3>
          <p className="swiss-label text-white/70">{items[current].subtitle}</p>
        </div>
      </div>
      
      {items.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={prev} className="p-3 bg-background border-2 border-border text-foreground hover:border-accent hover:text-accent transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <div key={i} className={cn("w-2 h-2 rounded-full", i === current ? "bg-accent" : "bg-border")} />
            ))}
          </div>
          <button onClick={next} className="p-3 bg-background border-2 border-border text-foreground hover:border-accent hover:text-accent transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}
