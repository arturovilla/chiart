'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface PoemRevealProps {
  lines: string[]
  author?: string
}

export default function PoemReveal({ lines, author }: PoemRevealProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const lineEls = container.current?.querySelectorAll('.poem-line')
      if (!lineEls) return

      lineEls.forEach((line, i) => {
        gsap.from(line, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      if (container.current?.querySelector('.poem-author')) {
        gsap.from('.poem-author', {
          opacity: 0,
          duration: 1,
          delay: lines.length * 0.12,
          scrollTrigger: {
            trigger: container.current?.querySelector('.poem-author'),
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        })
      }
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="flex min-h-[60vh] items-center justify-center px-6 py-24"
    >
      <div className="max-w-lg text-center">
        {lines.map((line, i) => (
          <p
            key={i}
            className="poem-line font-serif text-xl leading-relaxed tracking-wide sm:text-2xl"
          >
            {line}
          </p>
        ))}
        {author && (
          <p className="poem-author mt-8 text-sm tracking-widest text-muted uppercase">
            — {author}
          </p>
        )}
      </div>
    </section>
  )
}
