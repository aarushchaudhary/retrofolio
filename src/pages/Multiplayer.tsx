import Feature1, { type FeatureItem } from "@/components/ui/8bit/blocks/feature1";

const socialLinks: FeatureItem[] = [
  {
    icon: "🐙",
    title: "GitHub",
    description: "Check out my latest open source contributions and repositories.",
    href: "https://github.com/aarushchaudhary/",
  },
  {
    icon: "🎓",
    title: "ORCID",
    description: "View my academic publications and research records.",
    href: "https://orcid.org/0009-0001-8850-6975",
    badge: "RESEARCH",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    description: "Connect with me for professional opportunities and networking.",
    href: "https://www.linkedin.com/in/aarushchaudhary/",
  },
  {
    icon: "💻",
    title: "StackOverflow",
    description: "See my answers, questions, and community interactions.",
    href: "https://stackoverflow.com/users/31220628/aarush-chaudhary",
  },
  {
    icon: "✉️",
    title: "Email",
    description: "Send me a direct transmission right to my inbox.",
    href: "mailto:AARUSH.CHAUDHARY48@nmims.in",
    badge: "DIRECT COMMS",
  },
  {
    icon: "🔬",
    title: "IEEE Collabratec",
    description: "Follow my activity in the global engineering community.",
    href: "#",
  },
];

export default function Multiplayer() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center pb-12">
      {/* PAGE HEADER */}
      <div className="text-center mb-4 space-y-6 mt-8">
        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-widest text-primary drop-shadow-[4px_4px_0_theme('colors.foreground')] md:drop-shadow-[6px_6px_0_theme('colors.foreground')]">
          Multiplayer Mode
        </h1>
      </div>

      {/* SOCIAL NETWORK GRID VIA FEATURE1 BLOCK */}
      <Feature1 
        title="📡 SEND TRANSMISSION" 
        description="" 
        items={socialLinks} 
        columns={3}
      />
    </div>
  );
}
