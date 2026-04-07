"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Link
      href="/contact"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-accent-foreground shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl lg:hidden",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
    >
      <MessageCircle className="h-5 w-5" />
      <span>Ενδιαφέρον</span>
    </Link>
  )
}
