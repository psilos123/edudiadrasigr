import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SocialCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  variant?: "default" | "highlight" | "muted"
}

export function SocialCard({
  icon,
  title,
  description,
  className,
  variant = "default",
}: SocialCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg",
        variant === "highlight" && "border-primary/30 bg-primary/5",
        variant === "muted" && "bg-secondary",
        className
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      
      {icon && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground group-hover:glow-primary">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
    </div>
  )
}
