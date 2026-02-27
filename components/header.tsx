'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary"></div>
            <span className="text-xl font-serif font-semibold text-primary">Nurture</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#courses"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Stories
            </Link>
            <Link
              href="#about"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="rounded-full bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="#courses"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="#about"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button className="rounded-full bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:bg-primary/90 transition-colors w-full mt-2">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
