import React from "react"
import Image from "next/image"

export const BrandStory = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-brand-beige">
      <div className="h-[600px] lg:h-[90vh] relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80"
          alt="Craftsmanship"
          fill
          className="object-cover grayscale"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col justify-center p-12 md:p-24 lg:p-32 bg-white">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase leading-[0.95] mb-8">
          Designed for Movement. <br /> Crafted for Life.
        </h2>
        <div className="space-y-6 text-sm text-gray-500 max-w-md leading-relaxed font-light mb-12">
          <p>
            We source only the highest grade natural fibers, ensuring each
            garment breathes with you and stands the test of time.
          </p>
          <p>
            Our commitment to sustainability means every piece is produced with
            ethical labor and minimal environmental impact.
          </p>
          <p>
            Meticulous craftsmanship meets a modern, relaxed fit that
            transitions seamlessly from morning to night.
          </p>
        </div>
        <button className="w-fit flex items-center gap-4 group">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em]">
            Discover Our Story
          </span>
          <div className="w-8 h-[1px] bg-black group-hover:w-16 premium-transition" />
        </button>
      </div>
    </section>
  )
}
