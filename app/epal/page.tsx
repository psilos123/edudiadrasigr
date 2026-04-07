import type { Metadata } from "next"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { SocialCard } from "@/components/SocialCard"
import { CTABanner } from "@/components/CTABanner"
import { InterestForm } from "@/components/InterestForm"
import { ScheduleGrid } from "@/components/ScheduleGrid"
import {
  Briefcase,
  BookOpen,
  Settings,
  CheckCircle,
  GraduationCap,
  Target,
  Users,
  FileText,
  Laptop,
  Wrench,
  Stethoscope,
  Building,
} from "lucide-react"

export const metadata: Metadata = {
  title: "ΕΠΑΛ | EduDiadrasi",
  description: "Ολοκληρωμένη υποστήριξη για μαθητές Επαγγελματικού Λυκείου. Μαθήματα Γενικής Παιδείας και Ειδικότητας.",
}

const benefitsCards = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Εξειδικευμένοι Καθηγητές",
    description: "Καθηγητές με εμπειρία στα μαθήματα ΕΠΑΛ και τις απαιτήσεις τους.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Στοχευμένη Προετοιμασία",
    description: "Προσαρμοσμένο πρόγραμμα για τις Πανελλαδικές ΕΠΑΛ.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Υλικό Ειδικότητας",
    description: "Ολοκληρωμένες σημειώσεις για κάθε τομέα ειδικότητας.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Επαγγελματική Καθοδήγηση",
    description: "Συμβουλευτική για σπουδές και επαγγελματική σταδιοδρομία.",
  },
]

const generalSubjects = [
  { name: "Νεοελληνική Γλώσσα", description: "Έκθεση και κατανόηση κειμένων" },
  { name: "Μαθηματικά", description: "Άλγεβρα και εφαρμογές" },
  { name: "Αγγλικά", description: "Γενική αγγλική και τεχνική ορολογία" },
  { name: "Φυσική", description: "Βασικές αρχές και εφαρμογές" },
]

const specialties = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Πληροφορική",
    subjects: ["Προγραμματισμός", "Δίκτυα", "Βάσεις Δεδομένων"],
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Μηχανολογία",
    subjects: ["Μηχανολογικό Σχέδιο", "Στοιχεία Μηχανών", "Τεχνολογία Υλικών"],
  },
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Υγεία - Πρόνοια",
    subjects: ["Ανατομία", "Νοσηλευτική", "Πρώτες Βοήθειες"],
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Δομικά Έργα",
    subjects: ["Αρχιτεκτονικό Σχέδιο", "Οικοδομική", "Τοπογραφία"],
  },
]

const epalSchedule = {
  'Δευτέρα': {
    '16:00 – 17:30': { subject: 'Νεοελληνική Γλώσσα', grade: 'Γ ΕΠΑΛ', color: 'primary' as const },
    '17:30 – 19:00': { subject: 'Προγραμματισμός', grade: 'Β ΕΠΑΛ', color: 'accent' as const },
    '19:00 – 20:30': { subject: 'Μαθηματικά', grade: 'Α ΕΠΑΛ', color: 'secondary' as const },
  },
  'Τρίτη': {
    '16:00 – 17:30': { subject: 'Μηχανολογικό Σχέδιο', grade: 'Β ΕΠΑΛ', color: 'secondary' as const },
    '17:30 – 19:00': { subject: 'Αγγλικά', grade: 'Γ ΕΠΑΛ', color: 'primary' as const },
    '19:00 – 20:30': { subject: 'Βάσεις Δεδομένων', grade: 'Α ΕΠΑΛ', color: 'accent' as const },
  },
  'Τετάρτη': {
    '16:00 – 17:30': { subject: 'Ανατομία', grade: 'Α ΕΠΑΛ', color: 'primary' as const },
    '17:30 – 19:00': { subject: 'Δίκτυα', grade: 'Γ ΕΠΑΛ', color: 'secondary' as const },
    '19:00 – 20:30': { subject: 'Φυσική', grade: 'Β ΕΠΑΛ', color: 'accent' as const },
  },
  'Πέμπτη': {
    '16:00 – 17:30': { subject: 'Νοσηλευτική', grade: 'Β ΕΠΑΛ', color: 'accent' as const },
    '17:30 – 19:00': { subject: 'Μαθηματικά', grade: 'Γ ΕΠΑΛ', color: 'primary' as const },
    '19:00 – 20:30': { subject: 'Αρχιτεκτονικό Σχέδιο', grade: 'Α ΕΠΑΛ', color: 'secondary' as const },
  },
  'Παρασκευή': {
    '16:00 – 17:30': { subject: 'Χημεία', grade: 'Α ΕΠΑΛ', color: 'accent' as const },
    '17:30 – 19:00': { subject: 'Στοιχεία Μηχανών', grade: 'Β ΕΠΑΛ', color: 'secondary' as const },
    '19:00 – 20:30': { subject: 'Νεοελληνική Γλώσσα', grade: 'Α ΕΠΑΛ', color: 'primary' as const },
  },
}

