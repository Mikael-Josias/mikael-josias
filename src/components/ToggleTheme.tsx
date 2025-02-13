import { Eclipse, Sun } from "lucide-react"
import { useTheme } from "../contexts/ThemeProvider"

function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} className="cursor-pointer">
      {theme === "dark" ?
        <Sun size={24} color="white" /> :
        <Eclipse size={24} color="#2e2e2e" />
      }
    </button>
  )
}

export default ToggleTheme