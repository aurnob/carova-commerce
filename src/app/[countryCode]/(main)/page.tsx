import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { Categories } from "@modules/home/components/categories"
import { MostWanted } from "@modules/home/components/most-wanted"
import { BrandStory } from "@modules/home/components/brand-story"
import { TrustIcons } from "@modules/home/components/trust-icons"
import { Community } from "@modules/home/components/community"
import { FAQItem } from "@modules/home/components/faq-items"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <Categories />
      <MostWanted />
      <BrandStory />
      <TrustIcons />
      <Community />
      <FAQItem question={""} answer={""} />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
