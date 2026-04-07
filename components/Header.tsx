"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="διάδραση - Πρότυπο Μαθητικό Σπουδαστήριο"
            width={180}
            height={50}
            className="h-10 w-auto object-contain md:h-12"
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
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden lg:block">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Δήλωσε Ενδιαφέρον
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Μενού</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <Image
                  src="/images/logo.jpg"
                  alt="διάδραση - Πρότυπο Μαθητικό Σπουδαστήριο"
                  width={160}
                  height={45}
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
                      "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Δήλωσε Ενδιαφέρον
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
