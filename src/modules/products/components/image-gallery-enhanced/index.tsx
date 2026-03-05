"use client"

import { Button } from "@modules/common/components/ui/button"
import { ChevronLeft, ChevronRight, MagnifyingGlass } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { useState, useCallback, memo, useEffect } from "react"

type ImageGalleryEnhancedProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGalleryEnhanced = memo(function ImageGalleryEnhanced({
  images,
}: ImageGalleryEnhancedProps) {
  const [currentZoomIndex, setCurrentZoomIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    setCurrentZoomIndex(0)
  }, [images])

  const goToNext = useCallback(() => {
    setCurrentZoomIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentZoomIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const openZoom = useCallback((index: number) => {
    setCurrentZoomIndex(index)
    setIsZoomed(true)
  }, [])

  if (!images?.length) {
    return (
      <div className="aspect-[3/4] bg-sand-50 flex items-center justify-center">
        <span className="text-neutral-300">No images available</span>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div
        className="rounded-lg relative aspect-[4/5] w-full overflow-hidden bg-sand-50 group cursor-zoom-in"
        onClick={() => openZoom(0)}
      >
        {!!images[0]?.url && (
          <>
            <Image
              src={images[0].url}
              alt="Main product image"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <MagnifyingGlass className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </>
        )}
      </div>

      {/* Grid Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-3">
          {images.slice(1).map((image, index) => (
            <div
              key={image.id}
              className="rounded-lg relative aspect-[4/5] overflow-hidden bg-sand-50 group cursor-zoom-in"
              onClick={() => openZoom(index + 1)}
            >
              {!!image.url && (
                <>
                  <Image
                    src={image.url}
                    alt={`Product image ${index + 2}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <MagnifyingGlass className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="rounded-lg relative max-w-5xl max-h-full">
            {images[currentZoomIndex]?.url && (
              <Image
                src={images[currentZoomIndex].url}
                alt="Zoomed product image"
                width={1200}
                height={1600}
                priority
                sizes="100vw"
                className="max-w-full max-h-[90vh] object-contain w-auto h-auto"
              />
            )}

            {images.length > 1 && (
              <>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 p-3"
                  aria-label="Previous image"
                  variant="secondary"
                  size="fit"
                >
                  <ChevronLeft />
                </Button>

                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 p-3"
                  aria-label="Next image"
                  variant="secondary"
                  size="fit"
                >
                  <ChevronRight />
                </Button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 text-xs text-neutral-900">
                  {currentZoomIndex + 1} / {images.length}
                </div>
              </>
            )}

            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-white text-sm hover:text-neutral-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
})

ImageGalleryEnhanced.displayName = "ImageGalleryEnhanced"

export default ImageGalleryEnhanced
