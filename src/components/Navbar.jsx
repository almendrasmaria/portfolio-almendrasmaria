import { useState } from 'react'

const LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
]

function Navbar() {
  const [active, setActive] = useState('inicio')

  return (
    <header className="sticky top-4 z-50 mt-4 flex justify-center px-4">
      <nav className="flex items-center gap-3 rounded-full border border-black/5 bg-white/90 py-2 pl-5 pr-2 shadow-lg shadow-black/5 backdrop-blur">
        <a
          href="#inicio"
          onClick={() => setActive('inicio')}
          className="hidden items-center gap-2 pr-2 sm:flex"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-black" />
          <span className="text-sm font-medium text-neutral-900">
            Maria A.
          </span>
        </a>

        <div className="flex items-center gap-2">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id
                  ? 'bg-brand/10 text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
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
          className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Navbar
