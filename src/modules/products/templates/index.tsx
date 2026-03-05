import React, { Suspense } from "react"

// import ImageGallery from "@modules/products/components/image-gallery"
import ImageGalleryEnhanced from "@modules/products/components/image-gallery-enhanced"
// import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapperServer from "@modules/products/templates/product-actions-wrapper/product-actions-wrapper-server"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  onvariantChange?: (variant: HttpTypes.StoreProductVariant | undefined) => void
  onOptionsChange?: (options: Record<string, string>) => void
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  onvariantChange,
  onOptionsChange,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container  flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        <ProductActionsWrapperServer id={product.id} region={region} />
        <ProductOnboardingCta />
      </div>

      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
