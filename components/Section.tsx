import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  variant?: "default" | "muted"
}

export function Section({
  title,
  subtitle,
  children,
  className,
  variant = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28",
        variant === "muted" && "bg-secondary/30",
        className
      )}
    >
      {/* Subtle gradient overlay for muted sections */}
      {variant === "muted" && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      )}
      
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {(title || subtitle) && (
          <div className="mb-14 text-center">
            {title && (
              <h2 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
