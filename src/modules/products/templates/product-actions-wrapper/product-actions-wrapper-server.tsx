import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductActionsWrapperClient from "@modules/products/templates/product-actions-wrapper/product-actions-wrapper-client"

type ProductActionsWrapperServerProps = {
  id: string
  region: HttpTypes.StoreRegion
}

export default async function ProductActionsWrapperServer({
  id,
  region,
}: ProductActionsWrapperServerProps) {
  // Fetch product data server-side
  const product = await listProducts({
    queryParams: { id: [id] },
    regionId: region.id,
  }).then(({ response }) => response.products[0])

  if (!product) {
    return null
  }

  // Pass product data down to the client-side wrapper component
  return <ProductActionsWrapperClient product={product} region={region} />
}
