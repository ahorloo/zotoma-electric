import Link from 'next/link'

const phone = '233200000000' // TODO: replace with your WhatsApp number
const text = encodeURIComponent("Hi Zotoma Electric, I’m curious about the Model 3. I drive ~25 km daily in Accra. Can you help me estimate monthly charging?")
const url = `https://wa.me/${phone}?text=${text}`

export function WhatsAppButton({ children = 'Chat on WhatsApp' }: { children?: React.ReactNode }) {
  return (
    <Link href={url} target="_blank" className="btn btn-secondary">{children}</Link>
  )
}
