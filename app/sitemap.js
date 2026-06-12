import { allGuides } from '../src/views/Guides/guidesData'

const SITE_URL = 'https://www.kentall-tech.com'

export default function sitemap() {
  const staticRoutes = [
    { path: '/', priority: 1 },
    { path: '/product-boat', priority: 0.9 },
    { path: '/product-car', priority: 0.9 },
    { path: '/product-moto', priority: 0.9 },
    { path: '/guides', priority: 0.7 },
    { path: '/platform-links', priority: 0.6 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
  ]

  const guideRoutes = allGuides.map((guide) => ({
    path: `/guides/${guide.slug}`,
    priority: 0.6,
  }))

  return [...staticRoutes, ...guideRoutes].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  }))
}
