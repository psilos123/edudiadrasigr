import type { Metadata } from "next"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { SocialCard } from "@/components/SocialCard"
import { TeacherCard } from "@/components/TeacherCard"
import { CTABanner } from "@/components/CTABanner"
import {
  Heart,
  Target,
  Users,
  Lightbulb,
  BookOpen,
  Award,
  Handshake,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Σχετικά με εμάς | EduDiadrasi",
  description: "Γνωρίστε την ομάδα και τη φιλοσοφία του EduDiadrasi. Εκπαίδευση με ανθρωποκεντρική προσέγγιση και πάθος για τη μάθηση.",
}

const philosophyCards = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Αγάπη για τη Μάθηση",
    description: "Πιστεύουμε ότι κάθε μαθητής μπορεί να αγαπήσει τη μάθηση όταν βρει το σωστό περιβάλλον και υποστήριξη.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Εξατομικευμένη Προσέγγιση",
    description: "Κάθε μαθητής είναι μοναδικός. Προσαρμόζουμε τη διδασκαλία στις ανάγκες και τον ρυθμό του καθενός.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Συνεργασία",
    description: "Δουλεύουμε μαζί με γονείς και μαθητές ως ομάδα για την επίτευξη των στόχων.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Καινοτομία",
    description: "Χρησιμοποιούμε σύγχρονες μεθόδους και τεχνολογίες για πιο αποτελεσματική μάθηση.",
  },
]

const goalsCards = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Ακαδημαϊκή Αριστεία",
    description: "Βοηθάμε τους μαθητές να πετύχουν τους ακαδημαϊκούς τους στόχους και να εισαχθούν στις σχολές που επιθυμούν.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Ολοκληρωμένη Ανάπτυξη",
    description: "Δεν επικεντρωνόμαστε μόνο στους βαθμούς, αλλά και στην ανάπτυξη κριτικής σκέψης και δεξιοτήτων.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Αυτοπεποίθηση",
    description: "Χτίζουμε την αυτοπεποίθηση των μαθητών μέσα από μικρές καθημερινές επιτυχίες.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Ο Καθηγητής ως Σύμβουλος",
    description: "Οι εκπαιδευτικοί μας δεν είναι απλά διδάσκαλοι - είναι μέντορες και σύμβουλοι για τους μαθητές.",
  },
]

const teachers = [
  {
    name: "Μαρία Παπαδοπούλου",
    specialty: "Μαθηματικός",
    subjects: ["Άλγεβρα", "Γεωμετρία", "Ανάλυση"],
    description: "15 χρόνια εμπειρίας στην προετοιμασία μαθητών για Πανελλαδικές. Ειδικότητα στη Θετική κατεύθυνση.",
  },
  {
    name: "Νίκος Αντωνίου",
    specialty: "Φιλόλογος",
    subjects: ["Έκθεση", "Λογοτεχνία", "Αρχαία"],
    description: "Εξειδίκευση στη Θεωρητική κατεύθυνση με ιδιαίτερη έμφαση στην Έκθεση-Έκφραση.",
  },
  {
    name: "Ελένη Δημητρίου",
    specialty: "Φυσικός",
    subjects: ["Φυσική", "Χημεία"],
    description: "Πτυχίο Φυσικής από ΕΚΠΑ, με μεταπτυχιακό στη Διδακτική των Φυσικών Επιστημών.",
  },
  {
    name: "Γιώργος Νικολάου",
    specialty: "Οικονομολόγος",
    subjects: ["ΑΟΘ", "Στατιστική"],
    description: "Εξειδίκευση στην Οικονομία & Πληροφορική με υψηλά ποσοστά επιτυχίας στις Πανελλαδικές.",
  },
  {
    name: "Αναστασία Κωνσταντίνου",
    specialty: "Βιολόγος",
    subjects: ["Βιολογία"],
    description: "Διδακτορικό στη Μοριακή Βιολογία. Πάθος για την επιστήμη που μεταδίδεται στους μαθητές.",
  },
  {
    name: "Δημήτρης Αλεξίου",
    specialty: "Πληροφορικός",
    subjects: ["Πληροφορική", "ΑΕΠΠ"],
    description: "Εμπειρία στον ιδιωτικό τομέα και τη διδασκαλία. Εξειδίκευση στην αλγοριθμική σκέψη.",
  },
  {
    name: "Κατερίνα Μιχαηλίδου",
    specialty: "Φιλόλογος",
    subjects: ["Λατινικά", "Ιστορία"],
    description: "Μεταπτυχιακό στην Κλασική Φιλολογία. Ειδικότητα στη διδασκαλία Λατινικών.",
  },
  {
    name: "Παναγιώτης Γεωργίου",
    specialty: "Μαθηματικός",
    subjects: ["Μαθηματικά Γυμνασίου"],
    description: "Εξειδίκευση στη διδασκαλία μαθηματικών σε μαθητές Γυμνασίου και Κέντρου Μελέτης.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        badge="Σχετικά με εμάς"
        title="Εκπαίδευση με Ανθρωποκεντρική Προσέγγιση"
        subtitle="Από το 2009, το EduDiadrasi βοηθά μαθητές να ανακαλύψουν τις δυνατότητές τους και να πετύχουν τους στόχους τους."
      />

      {/* Philosophy */}
      <Section
        title="Η Φιλοσοφία μας"
        subtitle="Πιστεύουμε σε μια εκπαίδευση που εμπνέει και ενδυναμώνει"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {philosophyCards.map((card, index) => (
            <SocialCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      {/* Goals */}
      <Section
        variant="muted"
        title="Οι Στόχοι μας"
        subtitle="Τι επιδιώκουμε για κάθε μαθητή"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goalsCards.map((card, index) => (
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

      {/* Story */}
      <Section title="Η Ιστορία μας">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Το EduDiadrasi ξεκίνησε το 2009 με ένα όραμα: να δημιουργήσουμε ένα φροντιστήριο 
              που θα ξεχωρίζει για την ανθρώπινη προσέγγισή του. Πιστεύαμε - και εξακολουθούμε 
              να πιστεύουμε - ότι η εκπαίδευση δεν είναι απλά μετάδοση γνώσεων, αλλά μια σχέση 
              εμπιστοσύνης μεταξύ καθηγητή και μαθητή.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Σήμερα, με περισσότερους από 500 αποφοίτους και συνεχώς υψηλά ποσοστά επιτυχίας, 
              συνεχίζουμε να εμπνέουμε μαθητές και να τους βοηθάμε να ανακαλύψουν τις πραγματικές 
              τους δυνατότητες.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Γίνε μέρος της οικογένειάς μας"
        description="Κλείσε μια δωρεάν συνάντηση γνωριμίας"
        ctaLabel="Επικοινώνησε μαζί μας"
        ctaHref="/contact"
        variant="accent"
      />

      {/* Teachers */}
      <Section
        title="Η Ομάδα μας"
        subtitle="Γνωρίστε τους εκπαιδευτικούς που κάνουν τη διαφορά"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              specialty={teacher.specialty}
              subjects={teacher.subjects}
              description={teacher.description}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
