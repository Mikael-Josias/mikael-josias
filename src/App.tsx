import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import { ThemeProvider } from "./contexts/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <main className="h-screen flex flex-col items-center justify-start bg-wheat-500 dark:bg-navy-500">
        <Header />
        <HeroSection />
      </main>
    </ThemeProvider>
  )
}

export default App
