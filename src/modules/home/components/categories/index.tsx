"use client"

import React, { useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getCountryCodeFromPath } from "@lib/utils/region"
import { useCategories } from "@lib/hooks/use-categories"

// Define the Category type
interface Category {
  name: string
  handle: string
  img?: string // Make optional since it might not come from the API
  metadata?: Record<string, unknown> | null
}

// 1. Move static arrays OUTSIDE the component so they aren't recreated on every render
const images = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  "https://img.freepik.com/free-psd/men-hoodie-mockup-front-view_1332-60601.jpg",
  "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
]

export const Categories = () => {
  const pathname = usePathname()
  const countryCode = getCountryCodeFromPath(pathname)
  const baseHref = countryCode ? `/${countryCode}` : ""

  // 2. Memoize query parameters so their memory reference stays stable
  const queryParams = useMemo(
    () => ({
      parent_category_id: "null",
      limit: 5,
    }),
    []
  )

  const {
    categories: fetchedCategories,
    loading,
    error,
  } = useCategories({
    fields: "name,handle",
    queryParams, // Pass the memoized object here
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading categories</div>

  // 3. Derive the data directly! No useEffect or useState needed.
  // This calculates on the fly and prevents the infinite loop.
  const categories = (fetchedCategories || []).map((category, index) => ({
    ...category,
    img: images[index] || "defaultImage.jpg", // Fallback if fewer images than categories
  }))

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            whileHover="hover"
            className="relative aspect-[3/4] overflow-hidden group block bg-brand-beige"
          >
            <Link
              href={`${baseHref}/categories/${cat.handle}`}
              className="block w-full h-full"
            >
              <motion.div
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="w-full h-full relative"
              >
                <Image
                  src={`${cat.img}?auto=format&fit=crop&w=1000&q=80`}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-medium text-white uppercase tracking-tight mix-blend-difference">
                  {cat.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
