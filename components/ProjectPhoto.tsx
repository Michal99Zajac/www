import Image from 'next/image'

interface Props {
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

export function ProjectPhoto(props: Props) {
  const { img, language, url, ghUrl, title, description } = props

  return (
    <div className="w-full border-[1px] border-gray-200 bg-gray-50 p-4 drop-shadow-lg">
      <div className="image-card aspect-square w-full">
        <Image
          src={img.src}
          alt={img.alt}
          width={300}
          height={300}
          className="h-full w-full bg-white object-contain"
        />
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 font-gloria text-xl">{title}</h1>
          <Image
            width={16}
            height={16}
            className="object-contain"
            src={language.src}
            alt={language.alt}
          />
        </div>
        <p className="mb-2 font-gloria text-base">{description}</p>
        <div className="flex gap-2">
          <a href={ghUrl}>
            <Image
              src="/common/gh.png"
              alt="github"
              width={24}
              height={24}
              className="object-contain"
            />
          </a>
          {url && (
            <a href={url}>
              <Image
                src="/common/web.png"
                alt="website"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectPhoto
