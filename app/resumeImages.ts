interface ResumeImage {
  src: string
  alt: string
  width: number
  height: number
}

export const resumeImages: ResumeImage[] = Array(25).fill({
  src: '/img/main.jpeg',
  alt: 'me!',
  width: 768,
  height: 1024,
})

export default resumeImages
