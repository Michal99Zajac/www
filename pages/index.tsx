/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ProjectPhoto from '@/components/ProjectPhoto'
import SkillItem from '@/components/SkillItem'
import { projects } from '@/data/projects'
import { skill } from '@/data/skills'
import type { NextPageWithLayout } from '@/types/global'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Michal Zajac - Home</title>
      </Head>
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
        {/* <section id="about" className="flex justify-center bg-white py-20 px-4">
        <div className="sm:w-[400px]">
          <h1 className="mb-4 font-gloria text-3xl">About me</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in atque sequi, laboriosam
            minus distinctio velit aliquid maxime beatae! Illum blanditiis laudantium dolore
            voluptate aperiam praesentium nesciunt tenetur in laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis iste minima
            quae obcaecati cum voluptatem iusto, distinctio non maiores quisquam temporibus sunt sit
            voluptatibus, et quasi qui magni rerum!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis iste minima
            quae obcaecati cum voluptatem iusto, distinctio non maiores quisquam temporibus sunt sit
            voluptatibus, et quasi qui magni rerum! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quaerat nihil praesentium adipisci saepe perferendis eos placeat, aut
            officiis dolor, laborum hic veritatis modi eum ea quo repellendus repellat ipsa culpa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum iste vel.
            Totam deleniti provident asperiores, architecto itaque cumque ut rem possimus nulla
            ullam aperiam pariatur. Alias quod iusto enim!
          </p>
        </div>
      </section> */}
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
