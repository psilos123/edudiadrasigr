import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { SocialCard } from "@/components/SocialCard"
import { SuccessBlock } from "@/components/SuccessBlock"
import { ProgramCard } from "@/components/ProgramCard"
import { TeacherCard } from "@/components/TeacherCard"
import { CTABanner } from "@/components/CTABanner"
import { InterestForm } from "@/components/InterestForm"
import {
  GraduationCap,
  Users,
  BookOpen,
  Target,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  School,
  FileText,
  Briefcase,
} from "lucide-react"

const whyUsCards = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Ολιγομελή Τμήματα",
    description: "Μικρές ομάδες μαθητών για εξατομικευμένη προσοχή και άμεση ανατροφοδότηση από τους καθηγητές.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Στοχευμένη Διδασκαλία",
    description: "Προσαρμοσμένο πρόγραμμα σπουδών βασισμένο στις ανάγκες και τους στόχους κάθε μαθητή.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Κέντρο Μελέτης",
    description: "Σύγχρονος χώρος μελέτης με επίβλεψη, ιδανικός για αυτόνομη εργασία και προετοιμασία.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Υποστήριξη Γονέων",
    description: "Τακτική ενημέρωση και συνεργασία με τους γονείς για την πρόοδο των μαθητών.",
  },
]

const programs = [
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: "Κέντρο Μελέτης",
    description: "Οργανωμένη μελέτη με επίβλεψη για μαθητές Δημοτικού και Γυμνασίου.",
    features: ["Καθημερινή επίβλεψη", "Βοήθεια στα μαθήματα", "Ήσυχο περιβάλλον"],
    href: "/kentro-meletes",
  },
  {
    icon: <School className="h-7 w-7" />,
    title: "Γυμνάσιο",
    description: "Πλήρη προετοιμασία για όλα τα μαθήματα του Γυμνασίου.",
    features: ["Μαθηματικά", "Νεοελληνική Γλώσσα", "Φυσικές Επιστήμες"],
    href: "/gymnasio",
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "Λύκειο",
    description: "Προετοιμασία για Πανελλαδικές με εξειδικευμένους καθηγητές.",
    features: ["Θετική Κατεύθυνση", "Θεωρητική Κατεύθυνση", "Οικονομία & Πληροφορική"],
    href: "/lykeio",
  },
  {
    icon: <Briefcase className="h-7 w-7" />,
    title: "ΕΠΑΛ",
    description: "Ολοκληρωμένη υποστήριξη για μαθητές Επαγγελματικού Λυκείου.",
    features: ["Γενική Παιδεία", "Μαθήματα Ειδικότητας", "Πρακτική Εφαρμογή"],
    href: "/epal",
  },
]

const teachers = [
  {
    name: "Μαρία Παπαδοπούλου",
    specialty: "Μαθηματικός",
    subjects: ["Άλγεβρα", "Γεωμετρία", "Ανάλυση"],
  },
  {
    name: "Νίκος Αντωνίου",
    specialty: "Φιλόλογος",
    subjects: ["Έκθεση", "Λογοτεχνία", "Αρχαία"],
  },
  {
    name: "Ελένη Δημητρίου",
    specialty: "Φυσικός",
    subjects: ["Φυσική", "Χημεία"],
  },
  {
    name: "Γιώργος Νικολάου",
    specialty: "Οικονομολόγος",
    subjects: ["ΑΟΘ", "Στατιστική"],
  },
]

const uspCards = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Καινοτόμες Μέθοδοι",
    description: "Χρήση σύγχρονων εκπαιδευτικών τεχνολογιών και διαδραστικών μεθόδων διδασκαλίας.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Αποδεδειγμένα Αποτελέσματα",
    description: "15+ χρόνια επιτυχιών στις Πανελλαδικές με συνεχώς υψηλά ποσοστά εισαγωγής.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Πλούσιο Υλικό",
    description: "Ολοκληρωμένες σημειώσεις, ασκήσεις και θέματα προσαρμοσμένα στις εξετάσεις.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Προσωπική Σχέση",
    description: "Ο καθηγητής ως σύμβουλος και μέντορας, όχι απλά διδάσκαλος.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        badge="Φροντιστήριο Μέσης Εκπαίδευσης"
        title="Εκπαίδευση που Εμπνέει και Οδηγεί στην Επιτυχία"
        subtitle="Προετοιμασία για Γυμνάσιο, Λύκειο και ΕΠΑΛ με εξατομικευμένη προσέγγιση και αποδεδειγμένα αποτελέσματα."
        bullets={[
          "Ολιγομελή τμήματα για προσωπική προσοχή",
          "Κέντρο μελέτης με καθημερινή επίβλεψη",
          "Έμπειροι καθηγητές με πάθος για τη διδασκαλία",
        ]}
        primaryCTA={{ label: "Ενδιαφέρομαι", href: "/contact" }}
        secondaryCTA={{ label: "Τα Προγράμματά μας", href: "#programs" }}
      />

      {/* Why Us Section */}
      <Section
        title="Γιατί EduDiadrasi"
        subtitle="Δημιουργούμε το ιδανικό περιβάλλον για την ακαδημαϊκή επιτυχία"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsCards.map((card, index) => (
            <SocialCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      {/* Success Stats */}
      <SuccessBlock />

      {/* Programs Section */}
      <Section
        variant="muted"
        title="Τα Προγράμματά μας"
        subtitle="Ολοκληρωμένες λύσεις για κάθε εκπαιδευτική βαθμίδα"
      >
        <div id="programs" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              features={program.features}
              href={program.href}
            />
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <CTABanner
        title="Ξεκίνα σήμερα το ταξίδι προς την επιτυχία"
        description="Κλείσε μια δωρεάν συνάντηση γνωριμίας"
        ctaLabel="Επικοινώνησε μαζί μας"
        ctaHref="/contact"
      />

      {/* Teachers Section */}
      <Section
        title="Η Ομάδα μας"
        subtitle="Έμπειροι εκπαιδευτικοί με πάθος για τη διδασκαλία"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              specialty={teacher.specialty}
              subjects={teacher.subjects}
            />
          ))}
        </div>
      </Section>

      {/* USP Section */}
      <Section
        variant="muted"
        title="Η Διαφορά μας"
        subtitle="Τι μας κάνει να ξεχωρίζουμε"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uspCards.map((card, index) => (
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

      {/* Interest Form Section */}
      <Section
        title="Ενδιαφέρεσαι;"
        subtitle="Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου"
      >
        <div className="mx-auto max-w-2xl">
          <InterestForm />
        </div>
      </Section>
    </>
  )
}
