"use client"

import React, { useState, useCallback } from "react"
import ProductActions from "@modules/products/components/product-actions"
import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
export default async function ProductActionsWrapper({
  id,
  region,
}: {
  id: string
  region: HttpTypes.StoreRegion
}) {
  const product = await listProducts({
    queryParams: { id: [id] },
    regionId: region.id,
  }).then(({ response }) => response.products[0])

  if (!product) {
    return null
  }

  //added from other source file, need to verify
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

  return (
    <ProductActions
      product={product}
      region={region}
      onVariantChange={handleVariantChange}
      onOptionsChange={handleOptionsChange}
    />
  )
}
