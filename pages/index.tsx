/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head'
import Image from 'next/image'

import type { NextPageWithLayout } from '@/types/global'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Michal Zajac - Home</title>
      </Head>
      <section
        id="intro"
        className="flex max-h-[1080px] items-center justify-center bg-white py-10 px-4 sm:h-screen"
      >
        <div className="border-[1px] border-gray-200 bg-gray-50 p-4 drop-shadow-lg">
          <div className="image-card aspect-square w-full max-w-[400px]">
            <Image
              src="/photo/me.jpg"
              alt="me"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pt-4">
            <h1 className="font-gloria text-xl">Hi!</h1>
            <h2 className="font-gloria">My name is Michal and I am a software engineer.</h2>
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
      <section id="skill" className="flex flex-col bg-black py-20 px-4 sm:items-center">
        <h1 className="mb-16 font-gloria text-5xl text-white sm:text-6xl">My skills!</h1>
        <div className="grid grid-cols-1 gap-12 sm:w-[500px] sm:grid-cols-2 sm:gap-4 md:w-[1000px] md:grid-cols-4">
          <div>
            <h1 className="mb-8 font-gloria text-4xl text-white">Technologies</h1>
            <h2 className="mb-6 font-gloria text-2xl text-white">Languages</h2>
            <ul>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/languages/python.png"
                  alt="python icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Python</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/languages/js.png"
                  alt="javascript icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">JavaScript</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/languages/typescript.png"
                  alt="typescript icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">TypeScript</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/languages/html.svg"
                  alt="html icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">HTML</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/languages/css.svg"
                  alt="css icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">CSS</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/languages/php.png"
                  alt="php icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">PHP</p>
                <i className="skill-info skill-info--basic">
                  <span className="skill-info-tooltip">Basic</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/languages/cplusplus.png"
                  alt="c++ icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">C++</p>
                <i className="skill-info skill-info--basic">
                  <span className="skill-info-tooltip">Basic</span>
                </i>
              </li>
            </ul>
            <h2 className="mt-8 mb-6 font-gloria text-2xl text-white">Databases</h2>
            <ul>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/databases/mongodb.png"
                  alt="mongodb icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">MongoDB</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/databases/postgresql.svg"
                  alt="postgres icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Postgres</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/databases/sqlite.svg"
                  alt="sqlite icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Sqlite</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-8 font-gloria text-4xl text-white">Frameworks</h1>
            <ul>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/frameworks/nextjs.svg"
                  alt="nextjs logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Next.js</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/frameworks/react.svg"
                  alt="react logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">React</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/frameworks/express-js.png"
                  alt="express js logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Express.js</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/frameworks/fastapi.svg"
                  alt="fastapi logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">FastApi</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/frameworks/django.svg"
                  alt="django logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Django</p>
                <i className="skill-info skill-info--basic">
                  <span className="skill-info-tooltip">Basic</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/frameworks/angular.svg"
                  alt="angular logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Angular</p>
                <i className="skill-info skill-info--basic">
                  <span className="skill-info-tooltip">Basic</span>
                </i>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-8 font-gloria text-4xl text-white">Tools</h1>
            <ul>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/tools/git.png"
                  alt="git logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Git</p>
                <i className="skill-info skill-info--advanced">
                  <span className="skill-info-tooltip">Advanced</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/tools/aws.png"
                  alt="aws logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">AWS</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/tools/google-cloud.png"
                  alt="google cloud logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Google Cloud</p>
                <i className="skill-info skill-info--basic">
                  <span className="skill-info-tooltip">Basic</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/tools/travis-ci.png"
                  alt="travis logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Travis CI</p>
                <i className="skill-info skill-info--basic">
                  <span className="skill-info-tooltip">Basic</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/tools/circleci.png"
                  alt="circleci logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">CircleCI</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/tools/gh-actions.png"
                  alt="github actions logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">GitHub Actions</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/tools/docker.png"
                  alt="docker logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Docker</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-8 font-gloria text-4xl text-white">Other</h1>
            <ul>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/other/jira.png"
                  alt="jira logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Jira</p>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/other/slack.png"
                  alt="slack logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Slack</p>
              </li>
              <h2 className="mt-8 mb-6 font-gloria text-2xl text-white">Languages</h2>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/other/usa-flag.png"
                  alt="usa flag"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">English</p>
                <i className="skill-info skill-info--intermediate">
                  <span className="skill-info-tooltip">Intermediate</span>
                </i>
              </li>
              <li className="mb-4 flex items-center gap-4">
                <Image
                  src="/skill/other/poland-flag.png"
                  alt="poland flag"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-white">Polish</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="skill" className="flex flex-col items-center bg-white py-20 px-4">
        <h1 className="mb-16 font-gloria text-5xl sm:text-6xl">My projects!</h1>
        <div className="grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="w-full border-[1px] border-gray-200 bg-gray-50 p-4 drop-shadow-lg">
            <div className="image-card aspect-square w-full">
              <Image
                src="/projects/memory.png"
                alt="me"
                width={300}
                height={300}
                className="h-full w-full bg-white object-contain"
              />
            </div>
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <h1 className="mb-2 font-gloria text-xl">Memory Game</h1>
                <Image
                  width={16}
                  height={16}
                  className="object-contain"
                  src="/skill/languages/js.png"
                  alt="javascript"
                />
              </div>
              <p className="mb-2 font-gloria text-base">First project!</p>
              <div className="flex gap-2">
                <a href="https://github.com/Michal99Zajac/memory-game.git">
                  <Image
                    src="/common/gh.png"
                    alt="github"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
                <a href="https://michal99zajac.github.io/memory-game/">
                  <Image
                    src="/common/web.png"
                    alt="web backend"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full border-[1px] border-gray-200 bg-gray-50 p-4 drop-shadow-lg">
            <div className="image-card aspect-square w-full">
              <Image
                src="/projects/workcode.png"
                alt="me"
                width={300}
                height={300}
                className="h-full w-full bg-white object-contain p-4"
              />
            </div>
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <h1 className="mb-2 font-gloria text-xl">Workcode</h1>
                <Image
                  width={16}
                  height={16}
                  className="object-contain"
                  src="/skill/languages/typescript.png"
                  alt="typescript"
                />
              </div>
              <p className="mb-2 font-gloria text-base">Online editor</p>
              <div className="flex gap-2">
                <a href="https://github.com/Michal99Zajac/workcode.git">
                  <Image
                    src="/common/gh.png"
                    alt="github backend"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full border-[1px] border-gray-200 bg-gray-50 p-4 drop-shadow-lg">
            <div className="image-card aspect-square w-full">
              <Image
                src="/projects/evolution.png"
                alt="me"
                width={300}
                height={300}
                className="h-full w-full bg-white object-contain p-4"
              />
            </div>
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <h1 className="mb-2 font-gloria text-xl">Evolution Algorithm</h1>
                <Image
                  width={16}
                  height={16}
                  className="object-contain"
                  src="/skill/languages/python.png"
                  alt="typescript"
                />
              </div>
              <p className="mb-2 font-gloria text-base">Evolution algorithm from scratch</p>
              <div className="flex gap-2">
                <a href="https://github.com/Michal99Zajac/evolution-algorithm.git">
                  <Image
                    src="/common/gh.png"
                    alt="github backend"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Home.getLayout = (page) => page

export default Home
