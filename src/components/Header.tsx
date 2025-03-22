import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <header className="w-full md:w-[720px] flex flex-row items-center justify-between p-6 md:px-0 border-b-1 border-b-black/20 dark:border-b-white/20 transition-all">
      <h1 className="font-amaranth text-2xl md:text-3xl text-cement-600 dark:text-white transition-all select-none pointer-events-none">
        Mikael Josias
      </h1>
      <ToggleTheme />
    </header>
  );
}

export default Header;
