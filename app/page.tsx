import clsx from 'clsx'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Article from '@/components/Article'
import {
  HomePageDocument,
  HomePageQuery,
  JobsDocument,
  JobsQuery,
  SelfProjectsDocument,
  SelfProjectsQuery,
  SeoDocument,
  SeoQuery,
  SkillCategoriesDocument,
  SkillCategoriesQuery,
} from '@/graphql/generated'
import getClient from '@/graphql/server'
import ExperienceTimeline from '@/homepage/components/ExperienceTimeline'
import ResumeFloatingImages from '@/homepage/components/ResumeFloatingImages'
import SkillGrid from '@/homepage/components/SkillGrid'
import EMPTY_IMAGE, {
  EMPTY_IMAGE_ALT,
  EMPTY_IMAGE_HEIGHT,
  EMPTY_IMAGE_WIDTH,
} from '@/utils/EMPTY_IMAGE'
import isMobileDevice from '@/utils/isMobileDevice'

export async function generateMetadata(): Promise<Metadata> {
  const client = getClient()
  const { data } = await client.query<SeoQuery>({
    query: SeoDocument,
  })

  const seo = data.homePage?.data?.attributes?.seo
  const metaImage = seo?.metaImage?.data?.attributes

  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    keywords: seo?.keywords,
    openGraph: {
      url: seo?.canonicalURL || undefined,
      siteName: seo?.metaTitle,
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: metaImage
        ? [
            {
              url: metaImage.url,
              width: metaImage.width || 800,
              height: metaImage.height || 600,
              alt: metaImage.alternativeText || seo.metaTitle,
              type: 'image/png',
            },
          ]
        : [],
    },
    twitter: {
      site: '@site',
      creator: '@creator',
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: metaImage
        ? [
            {
              url: metaImage.url,
              width: metaImage.width || 800,
              height: metaImage.height || 600,
              alt: metaImage.alternativeText || seo.metaTitle,
              type: 'image/png',
            },
          ]
        : [],
      card: 'summary_large_image',
    },
  }
}

