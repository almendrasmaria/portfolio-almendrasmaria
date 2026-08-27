import { useState } from 'react'
import { FiCheck, FiSend } from 'react-icons/fi'
import useInView from '../hooks/useInView'

const FORM_ENDPOINT = 'https://formspree.io/f/mjyvbbnv'

const FIELD_LABEL_CLASS =
  'text-xs font-medium uppercase tracking-widest text-neutral-400 light:text-neutral-500'
const FIELD_CLASS =
  'mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none backdrop-blur-sm transition-colors focus:border-brand light:border-black/10 light:bg-black/[0.03] light:text-neutral-900 light:placeholder-neutral-400'

function Contact() {
  const [status, setStatus] = useState('idle')
  const [ref, inView] = useInView({ threshold: 0.2 })

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const form = event.target
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contacto"
      className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16"
    >
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap text-sm font-medium uppercase tracking-widest text-neutral-400 light:text-neutral-500">
          Contacto
        </h2>
        <span className="h-px flex-1 bg-white/10 light:bg-black/10" />
      </div>

      <p className="mt-4 text-neutral-300 lg:text-lg light:text-neutral-600">
        ¿Tenés un proyecto en mente o una posición donde pueda encajar?
        Escribime, con gusto lo charlamos.
      </p>

      <div
        ref={ref}
        className="opacity-0 transition-all ease-out"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transitionDuration: '600ms',
        }}
      >
      {status === 'success' ? (
        <div className="mt-8 rounded-lg border border-brand/30 bg-brand/10 px-5 py-4">
          <p className="flex items-center gap-2 font-medium text-white light:text-neutral-900">
            <FiCheck className="h-5 w-5 text-brand" />
            ¡Gracias! Tu mensaje fue enviado.
          </p>
          <p className="mt-1 text-sm text-neutral-300 light:text-neutral-600">
            Te voy a responder apenas lo lea.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={FIELD_LABEL_CLASS}>
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                required
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label htmlFor="email" className={FIELD_LABEL_CLASS}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className={FIELD_CLASS}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className={FIELD_LABEL_CLASS}>
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Dejá tu consulta acá..."
              required
              className={`${FIELD_CLASS} resize-none`}
            />
          </div>

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-400">
              Algo salió mal. Probá de nuevo en un momento.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
            <FiSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>
      )}
      </div>
    </section>
  )
}

export default Contact
