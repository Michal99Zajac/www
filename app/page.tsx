import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <section
          id="preambula"
          className="w-full overflow-hidden border-b-2 border-dashed border-white bg-blue-500"
        >
          <div className="container mx-auto p-8 pb-0">
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
            <div className="crossbox relative h-[135px] w-screen -translate-x-1/3 lg:h-[240px]">
              <p className="absolute right-[-260px] font-hermeneus text-[90px] text-white lg:right-[-400px] lg:text-[160px]">
                PORTFOLIO
              </p>
            </div>
          </div>
        </section>
        <section id="resume" className="relative mb-16 overflow-hidden pt-16">
          <div className="x-8 container mx-auto">
            <h1 className="mb-14 -translate-x-40 font-hermeneus text-[200px] text-blue-500">
              RESUME
            </h1>
            <Image
              src="/components/resume-wire.svg"
              alt="resume wire"
              width={1024}
              height={422}
              style={{
                position: 'absolute',
                top: '0',
                right: '120px',
                zIndex: '-1',
                minHeight: '428px',
                height: '428px',
                minWidth: '1024px',
                width: '1024px',
              }}
            />
            <div className="grid lg:grid-cols-[360px_1fr_360px]">
              <div className="grid grid-cols-3 gap-0 border-2 border-dashed border-black bg-white">
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-square w-full border-b-2 border-dashed border-black object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="px-5">
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
              <div className="grid grid-cols-3 gap-0 border-2 border-dashed border-black bg-white">
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="closed-border-box aspect-square w-full object-cover"
                />
                <Image
                  src="/img/main.jpeg"
                  alt="me!"
                  width={768}
                  height={1024}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="experience"></section>
        <section id="skills"></section>
        <section id="projects"></section>
      </main>
      <footer></footer>
    </>
  )
}
