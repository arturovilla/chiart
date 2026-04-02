'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          '.hero-subtitle',
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          '-=0.6'
        )
        .from(
          '.hero-date',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        )
        .from(
          '.hero-scroll',
          {
            opacity: 0,
            duration: 0.8,
          },
          '-=0.2'
        )
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="hero-title font-serif text-5xl leading-tight tracking-tight sm:text-7xl md:text-8xl">
        For Chiamaka
      </h1>
      <p className="hero-subtitle mt-6 max-w-md text-lg text-muted sm:text-xl">
        A little collection of us — our moments, our words, our story.
      </p>
      <p className="hero-date mt-4 font-serif text-sm tracking-widest text-accent uppercase">
        Our Anniversary
      </p>
      <div className="hero-scroll mt-20 animate-bounce text-muted">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
