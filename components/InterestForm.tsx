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
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      {(title || description) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-semibold text-foreground">{title}</h3>}
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="firstName">Όνομα</FieldLabel>
              <Input
                id="firstName"
                placeholder="Γιάννης"
                {...register("firstName")}
              />
              {errors.firstName && (
                <FieldError>{errors.firstName.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">Επώνυμο</FieldLabel>
              <Input
                id="lastName"
                placeholder="Παπαδόπουλος"
                {...register("lastName")}
              />
              {errors.lastName && (
                <FieldError>{errors.lastName.message}</FieldError>
              )}
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                {...register("email")}
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Τηλέφωνο</FieldLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="69xxxxxxxx"
                {...register("phone")}
              />
              {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="program">Πρόγραμμα Ενδιαφέροντος</FieldLabel>
            <Select
              value={selectedProgram}
              onValueChange={(value) => setValue("program", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Επιλέξτε πρόγραμμα" />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program.value} value={program.value}>
                    {program.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.program && <FieldError>{errors.program.message}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="message">Μήνυμα (προαιρετικό)</FieldLabel>
            <Textarea
              id="message"
              placeholder="Γράψτε το μήνυμά σας..."
              rows={4}
              {...register("message")}
            />
          </Field>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Spinner className="mr-2" />
                Αποστολή...
              </>
            ) : (
              "Υποβολή Ενδιαφέροντος"
            )}
          </Button>
        </FieldGroup>
      </form>
    </div>
  )
}
