import PlatformLinks from '../../src/views/Platform Links/PlatformLinks'

export const metadata = {
  title: 'Download the Tracking Platform',
  description:
    'Use the Kentall tracking platform in any browser or download the app for iPhone, iPad and Android. Live map, push notifications and full fleet access.',
  alternates: { canonical: '/platform-links' },
}

export default function Page() {
  return <PlatformLinks />
}
