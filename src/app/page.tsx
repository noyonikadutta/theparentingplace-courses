import Header from '@/components/header'
import Hero from '@/components/hero'
import Courses from '@/components/courses'
import Testimonials from '@/components/testimonials'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Courses />
      <Testimonials />
      <About />
      <Footer />
    </main>
  )
}
