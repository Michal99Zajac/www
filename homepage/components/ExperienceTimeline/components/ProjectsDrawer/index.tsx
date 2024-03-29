'use client'

import clsx from 'clsx'
import { useState } from 'react'

import Article from '@/components/Article'
import { JobsQuery } from '@/graphql/generated'
import getComplexRelativeTimeString from '@/homepage/utils/getComplexRelativeTimeString'
import useDisableScrollEffect from '@/hooks/useDisableScrollEffect'

export interface ProjectsDrawerProps {
  /**
   * Jobs data.
   */
  jobs: JobsQuery['jobs']
  /**
   * Index of job to display projects of.
   */
  jobIndex: number | null
  /**
   * Function to close modal.
   */
  onClose: () => void
}

/**
 * ProjectsDrawer component. Displays projects in drawer.
 */
export function ProjectsDrawer({ jobIndex, jobs, onClose }: ProjectsDrawerProps) {
  const [isClosing, setIsClosing] = useState(false)

  const innerOnClose = () => {
    setIsClosing(true)

    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 600)
  }

  /**
   * Disable scroll effect on body when drawer is open.
   */
  useDisableScrollEffect(jobIndex !== null)

  if (jobIndex === null) return null

  return (
    <div
      className={clsx(
        'drawer fixed left-0 top-0 z-10 h-full w-screen overflow-auto bg-white shadow-2xl',
        isClosing && 'closing-drawer',
      )}
    >
      <div className="sticky left-0 top-0 z-10 border-b-2 border-dashed border-black bg-white px-5 py-3 text-right">
        <button className="size-10 border-2 border-dashed border-black" onClick={innerOnClose}>
          X
        </button>
      </div>
      <div className="relative p-5 after:absolute after:left-[calc(1.25rem+9px)] after:top-0 after:z-[-1] after:h-full after:w-[2px] after:border-l-2 after:border-dashed after:border-black after:content-['']">
        {jobs?.data?.[jobIndex]?.attributes?.projects?.data.map((project) => (
          <div key={project.id} className="mb-10 flex items-start gap-4">
            <div className="mt-5 flex size-[20px]  min-w-[20px] items-center justify-center">
              <div className="size-[12px] rounded-full bg-blueprint-500" />
            </div>
            <div className="grow">
              <h2 className="mb-1 font-hermeneus text-xl">{project.attributes?.name}</h2>
              <p className="mb-1 text-sm text-gray-500">
                {getComplexRelativeTimeString(
                  project.attributes?.startDate || new Date(),
                  project.attributes?.endDate,
                )}
              </p>
              <Article content={project.attributes?.content || ''} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsDrawer
