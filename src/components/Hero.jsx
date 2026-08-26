import { useEffect, useState } from 'react'

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
    <section id="inicio" className="mx-auto max-w-[814px] px-6 pb-16 pt-24">
      <div className="relative inline-block">
        <div className="h-40 w-40 overflow-hidden rounded-full lg:h-48 lg:w-48">
          <img
            src="/avatar.jpeg"
            alt="Maria Almendras"
            className="h-full w-full scale-125 object-cover object-[50%_30%]"
          />
        </div>
        <span className="absolute -bottom-2 -right-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 py-1.5 pl-2 pr-3 text-sm font-medium text-white shadow-lg">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Disponible
        </span>
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 lg:text-5xl">
        {typedPrefix}
        <span className="text-brand">{typedName}</span>
        <span
          className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-neutral-900"
          style={{
            animation: isDone
              ? 'blink-cursor 1s step-end infinite'
              : 'none',
          }}
        />
      </h1>

      <p className="mt-3 text-neutral-600 lg:mt-4 lg:text-lg">
        <span className="font-semibold text-neutral-900">
          Estudiante de Ingeniería en Informática y desarrolladora backend
        </span>{' '}
        con Java y Spring Boot. Orientada al aprendizaje continuo y al
        desarrollo de soluciones eficientes, con interés en seguir
        creciendo profesionalmente.
      </p>

      <a
        href="/cv-maria-almendras.pdf"
        download
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand lg:text-base"
      >
        Descargar CV ↓
      </a>
    </section>
  )
}

export default Hero
