import Image from 'next/image'
import Link from 'next/link'

import ResumeWireIcon from '@/icons/ResumeWire'

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
    isFavorite: true,
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

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section
          id="preambula"
          className="w-full border-b-2 border-dashed border-white bg-blue-500"
        >
          <div className="container mx-auto px-5 pt-8">
            <div className="flex">
              <div className="flex h-24 flex-nowrap border-2 border-b-0 border-dashed border-white">
                <div className="flex h-full w-24 items-center justify-center border-r-2 border-dashed border-white">
                  <a
                    href="https://github.com/Michal99Zajac"
                    className="border-b-2 border-solid border-white py-1 hover:border-dashed"
                  >
                    <Image
                      src="/icons/github/white.svg"
                      alt="github logo"
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  </a>
                </div>
                <div className="flex h-full w-24 items-center justify-center border-r-2 border-dashed border-white">
                  <a
                    href="https://github.com/Michal99Zajac"
                    className="border-b-2 border-solid border-white py-1 hover:border-dashed"
                  >
                    <Image
                      src="/icons/linkedin/white.svg"
                      alt="linkedin logo"
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  </a>
                </div>
                <div className="flex h-full w-24 items-center justify-center">
                  <a
                    href="https://github.com/Michal99Zajac"
                    className="border-b-2 border-solid border-white py-1 hover:border-dashed"
                  >
                    <Image
                      src="/icons/email/white.svg"
                      alt="@"
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col border-2 border-dashed border-white lg:min-w-min lg:flex-row">
              <div className="grow p-8 md:h-[420px] md:overflow-hidden">
                <p className="mb-2 font-hermeneus text-lg text-white">Hi There, My name is</p>
                <h1 className="mb-2 font-hermeneus text-5xl text-white">MICHAL ZAJAC</h1>
                <h2 className="mb-2 font-hermeneus text-3xl text-white">WEB DEVELOPER</h2>
                <p className="text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper at eros
                  sed gravida. Sed neque magna, laoreet ultrices mattis sit amet, bibendum et dui.
                  Donec pharetra dui in pharetra dapibus.
                </p>
              </div>
              <div className="crossbox h-[420px] border-t-2 border-dashed border-white text-center lg:min-w-[300px] lg:border-l-2 lg:border-t-0">
                <Image
                  src="/img/main.jpeg"
                  alt="me"
                  priority={true}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <nav className="flex flex-wrap border-t-2 border-dashed border-white lg:h-[420px] lg:w-[422px] lg:min-w-[422px] lg:border-l-2 lg:border-t-0">
                <div className="h-[140px] w-1/2 border-b-2 border-r-2 border-dashed border-white p-2 lg:w-[140px]">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    RESUME.
                  </Link>
                </div>
                <div className="h-[140px] w-1/2 border-b-2 border-dashed border-white p-2 lg:w-[140px] lg:border-r-2">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    EXPERIENCE.
                  </Link>
                </div>
                <div className="h-[140px] w-1/2 border-r-2 border-dashed border-white p-2 lg:w-[140px] lg:border-b-2 lg:border-r-0">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    SKILLS.
                  </Link>
                </div>
                <div className="h-[140px] w-1/2 border-dashed border-white p-2 lg:w-[140px] lg:border-b-2 lg:border-r-2">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    PROJECTS.
                  </Link>
                </div>
                <div className="hidden h-[140px] w-[140px] border-b-2 border-r-2 border-dashed border-white p-2 lg:block"></div>
                <div className="hidden h-[140px] w-[140px] border-b-2 border-dashed border-white p-2 lg:block"></div>
                <div className="hidden h-[140px] w-[140px] border-r-2 border-dashed border-white p-2 lg:block"></div>
                <div className="hidden h-[140px] w-[140px] border-r-2 border-dashed border-white p-2 lg:block"></div>
                <div className="hidden h-[140px] w-[140px] p-2"></div>
              </nav>
            </div>
            <div className="crossbox translate-x-[-20%]">
              <p className="translate-x-[20%] font-hermeneus text-[150px] text-white lg:translate-x-[50%] lg:text-[200px]">
                PORTFOLIO
              </p>
            </div>
          </div>
        </section>
        <section id="resume" className="relative">
          <div className="container mx-auto">
            <h1 className="my-16 -translate-x-0 font-hermeneus text-[150px] text-blue-500 lg:-translate-x-40 lg:text-[200px]">
              RESUME
            </h1>
            <ResumeWireIcon className="absolute right-[40px] top-0 z-[-1] min-h-[255px] w-auto lg:min-h-[460px]" />
            <div className="grid items-start lg:grid-cols-[360px_1fr_360px]">
              <div className="resume-img-grid grid grid-cols-3 gap-0 border-2 border-dashed border-black bg-white">
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
              </div>
              <div className="p-5 lg:py-0">
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
              <div className="resume-img-grid grid grid-cols-3 gap-0 border-2 border-dashed border-black bg-white">
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="resume-img-box aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="experience">
          <div className="container mx-auto">
            <h1 className="my-16 -translate-x-0 font-hermeneus text-[150px] text-blue-500 lg:translate-x-40 lg:text-[200px]">
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
                    <button className="pulsar h-[20px] w-[20px] rounded-full bg-blue-500"></button>
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
                    <button className="h-[12px] w-[12px] rounded-full bg-blue-500"></button>
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
                <div className="absolute bottom-0 left-0 h-[2px] w-screen translate-x-[calc(-100%+300px)] border-b-2 border-dashed border-black after:absolute after:right-[-2px] after:top-[-5px] after:h-3 after:w-3 after:rounded-full after:bg-blue-500 after:content-['']" />
              </div>
              <div className="relative hidden w-full grow after:absolute after:left-[9px] after:top-7 after:z-[-1] after:h-[calc(100%-1.75rem)] after:w-[2px] after:border-l-2 after:border-dashed after:border-black after:content-[''] md:after:left-[calc(108px+1rem+9px)] lg:block">
                <div className="mb-10 flex items-start gap-4">
                  <div className="hidden min-w-[108px] md:block">
                    <p className="mb-1 text-right font-hermeneus text-xl">2 Years</p>
                    <p className="text-right text-lg">2014 - 2016</p>
                  </div>
                  <div className="mt-5 flex h-[20px] w-[20px] min-w-[20px] items-center justify-center">
                    <button className="h-[12px] w-[12px] rounded-full bg-blue-500"></button>
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
                    <button className="h-[12px] w-[12px] rounded-full bg-blue-500"></button>
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
                    <button className="h-[12px] w-[12px] rounded-full bg-blue-500"></button>
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
                <div className="absolute bottom-0 left-0 h-[2px] w-screen border-b-2 border-dashed border-black after:absolute after:left-[-2px] after:top-[-5px] after:h-3 after:w-3 after:rounded-full after:bg-blue-500 after:content-['']" />
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="container mx-auto">
            <h1 className="my-16 inline-block border-2 border-dashed border-black px-6 font-hermeneus text-[150px] text-blue-500 lg:translate-x-96 lg:text-[200px]">
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
                      <button className="pulsar h-[20px] min-w-[20px] rounded-full bg-blue-500" />
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
                      <button className="h-[12px] min-w-[12px] rounded-full bg-blue-500" />
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
                      <button className="h-[12px] min-w-[12px] rounded-full bg-blue-500" />
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
                      <button className="h-[12px] min-w-[12px] rounded-full bg-blue-500" />
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
                      <button className="h-[12px] min-w-[12px] rounded-full bg-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-2 border-dashed border-black lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-box h-[118px] p-4"></div>
              ))}
              {Array((3 - (skills.length % 3)) % 3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="skill-box empty-skill-box"></div>
                ))}
            </div>
          </div>
        </section>
        <section id="projects"></section>
      </main>
      <footer></footer>
    </>
  )
}
