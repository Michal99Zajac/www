'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import shuffle from '@/utils/shuffle'

export const imageStyles = [
  'size-[244px] left-[-120px] top-[100px]',
  'size-[160px] left-[20px] top-[300px]',
  'size-[380px] right-[-160px] top-[360px]',
  'size-[200px] right-[-200px] top-[200px]',
  'size-[220px] bottom-[160px] right-[-30px]',
  'size-[310px] bottom-[-100px] right-[100px]',
  'size-[420px] bottom-[360px] left-[-160px]',
]

export interface ResumeFloatingImagesProps {
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
 * ResumeFloatingImages component. Displays images with interval effect.
 * Remeber to use this component inside a relative container.
 */
export function ResumeFloatingImages({ images }: ResumeFloatingImagesProps) {
  const [shuffledImages, setShuffledImages] = useState(images.splice(0, 7))

  useEffect(() => {
    // shuffle images every 10 seconds
    const animation = setInterval(() => {
      const interval = setInterval(() => {
        setShuffledImages((state) => shuffle(state))
      }, 200)

      // clear interval after 1.5 seconds
      setTimeout(() => clearInterval(interval), 1500)
    }, 5000)

    return () => clearInterval(animation)
  }, [])

  return (
    <div className="hidden sm:block">
      {shuffledImages.map((image, index) => (
        <Image
          key={`${image.id}-${index}`}
          src={image.url}
          alt={image.alternativeText || 'resume image'}
          width={image.width}
          height={image.height}
          quality={100}
          priority
          className={clsx(
            'absolute -z-10 border-2 border-dashed border-black object-cover',
            imageStyles[index],
          )}
        />
      ))}
    </div>
  )
}

export default ResumeFloatingImages
