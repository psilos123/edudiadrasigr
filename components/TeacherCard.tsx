import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Verified } from "lucide-react"

interface TeacherCardProps {
  name: string
  specialty: string
  subjects?: string[]
  image?: string
  description?: string
  className?: string
}

export function TeacherCard({
  name,
  specialty,
  subjects,
  image,
  description,
  className,
}: TeacherCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <div className={cn("group relative overflow-hidden rounded-3xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg", className)}>
      {/* Story-style avatar ring */}
      <div className="story-ring mx-auto h-24 w-24 p-[3px]">
        <div className="story-ring-inner h-full w-full">
          {image ? (
            <img src={image} alt={name} className="h-full w-full rounded-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-white">
              {initials}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-1">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <Verified className="h-4 w-4 text-accent" />
      </div>
      
      <p className="text-sm text-muted-foreground">@{specialty.toLowerCase().replace(/\s+/g, '_')}</p>
      
      {subjects && subjects.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {subjects.map((subject, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="rounded-full border-0 bg-secondary px-3 py-1 text-xs font-medium"
            >
              {subject}
            </Badge>
          ))}
        </div>
      )}
      
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      
      {/* Follow button style indicator */}
      <div className="mt-6 flex justify-center gap-4 text-center text-sm">
        <div>
          <span className="font-bold text-foreground">150+</span>
          <span className="block text-xs text-muted-foreground">Μαθητές</span>
        </div>
        <div>
          <span className="font-bold text-foreground">10+</span>
          <span className="block text-xs text-muted-foreground">Χρόνια</span>
        </div>
      </div>
    </div>
  )
}
