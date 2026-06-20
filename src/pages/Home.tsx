import { playerStats } from "@/data/portfolio";
import Hero2 from "@/components/ui/8bit/blocks/hero2";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
      <Hero2
        title={playerStats.name}
        subtitle={playerStats.title}
        description={playerStats.bio}
        actions={[
          { label: "Press Start", href: "/quests", variant: "default" },
        ]}
      />
    </div>
  );
}
