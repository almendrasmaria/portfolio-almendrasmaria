function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-2xl px-6 pb-16 pt-24">
      <div className="h-32 w-32 overflow-hidden rounded-full bg-neutral-950">
        <img
          src="/avatar.jpeg"
          alt="Maria Almendras"
          className="h-full w-full scale-125 object-cover object-[50%_30%]"
        />
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900">
        Maria Almendras.
      </h1>
      <p className="text-3xl font-semibold tracking-tight text-brand">
        Desarrolladora Full Stack.
      </p>

      <p className="mt-4 text-neutral-500">
        Soy curiosa por naturaleza y me gusta entender cómo funcionan las
        cosas para después construirlas. Disfruto involucrarme en todo el
        proceso: desde pensar la lógica y darle forma al backend, hasta
        ver cómo una idea se convierte en una solución real.
      </p>
      <p className="mt-4 text-neutral-500">
        Me motiva aprender, crear y asumir nuevos desafíos, buscando
        siempre entender el problema y encontrar una forma clara y
        efectiva de resolverlo.
      </p>

      <a
        href="/cv-maria-almendras.pdf"
        download
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
      >
        Descargar CV ↓
      </a>
    </section>
  )
}

export default Hero
