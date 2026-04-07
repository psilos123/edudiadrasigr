'use client'

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface ScheduleCell {
  subject: string
  grade: string
  color: 'primary' | 'accent' | 'secondary'
}

interface ScheduleGridProps {
  schedule: Record<string, Record<string, ScheduleCell>>
  onCellHover?: (cell: ScheduleCell | null) => void
}

const timeSlots = ['16:00 – 17:30', '17:30 – 19:00', '19:00 – 20:30']
const days = ['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή']

const colorClasses = {
  primary: 'bg-primary/10 border-primary/20 text-primary hover:bg-primary/15',
  accent: 'bg-accent/10 border-accent/20 text-accent hover:bg-accent/15',
  secondary: 'bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary/15',
}

export function ScheduleGrid({ schedule, onCellHover }: ScheduleGridProps) {
  return (
    <div className="space-y-6">
      {/* Intro Text */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Το πρόγραμμα διαμορφώνεται με βάση τις ανάγκες κάθε μαθητή και εξασφαλίζει ισορροπία 
          μεταξύ μάθησης και ξεκούρασης.
        </p>
      </div>

      {/* Desktop Schedule Grid */}
      <div className="hidden overflow-x-auto md:block">
        <div className="inline-block min-w-full">
          <div className="grid grid-cols-6 gap-2">
            {/* Header - Time slot column + day columns */}
            <div className="flex items-center justify-center rounded-t-lg bg-muted p-3 font-semibold text-foreground">
              Ώρα
            </div>
            {days.map((day) => (
              <div
                key={day}
                className="flex items-center justify-center rounded-t-lg bg-primary/10 p-3 font-semibold text-primary"
              >
                {day}
              </div>
            ))}

            {/* Time slots and cells */}
            {timeSlots.map((time) => (
              <div key={time} className="contents">
                <div className="flex items-center justify-center rounded-l-lg bg-muted p-3 text-sm font-medium text-foreground">
                  {time}
                </div>
                {days.map((day) => {
                  const cell = schedule[day]?.[time]
                  return (
                    <Card
                      key={`${day}-${time}`}
                      className={`cursor-pointer border-2 p-3 transition-all hover:shadow-md ${
                        cell ? colorClasses[cell.color] : 'bg-muted/30 border-border'
                      }`}
                      onMouseEnter={() => onCellHover?.(cell || null)}
                      onMouseLeave={() => onCellHover?.(null)}
                    >
                      {cell ? (
                        <div className="space-y-1">
                          <p className="text-sm font-semibold">{cell.subject}</p>
                          <Badge variant="outline" className="text-xs">
                            {cell.grade}
                          </Badge>
                        </div>
                      ) : (
                        <div className="h-16" />
                      )}
                    </Card>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Schedule - Stacked Cards */}
      <div className="space-y-6 md:hidden">
        {days.map((day) => (
          <div key={day} className="space-y-3">
            <h3 className="font-semibold text-foreground">{day}</h3>
            <div className="space-y-2">
              {timeSlots.map((time) => {
                const cell = schedule[day]?.[time]
                return (
                  <Card
                    key={`${day}-${time}`}
                    className={`border-2 p-4 transition-all ${
                      cell ? colorClasses[cell.color] : 'bg-muted/30 border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{time}</p>
                        {cell && (
                          <div className="mt-1 space-y-1">
                            <p className="font-semibold">{cell.subject}</p>
                            <Badge variant="outline" className="text-xs">
                              {cell.grade}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center shadow-sm md:p-8">
        <p className="text-sm font-medium text-primary">Δυνατότητα προσαρμογής προγράμματος</p>
        <p className="mt-2 text-muted-foreground">
          Το πρόγραμμα προσαρμόζεται στις ανάγκες και τις διαθεσιμότητες κάθε μαθητή.
        </p>
        <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95">
          Δήλωσε Ενδιαφέρον για το Πρόγραμμα
        </button>
      </div>
    </div>
  )
}
