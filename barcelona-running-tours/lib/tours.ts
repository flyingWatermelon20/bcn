export type Tour = {
  slug: string
  name: string
  tagline: string
  city: string
  distance: string
  duration: string
  pace: string
  price: string
  image: string
  gallery: string[]
  intro: string
  highlights: string[]
  stops: { time: string; title: string; note: string }[]
  accent: 'primary' | 'accent'
}

export const tours: Tour[] = [
  {
    slug: 'morning-gaudi-run',
    name: 'Morning Gaudí Run',
    tagline: 'A slow, curious flow through the city’s dreamiest architecture.',
    city: 'Barcelona',
    distance: '10 km',
    duration: '90 min',
    pace: 'Easy & breathy · 6:30–7:30 /km',
    price: '€39',
    image: '/images/barcelona-park-guell.png',
    gallery: ['/images/gaudi-run.jpg', '/images/sagrada-familia.jpg', '/images/barcelona-park-guell.png'],
    intro:
      'We move gently through Gaudí’s Barcelona — from the mosaic curves of Park Güell to the melting facades of Passeig de Gràcia, ending under the spires of the Sagrada Família. Stop, breathe, look up.',
    highlights: ['Park Güell mosaics', 'Casa Batlló & La Pedrera', 'Sagrada Família', 'Quiet Eixample streets'],
    stops: [
      { time: 'start', title: 'Park Güell', note: 'Gentle warm-up among the trencadís tiles and city views.' },
      { time: 'flow', title: 'Passeig de Gràcia', note: 'Drift past Casa Batlló and La Pedrera.' },
      { time: 'flow', title: 'Eixample grid', note: 'Weave the soft-cornered blocks Gaudí called home.' },
      { time: 'finish', title: 'Sagrada Família', note: 'Cool down beneath the towers with a photo pause.' },
    ],
    accent: 'primary',
  },
  {
    slug: 'evening-gaudi-run',
    name: 'Evening Gaudí Run',
    tagline: 'A slow, curious flow through the city’s dreamiest architecture.',
    city: 'Barcelona',
    distance: '10 km',
    duration: '90 min',
    pace: 'Easy & breathy · 6:30–7:30 /km',
    price: '€39',
    image: '/images/evening-gaudi-run.jpg',
    gallery: ['/images/gaudi-run.png', '/images/sagrada-familia.png', '/images/barcelona-park-guell.png'],
    intro:
      'We move gently through Gaudí’s Barcelona — from the mosaic curves of Park Güell to the melting facades of Passeig de Gràcia, ending under the spires of the Sagrada Família. Stop, breathe, look up.',
    highlights: ['Park Güell mosaics', 'Casa Batlló & La Pedrera', 'Sagrada Família', 'Quiet Eixample streets'],
    stops: [
      { time: 'start', title: 'Park Güell', note: 'Gentle warm-up among the trencadís tiles and city views.' },
      { time: 'flow', title: 'Passeig de Gràcia', note: 'Drift past Casa Batlló and La Pedrera.' },
      { time: 'flow', title: 'Eixample grid', note: 'Weave the soft-cornered blocks Gaudí called home.' },
      { time: 'finish', title: 'Sagrada Família', note: 'Cool down beneath the towers with a photo pause.' },
    ],
    accent: 'primary',
  },
  {
    slug: 'sunset-run',
    name: 'Sunset Run',
    tagline: 'Golden hour by the sea, ending as the sky turns to honey.',
    city: 'Barcelona',
    distance: '8 km',
    duration: '75 min',
    pace: 'Relaxed · 7:00–8:00 /km',
    price: '€35',
    image: '/images/sunset-run.jpg',
    gallery: ['/images/sunset-run.png', '/images/barcelona-seafront.png', '/images/barcelona-hero.png'],
    intro:
      'An easy evening flow along the waterfront, tracing the Barceloneta boardwalk and the old port as the sun melts into the sea and the city lights blink awake. Salt air, soft legs, big sky.',
    highlights: ['Barceloneta beach', 'Port Vell', 'Seafront promenade', 'Golden-hour skyline'],
    stops: [
      { time: 'start', title: 'Port Vell', note: 'Set off along the marina as the light turns gold.' },
      { time: 'flow', title: 'Barceloneta', note: 'Sand underfoot and palm-lined promenade.' },
      { time: 'flow', title: 'Seafront boardwalk', note: 'Open sea on one side, city glow on the other.' },
      { time: 'finish', title: 'Sunset finish', note: 'Breathe out as the sky burns pink and orange.' },
    ],
    accent: 'accent',
  },
]

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug)
}
