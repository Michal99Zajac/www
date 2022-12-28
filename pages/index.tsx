import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import ProjectPhoto from '@/components/ProjectPhoto'
import SkillItem from '@/components/SkillItem'
import { projects } from '@/data/projects'
import { skill } from '@/data/skills'
import type { NextPageWithLayout } from '@/types/global'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        titleTemplate="Michal Zajac | %s"
        title="Home"
        description="My name is Michal and I am a software engineer"
        openGraph={{
          title: 'Michal Zajac | Home',
          description: 'My name is Michal and I am a software engineer',
          type: 'website',
          locale: 'en_US',
          url: 'https://michalzajac.dev',
          siteName: 'michalzajac.dev',
          images: [
            {
              width: 390,
              height: 240,
              url: 'https://michalzajac.dev/seo/og_390x240.png',
              alt: 'my photo with website url',
              type: 'image/png',
            },
          ],
        }}
      />
      <NextSeo />
      <main>
        <section
          id="intro"
          className="flex max-h-[1080px] items-center justify-center bg-white py-10 px-4 sm:h-screen"
        >
          <div className="max-w-[400px] border-[1px] border-gray-200 bg-gray-50 p-4 drop-shadow-lg">
            <div className="image-card aspect-square w-full">
              <Image
                src="/photo/me.jpg"
                alt="my photo"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-4">
              <h1 className="font-gloria text-xl">Hi!</h1>
              <h2 className="font-gloria">My name is Michal and I am a software engineer.</h2>
            </div>
            <div className="flex flex-row-reverse gap-2 p-2">
              <a href="https://www.linkedin.com/in/michal-zajac-ba2373211/">
                <Image
                  width={24}
                  height={24}
                  className="object-contain"
                  src="/common/linkedin.png"
                  alt="github"
                />
              </a>
              <a href="https://github.com/Michal99Zajac">
                <Image
                  width={24}
                  height={24}
                  className="object-contain"
                  src="/common/gh.png"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="flex justify-center bg-white py-20 px-4">
          <div className="sm:w-[400px]">
            <h1 className="mb-4 font-gloria text-3xl">About me</h1>
            <p className="text-justify">
              Hi, my name is Michal and I am a graduate of Cracow University of Technology, where I
              earned a degree in Computer Science. I am currently continuing my studies in the
              &ldquo;data science&ldquo; specialization to earn a Master&apos;s degree.
              <br />
              <br />I have been working as a frontend developer since 2021, but my interests are not
              limited to this field. I am open to developing my skills in any area of computer
              science and I am always looking for new challenges that will help me grow
              professionally.
              <br />
              <br />
              Outside of work, I enjoy spending time with friends and learning new things. I believe
              that my curiosity and desire for continuous development are my greatest assets.
              <br />
              <br />
              If you have any questions or would like to get to know me better, please do not
              hesitate to contact me.
            </p>
          </div>
        </section>
        <section id="skills" className="flex flex-col bg-black py-20 px-4 sm:items-center">
          <h1 className="mb-16 font-gloria text-5xl text-white sm:text-6xl">My skills!</h1>
          <div className="grid grid-cols-1 gap-12 sm:w-[500px] sm:grid-cols-2 sm:gap-4 md:w-[1000px] md:grid-cols-4">
            <div>
              <h1 className="mb-8 font-gloria text-4xl text-white">Technologies</h1>
              <h2 className="mb-6 font-gloria text-2xl text-white">Languages</h2>
              <ul>
                {skill['programmingLanguages'].map((skill) => (
                  <SkillItem
                    key={skill.skill}
                    level={skill.level}
                    skill={skill.skill}
                    img={skill.img}
                  />
                ))}
              </ul>
              <h2 className="mt-8 mb-6 font-gloria text-2xl text-white">Databases</h2>
              <ul>
                {skill['databases'].map((skill) => (
                  <SkillItem
                    key={skill.skill}
                    level={skill.level}
                    skill={skill.skill}
                    img={skill.img}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h1 className="mb-8 font-gloria text-4xl text-white">Frameworks</h1>
              <ul>
                {skill['frameworks'].map((skill) => (
                  <SkillItem
                    key={skill.skill}
                    level={skill.level}
                    skill={skill.skill}
                    img={skill.img}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h1 className="mb-8 font-gloria text-4xl text-white">Tools</h1>
              <ul>
                {skill['tools'].map((skill) => (
                  <SkillItem
                    key={skill.skill}
                    level={skill.level}
                    skill={skill.skill}
                    img={skill.img}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h1 className="mb-8 font-gloria text-4xl text-white">Other</h1>
              <ul>
                {skill['other'].map((skill) => (
                  <SkillItem
                    key={skill.skill}
                    level={skill.level}
                    skill={skill.skill}
                    img={skill.img}
                  />
                ))}
                <h2 className="mt-8 mb-6 font-gloria text-2xl text-white">Languages</h2>
                {skill['languages'].map((skill) => (
                  <SkillItem
                    key={skill.skill}
                    level={skill.level}
                    skill={skill.skill}
                    img={skill.img}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="projects" className="flex flex-col items-center bg-white py-20 px-4">
          <h1 className="mb-16 font-gloria text-5xl sm:text-6xl">My projects!</h1>
          <div className="grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectPhoto
                key={project.title}
                img={project.img}
                title={project.title}
                description={project.description}
                language={project.language}
                ghUrl={project.ghUrl}
                url={project.url}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="flex justify-center bg-black py-20 px-4">
        <div className="w-full max-w-[1000px]">
          <h1 className="font-gloria text-2xl text-white">Contact</h1>
          <h2 className="font-gloria text-lg text-white">michal.99.zajac@gmail.com</h2>
          <hr className="my-4" />
          <div className="mb-4 grid max-w-[400px] grid-cols-2 gap-4">
            <Link href="#intro" className="font-gloria text-white">
              Start
            </Link>
            <Link href="#about" className="font-gloria text-white">
              About
            </Link>
            <Link href="#skills" className="font-gloria text-white">
              My skills
            </Link>
            <Link href="#projects" className="font-gloria text-white">
              My projects
            </Link>
          </div>
          <div className="flex justify-end gap-2">
            <a href="https://www.linkedin.com/in/michal-zajac-ba2373211/">
              <Image
                width={24}
                height={24}
                className="object-contain"
                src="/common/linkedin.png"
                alt="github"
              />
            </a>
            <a href="https://github.com/Michal99Zajac">
              <Image
                width={24}
                height={24}
                className="object-contain"
                src="/common/gh-white.png"
                alt="github"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

Home.getLayout = (page) => page

export default Home
