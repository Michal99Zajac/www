import Image from 'next/image'
import Link from 'next/link'

import preambulaAPI from '@/api/preambula'

import { resumeImages } from './resumeImages'

const skills = [
  {
    id: 'a',
    icon: '/icons/typescript/typescript.svg',
    name: 'Typescript',
    isFavorite: true,
    level: 5,
  },
  {
    id: 'b',
    icon: '/icons/typescript/typescript.svg',
    name: 'Typescript',
    isFavorite: true,
    level: 5,
  },
  {
    id: 'c',
    icon: '/icons/typescript/typescript.svg',
    name: 'Typescript',
    isFavorite: false,
    level: 5,
  },
  {
    id: 'd',
    icon: '/icons/typescript/typescript.svg',
    name: 'Typescript',
    isFavorite: true,
    level: 5,
  },
]

export default async function Home() {
  const preambula = await preambulaAPI.get()

  return (
    <>
      <main className="overflow-x-hidden">
        <section id="preambula">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4 border-2 border-dashed border-white bg-blueprint-500 p-5 text-white md:mt-16 md:grid-cols-[340px_1fr_auto] md:grid-rows-1 lg:grid-cols-[540px_1fr_auto]">
              <div>
                <h1 className="mb-2 font-hermeneus text-7xl leading-normal">Hello World!</h1>
                <h2 className="mb-4 font-hermeneus text-6xl leading-normal">I&apos;m Michal</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et nisl in ex
                  ultricies tincidunt. Ut dignissim finibus lectus vel rhoncus. Mauris non enim
                  consequat, mollis massa sed, condimentum lacus. Aliquam non pretium urna, et
                  interdum urna. Nunc vitae erat feugiat, scelerisque magna non, lobortis quam.
                </p>
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
              <div className="crossbox -mb-5 w-full self-stretch object-cover md:-my-5 md:mx-0">
                <Image
                  src="/img/me-1.png"
                  alt="me"
                  width={400}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
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
            <div className="grid items-start gap-4 px-5 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="mb-4 text-2xl">Lorem ipsum dolor</h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien quis
                  tortor interdum volutpat. Nullam leo urna, blandit id pharetra a, efficitur quis
                  sem. Quisque interdum arcu a magna consequat, ac porttitor dolor laoreet.
                  Phasellus erat orci, blandit ac risus vitae, lobortis ultricies metus. Proin nec
                  suscipit elit. Aenean porttitor nec odio vitae efficitur. Mauris sit amet odio sit
                  amet nulla tristique vehicula non ut quam. Fusce vitae velit quis sem molestie
                  dapibus. Fusce finibus leo urna. Nulla malesuada a ipsum ac mollis. Integer cursus
                  felis sed nisl accumsan, quis accumsan nulla rhoncus. Nunc orci elit, faucibus sed
                  rutrum a, sollicitudin vel felis. Donec tincidunt sit amet orci quis rutrum. Nunc
                  lacinia massa malesuada tincidunt tincidunt. Suspendisse est risus, dapibus at
                  suscipit bibendum, rhoncus a quam. Duis lacinia lobortis sapien, sed cursus ex
                  ornare sed. Ut volutpat purus sed nulla sollicitudin posuere. Sed faucibus lorem
                  in libero iaculis lacinia. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Vivamus dignissim justo eget dapibus
                  faucibus. Morbi malesuada turpis vel eros. Suspendisse vel tellus nulla. Quisque
                  sed lacus id quam euismod pellentesque sit amet eu augue.
                </p>
              </div>
              <div className="resume-img-grid grid grid-cols-4 gap-0 border-2 border-dashed border-black bg-white lg:grid-cols-5">
                {resumeImages.map((image, id) => (
                  <Image
                    key={id}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="resume-img-box aspect-square w-full object-cover lg:w-28"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="experience">
          <div className="container mx-auto">
            <h1 className="my-16 translate-x-0 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:translate-x-40 lg:text-[200px]">
              EXPERIENCE
            </h1>
            <div className="companies flex items-start gap-6 px-5">
              <div className="relative w-full grow after:absolute after:left-[9px] after:top-7 after:z-[-1] after:h-[calc(100%-1.75rem)] after:w-[2px] after:border-l-2 after:border-dashed after:border-black after:content-[''] md:after:left-[calc(108px+1rem+9px)]">
                <div className="mb-10 flex items-start gap-4">
                  <div className="hidden min-w-[108px] md:block">
                    <p className="mb-1 text-right font-hermeneus text-xl">2 Years</p>
                    <p className="text-right text-lg">2014 - 2016</p>
                  </div>
                  <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
                    <button
                      aria-label="Check Tango Agency projects"
                      className="pulsar h-[20px] w-[20px] rounded-full bg-blueprint-500"
                    ></button>
                  </div>
                  <div className="grow">
                    <h2 className="mb-1 font-hermeneus text-xl">Tango Agency</h2>
                    <p className="mb-1 block text-sm text-gray-500 md:hidden">
                      2 Years · 2014 - 2016
                    </p>
                    <p className="text-base">
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new opportunity to solve complex problems,
                      to turn lines of code into functional masterpieces. Tango Agency was not just
                      a workplace; it was a hub of creativity and technical prowess, where ideas
                      were nurtured, and visions were turned into reality. My role as a programmer
                      here was challenging yet immensely rewarding, allowing me to delve deep into
                      the intricacies of software development. The projects I worked on were
                      diverse, pushing the boundaries of what was possible and constantly evolving
                      with the technological landscape. This experience at Tango Agency honed my
                      skills, expanded my knowledge, and solidified my passion for programming,
                      leaving an indelible mark on my professional journey.
                    </p>
                  </div>
                </div>
                <div className="mb-10 flex items-start gap-4">
                  <div className="hidden min-w-[108px] md:block">
                    <p className="mb-1 text-right font-hermeneus text-xl">2 Years</p>
                    <p className="text-right text-lg">2014 - 2016</p>
                  </div>
                  <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
                    <button
                      aria-label="Check tango agency projects"
                      className="h-[12px] w-[12px] rounded-full bg-blueprint-500"
                    ></button>
                  </div>
                  <div className="grow">
                    <h2 className="mb-1 font-hermeneus text-xl">Tango Agency</h2>
                    <p className="mb-1 block text-sm text-gray-500 md:hidden">
                      2 Years · 2014 - 2016
                    </p>
                    <p className="text-base">
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new opportunity to solve complex problems,
                      to turn lines of code into functional masterpieces. Tango Agency was not just
                      a workplace; it was a hub of creativity and technical prowess, where ideas
                      were nurtured, and visions were turned into reality. My role as a programmer
                      here was challenging yet immensely rewarding, allowing me to delve deep into
                      the intricacies of software development. The projects I worked on were
                      diverse, pushing the boundaries of what was possible and constantly evolving
                      with the technological landscape. This experience at Tango Agency honed my
                      skills, expanded my knowledge, and solidified my passion for programming,
                      leaving an indelible mark on my professional journey.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-screen translate-x-[calc(-100%+300px)] border-b-2 border-dashed border-black after:absolute after:right-[-2px] after:top-[-5px] after:h-3 after:w-3 after:rounded-full after:bg-blueprint-500 after:content-['']" />
              </div>
              <div className="relative hidden w-full grow after:absolute after:left-[9px] after:top-7 after:z-[-1] after:h-[calc(100%-1.75rem)] after:w-[2px] after:border-l-2 after:border-dashed after:border-black after:content-[''] md:after:left-[calc(108px+1rem+9px)] lg:block">
                <div className="mb-10 flex items-start gap-4">
                  <div className="hidden min-w-[108px] md:block">
                    <p className="mb-1 text-right font-hermeneus text-xl">2 Years</p>
                    <p className="text-right text-lg">2014 - 2016</p>
                  </div>
                  <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
                    <div className="h-[12px] w-[12px] rounded-full bg-blueprint-500" />
                  </div>
                  <div className="grow">
                    <h2 className="mb-1 font-hermeneus text-xl">Beans</h2>
                    <p className="mb-1 block text-sm text-gray-500 md:hidden">
                      2 Years · 2014 - 2016
                    </p>
                    <p className="text-base">
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new opportunity to solve complex problems,
                      to turn lines of code into functional masterpieces. Tango Agency was not just
                      a workplace; it was a hub of creativity and technical prowess, where ideas
                      were nurtured, and visions were turned into reality. My role as a programmer
                      here was challenging yet immensely rewarding, allowing me to delve deep into
                      the intricacies of software development. The projects I worked on were
                      diverse, pushing the boundaries of what was possible and constantly evolving
                      with the technological landscape. This experience at Tango Agency honed my
                      skills, expanded my knowledge, and solidified my passion for programming,
                      leaving an indelible mark on my professional journey.
                    </p>
                  </div>
                </div>
                <div className="mb-10 flex items-start gap-4">
                  <div className="hidden min-w-[108px] md:block">
                    <p className="mb-1 text-right font-hermeneus text-xl">2 Years</p>
                    <p className="text-right text-lg">from 2016</p>
                  </div>
                  <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
                    <div className="h-[12px] w-[12px] rounded-full bg-blueprint-500" />
                  </div>
                  <div className="grow">
                    <h2 className="mb-1 font-hermeneus text-xl">Saleor</h2>
                    <p className="mb-1 block text-sm text-gray-500 md:hidden">
                      2 Years · from 2016
                    </p>
                    <p className="text-base">
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new
                    </p>
                  </div>
                </div>
                <div className="mb-10 flex items-start gap-4">
                  <div className="hidden min-w-[108px] md:block">
                    <p className="mb-1 text-right font-hermeneus text-xl">2 Years</p>
                    <p className="text-right text-lg">from 2016</p>
                  </div>
                  <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
                    <div className="h-[12px] w-[12px] rounded-full bg-blueprint-500" />
                  </div>
                  <div className="grow">
                    <h2 className="mb-1 font-hermeneus text-xl">Panelfox</h2>
                    <p className="mb-1 block text-sm text-gray-500 md:hidden">
                      2 Years · from 2016
                    </p>
                    <p className="text-base">
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-screen border-b-2 border-dashed border-black after:absolute after:left-[-2px] after:top-[-5px] after:h-3 after:w-3 after:rounded-full after:bg-blueprint-500 after:content-['']" />
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="container mx-auto">
            <h1 className="my-16 inline-block border-2 border-dashed border-black px-6 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:translate-x-96 lg:text-[200px]">
              SKILLS
            </h1>
            <div className="relative after:absolute after:bottom-[calc(4rem+9px)] after:left-1/2 after:z-[-1] after:block after:h-[2px] after:w-screen after:-translate-x-1/2 after:border-b-2 after:border-dashed after:border-black after:content-[''] md:overflow-visible">
              <div className="no-scrollbar flex w-full justify-between gap-8 overflow-x-auto px-6">
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/rocket/rocket.svg"
                    alt="technologies icon (rocket)"
                    width={32}
                    height={32}
                    className="mb-2 object-contain"
                  />
                  <p className="mb-2 font-hermeneus text-base">Technologies</p>
                  <div className="flex w-[20px] min-w-[20px] flex-col items-center">
                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                      <button
                        aria-label="Check technologies skills"
                        className="pulsar h-[20px] min-w-[20px] rounded-full bg-blueprint-500"
                      />
                    </div>
                    <div className="h-16 w-[2px] border-l-2 border-dashed border-black" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/framework/framework.svg"
                    alt="technologies icon (rocket)"
                    width={32}
                    height={32}
                    className="mb-2 object-contain"
                  />
                  <p className="mb-2 font-hermeneus text-base">Frameworks</p>
                  <div className="flex w-[20px] min-w-[20px] flex-col items-center">
                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                      <button
                        aria-label="Check frameworks skills"
                        className="h-[12px] min-w-[12px] rounded-full bg-blueprint-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/tool/tool.svg"
                    alt="technologies icon (rocket)"
                    width={32}
                    height={32}
                    className="mb-2 object-contain"
                  />
                  <p className="mb-2 font-hermeneus text-base">Tools</p>
                  <div className="flex w-[20px] min-w-[20px] flex-col items-center">
                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                      <button
                        aria-label="Check tools skills"
                        className="h-[12px] min-w-[12px] rounded-full bg-blueprint-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/language/language.svg"
                    alt="technologies icon (rocket)"
                    width={32}
                    height={32}
                    className="mb-2 object-contain"
                  />
                  <p className="mb-2 font-hermeneus text-base">Languages</p>
                  <div className="flex w-[20px] min-w-[20px] flex-col items-center">
                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                      <button
                        aria-label="Check languages skills"
                        className="h-[12px] min-w-[12px] rounded-full bg-blueprint-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/other/other.svg"
                    alt="technologies icon (rocket)"
                    width={32}
                    height={32}
                    className="mb-2 object-contain"
                  />
                  <p className="mb-2 font-hermeneus text-base">Others</p>
                  <div className="flex w-[20px] min-w-[20px] flex-col items-center">
                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                      <button
                        aria-label="Check others skills"
                        className="h-[12px] min-w-[12px] rounded-full bg-blueprint-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-2 border-dashed border-black md:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-box flex h-[118px] flex-col p-4">
                  <div className="flex items-start gap-2 md:gap-4">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                    <p className="font-hermeneus text-base">{skill.name}</p>
                    <div className="grow" />
                    <Image
                      src={skill.isFavorite ? '/icons/crown/gold.svg' : '/icons/crown/black.svg'}
                      alt="crown icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <div className="grow" />
                  <div className="level-expert flex items-center justify-end gap-2">
                    <p className="font-hermeneus text-sm">Expert</p>
                    <div className="level-block h-[12px] w-[12px] bg-blueprint-200 md:h-[16px] md:w-[16px]" />
                    <div className="level-block h-[12px] w-[12px] bg-blueprint-300 md:h-[16px] md:w-[16px]" />
                    <div className="level-block h-[12px] w-[12px] bg-blueprint-400 md:h-[16px] md:w-[16px]" />
                    <div className="level-block h-[12px] w-[12px] bg-blueprint-500 md:h-[16px] md:w-[16px]" />
                    <div className="level-block h-[12px] w-[12px] bg-blueprint-600 md:h-[16px] md:w-[16px]" />
                  </div>
                </div>
              ))}
              {Array((3 - (skills.length % 3)) % 3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="skill-box empty-skill-box" />
                ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container mx-auto">
            <h1 className="my-16 font-hermeneus text-8xl leading-normal text-blueprint-500 sm:text-[160px] lg:-translate-x-32 lg:text-[200px]">
              PROJECTS
            </h1>
            <div className="relative px-5 after:absolute after:left-1/2 after:top-0 after:z-[-1] after:h-full after:w-[2px] after:-translate-x-1/2 after:border-r-2 after:border-dashed after:border-black after:content-[''] sm:px-0 sm:after:content-none">
              <div className="mb-4 border-2 border-dashed border-black bg-white sm:mb-0 sm:w-[calc(50%+1px)]">
                <div className="flex gap-4 p-4">
                  <div className="grow">
                    <h2 className="mb-4 font-hermeneus text-lg">Saleor</h2>
                    <p>
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://github.com/Michal99Zajac"
                      aria-label="github profile"
                      className="block w-[20px] border-b-2 border-solid border-black pb-1 hover:border-dashed"
                    >
                      <Image
                        src="/icons/external-link/black.svg"
                        alt="github logo"
                        width={20}
                        height={20}
                        className="aspect-square object-contain"
                      />
                    </a>
                    <a
                      href="https://github.com/Michal99Zajac"
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
                  </div>
                </div>
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-video h-48 object-cover"
                />
              </div>
              <div className="mb-4 border-2 border-dashed border-black bg-white sm:mb-0 sm:ml-auto sm:w-[calc(50%+1px)]">
                <div className="flex gap-4 p-4">
                  <div className="grow">
                    <h2 className="mb-4 font-hermeneus text-lg">Saleor</h2>
                    <p>
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://github.com/Michal99Zajac"
                      aria-label="github profile"
                      className="block w-[20px] border-b-2 border-solid border-black pb-1 hover:border-dashed"
                    >
                      <Image
                        src="/icons/external-link/black.svg"
                        alt="github logo"
                        width={20}
                        height={20}
                        className="aspect-square object-contain"
                      />
                    </a>
                    <a
                      href="https://github.com/Michal99Zajac"
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
                  </div>
                </div>
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-video h-48 object-cover"
                />
              </div>
              <div className="mb-4 border-2 border-dashed border-black bg-white sm:mb-0 sm:w-[calc(50%+1px)]">
                <div className="flex gap-4 p-4">
                  <div className="grow">
                    <h2 className="mb-4 font-hermeneus text-lg">Saleor</h2>
                    <p>
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://github.com/Michal99Zajac"
                      aria-label="github profile"
                      className="block w-[20px] border-b-2 border-solid border-black pb-1 hover:border-dashed"
                    >
                      <Image
                        src="/icons/external-link/black.svg"
                        alt="github logo"
                        width={20}
                        height={20}
                        className="aspect-square object-contain"
                      />
                    </a>
                    <a
                      href="https://github.com/Michal99Zajac"
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
                  </div>
                </div>
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-video h-48 object-cover"
                />
              </div>
              <div className="border-2 border-dashed border-black bg-white sm:ml-auto sm:w-[calc(50%+1px)]">
                <div className="flex gap-4 p-4">
                  <div className="grow">
                    <h2 className="mb-4 font-hermeneus text-lg">Saleor</h2>
                    <p>
                      In the realm of technology and innovation, my professional journey took a
                      significant turn when I joined Tango Agency. As a programmer within this
                      dynamic and forward-thinking company, I was not just coding; I was crafting
                      the digital future. Every day was a new
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://github.com/Michal99Zajac"
                      aria-label="github profile"
                      className="block w-[20px] border-b-2 border-solid border-black pb-1 hover:border-dashed"
                    >
                      <Image
                        src="/icons/external-link/black.svg"
                        alt="github logo"
                        width={20}
                        height={20}
                        className="aspect-square object-contain"
                      />
                    </a>
                    <a
                      href="https://github.com/Michal99Zajac"
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
                  </div>
                </div>
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-video h-48 object-cover"
                />
              </div>
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
                href="https://github.com/Michal99Zajac"
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
                href="https://github.com/Michal99Zajac"
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
                href="https://github.com/Michal99Zajac"
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
