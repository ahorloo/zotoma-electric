export default function FAQPage() {
  const faqs = [
    { q:'Are you affiliated with Tesla?', a:'No. Zotoma Electric is an independent fan/education site.' },
    { q:'Where do specs come from?', a:'We summarize at a high level and link to official pages for exact, current details.' },
    { q:'Can I install a home charger if I rent?', a:'Usually yes—with landlord approval and a licensed electrician. Keep the approval in writing.' },
    { q:'No public charger near me?', a:'Start with home charging. Overnight top-ups cover most daily driving.' },
    { q:'How do software updates work?', a:'Over the air via Wi‑Fi or cellular—features and optimizations arrive over time.' },
    { q:'Do EVs handle rough roads?', a:'Yes, but protect tyres and alignment. Higher-profile tyres can help.' },
    { q:'Monthly electricity estimate?', a:'Use the simple formula on the Charging page; a calculator is coming soon.' },
  ]
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold">EV Questions, Answered</h1>
      <div className="mt-6 space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="card p-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  )
}
