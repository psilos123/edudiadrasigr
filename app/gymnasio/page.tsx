import type { Metadata } from "next"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { SocialCard } from "@/components/SocialCard"
import { CTABanner } from "@/components/CTABanner"
import { InterestForm } from "@/components/InterestForm"
import { ScheduleGrid } from "@/components/ScheduleGrid"
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Languages,
  Globe,
  History,
  CheckCircle,
  FileText,
  Users,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Γυμνάσιο | EduDiadrasi",
  description: "Πλήρη προετοιμασία για όλα τα μαθήματα του Γυμνασίου. Ολιγομελή τμήματα, έμπειροι καθηγητές.",
}

const subjectsCards = [
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Μαθηματικά",
    description: "Άλγεβρα και Γεωμετρία με έμφαση στην κατανόηση και την επίλυση προβλημάτων.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Νεοελληνική Γλώσσα",
    description: "Γραμματική, σύνταξη και έκφραση για άριστη γραπτή και προφορική επικοινωνία.",
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Αρχαία Ελληνικά",
    description: "Κατανόηση κειμένων, γραμματική και ετυμολογία της αρχαίας γλώσσας.",
  },
  {
    icon: <FlaskConical className="h-6 w-6" />,
    title: "Φυσικές Επιστήμες",
    description: "Φυσική, Χημεία και Βιολογία με πειράματα και πρακτικές εφαρμογές.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Γεωγραφία",
    description: "Φυσική και πολιτική γεωγραφία της Ελλάδας και του κόσμου.",
  },
  {
    icon: <History className="h-6 w-6" />,
    title: "Ιστορία",
    description: "Αρχαία, Βυζαντινή και Νεότερη Ιστορία με κριτική προσέγγιση.",
  },
]

const approachCards = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Ολιγομελή Τμήματα",
    description: "5-8 μαθητές ανά τμήμα για μέγιστη προσοχή σε κάθε μαθητή.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Στοχευμένη Προετοιμασία",
    description: "Προσαρμοσμένο πρόγραμμα βασισμένο στο επίπεδο κάθε μαθητή.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Πλούσιο Υλικό",
    description: "Σημειώσεις, ασκήσεις και τεστ για κάθε ενότητα.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Τακτική Αξιολόγηση",
    description: "Διαγωνίσματα και tests για παρακολούθηση της προόδου.",
  },
]

const classes = ["Α Γυμνασίου", "Β Γυμνασίου", "Γ Γυμνασίου"]

const gymnaisoSchedule = {
  'Δευτέρα': {
    '16:00 – 17:30': { subject: 'Μαθηματικά', grade: 'Α Γυμνασίου', color: 'primary' as const },
    '17:30 – 19:00': { subject: 'Νεοελληνική Γλώσσα', grade: 'Β Γυμνασίου', color: 'accent' as const },
    '19:00 – 20:30': { subject: 'Αρχαία Ελληνικά', grade: 'Γ Γυμνασίου', color: 'secondary' as const },
  },
  'Τρίτη': {
    '16:00 – 17:30': { subject: 'Φυσικές Επιστήμες', grade: 'Α Γυμνασίου', color: 'accent' as const },
    '17:30 – 19:00': { subject: 'Μαθηματικά', grade: 'Γ Γυμνασίου', color: 'primary' as const },
    '19:00 – 20:30': { subject: 'Γεωγραφία', grade: 'Β Γυμνασίου', color: 'secondary' as const },
  },
  'Τετάρτη': {
    '16:00 – 17:30': { subject: 'Αρχαία Ελληνικά', grade: 'Β Γυμνασίου', color: 'secondary' as const },
    '17:30 – 19:00': { subject: 'Φυσική', grade: 'Γ Γυμνασίου', color: 'accent' as const },
    '19:00 – 20:30': { subject: 'Νεοελληνική Γλώσσα', grade: 'Α Γυμνασίου', color: 'primary' as const },
  },
  'Πέμπτη': {
    '16:00 – 17:30': { subject: 'Ιστορία', grade: 'Β Γυμνασίου', color: 'primary' as const },
    '17:30 – 19:00': { subject: 'Χημεία', grade: 'Α Γυμνασίου', color: 'secondary' as const },
    '19:00 – 20:30': { subject: 'Γεωγραφία', grade: 'Γ Γυμνασίου', color: 'accent' as const },
  },
  'Παρασκευή': {
    '16:00 – 17:30': { subject: 'Γλώσσα & Αρχαία', grade: 'Γ Γυμνασίου', color: 'accent' as const },
    '17:30 – 19:00': { subject: 'Ιστορία', grade: 'Α Γυμνασίου', color: 'secondary' as const },
    '19:00 – 20:30': { subject: 'Βιολογία', grade: 'Β Γυμνασίου', color: 'primary' as const },
  },
}

