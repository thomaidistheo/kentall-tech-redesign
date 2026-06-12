import About from '../../src/views/About/About'

export const metadata = {
  title: 'About Us',
  description:
    'KentallTech builds GPS tracking hardware and software: an advanced fleet management platform, KEN-M tracking devices and support for 95% of trackers on the market.',
  alternates: { canonical: '/about' },
}

export default function Page() {
  return <About />
}
