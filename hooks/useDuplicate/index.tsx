import { useMemo } from 'react'

/**
 * useDuplicate hook. Duplicates array until it reaches upTo length.
 *
 * @param arr array to duplicate
 * @param upTo length to reach
 */
export function useDuplicate<T>(arr: T[], upTo: number = 10): T[] {
  return useMemo(() => {
    // duplicate array
    let duplicatedArray = [...arr]

    // duplicate array until it reaches upTo length
    for (let i = duplicatedArray.length; i < upTo; i++) {
      duplicatedArray.push(arr[i % arr.length])
    }

    return duplicatedArray
  }, [arr, upTo])
}

export default useDuplicate
