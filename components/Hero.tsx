import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, Play } from "lucide-react"

interface HeroProps {
  badge?: string
  title: string
  subtitle?: string
  bullets?: string[]
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  className?: string
  children?: ReactNode
}

export function Hero({
  badge,
  title,
  subtitle,
  bullets,
  primaryCTA,
  secondaryCTA,
  className,
  children,
}: HeroProps) {
  return (
    <section className={cn("relative min-h-[90vh] flex items-center overflow-hidden py-20 md:py-32", className)}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/10 blur-3xl" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {badge && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              {badge}
            </span>
          )}
          
          <h1 className="text-balance text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-7xl">
            <span className="text-gradient">{title.split(" ").slice(0, 2).join(" ")}</span>
            {" "}
            {title.split(" ").slice(2).join(" ")}
          </h1>
          
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {bullets.map((bullet, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-sm text-foreground">{bullet}</span>
                </div>
              ))}
            </div>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button 
                    size="lg" 
                    className="h-14 w-full gap-2 rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:glow-primary sm:w-auto"
                  >
                    <Play className="h-5 w-5" />
                    {primaryCTA.label}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-14 w-full rounded-full border-border bg-transparent px-8 text-lg font-medium text-foreground backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-background sm:w-auto"
                  >
                    {secondaryCTA.label}
                  </Button>
                </Link>
              )}
            </div>
          )}

          {/* Social proof / stats strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border/50 pt-10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-accent/80 text-xs font-bold text-white"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Μαθητές</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">95%</p>
              <p className="text-xs text-muted-foreground">Επιτυχία</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">15+</p>
              <p className="text-xs text-muted-foreground">Χρόνια</p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  )
}
