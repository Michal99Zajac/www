import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import jobsAPI from '@/api/jobs'
import preambulaAPI from '@/api/preambula'
import resumeAPI from '@/api/resume'
import selfProjectsAPI from '@/api/self-projects'
import skillCategoriesAPI from '@/api/skill-categories'
import Article from '@/components/Article'
import ExperienceTimeline from '@/landing/components/ExperienceTimeline'
import ResumeImageGrid from '@/landing/components/ResumeImageGrid'
import SkillGrid from '@/landing/components/SkillGrid'
import isMobileDevice from '@/utils/isMobileDevice'

export default async function Home() {
  const isMobile = isMobileDevice()
  const preambula = await preambulaAPI.get()
  const resume = await resumeAPI.get()
  const jobs = await jobsAPI.get()
  const skillCategories = await skillCategoriesAPI.get()
  const selfProjects = await selfProjectsAPI.get()

  return (
    <>
      <main className="overflow-x-hidden">
        <section id="preambula">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4 border-2 border-dashed border-white bg-blueprint-500 p-5 text-white md:mt-16 md:grid-cols-[1fr_340px_auto] lg:grid-cols-[1fr_480px_auto] 2xl:grid-cols-[1fr_640px_auto]">
              <div>
                <Article content={preambula.data.attributes.intro} />
                <div className="inline-flex border-2 border-dashed">
                  <div className="flex h-12 w-12 items-center justify-center border-r-2 border-dashed">
                    <a
                      href={preambula.data.attributes.contact.githubUrl}
                      aria-label="github profile"
                      className="border-b-2 border-solid py-1 hover:border-dashed"
                    >
                      <Image
                        src="/icons/github/white.svg"
                        alt="github logo"
                        width={16}
                        height={16}
                        style={{ objectFit: 'contain' }}
                      />
                    </a>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center border-r-2 border-dashed">
                    <a
                      href={preambula.data.attributes.contact.linkedinUrl}
                      className="border-b-2 border-solid py-1 hover:border-dashed"
                    >
                      <Image
                        src="/icons/linkedin/white.svg"
                        alt="linkedin logo"
                        width={16}
                        height={16}
                        style={{ objectFit: 'contain' }}
                      />
                    </a>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center">
                    <a
                      href={`mailto:${preambula.data.attributes.contact.email}`}
                      className="border-b-2 border-solid py-1 hover:border-dashed"
                    >
                      <Image
                        src="/icons/email/white.svg"
                        alt="@"
                        width={16}
                        height={16}
                        style={{ objectFit: 'contain' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <Image
                priority
                src={preambula.data.attributes.image.data.attributes.url}
                alt={preambula.data.attributes.image.data.attributes.alternativeText || 'me'}
                width={preambula.data.attributes.image.data.attributes.width}
                height={preambula.data.attributes.image.data.attributes.height}
                className="crossbox -mb-5 w-full object-cover md:-my-5 md:h-[calc(100%+2.5rem)]"
              />
              <nav className="row-start-2 flex h-max flex-col gap-2 border-2 border-dashed border-white py-2 text-right text-white md:row-start-auto">
                <Link
                  href="#resume"
                  className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
                >
                  Resume
                </Link>
                <Link
                  href="#experience"
                  className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
                >
                  Experience
                </Link>
                <Link
                  href="#skills"
                  className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
                >
                  Projects
                </Link>
              </nav>
            </div>
            <div className="relative mx-auto h-[200px] w-[2px] border-l-2 border-dashed border-black md:col-start-2 md:row-start-6">
              <div className="pulsar absolute bottom-0 left-1/2 h-[20px] w-[20px] -translate-x-1/2 rounded-full bg-blueprint-500" />
              <div className="absolute left-[calc(50%-2px)] top-full h-[440px] w-[540px] overflow-visible">
                <Image
                  src="/components/resume-wire.svg"
                  alt="wires"
                  fill
                  className="absolute bottom-0 left-0 hidden object-contain lg:block"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="resume" className="relative">
          <div className="container mx-auto">
            <h1 className="my-16 translate-x-8 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:-translate-x-40 lg:text-[200px]">
              RESUME
            </h1>
            <div className="grid items-start gap-8 px-5 lg:grid-cols-[1fr_auto]">
              <Article content={resume.data.attributes.about} />
              <ResumeImageGrid
                images={resume.data.attributes.images.data.map((image) => ({
                  id: image.id,
                  url: image.attributes.url,
                  alternativeText: image.attributes.alternativeText,
                  width: image.attributes.width,
                  height: image.attributes.height,
                }))}
              />
            </div>
          </div>
        </section>
        <section id="experience">
          <div className="container mx-auto">
            <h1 className="my-16 translate-x-0 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:translate-x-40 lg:text-[200px]">
              EXPERIENCE
            </h1>
            <ExperienceTimeline jobs={jobs} isMobile={isMobile} />
          </div>
        </section>
        <section id="skills">
          <div className="container mx-auto">
            <h1 className="my-16 inline-block border-2 border-dashed border-black px-6 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:translate-x-96 lg:text-[200px]">
              SKILLS
            </h1>
            <SkillGrid skillCategories={skillCategories} />
          </div>
        </section>
        <section id="projects">
          <div className="container mx-auto">
            <h1 className="my-16 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:-translate-x-32 lg:text-[200px]">
              PROJECTS
            </h1>
            <div className="relative px-5 after:absolute after:left-1/2 after:top-0 after:z-[-1] after:h-full after:w-[2px] after:-translate-x-1/2 after:border-r-2 after:border-dashed after:border-black after:content-[''] sm:px-0 sm:after:content-none">
              {selfProjects.data.map((selfProject, index) => (
                <div
                  key={selfProject.id}
                  className={clsx(
                    'mb-4 border-2 border-dashed border-black bg-white sm:mb-0 sm:w-[calc(50%+1px)]',
                    index % 2 === 1 && 'sm:ml-auto',
                  )}
                >
                  <div className="flex gap-4 p-4">
                    <div className="grow">
                      <h2 className="mb-4 font-hermeneus text-lg">{selfProject.attributes.name}</h2>
                      <p>{selfProject.attributes.description}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      {selfProject.attributes.githubUrl && (
                        <a
                          href={selfProject.attributes.githubUrl}
                          aria-label="github profile"
                          className="block w-[20px] border-b-2 border-solid border-black pb-1 hover:border-dashed"
                        >
                          <Image
                            src="/icons/github/black.svg"
                            alt="github logo"
                            width={20}
                            height={20}
                            className="aspect-square object-contain"
                          />
                        </a>
                      )}
                      {selfProject.attributes.websiteUrl && (
                        <a
                          href={selfProject.attributes.websiteUrl}
                          aria-label="website url"
                          className="block w-[20px] border-b-2 border-solid border-black pb-1 hover:border-dashed"
                        >
                          <Image
                            src="/icons/external-link/black.svg"
                            alt="external link"
                            width={20}
                            height={20}
                            className="aspect-square object-contain"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                  <Image
                    src={selfProject.attributes.image.data.attributes.url}
                    alt={
                      selfProject.attributes.image.data.attributes.alternativeText ||
                      'Self project image'
                    }
                    width={selfProject.attributes.image.data.attributes.width}
                    height={selfProject.attributes.image.data.attributes.height}
                    className="aspect-[21/9] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto mt-16">
        <div className="flex flex-wrap items-start justify-between gap-8 border-2 border-b-0 border-dashed border-white bg-blueprint-500 p-5 text-white">
          <nav className="flex gap-2">
            <Link
              href="#resume"
              className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
            >
              Resume
            </Link>
            <Link
              href="#experience"
              className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="mx-2 font-hermeneus text-base underline underline-offset-4 hover:decoration-dashed"
            >
              Projects
            </Link>
          </nav>
          <div className="inline-flex border-2 border-dashed">
            <div className="flex h-12 w-12 items-center justify-center border-r-2 border-dashed">
              <a
                href={preambula.data.attributes.contact.githubUrl}
                aria-label="github profile"
                className="border-b-2 border-solid py-1 hover:border-dashed"
              >
                <Image
                  src="/icons/github/white.svg"
                  alt="github logo"
                  width={16}
                  height={16}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
            <div className="flex h-12 w-12 items-center justify-center border-r-2 border-dashed">
              <a
                href={preambula.data.attributes.contact.linkedinUrl}
                className="border-b-2 border-solid py-1 hover:border-dashed"
              >
                <Image
                  src="/icons/linkedin/white.svg"
                  alt="linkedin logo"
                  width={16}
                  height={16}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
            <div className="flex h-12 w-12 items-center justify-center">
              <a
                href={`mailto:${preambula.data.attributes.contact.email}`}
                className="border-b-2 border-solid py-1 hover:border-dashed"
              >
                <Image
                  src="/icons/email/white.svg"
                  alt="@"
                  width={16}
                  height={16}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
