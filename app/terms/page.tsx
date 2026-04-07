import type { Metadata } from "next"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Όροι Χρήσης | EduDiadrasi",
  description: "Όροι χρήσης και πολιτική απορρήτου του EduDiadrasi.",
}

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Όροι Χρήσης</h1>
          <p className="mt-2 text-muted-foreground">
            Τελευταία ενημέρωση: Ιανουάριος 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <div className="flex flex-col gap-8">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Γενικοί Όροι</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Η χρήση του ιστοτόπου edudiadrasi.gr συνεπάγεται την αποδοχή των παρόντων 
                  όρων χρήσης. Το EduDiadrasi διατηρεί το δικαίωμα να τροποποιεί τους όρους 
                  χρήσης χωρίς προηγούμενη ειδοποίηση. Οι χρήστες οφείλουν να ελέγχουν 
                  περιοδικά τους όρους για τυχόν αλλαγές.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Υπηρεσίες</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Το EduDiadrasi παρέχει υπηρεσίες φροντιστηριακής εκπαίδευσης για μαθητές 
                  Γυμνασίου, Λυκείου και ΕΠΑΛ. Οι υπηρεσίες περιλαμβάνουν:
                </p>
                <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Μαθήματα προετοιμασίας για σχολικές εξετάσεις</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Προετοιμασία για Πανελλαδικές εξετάσεις</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Κέντρο μελέτης με επίβλεψη</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Εκπαιδευτική συμβουλευτική</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Εγγραφή & Πληρωμές</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Η εγγραφή στα προγράμματα του EduDiadrasi γίνεται κατόπιν επικοινωνίας και 
                  συνάντησης γνωριμίας. Οι πληρωμές γίνονται σύμφωνα με το συμφωνηθέν πρόγραμμα 
                  δόσεων. Σε περίπτωση διακοπής, ισχύουν οι όροι που αναγράφονται στη σύμβαση 
                  εγγραφής.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Πνευματική Ιδιοκτησία</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Όλο το περιεχόμενο του ιστοτόπου (κείμενα, εικόνες, λογότυπα, εκπαιδευτικό 
                  υλικό) αποτελεί πνευματική ιδιοκτησία του EduDiadrasi και προστατεύεται από 
                  τις σχετικές διατάξεις του ελληνικού και ευρωπαϊκού δικαίου. Απαγορεύεται η 
                  αναπαραγωγή, διανομή ή χρήση του υλικού χωρίς γραπτή άδεια.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Προστασία Προσωπικών Δεδομένων</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Το EduDiadrasi δεσμεύεται για την προστασία των προσωπικών δεδομένων των 
                  χρηστών σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR). 
                  Τα δεδομένα που συλλέγονται μέσω της φόρμας επικοινωνίας χρησιμοποιούνται 
                  αποκλειστικά για την επικοινωνία με τους ενδιαφερόμενους.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Συγκεκριμένα, συλλέγουμε:
                </p>
                <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Όνομα και επώνυμο</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Στοιχεία επικοινωνίας (email, τηλέφωνο)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Πρόγραμμα ενδιαφέροντος</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Ο ιστότοπος χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας περιήγησης. 
                  Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στον υπολογιστή σας. 
                  Μπορείτε να απενεργοποιήσετε τα cookies μέσω των ρυθμίσεων του browser σας.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Δικαιώματα Χρηστών</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Σύμφωνα με τον GDPR, έχετε τα εξής δικαιώματα:
                </p>
                <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Δικαίωμα πρόσβασης στα δεδομένα σας</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Δικαίωμα διόρθωσης ανακριβών δεδομένων</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Δικαίωμα διαγραφής των δεδομένων σας</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Δικαίωμα εναντίωσης στην επεξεργασία</span>
                  </li>
                </ul>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Για την άσκηση των δικαιωμάτων σας, επικοινωνήστε μαζί μας στο 
                  info@edudiadrasi.gr.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Περιορισμός Ευθύνης</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Το EduDiadrasi καταβάλλει κάθε δυνατή προσπάθεια για την ακρίβεια των 
                  πληροφοριών που παρέχονται στον ιστότοπο. Ωστόσο, δεν φέρει ευθύνη για 
                  τυχόν σφάλματα ή παραλείψεις. Οι πληροφορίες παρέχονται «ως έχουν» χωρίς 
                  καμία εγγύηση.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. Εφαρμοστέο Δίκαιο</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Για κάθε διαφορά που 
                  τυχόν προκύψει, αρμόδια είναι τα δικαστήρια της Αθήνας.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">10. Επικοινωνία</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Για οποιαδήποτε ερώτηση σχετικά με τους όρους χρήσης, μπορείτε να 
                  επικοινωνήσετε μαζί μας:
                </p>
                <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">EduDiadrasi</strong>
                    <br />
                    Οδός Παιδείας 123, Αθήνα 12345
                    <br />
                    Τηλ: 210 123 4567
                    <br />
                    Email: info@edudiadrasi.gr
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
