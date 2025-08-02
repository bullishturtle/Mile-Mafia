"use client"

import { useActionState } from "react"
import { submitMembershipApplication } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ApplicationForm() {
  // Renamed component
  const [state, formAction, isPending] = useActionState(submitMembershipApplication, null)

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-border bg-card">
      <CardContent className="p-6 md:p-8">
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-lg font-semibold text-foreground mb-2 block">
                Full Name (Your Alias)
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Tyler Durden"
                required
                className="h-12 text-base border-border focus:border-primary bg-input text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg font-semibold text-foreground mb-2 block">
                Email Address (Your Contact)
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="first.rule@fightclub.com"
                required
                className="h-12 text-base border-border focus:border-primary bg-input text-foreground"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="phone" className="text-lg font-semibold text-foreground mb-2 block">
              Phone Number (If you dare)
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="555-555-5555"
              className="h-12 text-base border-border focus:border-primary bg-input text-foreground"
            />
          </div>
          <div>
            <Label htmlFor="commitment" className="text-lg font-semibold text-foreground mb-2 block">
              Why do you seek to join The Mile Mafia? (Your Commitment)
            </Label>
            <Textarea
              id="commitment"
              name="commitment"
              placeholder="I'm ready to break free from the ordinary and embrace true discipline..."
              rows={5}
              required
              className="text-base border-border focus:border-primary bg-input text-foreground"
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/80 text-primary-foreground transition-colors duration-300"
          >
            {isPending ? "Initiating..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="p-6 md:p-8 pt-0">
        <AnimatePresence>
          {state && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`w-full p-4 rounded-md flex items-center gap-3 ${
                state.success ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"
              }`}
            >
              {state.success ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
              <p className="text-sm font-medium">{state.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardFooter>
    </Card>
  )
}
