'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import shuffle from '@/utils/shuffle'

export const imageStyles = [
  'size-[244px] left-[-390px] top-[-100px]',
  'size-[160px] left-[-260px] top-[80px]',
  'size-[380px] right-[-500px] top-[360px]',
  'size-[200px] right-[-260px] top-[200px]',
  'size-[220px] bottom-[240px] right-[-300px]',
  'size-[310px] bottom-[80px] left-[-400px]',
  'size-[420px] bottom-[360px] left-[-560px]',
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
  /**
   * children
   */
  children?: React.ReactNode
  /**
   * Additional class name
   */
  className?: string
}

/**
 * ResumeFloatingImages component. Displays images with interval effect.
 * Remeber to use this component inside a relative container.
 */
export function ResumeArticleContainer({ images, children, className }: ResumeFloatingImagesProps) {
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
    <div className={clsx('relative mx-auto w-[640px] max-w-full px-6 py-8', className)}>
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
      {children}
    </div>
  )
}

export default ResumeArticleContainer
