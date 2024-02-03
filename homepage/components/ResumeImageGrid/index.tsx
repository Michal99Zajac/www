'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import useDuplicate from '@/hooks/useDuplicate'
import { shuffle } from '@/utils/shuffle'

export interface ResumeImageGridProps {
  /**
   * array of images
   */
  images: {
    id: number | string
    url: string
    alternativeText: string | null
    width: number
    height: number
  }[]
}

/**
 * ResumeImageGrid component. Displays images with interval effect.
 */
export function ResumeImageGrid({ images }: ResumeImageGridProps) {
  const duplicatedImages = useDuplicate(images, 25)
  const [shuffledImages, setShuffledImages] = useState(duplicatedImages)

  useEffect(() => {
    // shuffle images every 10 seconds
    const animation = setInterval(() => {
      const interval = setInterval(() => {
        setShuffledImages(shuffle(duplicatedImages))
      }, 200)

      // clear interval after 1.5 seconds
      setTimeout(() => clearInterval(interval), 1500)
    }, 5000)

    return () => clearInterval(animation)
  }, [duplicatedImages])

  return (
    <div className="resume-img-grid grid grid-cols-4 gap-0 border-2 border-dashed border-black bg-white lg:grid-cols-5">
      {shuffledImages.map((image, index) => (
        <Image
          key={`${image.id}-${index}`}
          src={image.url}
          alt={image.alternativeText || 'resume image'}
          width={image.width}
          height={image.height}
          className="resume-img-box aspect-square w-full object-cover lg:w-32"
        />
      ))}
    </div>
  )
}

export default ResumeImageGrid
