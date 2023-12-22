import type { JobsGETSchema } from '@/api/jobs/schema'
import Article from '@/components/Article'
import dayjs from '@/config/dayjs'
import getComplexRelativeTimeString from '@/landing/utils/getComplexRelativeTimeString'

export interface ProjectsProps {
  /**
   * Jobs data.
   */
  jobs: JobsGETSchema
  /**
   * Index of job to display projects of.
   */
  jobIndex: number | null
}

export function Projects({ jobIndex, jobs }: ProjectsProps) {
  if (jobIndex === null) return <div className="hidden w-full lg:block" />

  return (
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
  )
}

export default Projects
