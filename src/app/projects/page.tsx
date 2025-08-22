import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Projects',
};

const projects = [
  {
    slug: "mojipachi",
    title: "MojiPachi",
    description: "An engaging game where students race against the clock to click on moving alphabet tiles in order. With adjustable difficulties like time limits and tile speed, it boosted letter recognition skills by 40% in pilot classrooms.",
    upcoming: false,
  },
  {
    slug: "kuizu",
    title: "Kuizu",
    description: "A dynamic, Kahoot-style quiz app that turns classroom reviews into exciting competitions. This tool increased student participation in review sessions by over 60%.",
    upcoming: false,
  },
  {
    slug: "eigo-sensei",
    title: "EigoSensei",
    description: "An AI-powered chatbot where students practice English via text or voice. It uses an RPG-style leveling system (XP and gold) that resulted in a 300% increase in daily practice streaks among users.",
    upcoming: false,
  },
  {
    slug: "eigopark",
    title: "EigoPark",
    description: "A Minecraft world where students complete quests and adventures to learn English in an immersive environment.",
    upcoming: true,
  }
];

const MojiPachiMockup = () => (
    <div className="bg-blue-100 p-4 rounded-lg h-full flex flex-col justify-between aspect-video">
      <div className="flex justify-between items-center text-blue-800">
        <span className="font-bold">Score: 1200</span>
        <span className="font-bold">Time: 45s</span>
      </div>
      <div className="grid grid-cols-5 gap-2 flex-grow items-center">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, 10).split('').map((char, i) => (
          <div
            key={char}
            className={cn(
              "w-10 h-10 rounded-md flex items-center justify-center font-bold text-white shadow-md",
              i === 0 && "bg-green-500",
              i > 0 && "bg-blue-500",
              "animate-pulse"
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
);

const KuizuMockup = () => (
    <div className="bg-purple-100 p-4 rounded-lg h-full flex flex-col aspect-video">
        <div className="text-center font-bold text-lg text-purple-800 mb-4">What is the capital of Japan?</div>
        <div className="grid grid-cols-2 gap-3 flex-grow">
            <div className="bg-red-500 text-white rounded-md flex items-center justify-center p-2">Kyoto</div>
            <div className="bg-blue-500 text-white rounded-md flex items-center justify-center p-2">Tokyo</div>
            <div className="bg-yellow-500 text-white rounded-md flex items-center justify-center p-2">Osaka</div>
            <div className="bg-green-500 text-white rounded-md flex items-center justify-center p-2">Hiroshima</div>
        </div>
    </div>
);

const ChatbotMockup = () => (
    <div className="bg-gray-800 p-4 rounded-lg h-full flex flex-col text-sm aspect-video">
      <div className="flex-grow space-y-3">
        <div className="p-2 rounded-lg bg-gray-700 text-white w-3/4">Hello! What would you like to talk about today?</div>
        <div className="p-2 rounded-lg bg-blue-500 text-white w-3/4 ml-auto text-right">Tell me about space!</div>
      </div>
      <div className="flex gap-2 mt-4">
        <input type="text" placeholder="Type your message..." className="flex-grow bg-gray-700 rounded-full px-4 py-2 text-white text-xs" />
        <button className="bg-blue-500 rounded-full p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
        </button>
      </div>
    </div>
);

const MinecraftIcon = () => (
    <div className="w-16 h-16 bg-[#a0744c] border-2 border-[#593d29] rounded-sm relative">
      <div className="absolute top-0 left-0 w-full h-4 bg-[#76b649] border-b-2 border-[#593d29]"></div>
    </div>
);

const EigoParkMockup = () => (
  <div className="w-full h-full bg-muted/50 aspect-video flex flex-col items-center justify-center p-4 rounded-lg text-center">
    <MinecraftIcon />
    <p className="mt-4 text-2xl font-bold tracking-widest text-foreground/80">UPCOMING</p>
  </div>
);

const ProjectMockup = ({ slug }: { slug: string }) => {
    return (
      <div className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 border rounded-lg overflow-hidden">
        {slug === 'mojipachi' && <MojiPachiMockup />}
        {slug === 'kuizu' && <KuizuMockup />}
        {slug === 'eigo-sensei' && <ChatbotMockup />}
        {slug === 'eigopark' && <EigoParkMockup />}
      </div>
    );
};


const ProjectCard = ({ title, description, slug, upcoming }: (typeof projects[0])) => {
  const CardWrapper = upcoming ? 'div' : Link;
  const cardProps = upcoming ? {} : { href: `/projects/${slug}` };

  return (
    <CardWrapper {...cardProps} className={cn("block h-full", upcoming ? 'cursor-default' : '')}>
      <Card className={cn("overflow-hidden group transition-all duration-300 h-full flex flex-col relative", upcoming ? "opacity-70" : "hover:shadow-xl hover:-translate-y-1")}>
        <div className="overflow-hidden aspect-video bg-muted/30">
          <ProjectMockup slug={slug} />
        </div>
        <CardHeader>
          <CardTitle className="font-headline">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-20 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">My Projects</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A selection of apps, games, and digital tools I've created to make learning more engaging.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
