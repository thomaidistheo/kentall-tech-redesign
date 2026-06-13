import PDPBoat from '../../src/views/ProductPages/PDPBoat/PDPBoat'
import ProductJsonLd from '../../src/components/Seo/ProductJsonLd'

export const metadata = {
  title: 'Boat & Yacht GPS Tracking',
  description:
    'GPS tracking for boats, yachts and sailboats: real-time fleet map, 6 months of trip history, geo-fenced alerts and automated VAT trip reports for Greek tax law.',
  alternates: { canonical: '/product-boat' },
}

export default function Page() {
  return (
    <>
      <ProductJsonLd
        name="KentallTech Boat & Yacht GPS Tracking"
        description="Real-time GPS tracking and fleet management for boats, yachts and sailboats, with trip history, alerts and automated VAT trip reports."
        url="/product-boat"
      />
      <PDPBoat />
    </>
  )
}
