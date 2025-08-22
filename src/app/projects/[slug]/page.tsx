import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GitMerge, Info, Plus, Wrench, Sparkles, Trophy, Star, User, Send, Construction } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { MojiPachiGame } from '@/components/mojipachi-game';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const BotIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );

const MojiPachiDifficultyScreen = () => (
    <div className="bg-gray-800 p-6 rounded-lg h-full flex flex-col justify-center items-center text-white aspect-video">
        <h2 className="text-2xl font-bold mb-6">Select Difficulty</h2>
        <div className="space-y-4">
            <button className="w-48 text-center py-2 bg-blue-500 rounded-lg font-semibold">Easy</button>
            <button className="w-48 text-center py-2 bg-yellow-500 rounded-lg font-semibold">Medium</button>
            <button className="w-48 text-center py-2 bg-red-500 rounded-lg font-semibold">Hard (Feints)</button>
        </div>
    </div>
);

const KuizuMockup1 = () => (
    <div className="bg-purple-100 p-6 rounded-lg h-full flex flex-col aspect-video items-center justify-center">
        <div className="text-center font-bold text-3xl text-purple-800 mb-2">Kuizu</div>
        <p className="text-purple-600 mb-6">Enter the code to join</p>
        <input type="text" defaultValue="A4B2K9" className="w-48 text-center text-2xl font-bold p-3 rounded-lg tracking-widest border-2 border-purple-300" />
        <button className="mt-4 px-8 py-2 bg-purple-600 text-white font-bold rounded-lg">JOIN</button>
    </div>
);

const KuizuMockup2 = () => (
    <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col aspect-video">
        <div className="text-center font-bold text-xl mb-4">What is 2 + 2?</div>
        <div className="grid grid-cols-2 gap-4 flex-grow">
            <div className="bg-red-400 text-white rounded-lg flex items-center justify-center p-4 font-bold text-xl">3</div>
            <div className="bg-blue-400 text-white rounded-lg flex items-center justify-center p-4 font-bold text-xl">4</div>
            <div className="bg-yellow-400 text-white rounded-lg flex items-center justify-center p-4 font-bold text-xl">5</div>
            <div className="bg-green-400 text-white rounded-lg flex items-center justify-center p-4 font-bold text-xl">6</div>
        </div>
    </div>
);

const KuizuMockup3 = () => (
    <div className="bg-indigo-700 text-white p-6 rounded-lg h-full flex flex-col aspect-video items-center justify-center">
        <Trophy className="w-16 h-16 text-yellow-400 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between items-center bg-indigo-600 p-2 rounded-lg">
                <span className="font-semibold">1. Alice</span>
                <span className="font-bold">1250 pts</span>
            </div>
            <div className="flex justify-between items-center bg-indigo-600 p-2 rounded-lg">
                <span className="font-semibold">2. Bob</span>
                <span className="font-bold">1100 pts</span>
            </div>
            <div className="flex justify-between items-center bg-indigo-600 p-2 rounded-lg">
                <span className="font-semibold">3. You</span>
                <span className="font-bold text-yellow-300">980 pts</span>
            </div>
             <div className="flex justify-between items-center bg-indigo-600 p-2 rounded-lg">
                <span className="font-semibold">4. Charlie</span>
                <span className="font-bold">850 pts</span>
            </div>
        </div>
    </div>
);

const KuizuMockup4 = () => (
    <div className="bg-teal-600 text-white p-6 rounded-lg h-full flex flex-col aspect-video items-center justify-center">
        <Star className="w-16 h-16 text-yellow-300 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-lg mb-4">You finished 3rd!</p>
        <div className="w-full max-w-xs space-y-3 text-center bg-teal-700 p-4 rounded-lg">
             <div >
                <p className="text-sm text-teal-200">Final Score</p>
                <p className="text-3xl font-bold text-white">980</p>
            </div>
            <div>
                <p className="text-sm text-teal-200">Correct Answers</p>
                <p className="text-xl font-bold text-white">8 / 10 (80%)</p>
            </div>
        </div>
    </div>
);

