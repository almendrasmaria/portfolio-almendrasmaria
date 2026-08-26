import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: 'Timora',
    description:
      'SaaS de gestión de turnos para negocios y profesionales. Permite administrar reservas, clientes, servicios y profesionales desde un solo lugar.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Docker'],
    image: '/projects/timora.png',
    link: '#',
  },
  {
    title: 'Patitas Up',
    description:
      'Plataforma de adopción responsable que conecta animales en adopción con personas interesadas en brindarles un hogar.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: '/projects/patitasup.png',
    link: '#',
  },
]

function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-[814px] px-6 py-16">
      <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">
        Mis proyectos
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
