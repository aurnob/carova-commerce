"use client"

import React, { useState, useCallback, useMemo } from "react"
import ProductActions from "@modules/products/components/product-actions"
import ImageGalleryEnhanced from "@modules/products/components/image-gallery-enhanced"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import { HttpTypes } from "@medusajs/types"

type ProductActionsWrapperClientProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}

const ProductActionsWrapperClient = ({
  product,
  region,
}: ProductActionsWrapperClientProps) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({})

  const handleVariantChange = useCallback(
    (_variant: HttpTypes.StoreProductVariant | undefined) => {
      // Variant tracking available for future use
    },
    []
  )

  const handleOptionsChange = useCallback(
    (options: Record<string, string | undefined>) => {
      // Filter out undefined values
      const definedOptions = Object.entries(options).reduce(
        (acc, [key, value]) => {
          if (value !== undefined) {
            acc[key] = value
          }
          return acc
        },
        {} as Record<string, string>
      )
      setSelectedOptions(definedOptions)
    },
    []
  )

  // Reorder images based on selected color option
  // Images linked to variants with the selected color appear first
  const displayImages = useMemo(() => {
    const allImages = product.images || []

    // Find the color option
    const colorOption = product.options?.find(
      (opt: HttpTypes.StoreProductOption) => opt.title.toLowerCase() === "color"
    )

    if (!colorOption) {
      return allImages
    }

    const selectedColorValue = selectedOptions[colorOption.id]

    if (!selectedColorValue) {
      return allImages
    }

    // Find variants that match the selected color
    const matchingVariants =
      product.variants?.filter((variant: HttpTypes.StoreProductVariant) => {
        return variant.options?.some(
          (opt: HttpTypes.StoreProductOptionValue) =>
            opt.option_id === colorOption.id && opt.value === selectedColorValue
        )
      }) || []

    // Get all image IDs from matching variants
    const variantImageIds = new Set(
      matchingVariants.flatMap(
        (v: HttpTypes.StoreProductVariant) =>
          v.images?.map((img: HttpTypes.StoreProductImage) => img.id) || []
      )
    )

    const variantImages = allImages.filter((img: HttpTypes.StoreProductImage) =>
      variantImageIds.has(img.id)
    )
    const otherImages = allImages.filter(
      (img: HttpTypes.StoreProductImage) => !variantImageIds.has(img.id)
    )

    return [...variantImages, ...otherImages]
  }, [product.images, product.options, product.variants, selectedOptions])

  return (
    <>
      <div className="block w-full relative">
        <ImageGalleryEnhanced images={displayImages} />
      </div>

      <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[600px] w-full py-8 gap-y-12">
        <ProductInfo product={product} />
        <ProductActions
          product={product}
          region={region}
          onVariantChange={handleVariantChange}
          onOptionsChange={handleOptionsChange}
        />
        <ProductTabs product={product} />
      </div>
    </>
  )
}

export default ProductActionsWrapperClient
