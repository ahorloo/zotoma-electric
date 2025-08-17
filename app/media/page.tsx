/* eslint-disable @next/next/no-img-element */
import { Section } from '@/components/Section'

type ImageItem = {
  id: number
  uid: string          // Unsplash photo id (short code)
  pageUrl: string      // Photo page for credit/link
  category: string
  title: string
  photographer: string
  credit_text: string
}

const images: ImageItem[] = [
  { id:1, uid:'rImr_XsL3aY', pageUrl:'https://unsplash.com/photos/rImr_XsL3aY', category:'Exterior', title:'Model 3 in showroom', photographer:'Joshua Ferrer', credit_text:'Photo by Joshua Ferrer on Unsplash' },
  { id:2, uid:'N3FCay6SBzc', pageUrl:'https://unsplash.com/photos/N3FCay6SBzc', category:'Exterior', title:'Black Model 3', photographer:'David von Diemar', credit_text:'Photo by David von Diemar on Unsplash' },
  { id:3, uid:'7WoC9hCTOsQ', pageUrl:'https://unsplash.com/photos/7WoC9hCTOsQ', category:'Detail', title:'Door handle / badge', photographer:'Madeline Liu', credit_text:'Photo by Madeline Liu on Unsplash' },
  { id:4, uid:'Yne_Nma8vBo', pageUrl:'https://unsplash.com/photos/Yne_Nma8vBo', category:'Interior', title:'Steering + dash', photographer:'Gábor Szlonkai', credit_text:'Photo by Gábor Szlonkai on Unsplash' },
  { id:5, uid:'devK4suS6kc', pageUrl:'https://unsplash.com/photos/devK4suS6kc', category:'Interior', title:'Driver POV + screen', photographer:'Maxim', credit_text:'Photo by Maxim on Unsplash' },
  { id:6, uid:'3oA3NA8_mbE', pageUrl:'https://unsplash.com/photos/3oA3NA8_mbE', category:'Interior', title:'Dashboard with display', photographer:'Priscilla Du Preez', credit_text:'Photo by Priscilla Du Preez on Unsplash' },
  { id:7, uid:'YJlW6heZzUc', pageUrl:'https://unsplash.com/photos/YJlW6heZzUc', category:'Charging', title:'Plugged in — autumn', photographer:'Bram Van Oost', credit_text:'Photo by Bram Van Oost on Unsplash' },
  { id:8, uid:'qHjx1yCNcms', pageUrl:'https://unsplash.com/photos/qHjx1yCNcms', category:'Charging', title:'Home/garage charging', photographer:'(see Unsplash page)', credit_text:'Credit per Unsplash page' },
  { id:9, uid:'Z98Vslg77SY', pageUrl:'https://unsplash.com/photos/Z98Vslg77SY', category:'Detail', title:'Steering wheel close-up', photographer:'Bram Van Oost', credit_text:'Photo by Bram Van Oost on Unsplash' },
  { id:10, uid:'C2hQ2bv1HJ4', pageUrl:'https://unsplash.com/photos/C2hQ2bv1HJ4', category:'Exterior', title:'Parked outside', photographer:'Madeline Liu', credit_text:'Photo by Madeline Liu on Unsplash' },
  { id:11, uid:'pRvJI3J-WbI', pageUrl:'https://unsplash.com/photos/pRvJI3J-WbI', category:'Exterior', title:'White in lot', photographer:'Somalia Veteran', credit_text:'Photo by Somalia Veteran on Unsplash' },
  { id:12, uid:'fgEiAnpXhCI', pageUrl:'https://unsplash.com/photos/fgEiAnpXhCI', category:'Interior', title:'Model Y dash', photographer:'SCREEN POST', credit_text:'Photo by SCREEN POST on Unsplash' },
]

const videos = [
  { id:1, title:'Introducing the New Model 3 | Tesla', embed:'https://www.youtube.com/embed/JhA9-JYLFyo' },
  { id:2, title:'The New Model Y | Tesla', embed:'https://www.youtube.com/embed/Jt7DqX2AlNo' },
  { id:3, title:'Designing The New Model Y | Tesla', embed:'https://www.youtube.com/embed/_OiEwIUQzDk' },
]

export default function MediaPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold">Media — Photos & Videos</h1>
      <p className="text-gray-700 mt-3 max-w-2xl">
        We curate free-to-use images (Unsplash) and embed official Tesla videos.
      </p>

      <Section title="Photos">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img) => (
            <a key={img.id} href={img.pageUrl} target="_blank" rel="noreferrer" className="card p-4 group">
              <div
                className="aspect-video overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--border)' }}
                title="Open image on Unsplash"
              >
                {/* Use Unsplash download redirect for reliable image rendering */}
                <img
                  src={`https://unsplash.com/photos/${img.uid}/download?force=true&w=1200`}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-medium">{img.title}</h3>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>{img.credit_text}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="text-sm mt-4" style={{ color: 'var(--muted)' }}>
          Tip: click any image card to open the photo page on Unsplash.
        </p>
      </Section>

      <Section title="Videos">
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="aspect-video card overflow-hidden">
              <iframe
                src={v.embed}
                title={v.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
