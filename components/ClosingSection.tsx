'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ClosingSection() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.closing-message', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.to('.closing-heart', {
        scale: 1.2,
        duration: 0.6,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="closing-message">
        <div className="closing-heart mb-8 text-6xl text-accent">&#10084;</div>
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
          Happy Anniversary
        </h2>
        <p className="mt-4 max-w-sm text-lg text-muted">
          Here&apos;s to every moment we&apos;ve shared, and all the ones still to come.
        </p>
        <p className="mt-8 font-serif text-sm tracking-widest text-accent uppercase">
          With all my love
        </p>
      </div>
    </section>
  )
}
