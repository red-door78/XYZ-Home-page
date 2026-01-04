"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Features() {
  const features = [
    {
      number: "01",
      title: "Innovation First",
      description:
        "We leverage cutting-edge technology and creative thinking to deliver solutions that set industry standards.",
    },
    {
      number: "02",
      title: "Expert Team",
      description: "Our experienced professionals bring years of industry knowledge and dedication to every project.",
    },
    {
      number: "03",
      title: "Results Driven",
      description: "We measure success by the tangible results we deliver for our clients and their bottom line.",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [autoplay, features.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
    setAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`scroll-fade-in mb-16 ${isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Why Choose Us</h2>
          <p className="text-center text-foreground/70 text-lg max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`p-8 bg-background rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group scroll-slide-left ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors mb-4">
                {feature.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden">
          <div className="relative w-full overflow-hidden rounded-xl">
            <div className="carousel-slide">
              <div className="p-8 bg-background rounded-xl border border-border">
                <div className="text-5xl font-bold text-accent/20 mb-4">{features[currentSlide].number}</div>
                <h3 className="text-2xl font-bold mb-3">{features[currentSlide].title}</h3>
                <p className="text-foreground/70 leading-relaxed">{features[currentSlide].description}</p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg bg-background border border-border hover:bg-card transition-colors duration-200 active:scale-95"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-accent w-8" : "bg-border w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-lg bg-background border border-border hover:bg-card transition-colors duration-200 active:scale-95"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
