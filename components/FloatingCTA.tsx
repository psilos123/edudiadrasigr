"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, Plus } from "lucide-react"
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
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:hidden",
        "glow-primary",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <Plus className="h-6 w-6 text-white" />
      <span className="sr-only">Επικοινωνία</span>
    </Link>
  )
}
