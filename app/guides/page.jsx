import Guides from '../../src/views/Guides/Guides'

export const metadata = {
  title: 'Platform Guides',
  description:
    'Step-by-step guides for the Kentall tracking platform: login, live map view, asset info, trip replay, trip reports and the sailboat VAT special report.',
  alternates: { canonical: '/guides' },
}

export default function Page() {
  return <Guides />
}
