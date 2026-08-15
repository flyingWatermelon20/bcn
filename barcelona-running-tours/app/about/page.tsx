import Image from 'next/image'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookButton } from '@/components/book-button'

export const metadata: Metadata = {
  title: "About — bab's club",
  description:
    "The story behind bab's club: why I trade tour buses for running shoes and show people the real Barcelona, one street at a time.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Simple hero band so the transparent header stays legible */}
      <section className="relative flex min-h-[42vh] items-end overflow-hidden">
        <Image
          src="/images/barcelona-seafront.png"
          alt="Barcelona seafront at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-12 sm:px-8">
          <p className="text-sm font-medium tracking-wide text-white/80">About</p>
          <h1 className="mt-2 font-display text-4xl text-white text-shadow-soft sm:text-6xl">
            Hi, I&apos;m bab
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-founder.png"
              alt="bab looking out over Barcelona from a rooftop"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
            <p className="text-lg text-foreground">
              I moved to Barcelona years ago and fell for it the only way I know how — on foot,
              early in the morning, before the city woke up.
            </p>
            <p>
              Running became how I read the city: the quiet backstreets of the Gothic Quarter, the
              way light hits Gaudí&apos;s tiles, the exact moment the sun drops into the sea off
              Barceloneta. It felt like a secret worth sharing.
            </p>
            <p>
              So that&apos;s what bab&apos;s club is. Not a race, not a bootcamp — just small,
              easy-paced runs with someone who loves this place, built around stopping to actually
              look at it. You bring the curiosity; I&apos;ll bring the route.
            </p>
            <div className="pt-2">
              <BookButton label="Come run with me" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
