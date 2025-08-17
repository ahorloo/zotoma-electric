'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/models', label: 'Models' },
  { href: '/charging', label: 'Charging' },
  { href: '/founders', label: 'Founder(s)' },
  { href: '/media', label: 'Media' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-transparent"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-widest">ZOTOMA ELECTRIC</Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={clsx('text-sm hover:text-accent transition', pathname === l.href && 'text-accent font-medium')}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* right actions */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn btn-secondary text-sm">Ask Zotoma</Link>
          {/* hamburger on mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-2xl border"
            style={{ borderColor: 'var(--border)' }}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span aria-hidden className="block w-5 h-[2px] bg-white"></span>
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: 'var(--border)' }}>
          <nav className="container py-3 grid gap-2">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={clsx('py-2', pathname === l.href && 'text-accent font-medium')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-secondary text-sm w-full" onClick={() => setOpen(false)}>
              Ask Zotoma
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
