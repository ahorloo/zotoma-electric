/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const GH_LOCAL = '0244348731'
const E164 = '+233244348731' // Ghana format for calling/WhatsApp (drop leading 0, add +233)
const WHATSAPP_URL =
  'https://wa.me/233244348731?text=' +
  encodeURIComponent(
    `Hi Zotoma Electric — I'm interested in a Tesla for Ghana. Can you help me figure out charging, imports, and the right model?`
  )

const EMAIL = 'ahorloojoshua255@gmail.com'
const MAILTO =
  `mailto:${EMAIL}` +
  `?subject=` +
  encodeURIComponent('Hello from Zotoma Electric website') +
  `&body=` +
  encodeURIComponent(
    `Hi Zotoma,\n\nI'm interested in...\n\nMy name:\nBest time to reach me:\n\n(Reply by email or WhatsApp is fine.)`
  )

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold">Ask Zotoma anything.</h1>
      <p className="text-gray-700 mt-3 max-w-2xl">
        Curious about charging, imports, or which model fits your life? Let’s talk.
      </p>

      {/* pretty contact cards */}
      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {/* WhatsApp */}
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="card p-5 group">
          <div className="flex items-center gap-4">
            <span
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl"
              style={{ backgroundColor: 'rgba(6,182,212,.12)' }}
            >
              {/* WhatsApp icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[rgb(37,211,102)]">
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.46.02.15 5.34.16 11.92a11.8 11.8 0 0 0 1.64 6L0 24l6.27-1.76a11.9 11.9 0 0 0 5.73 1.5h.01c6.58 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.39-8.36ZM12.01 21.3h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.72 1.04 1-3.62-.22-.37a9.38 9.38 0 1 1 8.09 4.48Zm5.36-7.02c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15s-.74.94-.9 1.14c-.17.2-.33.23-.62.08-.29-.15-1.24-.46-2.37-1.48a8.85 8.85 0 0 1-1.64-2.03c-.17-.29 0-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.38-.03-.53-.08-.15-.64-1.55-.87-2.12-.23-.55-.46-.48-.64-.49h-.54c-.2 0-.53.08-.81.38s-1.06 1.03-1.06 2.5 1.09 2.9 1.25 3.1c.15.2 2.14 3.28 5.19 4.6.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.08 1.7-.7 1.94-1.38.23-.68.23-1.26.17-1.38-.05-.12-.24-.2-.53-.35Z"/>
              </svg>
            </span>
            <div>
              <div className="font-medium">Chat on WhatsApp</div>
              <div className="text-sm" style={{ color: 'var(--muted)' }}>
                {E164} · usually quick replies
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span className="btn btn-secondary">Open WhatsApp</span>
          </div>
        </a>

        {/* Email */}
        <a href={MAILTO} className="card p-5 group">
          <div className="flex items-center gap-4">
            <span
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl"
              style={{ backgroundColor: 'rgba(6,182,212,.12)' }}
            >
              {/* Mail icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.236-8 4.764-8-4.764V6l8 4.764L20 6v2.236Z"/>
              </svg>
            </span>
            <div>
              <div className="font-medium">Email us</div>
              <div className="text-sm" style={{ color: 'var(--muted)' }}>
                {EMAIL}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span className="btn btn-primary">Compose email</span>
          </div>
        </a>
      </div>

      <p className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>
        We aim to reply within one business day.
      </p>

      {/* tiny accessibility/SEO helpers */}
      <div className="sr-only">
        Local phone format: {GH_LOCAL}. International: {E164}.
      </div>
    </>
  )
}
