'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type BookButtonProps = {
  label?: string
  variant?: 'primary' | 'accent' | 'secondary' | 'outline'
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

export function BookButton({
  label = 'Book now',
  variant = 'primary',
  size = 'default',
  className,
}: BookButtonProps) {
  const [clicked, setClicked] = useState(false)

  const variants = {
    primary: 'bg-primary/90 text-primary-foreground hover:brightness-105',
    accent: 'bg-accent/90 text-accent-foreground hover:brightness-105',
    secondary: 'bg-secondary/90 text-secondary-foreground hover:brightness-105',
    outline: 'border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      type="button"
      onClick={() => setClicked(true)}
      aria-live="polite"
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all',
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {clicked ? (
        <>
          <Check className="size-4" aria-hidden="true" />
          See you soon — bookings open shortly
        </>
      ) : (
        <>
          {label}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </>
      )}
    </button>
  )
}
