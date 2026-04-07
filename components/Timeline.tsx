import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  time: string
  title: string
  description?: string
  icon?: ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative flex gap-6 md:gap-0",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2">
              {item.icon || (
                <span className="text-xs font-bold text-primary">{index + 1}</span>
              )}
            </div>

            {/* Content */}
            <div
              className={cn(
                "ml-12 flex-1 rounded-lg border border-border bg-card p-4 shadow-sm md:ml-0 md:max-w-[calc(50%-2rem)]",
                index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
              )}
            >
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {item.time}
              </span>
              <h4 className="mt-2 font-semibold text-foreground">{item.title}</h4>
              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