const EigoSenseiMockup1 = () => (
    <div className="bg-gray-800 p-4 rounded-lg h-full w-full flex flex-col text-sm aspect-video">
        <div className="flex-grow space-y-4 pr-2 overflow-y-auto">
            <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white"><BotIcon className="w-5 h-5" /></span>
                <div className="p-3 rounded-lg bg-gray-700 text-white rounded-bl-none">
                    <p className="font-bold mb-1">Professor Alex</p>
                    <p>Hello! I'm Professor Alex. I'm here to help you practice English. What is your favorite animal?</p>
                </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
                <div className="p-3 rounded-lg bg-blue-600 text-white rounded-br-none text-right">
                    <p className="font-bold mb-1">You</p>
                    <p>I like dogs!</p>
                </div>
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white"><User size={20} /></span>
            </div>
            <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white"><BotIcon className="w-5 h-5" /></span>
                <div className="p-3 rounded-lg bg-gray-700 text-white rounded-bl-none">
                    <p className="font-bold mb-1">Professor Alex</p>
                    <p>That's great! Dogs are wonderful. Do you have a dog?</p>
                </div>
            </div>
             <div className="flex items-start gap-3 justify-end">
                <div className="p-3 rounded-lg bg-blue-600 text-white rounded-br-none text-right">
                    <p className="font-bold mb-1">You</p>
                    <p>No, I don't. But I want one!</p>
                </div>
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white"><User size={20} /></span>
            </div>
             <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white"><BotIcon className="w-5 h-5" /></span>
                <div className="p-3 rounded-lg bg-gray-700 text-white rounded-bl-none">
                    <p className="font-bold mb-1">Professor Alex</p>
                    <p>I hope you get one soon! They are excellent companions.</p>
                </div>
            </div>
        </div>
        <div className="flex gap-2 mt-4 pt-4 border-t border-gray-700">
            <input type="text" placeholder="Type your message..." className="flex-grow bg-gray-700 rounded-full px-4 py-2 text-white text-base" />
            <button className="bg-blue-600 rounded-full p-3 text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
            </button>
        </div>
    </div>
);

const EigoSenseiMockup2 = () => (
    <div className="bg-gray-800 p-6 rounded-lg h-full flex flex-col text-white aspect-video items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-yellow-400 border-4 border-yellow-300 mb-4 flex items-center justify-center text-gray-800 font-bold text-4xl">
            LVL 5
        </div>
        <h2 className="text-xl font-bold">Gold: 2500</h2>
        <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
            <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: "75%"}}></div>
        </div>
        <p className="text-xs mt-1 text-gray-400">XP: 1500 / 2000</p>
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


const projectData = {
  "mojipachi": {
    title: "MojiPachi",
    longDescription: "MojiPachi is a dynamic educational game designed to sharpen letter recognition skills in a fun, interactive way. Students are challenged to click on alphabet tiles in sequential order as they move across the screen. The game features multiple difficulty levels, allowing for customization of time limits, tile speed, and visual feints to keep students engaged and constantly improving. The core loop is built to be rewarding and replayable, fostering both speed and accuracy.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    mockups: [
      <MojiPachiGame key="1" />,
    ],
    timeline: [
      { version: "v1.5", date: "September 2024", icon: Wrench, details: "Enhanced visual feedback and refined game-end sequence." },
      { version: "v1.4", date: "August 2024", icon: Wrench, details: "Refined UI components and improved performance on mobile devices." },
      { version: "v1.3", date: "July 2024", icon: Sparkles, details: "Added confetti, floating scores, and animations for a more engaging experience." },
      { version: "v1.2", date: "July 2024", icon: Plus, details: "Added 'Help' difficulty and redesigned other levels to show next target." },
      { version: "v1.1", date: "July 2024", icon: Wrench, details: "Implemented difficulty levels, timer, and a complete scoring system." },
      { version: "v1.0", date: "April 2024", icon: GitMerge, details: "Initial release with core gameplay mechanics." },
    ]
  },
  "kuizu": {
    title: "Kuizu",
    longDescription: "Kuizu transforms traditional classroom quizzes into vibrant, competitive events. Inspired by platforms like Kahoot, it allows educators to create custom quizzes that students can join from their devices. The app features real-time leaderboards, scoring streaks, and playful sound effects to boost engagement. Its primary goal is to make review sessions more effective and enjoyable, increasing student participation and knowledge retention.",
    technologies: ["Next.js", "Firebase", "React", "Zustand", "Tailwind CSS"],
    mockups: [
      <KuizuMockup1 key="1" />,
      <KuizuMockup2 key="2" />,
      <KuizuMockup3 key="3" />,
      <KuizuMockup4 key="4" />,
    ],
    timeline: [
        { version: "v1.5", date: "September 2024", icon: Plus, details: "Added a post-quiz review feature for students to check answers." },
        { version: "v1.4", date: "August 2024", icon: Sparkles, details: "Introduced 'streak bonuses' and new sound effects for added excitement." },
        { version: "v1.3", date: "June 2024", icon: Wrench, details: "Added support for image-based questions and answers." },
        { version: "v1.2", date: "May 2024", icon: Plus, details: "Implemented teacher dashboard for tracking student performance." },
        { version: "v1.0", date: "April 2024", icon: GitMerge, details: "Launched with multiple choice question support and real-time lobbies." },
    ]
  },
  "eigo-sensei": {
    title: "EigoSensei",
    longDescription: "This AI-powered chatbot offers a unique and motivating way for students to practice their English skills. It incorporates a role-playing game (RPG) leveling system where students earn experience points (XP) and gold for completing conversations via text or voice. The AI adapts to the student's proficiency level, providing a personalized learning curve. This gamified approach encourages consistent practice and helps build conversational confidence in a low-stakes environment.",
    technologies: ["Genkit AI", "React", "Next.js", "Firebase Auth", "Text-to-Speech"],
    mockups: [
      <EigoSenseiMockup1 key="1" />,
      <EigoSenseiMockup2 key="2" />,
    ],
    timeline: [
        { version: "v1.6", date: "September 2024", icon: Wrench, details: "Replaced interactive demo with polished conceptual mockups." },
        { version: "v1.5", date: "August 2024", icon: Plus, details: "Added new chatbot avatars and expanded the vocabulary of the AI tutor." },
        { version: "v1.4", date: "June 2024", icon: Plus, details: "Integrated voice recognition for spoken practice." },
        { version: "v1.2", date: "May 2024", icon: Wrench, details: "Improved AI conversation flow and added more character customization." },
        { version: "v1.0", date: "April 2024", icon: GitMerge, details: "Initial launch with text-based chat and RPG leveling system." },
    ]
  },
  "eigopark": {
    title: "EigoPark (Upcoming)",
    longDescription: "EigoPark is a conceptual project that aims to create an immersive Minecraft world for English language learning. The vision is to build an adventure map where students can play, complete quests, interact with NPCs, and learn English vocabulary and grammar in a highly contextual and engaging way. The project will focus on creating a safe, collaborative, and fun environment that transforms language practice into a grand adventure.",
    technologies: ["Minecraft: Bedrock Edition", "Behavior Packs", "Resource Packs", "JavaScript"],
    mockups: [
      <EigoParkMockup key="1" />,
    ],
    timeline: [
        { version: "Concept", date: "Future", icon: Construction, details: "Currently in the conceptual and planning phase. Exploring core gameplay loops and educational objectives." },
    ]
  },
};

