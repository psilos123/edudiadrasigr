import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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
    <Card
      className={cn(
        "group transition-all duration-300 hover:shadow-md",
        variant === "highlight" && "border-primary/20 bg-primary/5",
        variant === "muted" && "bg-muted/50",
        className
      )}
    >
      <CardHeader className="pb-2">
        {icon && (
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
