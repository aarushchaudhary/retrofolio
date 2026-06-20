import { useState } from "react";
import { characterBio, skillsTree, experienceTimeline, otherSkills } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/8bit/card";


import Timeline1, { type TimelineStep } from "@/components/ui/8bit/blocks/timeline1";
import GameFeatures1, { type Skill } from "@/components/ui/8bit/blocks/game-features1";

export default function Stats() {
  const [showOtherSkills, setShowOtherSkills] = useState(false);

  const birthDate = new Date("2006-02-14");
  const today = new Date();
  let currentLevel = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    currentLevel--;
  }

  const timelineSteps: TimelineStep[] = experienceTimeline.map((exp, idx) => ({
    icon: `0${idx + 1}`,
    title: exp.role,
    badge: exp.duration,
    description: `@ ${exp.company} — ${exp.responsibilities.join(" ")}`,
  }));

  const gameSkills: Skill[] = skillsTree.map((skill) => ({
    title: skill.skillName,
    description: `Category: ${skill.category}`,
    level: Math.round(skill.levelPercentage / 10),
    maxLevel: 10,
    unlocked: true,
  }));

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-16 pb-12 px-4 md:px-0">
      {/* PAGE HEADER */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-primary drop-shadow-[6px_6px_0_theme('colors.foreground')]">
          Player Profile
        </h1>
      </div>

      {/* PLAYER PROFILE CARD */}
      <Card className="shadow-[8px_8px_0_theme('colors.foreground')] border-4 border-foreground hover:translate-y-[-2px] transition-transform">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Image */}
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-secondary border-4 border-foreground shadow-[4px_4px_0_theme('colors.foreground')] flex items-center justify-center relative overflow-hidden">
            <img 
              src="/aarush.jpg" 
              alt="Aarush" 
              className="w-full h-full object-cover scale-150 saturate-50 contrast-125" 
            />
            {/* Scanline effect on avatar */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.1)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none" />
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <div className="flex flex-wrap items-end gap-4 mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase drop-shadow-sm">
                  {characterBio.characterClass}
                </h2>
                <span className="text-lg md:text-xl font-bold bg-foreground text-background px-3 py-1 uppercase shadow-[2px_2px_0_theme('colors.primary.DEFAULT')]">
                  LVL: {currentLevel}
                </span>
              </div>
              <div className="w-full h-1 bg-foreground/20 mt-4 mb-4" />
            </div>
            
            <p className="text-sm md:text-base text-card-foreground leading-relaxed whitespace-pre-line">
              {characterBio.introduction}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-8 w-full items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
          <GameFeatures1 title="Skill Tree" description="Backend & Systems Architecture" skills={gameSkills} />
          <Timeline1 title="Levels Cleared" description="Experience Timeline" steps={timelineSteps} />
        </div>

        <button 
          onClick={() => setShowOtherSkills(true)}
          className="retro bg-secondary text-secondary-foreground px-6 py-3 border-4 border-foreground shadow-[4px_4px_0_theme('colors.foreground')] hover:translate-y-1 hover:shadow-[2px_2px_0_theme('colors.foreground')] transition-all font-bold uppercase text-sm mt-4"
        >
          View Excess Skills
        </button>
      </div>

      {showOtherSkills && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-card w-full max-w-lg border-4 border-foreground shadow-[8px_8px_0_theme('colors.primary.DEFAULT')] p-6 relative max-h-[80vh] overflow-y-auto">
            <button 
              onClick={() => setShowOtherSkills(false)}
              className="absolute top-2 right-4 text-3xl font-bold text-foreground hover:text-primary transition-colors"
            >
              &times;
            </button>
            <h3 className="retro text-2xl font-bold text-primary mb-6 uppercase border-b-4 border-dashed border-foreground/30 pb-2">
              Other Skills
            </h3>
            <ul className="space-y-4 font-mono text-sm sm:text-base text-card-foreground">
              {otherSkills.map(skill => (
                <li key={skill} className="flex gap-3">
                  <span className="text-primary shrink-0">▶</span>
                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
