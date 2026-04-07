import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="διάδραση - Πρότυπο Μαθητικό Σπουδαστήριο"
                width={160}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Φροντιστήριο Μέσης Εκπαίδευσης με εξατομικευμένη προσέγγιση και υψηλά ποσοστά επιτυχίας.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Σύνδεσμοι</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/sxetika" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Σχετικά με εμάς
              </Link>
              <Link href="/kentro-meletes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Κέντρο Μελέτης
              </Link>
              <Link href="/gymnasio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Γυμνάσιο
              </Link>
              <Link href="/lykeio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Λύκειο
              </Link>
              <Link href="/epal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ΕΠΑΛ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Επικοινωνία</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+302101234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                210 123 4567
              </a>
              <a href="mailto:info@edudiadrasi.gr" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                info@edudiadrasi.gr
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Οδός Παιδείας 123, Αθήνα 12345</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Social Media</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EduDiadrasi. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Όροι Χρήσης
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
