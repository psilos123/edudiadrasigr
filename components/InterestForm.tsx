"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Send, Sparkles } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες"),
  lastName: z.string().min(2, "Το επώνυμο πρέπει να έχει τουλάχιστον 2 χαρακτήρες"),
  email: z.string().email("Παρακαλώ εισάγετε έγκυρο email"),
  phone: z.string().min(10, "Παρακαλώ εισάγετε έγκυρο τηλέφωνο"),
  program: z.string().min(1, "Παρακαλώ επιλέξτε πρόγραμμα"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const programs = [
  { value: "kentro-meletes", label: "Κέντρο Μελέτης" },
  { value: "gymnasio", label: "Γυμνάσιο" },
  { value: "lykeio-thetiki", label: "Λύκειο - Θετική Κατεύθυνση" },
  { value: "lykeio-theoritiki", label: "Λύκειο - Θεωρητική Κατεύθυνση" },
  { value: "lykeio-oikonomiki", label: "Λύκειο - Οικονομία & Πληροφορική" },
  { value: "epal", label: "ΕΠΑΛ" },
]

interface InterestFormProps {
  title?: string
  description?: string
  defaultProgram?: string
}

export function InterestForm({
  title = "Δήλωσε το Ενδιαφέρον σου",
  description = "Συμπλήρωσε τα στοιχεία σου και θα επικοινωνήσουμε μαζί σου σύντομα.",
  defaultProgram,
}: InterestFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      program: defaultProgram || "",
      message: "",
    },
  })

  const selectedProgram = watch("program")

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", data)
    toast.success("Η δήλωση ενδιαφέροντος καταχωρήθηκε!", {
      description: "Θα επικοινωνήσουμε μαζί σου σύντομα.",
    })
    reset()
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm md:p-10">
      {/* Decorative gradient */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
      
      {(title || description) && (
        <div className="relative mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Εγγραφή</span>
          </div>
          {title && <h3 className="text-2xl font-bold text-foreground">{title}</h3>}
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <FieldGroup>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="firstName" className="text-muted-foreground">Όνομα</FieldLabel>
              <Input
                id="firstName"
                placeholder="Γιάννης"
                className="h-12 rounded-xl border-border/50 bg-secondary/50 backdrop-blur-sm focus:border-primary focus:ring-primary"
                {...register("firstName")}
              />
              {errors.firstName && (
                <FieldError>{errors.firstName.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName" className="text-muted-foreground">Επώνυμο</FieldLabel>
              <Input
                id="lastName"
                placeholder="Παπαδόπουλος"
                className="h-12 rounded-xl border-border/50 bg-secondary/50 backdrop-blur-sm focus:border-primary focus:ring-primary"
                {...register("lastName")}
              />
              {errors.lastName && (
                <FieldError>{errors.lastName.message}</FieldError>
              )}
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="email" className="text-muted-foreground">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                className="h-12 rounded-xl border-border/50 bg-secondary/50 backdrop-blur-sm focus:border-primary focus:ring-primary"
                {...register("email")}
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </Field>
            <Field>
              <FieldLabel htmlFor="phone" className="text-muted-foreground">Τηλέφωνο</FieldLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="69xxxxxxxx"
                className="h-12 rounded-xl border-border/50 bg-secondary/50 backdrop-blur-sm focus:border-primary focus:ring-primary"
                {...register("phone")}
              />
              {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="program" className="text-muted-foreground">Πρόγραμμα Ενδιαφέροντος</FieldLabel>
            <Select
              value={selectedProgram}
              onValueChange={(value) => setValue("program", value)}
            >
              <SelectTrigger className="h-12 rounded-xl border-border/50 bg-secondary/50 backdrop-blur-sm focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Επιλέξτε πρόγραμμα" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50 bg-card">
                {programs.map((program) => (
                  <SelectItem key={program.value} value={program.value} className="rounded-lg">
                    {program.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.program && <FieldError>{errors.program.message}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="message" className="text-muted-foreground">Μήνυμα (προαιρετικό)</FieldLabel>
            <Textarea
              id="message"
              placeholder="Γράψτε το μήνυμά σας..."
              rows={4}
              className="rounded-xl border-border/50 bg-secondary/50 backdrop-blur-sm focus:border-primary focus:ring-primary"
              {...register("message")}
            />
          </Field>

          <Button
            type="submit"
            size="lg"
            className="h-14 w-full gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Spinner className="mr-2" />
                Αποστολή...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Υποβολή Ενδιαφέροντος
              </>
            )}
          </Button>
        </FieldGroup>
      </form>
    </div>
  )
}
