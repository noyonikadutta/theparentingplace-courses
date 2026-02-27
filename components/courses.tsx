import { BookOpen, Users, Award } from 'lucide-react'

const courses = [
  {
    icon: BookOpen,
    title: 'Prenatal Preparation',
    description: 'Essential knowledge for expecting parents. Learn about fetal development, birth options, and preparing for your new arrival with confidence.',
    price: '$97',
    lessons: '12 lessons',
    students: '3,200+',
    featured: false,
  },
  {
    icon: Users,
    title: 'Early Childhood Development',
    description: 'Navigate the first year with expert guidance. Sleep, feeding, bonding, and developmental milestones covered by leading pediatricians.',
    price: '$127',
    lessons: '18 lessons',
    students: '5,100+',
    featured: true,
  },
  {
    icon: Award,
    title: 'Raising Confident Children',
    description: 'Ages 2-5 foundation course. Build emotional intelligence, communication skills, and resilience through science-backed parenting strategies.',
    price: '$97',
    lessons: '15 lessons',
    students: '2,800+',
    featured: false,
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Featured Courses
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from our carefully curated learning paths designed for every stage of your parenting journey.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 flex flex-col transition-all duration-300 hover:shadow-xl ${
                  course.featured
                    ? 'bg-card ring-2 ring-primary scale-100 md:scale-105 shadow-lg'
                    : 'bg-card hover:shadow-lg'
                }`}
              >
                {/* Featured Badge */}
                {course.featured && (
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4 inline-block">
                  <div className="bg-secondary/20 p-3 rounded-2xl">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                  {course.title}
                </h3>
                <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm text-foreground/60">
                    <span>{course.lessons}</span>
                    <span>{course.students} students</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="space-y-3">
                  <div>
                    <span className="font-serif text-3xl font-bold text-foreground">
                      {course.price}
                    </span>
                    <span className="text-foreground/60 ml-2">one-time</span>
                  </div>
                  <button
                    className={`w-full rounded-full py-3 px-6 font-semibold transition-all duration-300 ${
                      course.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border-2 border-secondary text-secondary hover:bg-secondary/10'
                    }`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
