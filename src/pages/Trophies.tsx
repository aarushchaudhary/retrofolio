import { useState, useEffect } from "react";
import { trophyRoom } from "@/data/portfolio";
import SocialProof1 from "@/components/ui/8bit/blocks/social-proof1";
import Feature3, { type CarouselFeature } from "@/components/ui/8bit/blocks/feature3";

export default function Trophies() {
  const [publicRepos, setPublicRepos] = useState<string>("30");
  const [totalContributions] = useState<string>("450+");

  useEffect(() => {
    fetch("https://api.github.com/users/aarushchaudhary")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos !== undefined) {
          setPublicRepos(data.public_repos.toString());
        }
      })
      .catch((err) => console.error("Failed to fetch Github stats", err));
  }, []);

  const carouselItems: CarouselFeature[] = trophyRoom.map((trophy) => ({
    icon: "🏆",
    title: trophy.title,
    description: (
      <div className="flex flex-col space-y-3 mt-2 font-mono">
        <span className="text-primary font-bold text-[10px] sm:text-xs">
          ▶ {trophy.event}
        </span>
        <span className="text-muted-foreground">
          ▶ {trophy.date}
        </span>
        <span className="text-muted-foreground">
          ▶ {trophy.location}
        </span>
      </div>
    ),
    badge: trophy.year,
  }));

  const statsData = [
    { value: "2", label: "Hackathon Wins" },
    { value: "2", label: "Competition Wins" },
    { value: publicRepos, label: "Public Repos" },
    { value: totalContributions, label: "Total Contributions" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center pb-12">
      {/* PAGE HEADER */}
      <div className="text-center mb-8 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-primary drop-shadow-[6px_6px_0_theme('colors.foreground')]">
          Trophy Room
        </h1>
      </div>

      <SocialProof1 
        title="" 
        subtitle="" 
        stats={statsData} 
      />

      <Feature3 
        title="" 
        description="" 
        items={carouselItems} 
      />
    </div>
  );
}
