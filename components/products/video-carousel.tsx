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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 w-full max-w-7xl mx-auto">
      {/* Main Video Player (Left Side) */}
      <div className="lg:col-span-8 lg:col-start-1">
        <div className="group relative aspect-video bg-muted/10 border border-border shadow-2xl overflow-hidden cursor-pointer h-full">
          <img 
            src={items[current].image} 
            alt={items[current].title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white flex items-center justify-center scale-100 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-2xl">
              <Play className="w-6 h-6 md:w-10 md:h-10 ml-1.5" fill="currentColor" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 text-[10px] uppercase tracking-widest font-bold bg-accent text-accent-foreground">Now Playing</span>
            </div>
            <h3 className="swiss-headline text-3xl md:text-4xl text-white mb-2 tracking-tight">{items[current].title}</h3>
            <p className="swiss-label text-white/80 text-sm md:text-base font-medium max-w-2xl">{items[current].subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Thumbnails (Right Side - Playlist) */}
      {items.length > 1 && (
        <div className="lg:col-span-4 flex flex-col gap-2 h-full justify-between">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "group relative flex items-stretch gap-4 p-3 transition-all duration-300 text-left bg-background overflow-hidden border-l-4",
                i === current 
                  ? "border-accent bg-muted/40 shadow-sm" 
                  : "border-transparent hover:border-border hover:bg-muted/20"
              )}
            >
              <div className="relative w-24 lg:w-32 aspect-video shrink-0 overflow-hidden bg-muted shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={cn(
                    "w-full h-full object-cover transition-all duration-500",
                    i === current ? "grayscale-0 scale-105" : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  )}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  i === current ? "bg-accent text-accent-foreground opacity-100 scale-100" : "bg-black/50 text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 backdrop-blur-sm"
                )}>
                  <Play className="w-3 h-3 ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="flex-1 min-w-0 py-1 flex flex-col justify-center">
                <h4 className={cn(
                  "swiss-headline text-sm md:text-base mb-1 truncate transition-colors duration-300",
                  i === current ? "text-foreground font-black" : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {item.title}
                </h4>
                <p className="swiss-body text-xs text-muted-foreground line-clamp-2 leading-relaxed opacity-80">
                  {item.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
