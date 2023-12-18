'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface PreambulaImageProps {
  images: {
    url: string
    alternativeText: string | null
    width: number
    height: number
  }[]
}

/**
 * PreambulaImage component. Displays images with interval effect.
 *
 * @param {PreambulaImageProps} props
 * @param {PreambulaImageProps.images} props.images array of images
 */
export function PreambulaImage({ images }: PreambulaImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 600)

    // clear interval after 5 seconds
    setTimeout(() => clearInterval(interval), 3000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <Image
      src={images[currentIndex].url}
      alt={images[currentIndex].alternativeText || 'me'}
      fill
      className="object-cover"
    />
  )
}

export default PreambulaImage
