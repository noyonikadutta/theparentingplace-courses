import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
            ✨ Trusted by 10,000+ Parents
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-pretty leading-tight mb-6 text-foreground">
          Confident Parenting Starts Here
        </h1>

        {/* Subheadline */}
        <p className="text-center text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          Master evidence-based strategies for prenatal preparation and early childhood development. From pregnancy through age 5, we guide you every step of the journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group relative w-full sm:w-auto rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            <span>Explore Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto rounded-full border-2 border-secondary text-secondary px-8 py-4 text-base font-semibold hover:bg-secondary/10 transition-colors">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-1">50+</div>
            <p className="text-sm text-foreground/60">Expert Lessons</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-accent mb-1">98%</div>
            <p className="text-sm text-foreground/60">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-secondary mb-1">$500K</div>
            <p className="text-sm text-foreground/60">In Free Resources</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-1">4.9★</div>
            <p className="text-sm text-foreground/60">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
