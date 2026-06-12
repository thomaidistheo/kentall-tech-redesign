import Script from 'next/script'
import { Roboto } from 'next/font/google'

import Preheader from '../src/components/Header/Preheader'
import Header from '../src/components/Header/Header'
import CopyrightBar from '../src/components/Footer/CopyrightBar/CopyrightBar'

import '../src/App.scss'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'greek'],
  display: 'swap',
})

const SITE_URL = 'https://www.kentall-tech.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'KentallTech: GPS Fleet Tracking for Boats, Cars & Motorcycles',
    template: '%s | KentallTech',
  },
  description:
    'KentallTech provides GPS tracking devices and a professional fleet management platform for boats, cars and motorcycles. Real-time tracking, trip history, alerts and automated reports.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'KentallTech',
    type: 'website',
    url: SITE_URL,
    title: 'KentallTech: GPS Fleet Tracking for Boats, Cars & Motorcycles',
    description:
      'Secure your assets with the most advanced fleet tracking platform, available on desktop and mobile.',
    images: [{ url: '/fbshare-data.png' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport = {
  themeColor: '#9C1A1A',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KentallTech Ltd.',
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  email: 'info@kentall-tech.com',
  telephone: '+30 217 000 1200',
  sameAs: ['https://www.kentalltrack.com'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {/* .App is flex space-between: exactly two children, so the
            copyright bar pins to the bottom on short pages */}
        <div className="App">
          <div>
            <Preheader />
            <Header />
            <div>{children}</div>
          </div>
          <div>
            <CopyrightBar />
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* Mailchimp: loaded lazily so it never competes with page rendering */}
        <Script
          id="mcjs"
          strategy="lazyOnload"
          src="https://chimpstatic.com/mcjs-connected/js/users/eef2f9194aa71d6bf20f23f15/ec6a8be524e08bdcdb4868a08.js"
        />
      </body>
    </html>
  )
}
