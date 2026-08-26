function Footer() {
  return (
    <footer className="mx-auto max-w-[814px] border-t border-white/10 px-6 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-neutral-400">
        <p>Maria Almendras © {new Date().getFullYear()}</p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </footer>
  )
}

export default Footer
