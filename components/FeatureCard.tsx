import Link from 'next/link'

export function FeatureCard({ title, body, href }: { title: string, body: string, href: string }) {
  return (
    <div className="card p-5 flex flex-col gap-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700 flex-1">{body}</p>
      <div>
        <Link href={href} className="link">See overview →</Link>
      </div>
    </div>
  )
}
