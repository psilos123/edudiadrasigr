"use client"

import { useState } from "react"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { SocialCard } from "@/components/SocialCard"
import { CTABanner } from "@/components/CTABanner"
import { InterestForm } from "@/components/InterestForm"
import { ScheduleGrid } from "@/components/ScheduleGrid"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Calculator,
  FlaskConical,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Target,
  Users,
  FileText,
  Award,
  Atom,
  Dna,
  PenLine,
  History,
  Scale,
  Laptop,
  BarChart,
} from "lucide-react"

const systemCards = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Ολιγομελή Τμήματα",
    description: "4-6 μαθητές ανά τμήμα για μέγιστη αποτελεσματικότητα.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Στοχευμένη Προετοιμασία",
    description: "Εστίαση στις απαιτήσεις των Πανελλαδικών εξετάσεων.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Πλήρες Υλικό",
    description: "Σημειώσεις, θέματα εξετάσεων και ασκήσεις για κάθε κεφάλαιο.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "95% Επιτυχία",
    description: "Υψηλά ποσοστά εισαγωγής στις σχολές πρώτης επιλογής.",
  },
]

const directions = [
  {
    id: "thetiki",
    label: "Θετική",
    description: "Για σπουδές στις Θετικές Επιστήμες και Πολυτεχνικές Σχολές",
    subjects: [
      { icon: <Calculator className="h-5 w-5" />, name: "Μαθηματικά", details: "Άλγεβρα, Ανάλυση, Γεωμετρία" },
      { icon: <Atom className="h-5 w-5" />, name: "Φυσική", details: "Μηχανική, Ηλεκτρισμός, Κύματα" },
      { icon: <FlaskConical className="h-5 w-5" />, name: "Χημεία", details: "Οργανική & Ανόργανη Χημεία" },
    ],
    careers: ["Ιατρική", "Πολυτεχνείο", "Θετικές Επιστήμες", "Φαρμακευτική"],
  },
  {
    id: "theoritiki",
    label: "Θεωρητική",
    description: "Για σπουδές στις Ανθρωπιστικές Επιστήμες και Νομική",
    subjects: [
      { icon: <PenLine className="h-5 w-5" />, name: "Έκθεση-Έκφραση", details: "Παραγωγή λόγου & ανάλυση κειμένων" },
      { icon: <BookOpen className="h-5 w-5" />, name: "Αρχαία Ελληνικά", details: "Μετάφραση & ερμηνεία κειμένων" },
      { icon: <History className="h-5 w-5" />, name: "Ιστορία", details: "Νεότερη & Σύγχρονη Ιστορία" },
      { icon: <Scale className="h-5 w-5" />, name: "Λατινικά", details: "Γραμματική & μετάφραση" },
    ],
    careers: ["Νομική", "Φιλοσοφική", "Ψυχολογία", "Δημοσιογραφία"],
  },
  {
    id: "oikonomiki",
    label: "Οικονομία & Πληροφορική",
    description: "Για σπουδές στα Οικονομικά και την Πληροφορική",
    subjects: [
      { icon: <TrendingUp className="h-5 w-5" />, name: "ΑΟΘ", details: "Αρχές Οικονομικής Θεωρίας" },
      { icon: <Calculator className="h-5 w-5" />, name: "Μαθηματικά", details: "Άλγεβρα & Στατιστική" },
      { icon: <Laptop className="h-5 w-5" />, name: "ΑΕΠΠ", details: "Ανάπτυξη Εφαρμογών" },
      { icon: <BarChart className="h-5 w-5" />, name: "Στατιστική", details: "Στατιστική Ανάλυση" },
    ],
    careers: ["Οικονομικά", "Πληροφορική", "Διοίκηση Επιχειρήσεων", "Marketing"],
  },
]

const lykeioSchedule = {
  'Δευτέρα': {
    '16:00 – 17:30': { subject: 'Μαθηματικά', grade: 'Γ Λυκείου', color: 'primary' as const },
    '17:30 – 19:00': { subject: 'Φυσική', grade: 'Β Λυκείου', color: 'accent' as const },
    '19:00 – 20:30': { subject: 'Έκθεση', grade: 'Α Λυκείου', color: 'secondary' as const },
  },
  'Τρίτη': {
    '16:00 – 17:30': { subject: 'Χημεία', grade: 'Γ Λυκείου', color: 'accent' as const },
    '17:30 – 19:00': { subject: 'ΑΟΘ', grade: 'Β Λυκείου', color: 'secondary' as const },
    '19:00 – 20:30': { subject: 'Αρχαία Ελληνικά', grade: 'Α Λυκείου', color: 'primary' as const },
  },
  'Τετάρτη': {
    '16:00 – 17:30': { subject: 'Ιστορία', grade: 'Β Λυκείου', color: 'secondary' as const },
    '17:30 – 19:00': { subject: 'Φυσική', grade: 'Γ Λυκείου', color: 'primary' as const },
    '19:00 – 20:30': { subject: 'Αγγλικά', grade: 'Α Λυκείου', color: 'accent' as const },
  },
  'Πέμπτη': {
    '16:00 – 17:30': { subject: 'Έκθεση', grade: 'Γ Λυκείου', color: 'primary' as const },
    '17:30 – 19:00': { subject: 'ΑΕΠΠ', grade: 'Β Λυκείου', color: 'accent' as const },
    '19:00 – 20:30': { subject: 'Μαθηματικά', grade: 'Α Λυκείου', color: 'secondary' as const },
  },
  'Παρασκευή': {
    '16:00 – 17:30': { subject: 'Αρχαία Ελληνικά', grade: 'Γ Λυκείου', color: 'accent' as const },
    '17:30 – 19:00': { subject: 'Ιστορία', grade: 'Α Λυκείου', color: 'secondary' as const },
    '19:00 – 20:30': { subject: 'Χημεία', grade: 'Β Λυκείου', color: 'primary' as const },
  },
}

