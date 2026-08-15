import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, MapPin, Route, Gauge } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookButton } from '@/components/book-button'
import { getTour, tours } from '@/lib/tours'

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tour = getTour(slug)
  if (!tour) return { title: "Tour not found — bab's club" }
  return {
    title: `${tour.name} — bab's club`,
    description: tour.intro,
  }
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = getTour(slug)
  if (!tour) notFound()

  const facts = [
    { icon: Route, label: 'Distance', value: tour.distance },
    { icon: Clock, label: 'Duration', value: tour.duration },
    { icon: Gauge, label: 'Pace', value: tour.pace },
    { icon: MapPin, label: 'City', value: tour.city },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src={tour.image || '/placeholder.svg'}
          alt={tour.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-14 sm:px-8">
          <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-white/80">
            <MapPin className="size-4" aria-hidden="true" />
            {tour.city}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-white text-shadow-soft sm:text-7xl">
            {tour.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">{tour.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BookButton label={`Book from ${tour.price}`} size="lg" />
            <span className="text-sm text-white/75">Small group · all levels welcome</span>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 sm:px-8">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5">
              <fact.icon className="size-5 text-primary" aria-hidden="true" />
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {fact.label}
              </span>
              <span className="font-medium text-foreground">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro + gallery */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">The flow</h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {tour.intro}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {tour.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Route timeline */}
          <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
            {tour.stops.map((stop, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[41px] flex size-5 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                <span className="text-xs uppercase tracking-wide text-primary">{stop.time}</span>
                <h3 className="mt-1 font-display text-xl text-foreground">{stop.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stop.note}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {tour.gallery.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square'}`}
            >
              <Image
                src={src || '/placeholder.svg'}
                alt={`${tour.name} view ${i + 1}`}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mb-20 w-full max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-sidebar px-6 py-14 text-center">
          <h2 className="max-w-lg font-display text-3xl text-sidebar-foreground sm:text-4xl">
            Ready to run {tour.name}?
          </h2>
          <p className="max-w-md leading-relaxed text-sidebar-foreground/70">
            Grab your spot — small groups fill up fast, especially at golden hour.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <BookButton label={`Book from ${tour.price}`} size="lg" />
            <Link
              href="/home"
              className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:text-sidebar-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to all runs
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
