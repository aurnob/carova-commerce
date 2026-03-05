"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=2400&q=95"
          alt="Aura Brand Lifestyle"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="large-title mb-6">
            Identity in <br /> Minimalism
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light tracking-wide mb-12 opacity-90">
            Everyday luxury designed for the intentional individual. We don't
            just make clothes; we craft confidence.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-beige transition-all duration-300">
              Shop Collection
            </button>
            <button className="px-12 py-5 bg-transparent border border-white text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
              Our Philosophy
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
