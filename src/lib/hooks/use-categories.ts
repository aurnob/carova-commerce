import useSWR from "swr"
import { HttpTypes } from "@medusajs/types"
import { sdk } from "@lib/utils/sdk"

const fetchCategories = async (
  fields: string,
  queryParams: HttpTypes.StoreProductCategoryListParams
) => {
  try {
    console.log("Fetching categories with params:", { fields, queryParams })

    const { product_categories } = await sdk.store.category.list({
      fields,
      ...queryParams,
    })

    console.log("Fetched categories:", product_categories) // Log the fetched categories
    return product_categories
  } catch (error) {
    console.error("Error fetching categories:", error) // Log any errors
    throw error
  }
}

export const useCategories = ({
  fields = "name,handle",
  queryParams = { parent_category_id: "null", limit: 5 },
  enabled = true,
}: {
  fields?: string
  queryParams?: HttpTypes.StoreProductCategoryListParams
  enabled?: boolean
}) => {
  const { data, error, isValidating } = useSWR(
    enabled ? [fields, queryParams] : null,
    () => fetchCategories(fields, queryParams),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )

  console.log("SWR Response:", { data, error, isValidating }) // Log the response from SWR

  return {
    categories: data || [],
    loading: isValidating,
    error: error?.message || null,
  }
}