export default async function Home() {
  const isMobile = isMobileDevice()
  const client = getClient()
  const homePageQuery = await client.query<HomePageQuery>({
    query: HomePageDocument,
  })
  const {
    data: { jobs },
  } = await client.query<JobsQuery>({
    query: JobsDocument,
  })
  const {
    data: { skillCategories },
  } = await client.query<SkillCategoriesQuery>({
    query: SkillCategoriesDocument,
  })
  const {
    data: { selfProjects },
  } = await client.query<SelfProjectsQuery>({
    query: SelfProjectsDocument,
  })
  const homepageData = homePageQuery.data.homePage?.data?.attributes

  return (
    <>
      <main className="overflow-x-hidden">
        <section
          id="preambula"
          className="box-content border-b-2 border-dashed border-white bg-blueprint-500"
        >
          <div className="container mx-auto flex flex-col text-white md:h-screen md:min-h-screen md:flex-row">
            <div className="order-1 m-8 grow md:ml-0">
              <Article content={homepageData?.introduction || ''} />
              <div className="inline-flex border-2 border-dashed">
                <div className="flex size-12 items-center justify-center border-r-2 border-dashed">
                  <a
                    href={homepageData?.contact.githubUrl}
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
                <div className="flex size-12 items-center justify-center border-r-2 border-dashed">
                  <a
                    href={homepageData?.contact.linkedinUrl}
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
                <div className="flex size-12 items-center justify-center">
                  <a
                    href={`mailto:${homepageData?.contact.email}`}
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
              src={homepageData?.profilePicture.data?.attributes?.url || EMPTY_IMAGE}
              alt={
                homepageData?.profilePicture.data?.attributes?.alternativeText || EMPTY_IMAGE_ALT
              }
              width={homepageData?.profilePicture.data?.attributes?.width || EMPTY_IMAGE_WIDTH}
              height={homepageData?.profilePicture.data?.attributes?.height || EMPTY_IMAGE_WIDTH}
              className="crossbox order-3 w-full border-2 border-b-0 border-dashed border-white object-cover md:order-2 md:h-full md:w-1/2 md:min-w-[50%]"
            />
            <nav className="order-2 m-8 mb-16 flex flex-col gap-2 text-white md:order-3 md:mb-8 md:mr-0 md:text-right">
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
        </section>
        <section id="resume">
          <div className="container relative mx-auto">
            <h1 className="mb-8 mt-32 text-center font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:text-[200px]">
              RESUME
            </h1>
            <Article
              className="mx-auto mb-32 w-[640px] max-w-full border-2 border-dashed border-black bg-white px-6 py-8"
              content={homepageData?.about || ''}
            />
            <ResumeFloatingImages
              images={(homepageData?.profilePictures.data || []).map((image, index) => ({
                alternativeText: image.attributes?.alternativeText || EMPTY_IMAGE_ALT,
                url: image.attributes?.url || EMPTY_IMAGE,
                width: image.attributes?.width || EMPTY_IMAGE_WIDTH,
                height: image.attributes?.height || EMPTY_IMAGE_WIDTH,
                id: image.id || index,
              }))}
            />
          </div>
        </section>
        <section id="experience">
          <div className="container mx-auto">
            <h1 className="mb-16 mt-64 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:text-[200px]">
              EXPERIENCE
            </h1>
            <ExperienceTimeline jobs={jobs} isMobile={isMobile} />
          </div>
        </section>
        <section id="skills">
          <div className="container mx-auto">
            <h1 className="mb-16 mt-32 text-right font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:text-[200px]">
              <span className="border-2 border-dashed border-black px-6">SKILLS</span>
            </h1>
            <SkillGrid skillCategories={skillCategories} />
          </div>
        </section>
        <section id="projects">
          <div className="container mx-auto">
            <h1 className="mb-16 mt-32 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:text-[200px]">
              PROJECTS
            </h1>
            <div className="relative px-5 after:absolute after:left-1/2 after:top-0 after:z-[-1] after:h-full after:w-[2px] after:-translate-x-1/2 after:border-r-2 after:border-dashed after:border-black after:content-[''] sm:px-0 sm:after:content-none">
              {selfProjects?.data.map((selfProject, index) => (
                <div
                  key={selfProject.id}
                  className={clsx(
                    'mb-4 border-2 border-dashed border-black bg-white sm:mb-0 sm:w-[calc(50%+1px)]',
                    index % 2 === 1 && 'sm:ml-auto',
                  )}
                >
                  <div className="flex gap-4 p-4">
                    <div className="grow">
                      <h2 className="mb-4 font-hermeneus text-lg">
                        {selfProject.attributes?.name}
                      </h2>
                      <p>{selfProject.attributes?.description}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      {selfProject.attributes?.githubUrl && (
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
                      {selfProject.attributes?.websiteUrl && (
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
                    src={selfProject.attributes?.image.data?.attributes?.url || EMPTY_IMAGE}
                    alt={
                      selfProject.attributes?.image.data?.attributes?.alternativeText ||
                      'Self project image'
                    }
                    width={
                      selfProject.attributes?.image.data?.attributes?.width || EMPTY_IMAGE_WIDTH
                    }
                    height={
                      selfProject.attributes?.image.data?.attributes?.width || EMPTY_IMAGE_HEIGHT
                    }
                    className="aspect-[21/9] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-32 border-t-2 border-dashed border-white bg-blueprint-500 text-white">
        <div className="container mx-auto flex flex-wrap items-start justify-between gap-8 p-5">
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
            <div className="flex size-12 items-center justify-center border-r-2 border-dashed">
              <a
                href={homepageData?.contact.githubUrl}
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
            <div className="flex size-12 items-center justify-center border-r-2 border-dashed">
              <a
                href={homepageData?.contact.linkedinUrl}
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
            <div className="flex size-12 items-center justify-center">
              <a
                href={`mailto:${homepageData?.contact.email}`}
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
