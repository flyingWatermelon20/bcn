import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Merriweather } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "bab's club — running tours in Barcelona",
  description:
    "Discover Barcelona on foot with bab's club. Run past Gaudí's masterpieces or chase the Mediterranean sunset. Two unforgettable running tours, one unforgettable city.",
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f7f7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${merriweather.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
