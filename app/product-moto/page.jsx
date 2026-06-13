import PDPMoto from '../../src/views/ProductPages/PDPMoto/PDPMoto'
import ProductJsonLd from '../../src/components/Seo/ProductJsonLd'

export const metadata = {
  title: 'Motorcycle GPS Tracking',
  description:
    'GPS tracking for motorcycles: real-time location, geofencing alerts, theft prevention and trip history, accessible from any device.',
  alternates: { canonical: '/product-moto' },
}

export default function Page() {
  return (
    <>
      <ProductJsonLd
        name="KentallTech Motorcycle GPS Tracking"
        description="Real-time motorcycle GPS tracking with geofencing alerts, theft prevention and trip history."
        url="/product-moto"
      />
      <PDPMoto />
    </>
  )
}
