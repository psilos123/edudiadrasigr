import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
    <Card
      className={cn(
        "group flex h-full flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/30",
        className
      )}
    >
      <CardHeader className="pb-2">
        {icon && (
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        {features && features.length > 0 && (
          <ul className="mt-4 flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-6">
          <Link href={href}>
            <Button
              variant="ghost"
              className="w-full justify-between text-primary hover:bg-primary/10 hover:text-primary"
            >
              Μάθε περισσότερα
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
