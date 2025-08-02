"use client"

import React from "react"
import { motion } from "framer-motion"

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-2xl border border-border shadow-lg max-w-sm w-full bg-card" key={i}>
                  <div className="text-lg leading-relaxed text-foreground font-medium">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={48}
                      height={48}
                      src={image || "/placeholder.png"}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-primary" // Added border for luxury
                    />
                    <div className="font-bold tracking-tight leading-5 text-foreground">{name}</div>
                    <div className="leading-5 text-muted-foreground tracking-tight text-sm">{role}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

// Running club testimonials data with more luxurious placeholder images
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "The Mile Mafia isn't just a club; it's a crucible for growth. I came in looking for runs, and found a family that pushes me harder than I ever thought possible. My PBs are proof.",
    by: "Landon G., Founding Member",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 1,
    testimonial:
      "I was tired of casual jogs. The Mile Mafia delivered the serious, team-oriented training I craved. Every Sunday, we leave it all on the road. This is where real change happens.",
    by: "Marcus 'The Hammer' Johnson, Enforcer",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 2,
    testimonial:
      "Accountability is key here. Knowing the Mafia is waiting for me every Sunday afternoon keeps me disciplined. It's tough, but the results speak for themselves.",
    by: "Sarah 'Sprints' Chen, Strategist",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 3,
    testimonial:
      "This isn't your grandma's running club. The Mile Mafia is hardcore, fun, and utterly transformative. I've shed excuses and gained a new level of mental toughness.",
    by: "David 'Diesel' Rodriguez, Road Captain",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 4,
    testimonial:
      "I joined for the runs, but stayed for the brotherhood. The Mile Mafia pushes you to your limits, then helps you shatter them. It's a lifestyle, not a hobby.",
    by: "Priya 'Pace' Patel, Navigator",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 5,
    testimonial:
      "If you're serious about running and personal growth, look no further. The Mile Mafia is the real deal. No fluff, just pure, unadulterated dedication.",
    by: "James 'Juggernaut' Wilson, Veteran",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 6,
    testimonial:
      "Every Sunday, we show up. Every Sunday, we get stronger. The Mile Mafia isn't just about miles; it's about building character and unbreakable bonds.",
    by: "Aisha 'Apex' Mohammed, Trailblazer",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 7,
    testimonial:
      "I've found my tribe. The Mile Mafia is a no-nonsense group that values effort and commitment. It's like a biker gang, but our engines are our legs.",
    by: "Alex 'Ace' Kim, Recruit",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 8,
    testimonial:
      "The energy is electric. We push each other, we support each other, and we celebrate every hard-won victory. This is what a real running club feels like.",
    by: "Lisa 'Lightning' Garcia, Scout",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
  {
    tempId: 9,
    testimonial:
      "My running transformed after joining. The focus on personal development and accountability is unmatched. The Mile Mafia is a game-changer.",
    by: "Michael 'Machine' Chen, Quartermaster",
    imgSrc: "/placeholder.png?height=48&width=48",
  },
]

export { testimonials }
