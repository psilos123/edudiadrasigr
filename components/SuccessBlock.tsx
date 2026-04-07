import { cn } from "@/lib/utils"
import { Trophy, TrendingUp, Users, Star, Zap } from "lucide-react"

interface StatItem {
  value: string
  label: string
}

interface SuccessBlockProps {
  title?: string
  description?: string
  stats?: StatItem[]
  className?: string
}

const defaultStats: StatItem[] = [
  { value: "95%", label: "Επιτυχία στις εξετάσεις" },
  { value: "500+", label: "Απόφοιτοι" },
  { value: "15+", label: "Χρόνια εμπειρίας" },
  { value: "4.9", label: "Βαθμολογία γονέων" },
]

const icons = [Trophy, TrendingUp, Users, Star]

export function SuccessBlock({
  title = "Η Επιτυχία σε Αριθμούς",
  description = "Τα αποτελέσματα μας μιλούν από μόνα τους",
  stats = defaultStats,
  className,
}: SuccessBlockProps) {
  return (
    <section className={cn("relative py-20 md:py-28 overflow-hidden", className)}>
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Αποτελέσματα</span>
          </div>
          <h2 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">{title}</h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                {/* Animated background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                
                <div className="story-ring mx-auto mb-6 h-16 w-16 p-[3px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                
                <span className="text-gradient text-4xl font-black md:text-5xl">{stat.value}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
