const SITE_URL = 'https://www.kentall-tech.com'

export default function ProductJsonLd({ name, description, url }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: `${SITE_URL}${url}`,
    brand: {
      '@type': 'Brand',
      name: 'KentallTech',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
