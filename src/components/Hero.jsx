import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const PREFIX = 'Hola, soy '
const NAME = 'Maria'
const FULL_TEXT = PREFIX + NAME

function useTypewriter(text, speed = 70) {
  const [length, setLength] = useState(0)

  useEffect(() => {
    setLength(0)
    const id = setInterval(() => {
      setLength((prev) => {
        if (prev >= text.length) {
          clearInterval(id)
          return prev
        }
        return prev + 1
      })
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return length
}

function Hero() {
  const typedLength = useTypewriter(FULL_TEXT)
  const typedPrefix = FULL_TEXT.slice(0, Math.min(typedLength, PREFIX.length))
  const typedName = FULL_TEXT.slice(PREFIX.length, typedLength)
  const isDone = typedLength >= FULL_TEXT.length

  return (
    <section
      id="inicio"
      className="mx-auto max-w-4xl scroll-mt-20 px-6 pb-16 pt-24"
    >
      <div className="relative inline-block">
        <div className="h-40 w-40 overflow-hidden rounded-full lg:h-48 lg:w-48">
          <img
            src="/avatar.jpeg"
            alt="Maria Almendras"
            className="h-full w-full scale-110 object-cover object-[50%_30%]"
          />
        </div>
        <span className="glow-border absolute -bottom-2 -right-4 inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pl-2 pr-3 text-sm font-medium text-white shadow-lg backdrop-blur-sm light:bg-white light:text-neutral-900 light:shadow-md">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Disponible
        </span>
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-white lg:text-5xl light:text-neutral-900">
        {typedPrefix}
        <span className="text-brand">{typedName}</span>
        <span
          className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-white light:bg-neutral-900"
          style={{
            animation: isDone
              ? 'blink-cursor 1s step-end infinite'
              : 'none',
          }}
        />
      </h1>

      <p className="mt-3 text-neutral-300 lg:mt-4 lg:text-lg light:text-neutral-600">
        <span className="font-semibold text-white light:text-neutral-900">
          Estudiante de Ingeniería en Informática y desarrolladora full stack.
        </span>{' '}
        Trabajo tanto en el backend (Java, Spring Boot) como en el frontend
        (Angular, React), y disfruto las dos partes por igual. Buscando
        sumarme a un equipo donde pueda seguir creciendo y aportar desde el
        primer día.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href="https://github.com/almendrasmaria"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] light:bg-neutral-900 light:text-white light:hover:bg-neutral-700"
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marialmendras/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_0_25px_-5px_rgba(191,86,116,0.8)]"
        >
          <FaLinkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Hero
