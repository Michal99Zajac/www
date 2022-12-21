interface Project {
  img: {
    src: string
    alt: string
  }
  language: {
    src: string
    alt: string
  }
  url?: string
  ghUrl: string
  title: string
  description: string
}

export const projects: Project[] = [
  {
    img: {
      src: '/projects/memory.png',
      alt: 'memory game screen',
    },
    title: 'Memory Game',
    description: 'First project!',
    language: {
      src: '/skill/languages/js.png',
      alt: 'javascript logo',
    },
    ghUrl: 'https://github.com/Michal99Zajac/memory-game.git',
    url: 'https://michal99zajac.github.io/memory-game/',
  },
  {
    img: {
      src: '/projects/workcode.png',
      alt: 'workcode logo',
    },
    title: 'Workcode',
    description: 'Online editor',
    language: {
      src: '/skill/languages/typescript.png',
      alt: 'typescript logo',
    },
    ghUrl: 'https://github.com/Michal99Zajac/workcode.git',
  },
  {
    img: {
      src: '/projects/evolution.png',
      alt: 'evolution function',
    },
    title: 'Evolution Algorithm',
    description: 'Evolution algorithm from scratch',
    language: {
      src: '/skill/languages/python.png',
      alt: 'python logo',
    },
    ghUrl: 'https://github.com/Michal99Zajac/evolution-algorithm.git',
    url: 'https://ea-app.vercel.app/',
  },
]
