"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className={`max-w-4xl mx-auto ${mounted ? "fade-in" : ""} text-center`}>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          Transform Your <span className="text-accent">Business</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-10 text-balance leading-relaxed">
          XYZ Company delivers innovative solutions that help your business thrive in the modern world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all duration-200 active:scale-95"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
