import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TourCard } from '@/components/tour-card'
import { BookButton } from '@/components/book-button'
import { tours } from '@/lib/tours'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/barcelona-hero.png"
          alt="Barcelona skyline glowing at golden hour"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-6 flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-white/80">
            <MapPin className="size-4" aria-hidden="true" />
            Barcelona, Spain
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-5xl text-balance text-white text-shadow-soft sm:text-6xl lg:text-7xl">
            Meet the real Barcelona, like a local.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            No tour buses. No crowds. Just you, the open city, and a local runner showing you the
            real good stuff.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BookButton label="Book a run" size="lg" />
            <a href="#tours">
              <BookButton label="See the tours" variant="outline" size="lg" />
            </a>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/run.jpg"
          alt="Barcelona skyline glowing at golden hour"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-6 flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-white/80">
            <MapPin className="size-4" aria-hidden="true" />
            Barcelona, Spain
          </p>
          <h1 className="--font-merriweather mx-auto max-w-3xl font-display text-5xl text-balance text-white text-shadow-soft sm:text-6xl lg:text-7xl">
            Meet the real Barcelona, like a local.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            No tour buses. No crowds. Just you, the open city, and a local runner showing you the
            real good stuff.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BookButton label="Book a run" size="lg" />
            <a href="#tours">
              <BookButton label="See the tours" variant="outline" size="lg" />
            </a>
          </div>
        </div>
      </section>
      {/* Tours */}
      <section id="tours" className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <span className="mx-auto inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary">
            <span className="inline-block h-px w-8 bg-primary" />
            Two ways to run the city
            <span className="inline-block h-px w-8 bg-primary" />
          </span>
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">Choose your run</h2>
          <p className="mx-auto max-w-md text-pretty leading-relaxed text-muted-foreground">
            Chase Gaudí&apos;s masterpieces by morning or the Mediterranean sun by evening. Both are
            small-group, both are unforgettable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
