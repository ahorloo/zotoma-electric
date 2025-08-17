export function Section({ title, subtitle, children }: { title: string, subtitle?: string, children?: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2 max-w-2xl">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}
