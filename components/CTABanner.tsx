import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

interface CTABannerProps {
  title: string
  description?: string
  ctaLabel: string
  ctaHref: string
  variant?: "default" | "accent"
  className?: string
}

export function CTABanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "default",
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        className
      )}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-accent" />
      
      {/* Animated glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Ξεκίνα σήμερα</span>
          </div>
          
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-white md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg text-white/80">
                {description}
              </p>
            )}
          </div>
          
          <Link href={ctaHref}>
            <Button
              size="lg"
              className="group h-14 gap-2 rounded-full bg-white px-8 text-lg font-semibold text-primary transition-all hover:bg-white/90 hover:scale-105"
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
