/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Video hero */}
      <section className="relative overflow-hidden rounded-3xl border" style={{ borderColor: 'var(--border)' }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://cdn.pixabay.com/video/2024/02/15/200682-913478723_large.mp4"
          poster="/hero.jpg?v=9"   // cache-bust so Chrome stops serving the old file
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* subtle gradient so text reads on dark */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.6)_100%)]" />

        <div className="relative z-10 px-6 md:px-10 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-semibold">Electric without the stress.</h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Zotoma Electric explains Tesla models, charging, and real ownership in Ghana—clearly and honestly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/models" className="btn btn-primary">Explore the Models</Link>
            <Link href="/media" className="btn btn-secondary">Watch Launch Videos</Link>
          </div>
        </div>

        {/* keeps section height on load */}
        <div className="invisible md:visible md:static md:h-[60vh]" />
      </section>

      {/* your existing sections follow... */}
    </>
  )
}
