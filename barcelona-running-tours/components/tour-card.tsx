import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, Route } from 'lucide-react'
import type { Tour } from '@/lib/tours'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl"
    >
      <Image
        src={tour.image || '/placeholder.svg'}
        alt={tour.name}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />

      <div className="relative flex flex-col gap-5 p-7 sm:p-9">
        <div className="flex flex-wrap gap-2 text-xs font-medium text-white">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
            <Route className="size-3.5" aria-hidden="true" />
            {tour.distance}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
            <Clock className="size-3.5" aria-hidden="true" />
            {tour.duration}
          </span>
        </div>

        <div>
          <h3 className="font-display text-4xl text-white sm:text-5xl">{tour.name}</h3>
          <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-white/85">
            {tour.tagline}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/20 pt-5">
          <span className="text-sm text-white/80">
            From <span className="font-display text-xl text-white">{tour.price}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground transition-transform group-hover:translate-x-0.5">
            Explore
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
