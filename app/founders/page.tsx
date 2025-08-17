/* eslint-disable @next/next/no-img-element */

type Founder = {
  name: string
  role: string
  years?: string
  bullets: string[]
  photo: string        // Wikimedia Commons “Special:FilePath” URL (or placeholder)
  creditText: string
  creditHref: string   // link to the Commons file page (for attribution)
  link: string         // learn more
}

const FOUNDERS: Founder[] = [
  {
    name: 'Martin Eberhard',
    role: 'Co-founder, first CEO',
    years: '2003–2007',
    bullets: [
      'Co-founded Tesla (then Tesla Motors) with Marc Tarpenning in 2003.',
      'Pushed the early Roadster vision with laptop-cell batteries.',
    ],
    photo:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Martin_Eberhard_%28cropped%29.jpg?width=800',
    creditText: 'Photo: Nicki Dugan (CC BY-SA 2.0)',
    creditHref:
      'https://commons.wikimedia.org/wiki/File:Martin_Eberhard_(cropped).jpg',
    link: 'https://en.wikipedia.org/wiki/Martin_Eberhard',
  },
  {
    name: 'Marc Tarpenning',
    role: 'Co-founder, early eng/ops',
    years: '2003–2008',
    bullets: [
      'Early engineering & operations; helped set architecture and supply chain.',
      'Left day-to-day roles around 2008.',
    ],
    // No stable free portrait on Commons right now → clean placeholder:
    photo:
      'https://ui-avatars.com/api/?name=Marc+Tarpenning&background=121212&color=FFFFFF&size=256',
    creditText: 'No free portrait on Commons (placeholder).',
    creditHref: 'https://en.wikipedia.org/wiki/Marc_Tarpenning',
    link: 'https://en.wikipedia.org/wiki/Marc_Tarpenning',
  },
  {
    name: 'Elon Musk',
    role: 'Lead investor (2004), later CEO',
    years: '2004–present',
    bullets: [
      'Led the 2004 Series A; became the most visible product/exec lead.',
      'Oversaw scaling and launches of mass-market models.',
    ],
    photo:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Elon_Musk_Royal_Society_%28crop2%29.jpg?width=800',
    creditText: 'Photo: Debbie Rowe (CC BY-SA 3.0)',
    creditHref:
      'https://commons.wikimedia.org/wiki/File:Elon_Musk_Royal_Society_(crop2).jpg',
    link: 'https://en.wikipedia.org/wiki/Elon_Musk',
  },
  {
    name: 'JB Straubel',
    role: 'Co-founder (recognized 2009), CTO',
    years: '2004–2019',
    bullets: [
      'Battery pack + power electronics leadership; manufacturing scale.',
      'Founded Redwood Materials; later joined Tesla’s board.',
    ],
    photo:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jeffrey_B._Straubel_3.JPG?width=800',
    creditText: 'Photo: Self-published (CC BY-SA 3.0)',
    creditHref:
      'https://commons.wikimedia.org/wiki/File:Jeffrey_B._Straubel_3.JPG',
    link: 'https://en.wikipedia.org/wiki/JB_Straubel',
  },
  {
    name: 'Ian Wright',
    role: 'Early engineering leader',
    years: '2004–2005',
    bullets: [
      'Very early team; helped set powertrain direction.',
      'Later founded Wrightspeed (EV drivetrains).',
    ],
    photo:
      'https://commons.wikimedia.org/wiki/Special:FilePath/BAIA_event_Electrifying_Future_Of_Racing_Sportscars_-_Wrightspeed%27s_Founder,_Ian_Wright_(439894592).jpg?width=800',
    creditText: 'Photo: BAIA (CC BY 2.0)',
    creditHref:
      'https://commons.wikimedia.org/wiki/File:BAIA_event_Electrifying_Future_Of_Racing_Sportscars_-_Wrightspeed%27s_Founder,_Ian_Wright_(439894592).jpg',
    link: 'https://en.wikipedia.org/wiki/Ian_Wright_(engineer)',
  },
]

function FounderCard({ f }: { f: Founder }) {
  return (
    <article className="card p-5">
      <div className="flex items-center gap-4">
        <div
          className="w-20 h-20 rounded-2xl overflow-hidden border"
          style={{ borderColor: 'var(--border)' }}
        >
          <img
            src={f.photo}
            alt={f.name}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{f.name}</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            {f.role}{f.years ? ` · ${f.years}` : ''}
          </p>
        </div>
      </div>

      <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
        {f.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between">
        <a href={f.link} target="_blank" rel="noreferrer" className="link">
          Read more →
        </a>
        <a
          href={f.creditHref}
          target="_blank"
          rel="noreferrer"
          className="text-xs hover:opacity-80"
          style={{ color: 'var(--muted)' }}
        >
          {f.creditText}
        </a>
      </div>
    </article>
  )
}

export default function FoundersPage() {
  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Tesla Founder(s) — Short, Balanced Overview
        </h1>
        <p className="text-gray-700 mt-2">
          In 2009, a settlement recognized five co-founders: Martin Eberhard,
          Marc Tarpenning, Ian Wright, Elon Musk, and JB Straubel. Here’s a quick
          who-did-what snapshot with real photos.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FOUNDERS.map((f) => (
          <FounderCard key={f.name} f={f} />
        ))}
      </div>

      <p className="text-sm" style={{ color: 'var(--muted)' }}>
        Photos are from Wikimedia Commons and include proper attribution. You can
        replace the Marc Tarpenning placeholder if you obtain a freely licensed
        portrait.
      </p>
    </div>
  )
}
