import PDPCar from '../../src/views/ProductPages/PDPCar/PDPCar'
import ProductJsonLd from '../../src/components/Seo/ProductJsonLd'

export const metadata = {
  title: 'Car GPS Tracking',
  description:
    'Monitor your car 24/7 with KentallTech GPS tracking: live location, theft alerts, trip history and notifications for unauthorized movement, on any device.',
  alternates: { canonical: '/product-car' },
}

export default function Page() {
  return (
    <>
      <ProductJsonLd
        name="KentallTech Car GPS Tracking"
        description="Real-time car GPS tracking with theft alerts, live map, trip history and notifications for unauthorized movement."
        url="/product-car"
      />
      <PDPCar />
    </>
  )
}
