import { questLog, type QuestStatus } from "@/data/portfolio";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Badge } from "@/components/ui/badge";

const getStatusColor = (status: QuestStatus) => {
  switch (status) {
    case "COMPLETED":
      return "text-green-500 dark:text-green-400";
    case "IN_PROGRESS":
      return "text-yellow-600 dark:text-yellow-400";
    case "PENDING_DEPLOYMENT":
      return "text-blue-600 dark:text-blue-400";
    case "FAILED":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
};

export default function Quests() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center pb-12">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-primary drop-shadow-[6px_6px_0_theme('colors.foreground')]">
          Quest Log
        </h1>
        <div className="inline-block bg-secondary px-6 py-2 border-4 border-foreground shadow-[4px_4px_0_theme('colors.foreground')]">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-secondary-foreground">
            Missions Available: [{questLog.length}]
          </h2>
        </div>
      </div>

      {/* THE QUEST BOARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {questLog.map((quest) => (
          <Card 
            key={quest.id} 
            className="flex flex-col shadow-[8px_8px_0_theme('colors.foreground')] hover:-translate-y-2 transition-transform duration-200"
          >
            <CardHeader className="pb-4 border-b-4 border-foreground/20">
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-2xl text-primary uppercase leading-tight drop-shadow-sm">
                  {quest.title}
                </CardTitle>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                <Badge 
                  variant="secondary" 
                  className="rounded-none border-2 border-foreground bg-secondary text-secondary-foreground font-mono text-xs uppercase shadow-[2px_2px_0_theme('colors.foreground')]"
                >
                  {quest.difficulty}
                </Badge>
                <span className={`text-sm font-bold uppercase tracking-widest bg-background px-2 py-1 border-2 border-foreground shadow-[2px_2px_0_theme('colors.foreground')] ${getStatusColor(quest.status)}`}>
                  {quest.status.replace("_", " ")}
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col pt-6 space-y-6">
              <p className="text-sm md:text-base leading-relaxed text-card-foreground flex-1">
                {quest.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {quest.techStack.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="rounded-none border-2 border-foreground bg-background text-foreground font-mono text-xs uppercase shadow-[2px_2px_0_theme('colors.foreground')]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="pt-6 border-t-4 border-foreground/20 flex gap-4">

              <Button 
                font="retro" 
                className="flex-1 uppercase text-sm border-2 border-foreground bg-white text-black hover:bg-gray-200 hover:text-black shadow-[4px_4px_0_theme('colors.foreground')]" 
                asChild
              >
                <a href={quest.githubLink} target="_blank" rel="noopener noreferrer">
                  [ REPOSITORY ]
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
    </div>
  );
}
