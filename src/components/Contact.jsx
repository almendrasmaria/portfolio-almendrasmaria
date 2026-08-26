import { useState } from 'react'
import { FiCheck, FiSend } from 'react-icons/fi'

const FORM_ENDPOINT = 'https://formspree.io/f/mjyvbbnv'

const FIELD_LABEL_CLASS =
  'text-xs font-medium uppercase tracking-widest text-neutral-400'
const FIELD_CLASS =
  'mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none backdrop-blur-sm transition-colors focus:border-brand'

function Contact() {
  const [status, setStatus] = useState('idle')

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
      className="mx-auto max-w-[814px] scroll-mt-20 px-6 py-16"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400">
        Contacto
      </h2>

      <p className="mt-4 text-neutral-300 lg:text-lg">
        ¿Tenés un proyecto en mente o una posición donde pueda encajar?
        Escribime, con gusto lo charlamos.
      </p>

      {status === 'success' ? (
        <div className="mt-8 rounded-lg border border-brand/30 bg-brand/10 px-5 py-4">
          <p className="flex items-center gap-2 font-medium text-white">
            <FiCheck className="h-5 w-5 text-brand" />
            ¡Gracias! Tu mensaje fue enviado.
          </p>
          <p className="mt-1 text-sm text-neutral-300">
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
              placeholder="¿En qué puedo ayudarte?"
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
    </section>
  )
}

export default Contact
