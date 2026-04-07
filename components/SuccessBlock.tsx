import { cn } from "@/lib/utils"
import { Trophy, TrendingUp, Users, Star } from "lucide-react"

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
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