export default function LykeioPage() {
  const [activeDirection, setActiveDirection] = useState("thetiki")

  const currentDirection = directions.find((d) => d.id === activeDirection)

  return (
    <>
      {/* Hero */}
      <Hero
        badge="Λύκειο"
        title="Πανελλαδικές με Αυτοπεποίθηση"
        subtitle="Ολοκληρωμένη προετοιμασία για τις Πανελλαδικές εξετάσεις με εξειδικευμένους καθηγητές και αποδεδειγμένα αποτελέσματα."
        primaryCTA={{ label: "Δήλωσε Ενδιαφέρον", href: "#form" }}
        secondaryCTA={{ label: "Επίλεξε Κατεύθυνση", href: "#directions" }}
      />

      {/* System */}
      <Section
        title="Το Σύστημά μας"
        subtitle="Η μέθοδος που οδηγεί στην επιτυχία"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {systemCards.map((card, index) => (
            <SocialCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      {/* Directions */}
      <Section
        variant="muted"
        title="Κατευθύνσεις"
        subtitle="Επίλεξε την κατεύθυνσή σου"
      >
        <div id="directions" className="mx-auto max-w-4xl">
          {/* Filter Buttons */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {directions.map((direction) => (
              <Button
                key={direction.id}
                variant={activeDirection === direction.id ? "default" : "outline"}
                onClick={() => setActiveDirection(direction.id)}
                className={cn(
                  "min-w-32",
                  activeDirection === direction.id && "bg-primary text-primary-foreground"
                )}
              >
                {direction.label}
              </Button>
            ))}
          </div>

          {/* Direction Details */}
          {currentDirection && (
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold text-foreground">
                {currentDirection.label} Κατεύθυνση
              </h3>
              <p className="mt-2 text-muted-foreground">{currentDirection.description}</p>

              {/* Subjects */}
              <div className="mt-6">
                <h4 className="font-medium text-foreground">Μαθήματα Ειδικότητας</h4>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {currentDirection.subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {subject.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">{subject.name}</h5>
                        <p className="text-sm text-muted-foreground">{subject.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Careers */}
              <div className="mt-6">
                <h4 className="font-medium text-foreground">Επαγγελματικές Διέξοδοι</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {currentDirection.careers.map((career, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Εισαγωγή στη σχολή των ονείρων σου"
        description="Ξεκίνα την προετοιμασία σου σήμερα"
        ctaLabel="Κλείσε Ραντεβού"
        ctaHref="#form"
        variant="accent"
      />

      {/* Program Structure */}
      <Section title="Δομή Προγράμματος">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Α Λυκείου</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Γενική Παιδεία & Προσανατολισμός
            </p>
            <ul className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
              <li>Μαθηματικά</li>
              <li>Φυσική</li>
              <li>Νεοελληνική Γλώσσα</li>
              <li>Αρχαία Ελληνικά</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Β Λυκείου</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Επιλογή Κατεύθυνσης
            </p>
            <ul className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
              <li>Μαθήματα Κατεύθυνσης</li>
              <li>Γενική Παιδεία</li>
              <li>Προετοιμασία για Γ</li>
            </ul>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Γ Λυκείου</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Πανελλαδικές Εξετάσεις
            </p>
            <ul className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
              <li>Εντατική Προετοιμασία</li>
              <li>Επαναλήψεις Ύλης</li>
              <li>Προσομοιώσεις Εξετάσεων</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Weekly Schedule */}
      <Section variant="muted" title="Ενδεικτικό Εβδομαδιαίο Πρόγραμμα">
        <ScheduleGrid schedule={lykeioSchedule} />
      </Section>

      {/* Exam Prep */}
      <Section variant="muted" title="Προετοιμασία Πανελλαδικών">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Η Μέθοδός μας για τις Πανελλαδικές
            </h3>
            <p className="mt-2 text-muted-foreground">
              Με περισσότερους από 500 επιτυχόντες, γνωρίζουμε τι χρειάζεται για να πετύχεις:
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <span className="font-medium text-foreground">Πλήρης Κάλυψη Ύλης</span>
                  <p className="text-sm text-muted-foreground">Αναλυτική διδασκαλία όλης της ύλης</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <span className="font-medium text-foreground">Επαναληπτικά Τεστ</span>
                  <p className="text-sm text-muted-foreground">Εβδομαδιαία τεστ αξιολόγησης</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <span className="font-medium text-foreground">Θέματα Εξετάσεων</span>
                  <p className="text-sm text-muted-foreground">Όλα τα θέματα προηγούμενων ετών</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <span className="font-medium text-foreground">Προσομοιώσεις</span>
                  <p className="text-sm text-muted-foreground">Πανελλαδικές υπό πραγματικές συνθήκες</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <span className="font-medium text-foreground">Ψυχολογική Υποστήριξη</span>
                  <p className="text-sm text-muted-foreground">Διαχείριση άγχους εξετάσεων</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <span className="font-medium text-foreground">Συμβουλευτική</span>
                  <p className="text-sm text-muted-foreground">Βοήθεια στην επιλογή σχολών</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Interest Form */}
      <Section
        title="Ενδιαφέρεσαι;"
        subtitle="Συμπλήρωσε τη φόρμα για περισσότερες πληροφορίες"
      >
        <div id="form" className="mx-auto max-w-2xl">
          <InterestForm />
        </div>
      </Section>
    </>
  )
}
