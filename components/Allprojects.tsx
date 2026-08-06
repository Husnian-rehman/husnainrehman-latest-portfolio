import { urlFor } from '../sanity/lib/image'
import type { AllProjectsProps } from '../types/type'

export default function Allprojects({ data }: { data?: AllProjectsProps } = {}) {
  const projects = data?.projects ?? []
  const sectionStyle = data?.backgroundImage ? {
    backgroundImage: `url(${urlFor(data.backgroundImage).url()})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  } : undefined

  if (!projects.length) {
    return null
  }

  return (
    <section className="relative  py-20 text-white" style={sectionStyle}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 mb-20 text-center flex gap-4 items-center justify-center">
            <span className="block h-1 w-12 md:w-16 bg-white inline-block"></span>
          {data?.sectionTitle ? (
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {data.sectionTitle}
            </h1>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={`${project.title || 'project'}-${index}`}
              className="relative group overflow-hidden rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none border border-black bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              {project.image ? (
                <div className="h-110 relative overflow-hidden group">
                  <img
                    src={urlFor(project.image).url()}
                    alt={project.title || 'Project image'}
                    className="h-full w-full object-cover object-top group-hover:object-bottom transition-all duration-[2500ms] ease-in"
                    loading="lazy"
                  />
                </div>
              ) : null}

              {project.link?.href && project.link?.label ? (
                <a
                  href={project.link.href}
                  target={/^(https?:|mailto:|tel:)/.test(project.link.href) ? '_blank' : undefined}
                  rel={/^(https?:|mailto:|tel:)/.test(project.link.href) ? 'noreferrer noopener' : undefined}
                  className="inline-flex items-center text-[16px] font-bold text-white transition absolute bottom-0 left-0 right-0 top-0 m-auto h-[100px] w-[100px] justify-center rounded-full bg-white opacity-0 duration-500 ease-in-out group-hover:opacity-100 group-hover:bg-black"
                >
                  {project.link.label}
                  <span className="ml-2">↗</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
