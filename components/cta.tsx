"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 text-balance scroll-scale-in ${isVisible ? "visible" : ""}`}
        >
          Ready to Get Started?
        </h2>
        <p
          className={`text-xl text-foreground/70 mb-10 scroll-fade-in ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "100ms" }}
        >
          Let's work together to bring your vision to life.
        </p>
        <Link
          href="/contact"
          className={`inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl scroll-scale-in ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "200ms" }}
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  )
}
