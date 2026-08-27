import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

function ThemeToggle() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem('theme') === 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  return (
    <button
      type="button"
      onClick={() => setIsLight((prev) => !prev)}
      aria-label={isLight ? 'Activar modo oscuro' : 'Activar modo claro'}
      className="fixed bottom-6 right-6 z-50 hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-white shadow-lg shadow-black/20 backdrop-blur transition-colors hover:border-brand/40 light:border-black/10 light:bg-white/80 light:text-neutral-900 lg:flex"
    >
      {isLight ? <FiMoon className="h-5 w-5" /> : <FiSun className="h-5 w-5" />}
    </button>
  )
}

export default ThemeToggle
