'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface PhotoPairProps {
  photos: Array<{
    src?: string
    alt?: string
    caption?: string
  }>
}

export default function PhotoPair({ photos }: PhotoPairProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const items = container.current?.querySelectorAll('.pair-photo')
      if (!items) return

      items.forEach((item, i) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
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
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {photos.map((photo, i) => (
          <div key={i} className="pair-photo">
            <div className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
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
              <p className="mt-3 text-center font-serif text-sm tracking-wide text-muted italic">
                {photo.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
