import ToggleTheme from "./ToggleTheme"

function Header() {


  return (
    <header className="w-full border-b-[1px] border-black/25 dark:border-white/25 py-6 bg-wheat-600 dark:bg-transparent md:bg-transparent">
      <div className="flex justify-between items-center mx-auto max-w-3xl px-10 md:px-0">
        <h1 className="font-amaranth text-2xl text-cement-600 dark:text-white select-none pointer-events-none md:text-3xl">Mikael Josias</h1>
        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header