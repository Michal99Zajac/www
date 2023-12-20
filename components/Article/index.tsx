import clsx from 'clsx'
import Image from 'next/image'
import Markdown from 'react-markdown'

export interface ArticleProps {
  /**
   * Markdown content.
   */
  content: string
  /**
   * Additional class name.
   */
  className?: string
}

/**
 * Article component. Displays markdown content.
 */
export function Article({ content, className }: ArticleProps) {
  return (
    <article className={className}>
      <Markdown
        components={{
          a: ({ node, children, className, ...props }) => (
            <a
              {...props}
              className={clsx('underline underline-offset-4 hover:decoration-dashed', className)}
              target="_blank"
            >
              {children}
            </a>
          ),
          h6: ({ node, children, className, ...props }) => (
            <h6 {...props} className={clsx('mb-4 font-hermeneus text-xl leading-tight', className)}>
              {children}
            </h6>
          ),
          h5: ({ node, children, className, ...props }) => (
            <h5
              {...props}
              className={clsx('mb-4 font-hermeneus text-2xl leading-tight', className)}
            >
              {children}
            </h5>
          ),
          h4: ({ node, children, className, ...props }) => (
            <h4
              {...props}
              className={clsx('mb-4 font-hermeneus text-3xl leading-tight', className)}
            >
              {children}
            </h4>
          ),
          h3: ({ node, children, className, ...props }) => (
            <h3
              {...props}
              className={clsx('mb-4 font-hermeneus text-4xl leading-tight', className)}
            >
              {children}
            </h3>
          ),
          h2: ({ node, children, className, ...props }) => (
            <h2
              {...props}
              className={clsx('mb-4 font-hermeneus text-5xl leading-tight', className)}
            >
              {children}
            </h2>
          ),
          h1: ({ node, children, className, ...props }) => (
            <h1
              {...props}
              className={clsx('mb-4 font-hermeneus text-6xl leading-tight', className)}
            >
              {children}
            </h1>
          ),
          p: ({ node, children, className, ...props }) => (
            <p {...props} className={clsx('mb-4', className)}>
              {children}
            </p>
          ),
          img: ({
            node,
            children,
            className,
            src,
            alt,
            width,
            height,
            placeholder,
            ref,
            ...props
          }) => (
            <Image
              src={src || '/img/transparent.png'}
              alt={alt || 'markdown image'}
              width={Number(width) || 1600}
              height={Number(height) || 900}
              {...props}
              className={clsx(
                'my-4 aspect-[21/9] border-2 border-dashed border-black object-cover',
                className,
              )}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </article>
  )
}

export default Article
