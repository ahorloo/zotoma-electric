/* eslint-disable @next/next/no-img-element */
import { Section } from '@/components/Section'

const PHOTOS = [
  {
    id: 'qHjx1yCNcms',
    title: 'Home/garage charging',
    credit: 'Credit per Unsplash page',
    pageUrl: 'https://unsplash.com/photos/qHjx1yCNcms',
  },
  {
    id: 'YJlW6heZzUc',
    title: 'Plugged in — autumn',
    credit: 'Photo by Bram Van Oost on Unsplash',
    pageUrl: 'https://unsplash.com/photos/YJlW6heZzUc',
  },
]

export default function ChargingPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold">Charging & Ownership — Ghana Edition</h1>
      <p className="text-gray-700 mt-3 max-w-2xl">
        Home first. Daily top-ups overnight. Public charging is a nice-to-have—start with home.
      </p>

      {/* Hero image */}
      <div className="mt-6 rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
        <img
          src={`https://unsplash.com/photos/${PHOTOS[0].id}/download?force=true&w=1600`}
          alt={PHOTOS[0].title}
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <a
        href={PHOTOS[0].pageUrl}
        target="_blank"
        rel="noreferrer"
        className="block text-xs mt-2"
        style={{ color: 'var(--muted)' }}
      >
        {PHOTOS[0].credit}
      </a>

      <Section title="How charging actually works">
        <ul className="list-disc pl-5 text-gray-700">
          <li><strong>Home first:</strong> a licensed electrician checks wiring and suggests charger placement.</li>
          <li><strong>Daily rhythm:</strong> top up overnight; wake up “full”.</li>
          <li><strong>Public charging:</strong> add when convenient—home covers most needs.</li>
        </ul>
      </Section>

      {/* Supporting photos */}
      <div className="my-6 grid md:grid-cols-2 gap-5">
        {PHOTOS.map((p) => (
          <a key={p.id} href={p.pageUrl} target="_blank" rel="noreferrer" className="card p-3">
            <div className="aspect-video overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
              <img
                src={`https://unsplash.com/photos/${p.id}/download?force=true&w=1400`}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{p.credit}</p>
            </div>
          </a>
        ))}
      </div>

      <Section title="Prepaid meter & landlord tips">
        <ul className="list-disc pl-5 text-gray-700">
          <li>Track kWh like you track data. Keep a monthly note for EV-only kWh.</li>
          <li>Use a <strong>dedicated circuit</strong> to avoid tripping.</li>
          <li>If renting, get <strong>written approval</strong>; offer to revert on exit.</li>
        </ul>
      </Section>

      <Section title="Running-cost idea (simple)">
        <p className="text-gray-700">
          Monthly cost ≈ <code>daily_km × days × (kWh/100km) × tariff_per_kWh</code>
        </p>
        <p className="text-gray-700 mt-2">
          Example: 30 km/day · 26 days · 15 kWh/100 km · GHS 2.0/kWh → compute with our upcoming calculator.
        </p>
      </Section>

      <Section title="Maintenance & roads">
        <ul className="list-disc pl-5 text-gray-700">
          <li>Fewer fluids and moving parts than petrol cars.</li>
          <li>Prioritize <strong>tyres, alignment, suspension</strong>, especially after potholes.</li>
          <li>Rotate tyres on schedule; check pressures monthly.</li>
        </ul>
      </Section>

      <Section title="Software & updates">
        <p className="text-gray-700">
          Over-the-air improvements via Wi-Fi or cellular. Keep the car connected at home for quicker updates.
        </p>
      </Section>
    </>
  )
}
