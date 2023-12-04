export default function Home() {
  return (
    <>
      <main className="w-screen overflow-x-hidden">
        <section id="preambula" className=" h-screen bg-blue-500">
          <div className="container mx-auto h-[400px] w-full p-8">
            <div className="flex">
              <div className="h-24 w-24 border-2 border-dashed border-white"></div>
              <div className="h-24 w-24 border-2 border-l-0 border-dashed border-white"></div>
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