export default function EpalPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        badge="ΕΠΑΛ"
        title="Επαγγελματική Εκπαίδευση με Προοπτικές"
        subtitle="Ολοκληρωμένη υποστήριξη για μαθητές Επαγγελματικού Λυκείου με έμφαση τόσο στη Γενική Παιδεία όσο και στα μαθήματα ειδικότητας."
        primaryCTA={{ label: "Δήλωσε Ενδιαφέρον", href: "#form" }}
      />

      {/* Benefits */}
      <Section
        title="Γιατί EduDiadrasi για ΕΠΑΛ"
        subtitle="Η εξειδίκευση κάνει τη διαφορά"
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

      {/* About EPAL */}
      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Τι είναι το ΕΠΑΛ;
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Το Επαγγελματικό Λύκειο (ΕΠΑΛ) προσφέρει μια εναλλακτική εκπαιδευτική διαδρομή 
            που συνδυάζει γενική παιδεία με επαγγελματική κατάρτιση. Οι απόφοιτοι μπορούν 
            να συνεχίσουν σε ΑΕΙ μέσω ειδικών εξετάσεων ή να εργαστούν άμεσα στον τομέα τους.
          </p>
        </div>
      </Section>

      {/* General Education */}
      <Section
        title="Μαθήματα Γενικής Παιδείας"
        subtitle="Η βάση για τις Πανελλαδικές ΕΠΑΛ"
      >
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {generalSubjects.map((subject, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{subject.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{subject.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Πέτυχε στις Πανελλαδικές ΕΠΑΛ"
        description="Εξειδικευμένη προετοιμασία για κάθε τομέα"
        ctaLabel="Κλείσε Ραντεβού"
        ctaHref="#form"
      />

      {/* Specialties */}
      <Section
        variant="muted"
        title="Τομείς Ειδικότητας"
        subtitle="Υποστήριξη σε όλους τους τομείς"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {specialty.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{specialty.title}</h3>
              <ul className="mt-3 flex flex-col gap-1">
                {specialty.subjects.map((subject, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Program by Year */}
      <Section title="Πρόγραμμα ανά Τάξη">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Α ΕΠΑΛ</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Γενική Παιδεία & Προσανατολισμός
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Νεοελληνική Γλώσσα
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Μαθηματικά
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Επιλογή Τομέα
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Β ΕΠΑΛ</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Εμβάθυνση στον Τομέα
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Μαθήματα Ειδικότητας
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Γενική Παιδεία
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Εργαστηριακές Ασκήσεις
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Γ ΕΠΑΛ</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Πανελλαδικές Εξετάσεις
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Εντατική Προετοιμασία
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Επαναλήψεις Ύλης
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                Προσομοιώσεις Εξετάσεων
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Weekly Schedule */}
      <Section variant="muted" title="Ενδεικτικό Εβδομαδιαίο Πρόγραμμα">
        <ScheduleGrid schedule={epalSchedule} />
      </Section>

      {/* Pathways */}
      <Section variant="muted" title="Μετά το ΕΠΑΛ">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Επαγγελματικές & Ακαδημαϊκές Διέξοδοι
            </h3>
            <p className="mt-2 text-muted-foreground">
              Οι απόφοιτοι ΕΠΑΛ έχουν πολλαπλές επιλογές:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-medium text-foreground">Πανελλαδικές Εξετάσεις</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Εισαγωγή σε ΑΕΙ μέσω ειδικών εξετάσεων για αποφοίτους ΕΠΑΛ
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-medium text-foreground">Άμεση Εργασία</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Επαγγελματική αποκατάσταση στον τομέα ειδικότητας
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-medium text-foreground">ΙΕΚ</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Περαιτέρω εξειδίκευση σε Ινστιτούτα Επαγγελματικής Κατάρτισης
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-medium text-foreground">Μαθητεία</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Πρακτική άσκηση σε επιχειρήσεις του κλάδου
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Interest Form */}
      <Section
        title="Ενδιαφέρεσαι;"
        subtitle="Συμπλήρωσε τη φόρμα για περισσότερες πληροφορίες"
      >
        <div id="form" className="mx-auto max-w-2xl">
          <InterestForm defaultProgram="epal" />
        </div>
      </Section>
    </>
  )
}
