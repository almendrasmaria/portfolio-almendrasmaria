import { FiSend } from 'react-icons/fi'

const FIELD_LABEL_CLASS =
  'text-xs font-medium uppercase tracking-widest text-neutral-400'
const FIELD_CLASS =
  'mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none backdrop-blur-sm transition-colors focus:border-brand'

function Contact() {
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

      <form
        action="https://formspree.io/f/TU_FORM_ID"
        method="POST"
        className="mt-8"
      >
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

        <button
          type="submit"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Enviar
          <FiSend className="h-4 w-4" />
        </button>
      </form>
    </section>
  )
}

export default Contact
