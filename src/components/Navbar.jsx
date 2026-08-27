import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
]

const SECTION_IDS = [...LINKS.map((link) => link.id), 'contacto']

function Navbar() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-4 z-50 mt-4 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/70 py-2 pl-3 pr-2 shadow-lg shadow-black/20 backdrop-blur light:border-black/10 light:bg-white/80 sm:gap-3 sm:pl-5">
        <a
          href="#inicio"
          onClick={() => setActive('inicio')}
          className="hidden items-center gap-2 pr-2 sm:flex"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-white light:bg-neutral-900" />
          <span className="text-sm font-medium text-white light:text-neutral-900">
            Maria A.
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium transition-colors sm:px-4 ${
                link.id === 'inicio' ? 'hidden sm:flex' : ''
              } ${
                active === link.id
                  ? 'bg-brand/20 text-white light:text-neutral-900'
                  : 'text-neutral-400 hover:text-white light:text-neutral-500 light:hover:text-neutral-900'
              }`}
            >
              {active === link.id && (
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              )}
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          onClick={() => setActive('contacto')}
          className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-5"
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Navbar
