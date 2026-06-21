import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/8bit/navigation-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu font="retro">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/quests">Quests</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/stats">Stats</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/trophies">Trophies</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/multiplayer">Multiplayer</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="retro flex items-center justify-center p-2 border-4 border-foreground bg-secondary text-secondary-foreground shadow-[4px_4px_0_theme('colors.foreground')] hover:translate-y-1 hover:shadow-[2px_2px_0_theme('colors.foreground')] transition-all"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b-4 border-foreground shadow-[0_8px_0_theme('colors.primary.DEFAULT')] p-6 flex flex-col gap-2 z-50 animate-in slide-in-from-top-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="retro text-xl font-bold uppercase text-foreground hover:text-primary transition-colors block py-3 border-b-4 border-dashed border-foreground/20">Home</Link>
            <Link to="/quests" onClick={() => setIsOpen(false)} className="retro text-xl font-bold uppercase text-foreground hover:text-primary transition-colors block py-3 border-b-4 border-dashed border-foreground/20">Quests</Link>
            <Link to="/stats" onClick={() => setIsOpen(false)} className="retro text-xl font-bold uppercase text-foreground hover:text-primary transition-colors block py-3 border-b-4 border-dashed border-foreground/20">Stats</Link>
            <Link to="/trophies" onClick={() => setIsOpen(false)} className="retro text-xl font-bold uppercase text-foreground hover:text-primary transition-colors block py-3 border-b-4 border-dashed border-foreground/20">Trophies</Link>
            <Link to="/multiplayer" onClick={() => setIsOpen(false)} className="retro text-xl font-bold uppercase text-foreground hover:text-primary transition-colors block py-3 border-b-4 border-dashed border-foreground/20">Multiplayer</Link>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="retro text-xl font-bold uppercase text-foreground hover:text-primary transition-colors block py-3">Resume</a>
          </div>
        )}
      </div>
    </>
  );
}
