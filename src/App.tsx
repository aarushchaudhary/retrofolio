import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { Navigation } from "@/components/layout/Navigation"

import Home from "@/pages/Home"
import Quests from "@/pages/Quests"
import Stats from "@/pages/Stats"
import Trophies from "@/pages/Trophies"
import Multiplayer from "@/pages/Multiplayer"
import NotFound3 from "@/components/ui/8bit/blocks/not-found3"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground font-mono flex flex-col">
          <header className="relative z-50 flex justify-between items-center border-b border-border p-4 bg-background">
            <Navigation />
            <ThemeToggle />
          </header>
          <main className="p-8 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quests" element={<Quests />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/trophies" element={<Trophies />} />
              <Route path="/multiplayer" element={<Multiplayer />} />
              <Route path="*" element={<NotFound3 />} />
            </Routes>
          </main>
          <footer className="p-6 border-t-4 border-foreground/20 text-center bg-secondary/10">
            <p className="retro text-muted-foreground uppercase text-xs md:text-sm tracking-widest font-bold">
              &copy; 2026 Aarush Chaudhary
            </p>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App