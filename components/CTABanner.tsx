import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CTABannerProps {
  title: string
  description?: string
  ctaLabel: string
  ctaHref: string
  variant?: "default" | "accent"
  className?: string
}

export function CTABanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "default",
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "py-12 md:py-16",
        variant === "default" && "bg-primary",
        variant === "accent" && "bg-accent",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <h2
              className={cn(
                "text-2xl font-bold md:text-3xl",
                variant === "default" && "text-primary-foreground",
                variant === "accent" && "text-accent-foreground"
              )}
            >
              {title}
            </h2>
            {description && (
              <p
                className={cn(
                  "mt-2 text-lg",
                  variant === "default" && "text-primary-foreground/80",
                  variant === "accent" && "text-accent-foreground/80"
                )}
              >
                {description}
              </p>
            )}
          </div>
          <Link href={ctaHref}>
            <Button
              size="lg"
              className={cn(
                "shrink-0",
                variant === "default" && "bg-background text-foreground hover:bg-background/90",
                variant === "accent" && "bg-background text-foreground hover:bg-background/90"
              )}
            >
              {ctaLabel}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
