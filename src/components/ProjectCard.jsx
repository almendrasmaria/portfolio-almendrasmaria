import { FaJava } from 'react-icons/fa6'
import {
  SiAngular,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const TAG_ICONS = {
  Java: FaJava,
  'Spring Boot': SiSpring,
  PostgreSQL: SiPostgresql,
  Angular: SiAngular,
  Docker: SiDocker,
  'Next.js': SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
}

function ProjectCard({ image, title, description, tags, link }) {
  return (
    <div className="group flex h-56 overflow-hidden rounded-2xl border border-neutral-200 lg:h-64">
      <div className="hidden w-56 shrink-0 overflow-hidden bg-neutral-100 sm:block lg:w-72">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-100" />
        )}
      </div>

      <div className="relative flex-1 p-6">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-brand transition-colors hover:bg-brand/5"
        >
          ↗
        </a>

        <h3 className="pr-10 text-lg font-semibold text-neutral-900 lg:text-xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-base text-neutral-500 lg:text-lg">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            const Icon = TAG_ICONS[tag]
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600"
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
