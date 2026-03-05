import React from "react"
import { ProductCard } from "@modules/common/components/product-card"
import { PRODUCTS } from "@lib/product-constants"

export const MostWanted = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-baseline mb-24">
          <h2 className="text-4xl font-medium tracking-tight uppercase">
            Most Wanted
          </h2>
          <a
            href="#"
            className="text-[11px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-40 transition-opacity"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {PRODUCTS.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
