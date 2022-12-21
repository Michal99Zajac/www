/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'

import { SkillLevel } from '@/types/global'

interface Props {
  level?: SkillLevel
  img: {
    src: string
    alt: string
  }
  skill: string
}

export function SkillItem(props: Props) {
  const { level, img, skill } = props

  return (
    <li className="mb-4 flex items-center gap-4">
      <Image src={img.src} alt={img.alt} width={24} height={24} className="object-contain" />
      <p className="text-white">{skill}</p>
      {level && (
        <i className={`skill-info skill-info--${level}`}>
          <span className="skill-info-tooltip capitalize">{level}</span>
        </i>
      )}
    </li>
  )
}

export default SkillItem
