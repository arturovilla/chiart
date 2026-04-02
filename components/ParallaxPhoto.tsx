'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface ParallaxPhotoProps {
  src?: string
  alt?: string
  caption?: string
}

export default function ParallaxPhoto({
  src,
  alt = '',
  caption,
}: ParallaxPhotoProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const img = container.current?.querySelector('.parallax-img')
      if (!img) return

      gsap.fromTo(
        img,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      gsap.from(container.current!, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    { scope: container }
  )

  return (
    <section ref={container} className="px-6 py-12 sm:px-12 md:px-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="parallax-img h-[130%] w-full object-cover"
            />
          ) : (
            <div className="parallax-img placeholder-img h-[130%] w-full" />
          )}
        </div>
      </div>
      {caption && (
        <p className="mt-4 text-center font-serif text-sm tracking-wide text-muted italic">
          {caption}
        </p>
      )}
    </section>
  )
}
