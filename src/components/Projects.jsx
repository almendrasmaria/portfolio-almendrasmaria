import useInView from '../hooks/useInView'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: 'Timora',
    description:
      'SaaS de gestión de turnos con foco en backend (Java 21 + Spring Boot). Dashboard multitenancy con reservas públicas, recordatorios automáticos por WhatsApp y persistencia en PostgreSQL. Containerizado con Docker.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Docker'],
    image: '/projects/timora.gif',
    link: 'https://timora-web.vercel.app/',
  },
  {
    title: 'Patitas Up',
    description:
      'Plataforma de adopción responsable que conecta animales con personas interesadas en brindarles un hogar. Desarrollada con Next.js, React y TypeScript, con UI responsive en Tailwind CSS y componentes accesibles con Radix UI.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: '/projects/patitasup.png',
    link: '#',
  },
]

function Projects() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16"
    >
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap text-sm font-medium uppercase tracking-widest text-neutral-400 light:text-neutral-500">
          Mis proyectos
        </h2>
        <span className="h-px flex-1 bg-white/10 light:bg-black/10" />
      </div>

      <div ref={ref} className="mt-6 flex flex-col gap-4">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="opacity-0 transition-all ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transitionDuration: '600ms',
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
