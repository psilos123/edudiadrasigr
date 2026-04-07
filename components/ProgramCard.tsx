import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

interface ProgramCardProps {
  icon?: ReactNode
  title: string
  description: string
  features?: string[]
  href: string
  className?: string
}

export function ProgramCard({
  icon,
  title,
  description,
  features,
  href,
  className,
}: ProgramCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:scale-[1.02]",
        className
      )}
    >
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="flex flex-1 flex-col p-6">
        {icon && (
          <div className="story-ring mb-4 h-16 w-16 p-[3px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-foreground">
              {icon}
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="mt-6 flex flex-col gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                  {index + 1}
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-6">
          <Link href={href}>
            <Button
              variant="ghost"
              className="group/btn w-full justify-between rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <span className="font-medium">Μάθε περισσότερα</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
