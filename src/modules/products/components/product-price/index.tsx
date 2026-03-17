import { Loading } from "@modules/common/components/ui/loading"
import { Price, PriceProps } from "@modules/common/components/ui/price"
import { getProductPrice } from "@lib/utils/price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
  className,
  priceProps,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
  className?: string
  priceProps?: Partial<PriceProps>
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variant_id: variant?.id,
  })

  // DEBUG: See what is actually being found
  console.log("Searching for ID:", variant?.id)
  console.log("Found variant:", variant)
  console.log("Selected variant price:", variantPrice)

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <Loading rows={1} />
  }

  return (
    <Price
      price={selectedPrice.calculated_price}
      currencyCode={selectedPrice.currency_code}
      type={variant ? "default" : "range"}
      className={className}
      originalPrice={
        selectedPrice.price_type === "sale"
          ? {
              price: selectedPrice.original_price,
              percentage: selectedPrice.percentage_diff,
            }
          : undefined
      }
      {...priceProps}
    />
  )
}