type ProjectPageParams = {
  params: {
    slug: keyof typeof projectData;
  }
}

export async function generateMetadata({ params }: ProjectPageParams): Promise<Metadata> {
  const project = projectData[params.slug];
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }
  return {
    title: project.title,
    description: project.longDescription,
  };
}

const TimelineItem = ({ icon: Icon, version, date, details }: {icon: React.ElementType, version: string, date: string, details: string}) => (
    <div className="relative pl-10 pb-6 last:pb-0">
      <div className="absolute left-0 top-1">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
          <Icon className="w-4 h-4" />
        </span>
      </div>
      <div className="absolute left-3 top-7 h-full w-px bg-border"></div>
      <p className="font-semibold font-headline text-sm text-foreground">{version} - <span className="font-normal text-muted-foreground">{date}</span></p>
      <p className="text-sm text-muted-foreground mt-1">{details}</p>
    </div>
);


export default function ProjectDetailsPage({ params }: ProjectPageParams) {
  const project = projectData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="container max-w-5xl py-12 md:py-20 animate-fade-in">
        <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
                {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
            </div>
             {params.slug === "mojipachi" && (
                <Alert className="mt-6 max-w-3xl">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Please Note</AlertTitle>
                    <AlertDescription>
                        This is an interactive demonstration of the MojiPachi game, created for Abdul's students. It represents the core gameplay but is not the full product.
                    </AlertDescription>
                </Alert>
            )}
            {params.slug === "kuizu" && (
                <Alert className="mt-6 max-w-3xl">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Please Note</AlertTitle>
                    <AlertDescription>
                        The images shown are conceptual mockups to illustrate the idea of the Kuizu app. They do not represent a final, functional product.
                    </AlertDescription>
                </Alert>
            )}
             {params.slug === "eigo-sensei" && (
                <Alert className="mt-6 max-w-3xl">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Please Note</AlertTitle>
                    <AlertDescription>
                        The images shown are conceptual mockups to illustrate the idea of the EigoSensei app. They do not represent a final, functional product.
                    </AlertDescription>
                </Alert>
            )}
             {params.slug === "eigopark" && (
                <Alert className="mt-6 max-w-3xl">
                    <Construction className="h-4 w-4" />
                    <AlertTitle>Upcoming Project</AlertTitle>
                    <AlertDescription>
                        This is a conceptual project currently in the planning stages. The visuals and features described are illustrative of the project's vision and are subject to change.
                    </AlertDescription>
                </Alert>
            )}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                 <Carousel className="rounded-xl overflow-hidden shadow-lg border">
                    <CarouselContent>
                        {project.mockups.map((mockup, index) => (
                        <CarouselItem key={index} className="p-4 bg-muted/30">
                           {mockup}
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    {project.mockups.length > 1 && (
                      <>
                        <CarouselPrevious />
                        <CarouselNext />
                      </>
                    )}
                </Carousel>
            </div>
            <div className="lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Project Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative">
                            {project.timeline.map((item, index) => (
                                <TimelineItem key={index} {...item} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}

export async function generateStaticParams() {
    return Object.keys(projectData).map((slug) => ({
      slug,
    }));
}
    
