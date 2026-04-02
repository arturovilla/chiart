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
      <ParallaxPhoto src={`${R2}/adventuesTogether1.JPG`} caption="Where it all began" />

      {/* Photos 2 & 3 — side by side */}
      <PhotoPair
        photos={[
          { src: `${R2}/thatLook.JPG`, caption: 'That look' },
          { src: `${R2}/thatSmile.JPG`, caption: 'That smile' },
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
      <ParallaxPhoto src={`${R2}/adventuresTogether2.JPG`} caption="Adventures together" />

      {/* Photos 5, 6, 7 — scattered grid */}
      <PhotoGrid
        photos={[
          { src: `${R2}/pic1.JPG`, caption: 'Loud days' },
          { src: `${R2}/pic2.JPG`, caption: 'Lazy afternoons' },
          { src: `${R2}/pic3.JPG`, caption: 'Late nights' },
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
          { src: `${R2}/you%20AndMe.JPG`, caption: 'You and me' },
          { src: `${R2}/always.JPG`, caption: 'Always' },
        ]}
      />

      {/* Photos 10 & 11 — full width parallax */}
      <ParallaxPhoto src={`${R2}/myFavPlaceIsNextToYou.JPG`} caption="My favorite place is next to you" />
      <ParallaxPhoto src={`${R2}/foreverAndAlways.JPG`} caption="Forever and always" />

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
