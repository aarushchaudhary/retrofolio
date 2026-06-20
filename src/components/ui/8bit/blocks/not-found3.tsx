import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface NotFound3Props {
  badge?: string;
  className?: string;
  cta?: string;
  description?: string;
  href?: string;
  title?: string;
}

export default function NotFound3({
  title = "This page should have stayed buried",
  description = "Looks like this route crawled out of the crypt and disappeared again.",
  badge = "CURSED ROUTE",
  cta = "Return Home",
  href = "/",
  className,
}: NotFound3Props) {
  return (
    <div
      className={cn(
        "retro flex flex-col items-center justify-center w-full min-h-[70vh] gap-6 bg-background px-4 py-16 text-center md:py-24",
        className,
      )}
    >
      {badge && (
        <div className="flex justify-center">
          <Badge variant="secondary" className="rounded-none border-2 border-foreground bg-secondary text-secondary-foreground font-mono text-sm md:text-base uppercase shadow-[2px_2px_0_theme('colors.primary.DEFAULT')]">
            {badge}
          </Badge>
        </div>
      )}

      <div className="retro font-bold text-7xl tracking-tight sm:text-9xl text-primary drop-shadow-[6px_6px_0_theme('colors.foreground')]">
        404
      </div>

      <div className="flex justify-center my-4">
        <img 
          src="/404.webp" 
          alt="404 Image" 
          className="pixelated object-contain max-w-[200px] md:max-w-[250px]" 
        />
      </div>

      <h1 className="retro font-bold text-xl tracking-tight sm:text-3xl uppercase mt-4">
        {title}
      </h1>

      <p className="retro text-muted-foreground text-sm md:text-base max-w-lg mb-4">{description}</p>

      <div className="flex justify-center">
        <Link to={href} className="inline-block">
          <Button font="retro" size="lg" className="uppercase tracking-widest shadow-[4px_4px_0_theme('colors.foreground')] hover:translate-y-[2px] hover:shadow-[2px_2px_0_theme('colors.foreground')] transition-all">
            {cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}
