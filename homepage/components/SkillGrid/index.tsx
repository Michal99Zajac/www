'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import useMedia from 'react-use/lib/useMedia'

import { SkillCategoriesQuery, SkillEntity } from '@/graphql/generated'
import EMPTY_IMAGE from '@/utils/EMPTY_IMAGE'

export type Skill = SkillCategoriesQuery['skillCategories']

export interface SkillGridProps {
  /**
   * Skill categories.
   */
  skillCategories: SkillCategoriesQuery['skillCategories']
}

/**
 * SkillGrid component. Displays skill categories and skills.
 */
export function SkillGrid({ skillCategories }: SkillGridProps) {
  const md = useMedia('(min-width: 768px)', true)
  const categories = skillCategories?.data || []
  const skillMapper = categories.reduce(
    (acc, category) => {
      const categoryName = category.attributes?.name

      if (!categoryName) return acc

      acc[categoryName] = category.attributes?.skills?.data.map((skill) => skill) || []
      return acc
    },
    {} as Record<string, SkillEntity[]>,
  )
  const [categoryName, setCategoryName] = useState(categories?.[0]?.attributes?.name || '')

  return (
    <>
      <div className="relative after:absolute after:bottom-[calc(4rem+9px)] after:left-1/2 after:z-[-1] after:block after:h-[2px] after:w-screen after:-translate-x-1/2 after:border-b-2 after:border-dashed after:border-black after:content-[''] md:overflow-visible">
        <div className="no-scrollbar flex w-full justify-between gap-8 overflow-x-auto px-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <label htmlFor={category.attributes?.name} className="cursor-pointer">
                <Image
                  src={category.attributes?.icon.data?.[0].attributes?.url || EMPTY_IMAGE}
                  alt={
                    category.attributes?.icon.data?.[0].attributes?.alternativeText ||
                    'Skill category icon'
                  }
                  width={32}
                  height={32}
                  className="mb-2 object-contain"
                />
              </label>
              <p
                className={clsx(
                  'mb-2 font-hermeneus text-base',
                  category.attributes?.name === categoryName && 'text-blueprint-500',
                )}
              >
                {category.attributes?.name}
              </p>
              <div className="flex w-[20px] min-w-[20px] flex-col items-center">
                <div className="flex h-[20px] w-[20px] items-center justify-center">
                  <button
                    id={category.attributes?.name}
                    onClick={() => setCategoryName(category.attributes?.name || '')}
                    aria-label={`Select ${category.attributes?.name} category`}
                    className={clsx(
                      'rounded-full bg-blueprint-500',
                      category.attributes?.name === categoryName
                        ? 'pulsar h-[20px] min-w-[20px]'
                        : 'h-[12px] min-w-[12px]',
                    )}
                  />
                </div>
                {category.attributes?.name === categoryName && (
                  <div className="h-16 w-[2px] border-l-2 border-dashed border-black" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 border-2 border-dashed border-black md:grid-cols-3">
        {skillMapper[categoryName].map((skill, index) => (
          <div
            key={skill.id}
            className={clsx(
              'flex h-[118px] flex-col bg-gray-50 p-4',
              !md && Math.floor(index / 2) % 2 !== 0 && 'bg-white',
              md && index % 2 !== 0 && 'bg-white',
            )}
          >
            <div className="flex items-start gap-2 md:gap-4">
              <Image
                src={skill.attributes?.icon.data?.attributes?.url || EMPTY_IMAGE}
                alt={skill.attributes?.icon.data?.attributes?.alternativeText || 'Skill icon'}
                width={32}
                height={32}
                className="object-contain"
              />
              <p className="font-hermeneus text-base">{skill.attributes?.name}</p>
              <div className="grow" />
              <Image
                src={
                  skill.attributes?.isFavourite ? '/icons/crown/gold.svg' : '/icons/crown/black.svg'
                }
                alt="crown icon"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            <div className="grow" />
            <div
              className={clsx(
                'flex items-center justify-end gap-2',
                skill.attributes?.experienceLevel.numericLevel === 1 && 'level-beginner',
                skill.attributes?.experienceLevel.numericLevel === 2 && 'level-elementary',
                skill.attributes?.experienceLevel.numericLevel === 3 && 'level-intermediate',
                skill.attributes?.experienceLevel.numericLevel === 4 && 'level-advanced',
                skill.attributes?.experienceLevel.numericLevel === 5 && 'level-expert',
              )}
            >
              <p className="hidden font-hermeneus text-sm sm:block">
                {skill.attributes?.experienceLevel.level}
              </p>
              <div className="level-block h-[12px] w-[12px] bg-blueprint-200 md:h-[16px] md:w-[16px]" />
              <div className="level-block h-[12px] w-[12px] bg-blueprint-300 md:h-[16px] md:w-[16px]" />
              <div className="level-block h-[12px] w-[12px] bg-blueprint-400 md:h-[16px] md:w-[16px]" />
              <div className="level-block h-[12px] w-[12px] bg-blueprint-500 md:h-[16px] md:w-[16px]" />
              <div className="level-block h-[12px] w-[12px] bg-blueprint-600 md:h-[16px] md:w-[16px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SkillGrid
