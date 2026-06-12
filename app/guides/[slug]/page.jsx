import { notFound } from 'next/navigation'
import Guides from '../../../src/views/Guides/Guides'
import { allGuides, findGuide } from '../../../src/views/Guides/guidesData'

export function generateStaticParams() {
  return allGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const guide = findGuide(slug)
  if (!guide) return {}

  const firstParagraph = guide.blocks.find((block) => typeof block === 'string')

  return {
    title: `${guide.title} Guide`,
    description: firstParagraph
      ? firstParagraph.slice(0, 155)
      : `How to use ${guide.title} on the Kentall tracking platform.`,
    alternates: { canonical: `/guides/${guide.slug}` },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  if (!findGuide(slug)) notFound()

  return <Guides slug={slug} />
}
