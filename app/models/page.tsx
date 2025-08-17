/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

type Model = {
  key: 'model3' | 'modely' | 'models' | 'modelx'
  title: string
  tagline: string
  bullets: string[]
  official: string
  imgUid: string          // Unsplash photo id
  credit: string
  creditUrl: string
}

const MODELS: Model[] = [
  {
    key: 'model3',
    title: 'Model 3 — Everyday minimalist',
    tagline: 'Smooth, efficient, and clean for city + highway.',
    bullets: [
      'Smooth, efficient drive for city + highway',
      'Minimalist cabin focused on software',
      'Strong value for first-time EV owners',
    ],
    official: 'https://www.tesla.com/model3',
    imgUid: 'rImr_XsL3aY',
    credit: 'Photo by Joshua Ferrer on Unsplash',
    creditUrl: 'https://unsplash.com/photos/rImr_XsL3aY',
  },
  {
    key: 'modely',
    title: 'Model Y — Practical crossover',
    tagline: 'Extra space, comfortable ride, everyday versatility.',
    bullets: [
      'Extra space for family and cargo',
      'Versatile seating; comfortable ride',
      'Balanced range, comfort, and price',
    ],
    official: 'https://www.tesla.com/modely',
    imgUid: 'pRvJI3J-WbI',
    credit: 'Photo by Somalia Veteran on Unsplash',
    creditUrl: 'https://unsplash.com/photos/pRvJI3J-WbI',
  },
  {
    key: 'models',
    title: 'Model S — Premium long-range sedan',
    tagline: 'Flagship feel and long-distance comfort.',
    bullets: [
      'Flagship feel and finish',
      'Long-distance comfort and confidence',
      'Suits drivers who want range + luxury',
    ],
    official: 'https://www.tesla.com/models',
    imgUid: 'C2hQ2bv1HJ4',
    credit: 'Photo by Madeline Liu on Unsplash',
    creditUrl: 'https://unsplash.com/photos/C2hQ2bv1HJ4',
  },
  {
    key: 'modelx',
    title: 'Model X — Space with presence',
    tagline: 'Big cabin, road-trip ready, striking design.',
    bullets: [
      'Big cabin; road-trip ready',
      'Distinctive design; commanding stance',
      'Great for longer journeys and weekends',
    ],
    official: 'https://www.tesla.com/modelx',
    imgUid: 'N3FCay6SBzc',
    credit: 'Photo by David von Diemar on Unsplash',
    creditUrl: 'https://unsplash.com/photos/N3FCay6SBzc',
  },
]

export default function ModelsPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold">Tesla Models — High-Level Overviews</h1>
      <p className="text-gray-700 mt-3 max-w-2xl">
        We keep this page timeless. For exact, current specs, use the “Go to official page” link beside each model.
      </p>

      <div className="mt-10 space-y-16">
        {MODELS.map((m, idx) => (
          <section
            key={m.key}
            id={m.key}
            className={`grid items-center gap-8 md:gap-12 ${idx % 2 === 1 ? 'md:grid-cols-[1.1fr_1fr]' : 'md:grid-cols-[1fr_1.1fr]'}`}
          >
            {/* text */}
            <div className={`${idx % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
              <h2 className="text-2xl md:text-3xl font-semibold">{m.title}</h2>
              <p className="text-gray-600 mt-2">{m.tagline}</p>
              <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
                {m.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <Link href={m.official} target="_blank" className="link inline-block mt-4">
                Go to official page →
              </Link>
            </div>

            {/* image */}
            <div className={`${idx % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
              <div
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: 'var(--border)' }}
              >
                {/* robust Unsplash download endpoint (works behind stricter networks) */}
                <img
                  src={`https://unsplash.com/photos/${m.imgUid}/download?force=true&w=1400`}
                  alt={m.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <a
                href={m.creditUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-xs mt-2"
                style={{ color: 'var(--muted)' }}
              >
                {m.credit}
              </a>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
