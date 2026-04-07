"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Αρχική" },
  { href: "/sxetika", label: "Σχετικά" },
  { href: "/kentro-meletes", label: "Κέντρο Μελέτης" },
  { href: "/gymnasio", label: "Γυμνάσιο" },
  { href: "/lykeio", label: "Λύκειο" },
  { href: "/epal", label: "ΕΠΑΛ" },
  { href: "/contact", label: "Επικοινωνία" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.jpg" 
            alt="Διάδραση - Πρότυπο Μαθητικό Σπουδαστήριο" 
            width={180} 
            height={60} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden lg:block">
          <Button className="gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90 hover:glow-primary">
            <Plus className="h-4 w-4" />
            Εγγραφή
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Μενού</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border/50 bg-background">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <Image 
                  src="/images/logo.jpg" 
                  alt="Διάδραση - Πρότυπο Μαθητικό Σπουδαστήριο" 
                  width={160} 
                  height={50} 
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-all",
                      pathname === link.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full gap-2 rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                  Εγγραφή
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
