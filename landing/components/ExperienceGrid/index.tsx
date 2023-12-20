'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import type { JobsGETSchema } from '@/api/jobs/schema'
import Article from '@/components/Article'
import dayjs from '@/config/dayjs'
import getComplexRelativeTimeString from '@/landing/utils/getComplexRelativeTimeString'

interface ExperienceGridProps {
  /**
   * Jobs data.
   */
  jobs: JobsGETSchema
}

/**
 * ExperienceGrid component. Displays jobs and projects in grid.
 *
 * TODO: add drawer for small screens
 */
export function ExperienceGrid({ jobs }: ExperienceGridProps) {
  const [jobIndex, setJobIndex] = useState(jobs.data.length ? 0 : null)

  // change job id every minute
  useEffect(() => {
    // if there is only one job, do not change job id
    if (jobs.data.length <= 1) return

    const ONE_MINUTE = 1000 * 60

    // change job id every minute
    const interval = setInterval(() => {
      setJobIndex((prevIndex) => {
        if (prevIndex === null) return null

        return (prevIndex + 1) % jobs.data.length
      })
    }, ONE_MINUTE)

    return () => clearInterval(interval)
  }, [jobs.data.length])

  return (
    <div className="flex items-start gap-6 px-5">
      <div className="relative w-full grow after:absolute after:left-[9px] after:top-7 after:z-[-1] after:h-[calc(100%-1.75rem)] after:w-[2px] after:border-l-2 after:border-dashed after:border-black after:content-[''] md:after:left-[calc(108px+1rem+9px)]">
        {jobs.data.map((job, index) => (
          <div key={job.id} className="mb-10 flex items-start gap-4">
            <div className="hidden min-w-[108px] md:block">
              <p className="mb-1 text-right font-hermeneus text-xl">
                {dayjs(job.attributes.endDate || undefined).from(job.attributes.startDate, true)}
              </p>
              <p className="text-right text-lg">
                {job.attributes.endDate
                  ? `${dayjs(job.attributes.startDate).format('YYYY')} - ${dayjs(
                      job.attributes.endDate,
                    ).format('YYYY')}`
                  : `from ${dayjs(job.attributes.startDate).format('YYYY')}`}
              </p>
            </div>
            <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
              <button
                onClick={() => setJobIndex(index)}
                aria-label="Check Tango Agency projects"
                className={clsx(
                  'rounded-full bg-blueprint-500 transition-all',
                  jobIndex === index ? 'pulsar h-[20px] w-[20px]' : 'h-[12px] w-[12px]',
                )}
              />
            </div>
            <div className="grow">
              <h2 className="mb-1 font-hermeneus text-xl">{job.attributes.companyName}</h2>
              <p className="mb-1 block text-sm text-gray-500 md:hidden">
                {getComplexRelativeTimeString(job.attributes.startDate, job.attributes.endDate)}
              </p>
              <Article content={job.attributes.content} />
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 h-[2px] w-screen translate-x-[calc(-100%+300px)] border-b-2 border-dashed border-black after:absolute after:right-[-2px] after:top-[-5px] after:h-3 after:w-3 after:rounded-full after:bg-blueprint-500 after:content-['']" />
      </div>
      {jobIndex !== null && (
        <div className="relative hidden w-full grow after:absolute after:left-[9px] after:top-7 after:z-[-1] after:h-[calc(100%-1.75rem)] after:w-[2px] after:border-l-2 after:border-dashed after:border-black after:content-[''] md:after:left-[calc(108px+1rem+9px)] lg:block">
          {jobs.data[jobIndex].attributes.projects.data.map((project) => (
            <div key={project.id} className="mb-10 flex items-start gap-4">
              <div className="hidden min-w-[108px] md:block">
                <p className="mb-1 text-right font-hermeneus text-xl">
                  {dayjs(project.attributes.endDate || undefined).from(
                    project.attributes.startDate,
                    true,
                  )}
                </p>
                <p className="text-right text-lg">
                  {project.attributes.endDate
                    ? `${dayjs(project.attributes.startDate).format('YYYY')} - ${dayjs(
                        project.attributes.endDate,
                      ).format('YYYY')}`
                    : `from ${dayjs(project.attributes.startDate).format('YYYY')}`}
                </p>
              </div>
              <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
                <div className="h-[12px] w-[12px] rounded-full bg-blueprint-500" />
              </div>
              <div className="grow">
                <h2 className="mb-1 font-hermeneus text-xl">{project.attributes.name}</h2>
                <p className="mb-1 block text-sm text-gray-500 md:hidden">
                  {getComplexRelativeTimeString(
                    project.attributes.startDate,
                    project.attributes.endDate,
                  )}
                </p>
                <Article content={project.attributes.content} />
              </div>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 h-[2px] w-screen border-b-2 border-dashed border-black after:absolute after:left-[-2px] after:top-[-5px] after:h-3 after:w-3 after:rounded-full after:bg-blueprint-500 after:content-['']" />
        </div>
      )}
    </div>
  )
}

export default ExperienceGrid
