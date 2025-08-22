import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpenCheck, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';


const projects = [
  {
    slug: "mojipachi",
    title: "MojiPachi",
    description: "An engaging game where students race against the clock to click on moving alphabet tiles in order.",
  },
  {
    slug: "kuizu",
    title: "Kuizu",
    description: "A dynamic, Kahoot-style quiz app that turns classroom reviews into exciting competitions.",
  },
  {
    slug: "eigo-sensei",
    title: "EigoSensei",
    description: "An AI-powered chatbot where students practice English conversation in a gamified environment.",
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


const philosophyPoints = [
    {
        icon: Lightbulb,
        title: "Innovative Learning",
        description: "I leverage technology to build immersive educational worlds, transforming lessons into memorable adventures."
    },
    {
        icon: Target,
        title: "Data-Driven",
        description: "With a background in analytics, I create learning experiences that are engaging and measurably effective."
    },
    {
        icon: BookOpenCheck,
        title: "Active & Joyful",
        description: "My classroom, whether physical or digital, is a space for exploration, discovery, and a lifelong love for learning."
    }
]

export default function Home() {
  return (
    <div className="flex flex-col animate-fade-in">
      <section className="container grid lg:grid-cols-2 gap-12 items-center py-12 md:py-24 lg:py-32">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
            Abdul Gazi
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold font-headline">
            English Teacher & Digital Learning Innovator
          </p>
          <p className="max-w-prose text-muted-foreground md:text-lg">
            I’m an English teacher with a background in Business and Analytics. I specialize in combining education with technology by creating apps, games, and digital assets that make learning interactive and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg">
              <Link href="/resume">View Resume</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">My Teaching Philosophy</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    I believe that learning should be an active, interactive, and joyful process. My goal is to spark curiosity and foster a lifelong passion for learning through technology.
                 </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
                {philosophyPoints.map(({icon: Icon, title, description}) => (
                    <Card key={title} className="text-center p-6">
                        <div className="flex justify-center mb-4">
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <Icon className="w-6 h-6" />
                            </span>
                        </div>
                        <h3 className="text-xl font-headline font-semibold mb-2">{title}</h3>
                        <p className="text-muted-foreground text-sm">{description}</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">Featured Projects</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Here's a glimpse of the tools I've built to make education more accessible and effective.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
                ))}
            </div>

            <div className="text-center mt-12">
                 <Button asChild size="lg" variant="secondary">
                    <Link href="/projects">See All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
