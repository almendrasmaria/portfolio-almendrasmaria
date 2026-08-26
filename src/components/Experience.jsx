import { useEffect, useRef, useState } from 'react'

const EXPERIENCE = [
  {
    range: 'Ene 2026 – Actualidad',
    company: 'ForIT Software Factory',
    role: 'Full Stack Developer',
    tags: 'React · TypeScript · REST APIs · Git/GitHub',
    description:
      'Desarrollo y mantenimiento de aplicaciones web colaborativas, trabajando tanto en la lógica de negocio como en la interfaz. Integro servicios REST/JSON entre frontend y backend, resuelvo issues y participo en code reviews y Pull Requests junto al equipo.',
  },
  {
    range: 'Mar 2023 – Feb 2025',
    company: 'Contenidos Públicos S.E.',
    role: 'Backend Developer',
    tags: 'Java · POO · SQL Server',
    description:
      'Diseño y mantenimiento de lógica de negocio backend en Java, aplicando POO y arquitectura en capas. Implementé funcionalidades de punta a punta, optimicé consultas sobre SQL Server y resolví incidencias técnicas junto al equipo.',
  },
]

function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}

function Experience() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section
      id="experiencia"
      className="mx-auto max-w-[814px] scroll-mt-20 px-6 py-16"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400">
        Experiencia laboral
      </h2>

      <div ref={ref} className="mt-6">
        {EXPERIENCE.map((job, i) => (
          <div key={job.company} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="relative mt-2 flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                {i === 0 && (
                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-brand opacity-75" />
                )}
                <span className="relative h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              {i < EXPERIENCE.length - 1 && (
                <span
                  className="mt-1 w-px flex-1 origin-top bg-white/15 transition-transform ease-out"
                  style={{
                    transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                    transitionDuration: '900ms',
                    transitionDelay: `${i * 200}ms`,
                  }}
                />
              )}
            </div>
            <div
              className="pb-8 opacity-0 transition-opacity ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transitionDuration: '600ms',
                transitionDelay: `${i * 200}ms`,
              }}
            >
              <p className="text-sm text-neutral-400">{job.range}</p>
              <h3 className="mt-1 text-base font-semibold lg:text-lg">
                <span className="text-brand">{job.company}</span>{' '}
                <span className="font-normal text-neutral-400">
                  — {job.role}
                </span>
              </h3>
              <p className="mt-1 text-sm text-neutral-400">{job.tags}</p>
              <p className="mt-2 text-neutral-300 lg:text-lg">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
