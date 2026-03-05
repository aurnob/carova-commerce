import React from "react"
import Image from "next/image"

export const Community = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-medium tracking-tight uppercase mb-4">
            Community
          </h2>
          <p className="text-sm text-gray-400 uppercase tracking-[0.2em]">
            Share your style #AuraEveryday
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae",
            "https://images.unsplash.com/photo-1529139513466-42016c4307cc",
          ].map((img, i) => (
            <div
              key={i}
              className="aspect-square relative overflow-hidden bg-brand-beige"
            >
              <Image
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                alt="Community style"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
