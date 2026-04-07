import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

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
    <section className={cn("relative overflow-hidden bg-muted/30 py-16 md:py-24", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {badge}
            </span>
          )}
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="mt-8 flex flex-col gap-3 text-left sm:mx-auto sm:max-w-md">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    {primaryCTA.label}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {secondaryCTA.label}
                  </Button>
                </Link>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  )
}
