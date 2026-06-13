import UseCase from '../../src/views/UseCases/UseCase'
import ProductJsonLd from '../../src/components/Seo/ProductJsonLd'
import { findUseCase } from '../../src/views/UseCases/useCasesData'

const slug = 'charter-fleet-tracking'
const data = findUseCase(slug)

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `/${slug}` },
}

export default function Page() {
  return (
    <>
      <ProductJsonLd
        name={data.jsonLd.name}
        description={data.jsonLd.description}
        url={`/${slug}`}
      />
      <UseCase slug={slug} />
    </>
  )
}
