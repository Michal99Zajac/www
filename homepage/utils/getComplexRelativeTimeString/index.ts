import dayjs from '@/config/dayjs'

/**
 * Returns a string with the relative time between two dates and the range of the dates.
 *
 * @param startDate Start date
 * @param endDate End date
 * @returns String with the relative time between two dates and the range of the dates
 */
export const getComplexRelativeTimeString = (startDate: Date, endDate?: Date | null) => {
  const relativePart = dayjs(endDate || undefined).from(startDate, true)
  const rangePart = endDate
    ? `${dayjs(startDate).format('YYYY')} - ${dayjs(endDate).format('YYYY')}`
    : `from ${dayjs(startDate).format('YYYY')}`

  return `${relativePart} · ${rangePart}`
}

export default getComplexRelativeTimeString
