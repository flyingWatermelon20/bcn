import Link from 'next/link'
import { Mail, Camera } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl lowercase">bab&apos;s</span>
              <span className="font-display text-2xl lowercase text-sidebar-foreground/60">club</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sidebar-foreground/70">
              Small-group running tours in Barcelona. Move with the city, breathe with the sea.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav className="flex flex-col gap-3 text-sm">
              <span className="text-xs uppercase tracking-widest text-sidebar-foreground/50">
                Runs
              </span>
              <Link href="/tours/gaudi-run" className="text-sidebar-foreground/80 hover:text-sidebar-foreground">
                Gaudí Run
              </Link>
              <Link href="/tours/sunset-run" className="text-sidebar-foreground/80 hover:text-sidebar-foreground">
                Sunset Run
              </Link>
              <Link href="/about" className="text-sidebar-foreground/80 hover:text-sidebar-foreground">
                About
              </Link>
            </nav>

            <div className="flex flex-col gap-3 text-sm">
              <span className="text-xs uppercase tracking-widest text-sidebar-foreground/50">
                Say hello
              </span>
              <a
                href="mailto:hello@babsclub.run"
                className="inline-flex items-center gap-2 text-sidebar-foreground/80 hover:text-sidebar-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                hello@babsclub.run
              </a>
              <a
                href="https://instagram.com"
                className="inline-flex items-center gap-2 text-sidebar-foreground/80 hover:text-sidebar-foreground"
              >
                <Camera className="size-4" aria-hidden="true" />
                @babsclub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-sidebar-border pt-6 text-xs text-sidebar-foreground/50">
          © {new Date().getFullYear()} bab&apos;s club · Barcelona, Spain
        </div>
      </div>
    </footer>
  )
}
