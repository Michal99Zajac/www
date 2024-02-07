import { headers } from 'next/headers'

/**
 * Regex to check if the user agent is a mobile device.
 * @see https://github.com/vercel/next.js/discussions/14810#discussioncomment-7632396
 */
const MOBILE_REGEX = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|webOS|IEMobile|WPDesktop/i

/**
 * Check if the app is running on a mobile device.
 */
export const isMobileDevice = () => {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')

  return !!userAgent!.match(MOBILE_REGEX)
}

export default isMobileDevice
