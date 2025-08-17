import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zotoma Electric | Tesla Models, Charging & Ownership in Ghana',
  description: 'Independent fan/education site by Zotoma Electric. Not affiliated with Tesla, Inc.',
  // optional but nice for dark status bar on mobile
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0B' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

// lock in proper mobile scaling + notch handling
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
