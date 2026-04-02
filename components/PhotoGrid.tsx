'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface PhotoGridProps {
  photos: Array<{
    src?: string
    alt?: string
    caption?: string
  }>
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const items = container.current?.querySelectorAll('.grid-photo')
      if (!items) return

      items.forEach((item, i) => {
        const rotation = (Math.random() - 0.5) * 6

        gsap.set(item, { rotation })

        gsap.from(item, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    },
    { scope: container }
  )

  return (
    <section ref={container} className="px-6 py-12 sm:px-12 md:px-24">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="grid-photo rounded-2xl bg-white p-3 shadow-md"
          >
            <div className="overflow-hidden rounded-xl">
              <div className="relative aspect-square">
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt || ''}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="placeholder-img h-full w-full" />
                )}
              </div>
            </div>
            {photo.caption && (
              <p className="mt-2 text-center font-serif text-xs tracking-wide text-muted italic">
                {photo.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
