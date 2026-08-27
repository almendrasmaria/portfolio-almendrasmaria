function Footer() {
  return (
    <footer className="mx-auto max-w-4xl border-t border-white/10 px-6 py-6 light:border-black/10">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-neutral-400 light:text-neutral-500">
        <p>Maria Almendras © {new Date().getFullYear()}</p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </footer>
  )
}

export default Footer
