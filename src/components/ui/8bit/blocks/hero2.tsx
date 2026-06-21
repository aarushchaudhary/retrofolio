import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface HeroBadge {
  label: string;
  variant?: "default" | "destructive" | "outline" | "secondary";
}

interface HeroAction {
  href?: string;
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "ghost" | "outline" | "secondary";
}

interface Hero2Props {
  actions?: HeroAction[];
  badges?: HeroBadge[];
  children?: ReactNode;
  className?: string;
  description?: string;
  subtitle?: string;
  title: string;
  visual?: ReactNode;
}

export default function Hero2({
  title,
  subtitle,
  description,
  actions = [],
  badges = [],
  className,
  children,
  visual,
}: Hero2Props) {
  const visualContent = visual ? (
    visual
  ) : (
    <div className="w-full max-w-sm aspect-square border-4 border-foreground shadow-[4px_4px_0_theme('colors.primary.DEFAULT')] md:shadow-[8px_8px_0_theme('colors.primary.DEFAULT')] overflow-hidden bg-secondary relative mx-auto md:mx-0">
      <img src="/aarush.jpg" alt="Aarush" className="w-full h-full object-cover scale-[1.15]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10 opacity-30"></div>
    </div>
  );

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden px-4 py-16 md:py-24",
        className,
      )}
    >
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:gap-12">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Badges */}
          {badges.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center md:justify-start gap-4">
              {badges.map((badge) => (
                <Badge key={badge.label} variant={badge.variant}>
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="retro mb-4 font-bold text-4xl tracking-tight md:text-5xl text-primary drop-shadow-[4px_4px_0_theme('colors.foreground')]">
            {title}
          </h1>

          {/* Visual side for Mobile (Below Title) */}
          <div className="flex md:hidden justify-center mb-6 w-full mt-4">
            {visualContent}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p className="retro mb-4 text-secondary-foreground font-bold text-xs md:text-sm uppercase bg-secondary inline-block px-3 py-1 border-2 border-foreground shadow-[2px_2px_0_theme('colors.foreground')] mx-auto md:mx-0">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="mb-8 text-foreground text-sm leading-relaxed max-w-lg mt-6 mx-auto md:mx-0">
              {description}
            </p>
          )}

          {/* Actions */}
          {actions.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              {actions.map((action) =>
                action.href ? (
                  <Button asChild key={action.label} variant={action.variant} className="border-2 border-foreground shadow-[4px_4px_0_theme('colors.foreground')] hover:-translate-y-1 hover:shadow-[6px_6px_0_theme('colors.foreground')] transition-all uppercase">
                    <Link to={action.href}>{action.label}</Link>
                  </Button>
                ) : (
                  <Button
                    key={action.label}
                    onClick={action.onClick}
                    variant={action.variant}
                    className="border-2 border-foreground shadow-[4px_4px_0_theme('colors.foreground')] hover:-translate-y-1 hover:shadow-[6px_6px_0_theme('colors.foreground')] transition-all uppercase"
                  >
                    {action.label}
                  </Button>
                ),
              )}
            </div>
          )}

          {children}
        </div>

        {/* Visual side for Desktop */}
        <div className="hidden md:flex flex-1 justify-end">
          {visualContent}
        </div>
      </div>
    </section>
  );
}
