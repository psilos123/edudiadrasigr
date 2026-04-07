import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

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
    <Card className={cn("group transition-all duration-300 hover:shadow-md", className)}>
      <CardContent className="flex flex-col items-center p-6 text-center">
        <Avatar className="h-20 w-20 border-2 border-primary/20">
          {image && <AvatarImage src={image} alt={name} />}
          <AvatarFallback className="bg-primary/10 text-lg font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{specialty}</p>
        {subjects && subjects.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {subjects.map((subject, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        )}
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
