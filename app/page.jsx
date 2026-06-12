import Homepage from '../src/views/Homepage/Homepage'

export const metadata = {
  title: 'KentallTech: GPS Fleet Tracking for Boats, Cars & Motorcycles',
  description:
    'Track and secure your boat, car or motorcycle with KentallTech: real-time GPS tracking, fleet management, automated trip reports and instant alerts on any device.',
  alternates: { canonical: '/' },
}

export default function Page() {
  return <Homepage />
}
