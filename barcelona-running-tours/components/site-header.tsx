'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BookButton } from '@/components/book-button'

const navLinks = [
  { href: '/tours/gaudi-run', label: 'Gaudí Run' },
  { href: '/tours/sunset-run', label: 'Sunset Run' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/home" className="flex items-baseline gap-1.5" aria-label="bab's club home">
          <span className="font-display text-2xl lowercase text-white">bab&apos;s</span>
          <span className="font-display text-2xl lowercase text-white/70">club</span>
        </Link>

        <nav className="hidden items-center gap-9 text-[15px] font-medium text-white/85 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <BookButton label="Book a run" size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 rounded-2xl border border-border bg-card/95 p-6 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-4 text-lg text-foreground">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <BookButton label="Book a run" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
