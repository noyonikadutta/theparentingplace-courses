import Link from 'next/link'
import { Mail, Smartphone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="text-lg font-serif font-semibold text-primary">Nurture</span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Empowering parents with evidence-based strategies for confident, joyful parenting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#courses"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  Prenatal Course
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  Newborn Essentials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  Toddler Years
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-foreground/60 text-sm mb-4">
              Get parenting tips and course updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full px-4 py-2 bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-foreground/60 text-sm">
            © 2024 Nurture Academy. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex gap-4">
            <a
              href="mailto:hello@nurture.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+14155551234"
              className="text-foreground/60 hover:text-foreground transition-colors"
              title="Phone"
            >
              <Smartphone className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground transition-colors"
              title="Location"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
