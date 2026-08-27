import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  {
    range: 'Ene 2026 — Actualidad',
    title: 'Full Stack Developer',
    org: 'ForIT Software Factory',
    description:
      'Desarrollo y mantenimiento de aplicaciones web colaborativas, trabajando tanto en la lógica de negocio como en la interfaz. Integro servicios REST/JSON entre frontend y backend, resuelvo issues y participo en code reviews y Pull Requests junto al equipo.',
  },
  {
    range: 'Mar 2023 — Feb 2025',
    title: 'Backend Developer',
    org: 'Contenidos Públicos S.E.',
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
      className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16"
    >
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap text-sm font-medium uppercase tracking-widest text-neutral-400 light:text-neutral-500">
          Experiencia laboral
        </h2>
        <span className="h-px flex-1 bg-white/10 light:bg-black/10" />
      </div>

      <div ref={ref} className="mt-6">
        {ITEMS.map((item, i) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand">
                {i === 0 && (
                  <span className="absolute h-5 w-5 animate-ping rounded-full bg-brand/50" />
                )}
                <span className="relative h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              {i < ITEMS.length - 1 && (
                <span
                  className="mt-1 w-px flex-1 origin-top bg-white/15 transition-transform ease-out light:bg-black/15"
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
              <p className="text-sm text-neutral-400 light:text-neutral-500">{item.range}</p>
              <h3 className="mt-1 text-lg font-semibold text-brand lg:text-xl">
                {item.title}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-400 light:text-neutral-500">{item.org}</p>
              <p className="mt-2 text-neutral-300 lg:text-lg light:text-neutral-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
