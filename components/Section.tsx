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
        "py-16 md:py-20",
        variant === "muted" && "bg-muted/30",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
