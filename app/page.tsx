import HeroSection from '@/components/HeroSection'
import ParallaxPhoto from '@/components/ParallaxPhoto'
import PhotoPair from '@/components/PhotoPair'
import PhotoGrid from '@/components/PhotoGrid'
import PoemReveal from '@/components/PoemReveal'
import ClosingSection from '@/components/ClosingSection'

const R2 = 'https://pub-79ab326bcf584c6a956be2be431c6cfb.r2.dev'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <HeroSection />

      {/* Photo 1 — full width parallax */}
      <ParallaxPhoto src={`${R2}/photo-1.jpg`} caption="Where it all began" />

      {/* Photos 2 & 3 — side by side */}
      <PhotoPair
        photos={[
          { src: `${R2}/photo-2.jpg`, caption: 'That look' },
          { src: `${R2}/photo-3.jpg`, caption: 'That smile' },
        ]}
      />

      {/* Poem 1 */}
      <PoemReveal
        lines={[
          'I carry your heart with me',
          '(I carry it in my heart)',
          'I am never without it',
          '(anywhere I go you go, my dear;',
          'and whatever is done by only me',
          'is your doing, my darling)',
        ]}
        author="e.e. cummings"
      />

      {/* Photo 4 — full width parallax */}
      <ParallaxPhoto src={`${R2}/photo-4.jpg`} caption="Adventures together" />

      {/* Photos 5, 6, 7 — scattered grid */}
      <PhotoGrid
        photos={[
          { src: `${R2}/photo-5.jpg`, caption: 'Morning light' },
          { src: `${R2}/photo-6.jpg`, caption: 'Lazy afternoons' },
          { src: `${R2}/photo-7.jpg`, caption: 'Late nights' },
        ]}
      />

      {/* Poem 2 */}
      <PoemReveal
        lines={[
          'You are my sun, my moon,',
          'and all my stars.',
        ]}
        author="e.e. cummings"
      />

      {/* Photos 8 & 9 — side by side */}
      <PhotoPair
        photos={[
          { src: `${R2}/photo-8.jpg`, caption: 'You and me' },
          { src: `${R2}/photo-9.jpg`, caption: 'Always' },
        ]}
      />

      {/* Photos 10 & 11 — full width parallax */}
      <ParallaxPhoto src={`${R2}/photo-10.jpg`} caption="My favorite place is next to you" />
      <ParallaxPhoto src={`${R2}/photo-11.jpg`} caption="Forever and always" />

      {/* Poem 3 + Closing */}
      <PoemReveal
        lines={[
          'Whatever our souls are made of,',
          'yours and mine are the same.',
        ]}
        author="Emily Brontë"
      />

      <ClosingSection />
    </main>
  )
}
