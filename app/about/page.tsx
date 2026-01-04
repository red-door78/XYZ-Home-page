import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About XYZ Company</h1>
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Founded with a vision to transform industries through innovation and excellence, XYZ Company has been a
            trusted partner for businesses worldwide. Our commitment to quality, innovation, and customer satisfaction
            drives everything we do.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Mission</h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            To deliver innovative solutions that empower businesses to achieve their goals. We believe in creating
            lasting partnerships with our clients, understanding their unique challenges, and providing tailored
            solutions that drive meaningful results.
          </p>

          <h2 className="text-3xl font-bold mb-8 mt-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Innovation", desc: "We constantly push boundaries to develop cutting-edge solutions." },
              { title: "Integrity", desc: "We maintain the highest standards of honesty and ethical conduct." },
              { title: "Excellence", desc: "We strive for perfection in every aspect of our work." },
              { title: "Collaboration", desc: "We believe in the power of working together towards common goals." },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
