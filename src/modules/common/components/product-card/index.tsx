"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Product } from "@lib/product-constants"
import { cn } from "@lib/utils"
import Image from "next/image"

export const ProductCard = ({
  product,
}: {
  product: Product
  key?: React.Key
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="product-card group cursor-pointer"
    >
      <div className="product-image-container relative bg-white overflow-hidden aspect-[2/3]">
        <Image
          src={
            isHovered
              ? `${product.hoverImage}&w=800&q=80`
              : `${product.image}&w=800&q=80`
          }
          alt={product.name}
          fill
          className="product-image object-cover premium-transition"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 premium-transition z-10">
          <button className="bg-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white premium-transition shadow-sm">
            Quick Add
          </button>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
              {product.category}
            </h3>
            <p className="text-[13px] font-medium tracking-tight">
              {product.name}
            </p>
          </div>
          <p className="text-[13px] font-medium tracking-tight">
            ${product.price}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full border border-black/10"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={cn(
                  "text-[10px]",
                  i < product.rating ? "text-black" : "text-gray-200"
                )}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
