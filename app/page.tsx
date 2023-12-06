import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="w-screen overflow-x-hidden">
        <section id="preambula" className="border-b-2 border-dashed border-white bg-blue-500">
          <div className="container mx-auto w-full p-8 pb-0">
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
            <div className="flex w-full min-w-min border-2 border-dashed border-white">
              <div className="h-[420px] grow overflow-hidden p-8">
                <p className="mb-2 font-hermeneus text-lg text-white">Hi There, My name is</p>
                <h1 className="mb-2 font-hermeneus text-5xl text-white">MICHAL ZAJAC</h1>
                <h2 className="mb-2 font-hermeneus text-3xl text-white">WEB DEVELOPER</h2>
                <p className="text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper at eros
                  sed gravida. Sed neque magna, laoreet ultrices mattis sit amet, bibendum et dui.
                  Donec pharetra dui in pharetra dapibus.
                </p>
              </div>
              <div className="min-w-[300px] border-l-2 border-dashed border-white">
                <Image
                  src="/img/main.jpeg"
                  alt="me"
                  priority={true}
                  width={300}
                  height={420}
                  style={{ objectFit: 'cover', height: '420px' }}
                />
              </div>
              <nav className="flex h-[420px] w-[422px] min-w-[422px] flex-wrap border-l-2 border-dashed border-white">
                <div className="h-[140px] w-[140px] border-b-2 border-r-2 border-dashed border-white p-2">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    RESUME.
                  </Link>
                </div>
                <div className="h-[140px] w-[140px] border-b-2 border-r-2 border-dashed border-white p-2">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    EXPERIENCE.
                  </Link>
                </div>
                <div className="h-[140px] w-[140px] border-b-2 border-dashed border-white p-2">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    SKILLS.
                  </Link>
                </div>
                <div className="h-[140px] w-[140px] border-b-2 border-r-2 border-dashed border-white p-2">
                  <Link
                    href="#"
                    className="font-hermeneus text-xl text-white underline underline-offset-4 hover:decoration-dashed"
                  >
                    PROJECTS.
                  </Link>
                </div>
                <div className="h-[140px] w-[140px] border-b-2 border-r-2 border-dashed border-white p-2"></div>
                <div className="h-[140px] w-[140px] border-b-2 border-dashed border-white p-2"></div>
                <div className="h-[140px] w-[140px] border-r-2 border-dashed border-white p-2"></div>
                <div className="h-[140px] w-[140px] border-r-2 border-dashed border-white p-2"></div>
                <div className="h-[140px] w-[140px] p-2"></div>
              </nav>
            </div>
            <div className="crossbox relative ml-[-600px] h-[272px] w-[calc(100%-300px+600px)] border-x-2 border-dashed border-white">
              <p className="absolute right-[-400px] font-hermeneus text-[160px] text-white">
                PORTFOLIO
              </p>
            </div>
          </div>
        </section>
        <section id="resume"></section>
        <section id="experience"></section>
        <section id="skills"></section>
        <section id="projects"></section>
      </main>
      <footer></footer>
    </>
  )
}
