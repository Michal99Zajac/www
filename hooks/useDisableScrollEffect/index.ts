'use client'

import { useEffect } from 'react'

/**
 * Disables scroll on the body element. Useful for modals and other components
 *
 * @param isDisabled whether to disable scroll
 */
export const useDisableScrollEffect = (isDisabled: boolean) => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (isDisabled) {
        event.preventDefault()
      }
    }

    document.body.addEventListener('scroll', handleScroll)

    return () => {
      document.body.removeEventListener('scroll', handleScroll)
    }
  }, [isDisabled])
}

export default useDisableScrollEffect
