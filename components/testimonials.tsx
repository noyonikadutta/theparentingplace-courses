import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'First-time Parent',
    content:
      'This course completely transformed how I approach parenting. The prenatal course prepared me for labor, and the newborn course helped me through those challenging first months with confidence.',
    avatar: '👩‍🦰',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Father of Two',
    content:
      'As a working parent, I appreciated the bite-sized lessons I could watch during lunch breaks. The strategies are practical and actually work. My kids\' behavior has improved tremendously.',
    avatar: '👨‍💼',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'New Parent',
    content:
      'The emotional support and community aspect is invaluable. Knowing I\' m not alone in these struggles, backed by expert guidance, gave me so much peace of mind.',
    avatar: '👩‍🦱',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Stories from Our Community
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real parents sharing how our courses transformed their parenting journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card p-8 border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 mb-6 flex-grow leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">Join over 10,000 families transforming their parenting</p>
          <button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}
