/**
 * Shuffles array in place. The function uses Fisher-Yates (aka Knuth) shuffle algorithm.
 *
 * @param array - array to shuffle
 */
export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex
  const copiedArray = [...array]

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // swap current element with random one
    temporaryValue = copiedArray[currentIndex]
    copiedArray[currentIndex] = copiedArray[randomIndex]
    copiedArray[randomIndex] = temporaryValue
  }

  return copiedArray
}

export default shuffle