export default function GymnasioPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        badge="Γυμνάσιο"
        title="Στέρεα Βάση για το Μέλλον"
        subtitle="Πλήρη προετοιμασία για όλα τα μαθήματα του Γυμνασίου με έμφαση στην κατανόηση και την ανάπτυξη κριτικής σκέψης."
        primaryCTA={{ label: "Δήλωσε Ενδιαφέρον", href: "#form" }}
        secondaryCTA={{ label: "Δες τα Μαθήματα", href: "#subjects" }}
      />

      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Γιατί το Γυμνάσιο είναι Κρίσιμο
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Το Γυμνάσιο είναι η βάση για όλη τη μετέπειτα εκπαιδευτική πορεία. Εδώ χτίζονται 
            οι γνώσεις και οι δεξιότητες που θα χρειαστούν οι μαθητές στο Λύκειο και πέρα 
            από αυτό. Μια καλή βάση στο Γυμνάσιο σημαίνει λιγότερα κενά και μεγαλύτερη 
            αυτοπεποίθηση αργότερα.
          </p>
        </div>
      </Section>

      {/* Subjects */}
      <Section
        variant="muted"
        title="Τα Μαθήματα"
        subtitle="Πλήρη κάλυψη της ύλης του Γυμνασίου"
      >
        <div id="subjects" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjectsCards.map((card, index) => (
            <SocialCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section
        title="Η Προσέγγισή μας"
        subtitle="Πώς διδάσκουμε στο Γυμνάσιο"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approachCards.map((card, index) => (
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

      {/* Classes */}
      <Section variant="muted" title="Τάξεις">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {classes.map((className, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-foreground">{className}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Όλα τα μαθήματα της {className.split(" ")[0]} τάξης
              </p>
              <ul className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
                <li>Μαθηματικά</li>
                <li>Γλώσσα & Αρχαία</li>
                <li>Φυσικές Επιστήμες</li>
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Weekly Schedule */}
      <Section title="Ενδεικτικό Εβδομαδιαίο Πρόγραμμα">
        <ScheduleGrid schedule={gymnaisoSchedule} />
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ξεκίνα δυνατά στο Γυμνάσιο"
        description="Κλείσε μια δωρεάν δοκιμαστική συνάντηση"
        ctaLabel="Επικοινώνησε μαζί μας"
        ctaHref="#form"
      />

      {/* Exams Prep */}
      <Section title="Προετοιμασία για Εξετάσεις">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Ετοιμότητα για Κάθε Εξέταση
            </h3>
            <p className="mt-2 text-muted-foreground">
              Προετοιμάζουμε τους μαθητές μας για όλες τις σχολικές εξετάσεις με:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Εντατική επανάληψη ύλης
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Επίλυση παλαιότερων θεμάτων
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Προσομοίωση εξετάσεων
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Τεχνικές διαχείρισης χρόνου
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Στρατηγικές απάντησης
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Ψυχολογική υποστήριξη
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
          <InterestForm defaultProgram="gymnasio" />
        </div>
      </Section>
    </>
  )
}
