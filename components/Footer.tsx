export function Footer() {
  return (
    <footer className="mt-20 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container py-8 text-sm text-gray-600 grid md:grid-cols-2 gap-4">
        <p>Independent fan/education site by Zotoma Electric. Not affiliated with Tesla, Inc.</p>
        <p className="md:text-right">© {new Date().getFullYear()} Zotoma Electric</p>
      </div>
    </footer>
  )
}
