import type { Metadata } from "next"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { SocialCard } from "@/components/SocialCard"
import { Timeline } from "@/components/Timeline"
import { CTABanner } from "@/components/CTABanner"
import { InterestForm } from "@/components/InterestForm"
import {
  Clock,
  BookOpen,
  Users,
  Coffee,
  CheckCircle,
  Shield,
  Wifi,
  Lightbulb,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Κέντρο Μελέτης | EduDiadrasi",
  description: "Οργανωμένος χώρος μελέτης με επίβλεψη για μαθητές Δημοτικού και Γυμνασίου. Καθημερινή βοήθεια στα μαθήματα.",
}

const benefitsCards = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Σταθερό Πρόγραμμα",
    description: "Καθημερινή παρουσία με σταθερό ωράριο που βοηθά στη δημιουργία ρουτίνας μελέτης.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Εξειδικευμένη Επίβλεψη",
    description: "Εκπαιδευτικοί παρόντες για βοήθεια σε κάθε μάθημα και απορία.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Βοήθεια στα Μαθήματα",
    description: "Υποστήριξη σε όλα τα μαθήματα του σχολείου, από Γλώσσα μέχρι Μαθηματικά.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Ασφαλές Περιβάλλον",
    description: "Ήσυχος και ασφαλής χώρος αφιερωμένος αποκλειστικά στη μελέτη.",
  },
]

const facilitiesCards = [
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Σύγχρονος Εξοπλισμός",
    description: "Υπολογιστές, Wi-Fi και όλα τα απαραίτητα για τη σύγχρονη μελέτη.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Χώρος Χαλάρωσης",
    description: "Διαλείμματα σε ειδικά διαμορφωμένο χώρο για ξεκούραση.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Εργαστήρια Μάθησης",
    description: "Ειδικές δραστηριότητες για ανάπτυξη δεξιοτήτων και δημιουργικότητας.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Έλεγχος Εργασιών",
    description: "Καθημερινός έλεγχος και επίβλεψη των σχολικών εργασιών.",
  },
]

const dailySchedule = [
  {
    time: "14:00 - 14:30",
    title: "Άφιξη & Προετοιμασία",
    description: "Οι μαθητές φτάνουν και οργανώνουν τα υλικά τους.",
  },
  {
    time: "14:30 - 16:00",
    title: "Μελέτη & Εργασίες",
    description: "Ώρα αφιερωμένη στις σχολικές εργασίες με επίβλεψη.",
  },
  {
    time: "16:00 - 16:15",
    title: "Διάλειμμα",
    description: "Χρόνος για ξεκούραση και σνακ.",
  },
  {
    time: "16:15 - 17:30",
    title: "Διάβασμα & Επανάληψη",
    description: "Μελέτη για τα μαθήματα της επόμενης μέρας.",
  },
  {
    time: "17:30 - 18:00",
    title: "Ατομική Βοήθεια",
    description: "Εξατομικευμένη υποστήριξη για μαθητές που χρειάζονται επιπλέον βοήθεια.",
  },
]

export default function StudyCenterPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        badge="Κέντρο Μελέτης"
        title="Οργανωμένη Μελέτη με Επίβλεψη"
        subtitle="Ένας ήσυχος και οργανωμένος χώρος όπου οι μαθητές μαθαίνουν να μελετούν αποτελεσματικά και να αναπτύσσουν καλές συνήθειες μελέτης."
        primaryCTA={{ label: "Δήλωσε Ενδιαφέρον", href: "#form" }}
      />

      {/* Benefits */}
      <Section
        title="Γιατί Κέντρο Μελέτης"
        subtitle="Τα πλεονεκτήματα της οργανωμένης μελέτης"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefitsCards.map((card, index) => (
            <SocialCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      {/* Description */}
      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Τι είναι το Κέντρο Μελέτης;
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Το Κέντρο Μελέτης είναι ένας ειδικά διαμορφωμένος χώρος όπου οι μαθητές Δημοτικού 
            και Γυμνασίου μπορούν να κάνουν τις εργασίες τους και να διαβάσουν τα μαθήματά τους 
            υπό την επίβλεψη έμπειρων εκπαιδευτικών.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Στόχος μας είναι να βοηθήσουμε τους μαθητές να αναπτύξουν αυτονομία στη μελέτη, 
            να μάθουν να οργανώνουν τον χρόνο τους και να δημιουργήσουν σωστές συνήθειες που 
            θα τους συνοδεύουν σε όλη τη σχολική τους πορεία.
          </p>
        </div>
      </Section>

      {/* Daily Schedule */}
      <Section
        title="Ημερήσιο Πρόγραμμα"
        subtitle="Ένα τυπικό απόγευμα στο Κέντρο Μελέτης"
      >
        <div className="mx-auto max-w-3xl">
          <Timeline items={dailySchedule} />
        </div>
      </Section>

      {/* CTA Banner */}
      <CTABanner
        title="Δώσε στο παιδί σου το περιβάλλον που χρειάζεται"
        description="Ξεκίνα με μια δοκιμαστική εβδομάδα"
        ctaLabel="Μάθε περισσότερα"
        ctaHref="#form"
      />

      {/* Facilities */}
      <Section
        variant="muted"
        title="Ο Χώρος μας"
        subtitle="Εξοπλισμός και υποδομές"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilitiesCards.map((card, index) => (
            <SocialCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              variant="highlight"
            />
          ))}
        </div>
      </Section>

      {/* For Whom */}
      <Section title="Για Ποιους Απευθύνεται">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Δημοτικό</h3>
            <p className="mt-2 text-muted-foreground">
              Μαθητές Δ, Ε και ΣΤ Δημοτικού που χρειάζονται βοήθεια στις εργασίες 
              και επίβλεψη κατά τη μελέτη.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Βοήθεια στις καθημερινές εργασίες
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Ανάπτυξη συνηθειών μελέτης
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Προετοιμασία για Γυμνάσιο
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Γυμνάσιο</h3>
            <p className="mt-2 text-muted-foreground">
              Μαθητές Γυμνασίου που θέλουν οργανωμένη μελέτη και υποστήριξη σε 
              όλα τα μαθήματα.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Υποστήριξη σε όλα τα μαθήματα
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Προετοιμασία για εξετάσεις
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Ανάπτυξη αυτονομίας
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Interest Form */}
      <Section
        variant="muted"
        title="Ενδιαφέρεσαι;"
        subtitle="Συμπλήρωσε τη φόρμα για περισσότερες πληροφορίες"
      >
        <div id="form" className="mx-auto max-w-2xl">
          <InterestForm defaultProgram="kentro-meletes" />
        </div>
      </Section>
    </>
  )
}
