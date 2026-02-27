import { CheckCircle } from 'lucide-react'

const credentials = [
  'Licensed Child Psychologist',
  '15+ Years of Clinical Experience',
  'Harvard Medical School Faculty',
  'Published Parenting Researcher',
  'Certified Lactation Consultant',
  'Infant Sleep Specialist',
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Avatar */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center shadow-xl">
              <div className="text-9xl">👩‍🏫</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold">
                About the Educator
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Meet Dr. Emily Watson
            </h2>

            {/* Bio */}
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Dr. Emily Watson is a child psychologist and developmental specialist with over 15 years of clinical experience. She's passionate about empowering parents with evidence-based strategies that feel natural and sustainable.
            </p>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Having worked with thousands of families across diverse backgrounds, Dr. Watson understands the unique challenges modern parents face. Her courses blend cutting-edge research with real-world practicality.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{credential}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-card rounded-lg">
              <p className="italic text-foreground/80">
                "Parenting is one of life's most rewarding journeys, but it doesn't have to be lonely or overwhelming. Every parent deserves access to compassionate, evidence-based guidance."
              </p>
              <p className="text-sm font-semibold text-primary mt-3">— Dr. Emily Watson</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
