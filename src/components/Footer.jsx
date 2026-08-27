import useInView from '../hooks/useInView'

function Footer() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <footer
      ref={ref}
      className="mx-auto max-w-4xl border-t border-white/10 px-6 py-6 opacity-0 transition-opacity duration-700 ease-out light:border-black/10"
      style={{ opacity: inView ? 1 : 0 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-neutral-400 light:text-neutral-500">
        <p>Maria Almendras © {new Date().getFullYear()}</p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </footer>
  )
}

export default Footer
