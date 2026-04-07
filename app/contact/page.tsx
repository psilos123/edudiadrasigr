import type { Metadata } from "next"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { InterestForm } from "@/components/InterestForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Επικοινωνία | EduDiadrasi",
  description: "Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες. Τηλέφωνο, email, διεύθυνση και ώρες λειτουργίας.",
}

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Τηλέφωνο",
    content: "210 123 4567",
    href: "tel:+302101234567",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    content: "info@edudiadrasi.gr",
    href: "mailto:info@edudiadrasi.gr",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Διεύθυνση",
    content: "Οδός Παιδείας 123, Αθήνα 12345",
    href: "https://maps.google.com/?q=Οδός+Παιδείας+123+Αθήνα",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Ώρες Λειτουργίας",
    content: "Δευτ-Παρ: 14:00-21:00, Σάβ: 10:00-14:00",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        badge="Επικοινωνία"
        title="Είμαστε εδώ για σένα"
        subtitle="Έχεις απορίες; Θέλεις να μάθεις περισσότερα; Επικοινώνησε μαζί μας και θα χαρούμε να σε βοηθήσουμε."
      />

      {/* Contact Info + Form */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">Στοιχεία Επικοινωνίας</h2>
            <p className="mt-2 text-muted-foreground">
              Μπορείτε να επικοινωνήσετε μαζί μας με οποιονδήποτε από τους παρακάτω τρόπους.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("https") ? "_blank" : undefined}
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Promise */}
            <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-semibold text-foreground">Θα σας καλέσουμε εμείς</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών για να 
                απαντήσουμε σε όλες τις ερωτήσεις σας και να κλείσουμε μια δωρεάν συνάντηση 
                γνωριμίας.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <InterestForm
              title="Δήλωση Ενδιαφέροντος"
              description="Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα."
            />
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section variant="muted" title="Βρείτε μας">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border shadow-sm">
          <div className="aspect-video w-full bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5384047559297!2d23.7275!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzAxLjciTiAyM8KwNDMnMzkuMCJF!5e0!3m2!1sen!2sgr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EduDiadrasi Location"
              className="h-full w-full"
            />
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Οδός Παιδείας 123, Αθήνα 12345 - Κοντά στο μετρό Σύνταγμα
        </p>
      </Section>

      {/* FAQ */}
      <Section title="Συχνές Ερωτήσεις">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Ποιες είναι οι τιμές σας;</h3>
              <p className="mt-2 text-muted-foreground">
                Οι τιμές εξαρτώνται από το πρόγραμμα και την τάξη. Επικοινωνήστε μαζί μας για 
                να λάβετε αναλυτικό τιμοκατάλογο προσαρμοσμένο στις ανάγκες σας.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Μπορώ να κάνω δοκιμαστικό μάθημα;</h3>
              <p className="mt-2 text-muted-foreground">
                Ναι! Προσφέρουμε δωρεάν δοκιμαστική συνάντηση γνωριμίας όπου μπορείτε να 
                γνωρίσετε τον χώρο και τους καθηγητές μας.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Πότε ξεκινούν τα μαθήματα;</h3>
              <p className="mt-2 text-muted-foreground">
                Τα τμήματα ξεκινούν τον Σεπτέμβριο, αλλά δεχόμαστε εγγραφές καθ&apos; όλη τη 
                διάρκεια της χρονιάς, ανάλογα με τη διαθεσιμότητα.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Υπάρχει δυνατότητα διακανονισμού;</h3>
              <p className="mt-2 text-muted-foreground">
                Ναι, προσφέρουμε ευέλικτους τρόπους πληρωμής. Επικοινωνήστε μαζί μας για να 
                συζητήσουμε τις επιλογές.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
