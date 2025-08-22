import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, BarChart, Gamepad2, Laptop } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
};

const interests = [
  { icon: Book, label: 'Teaching & Pedagogy' },
  { icon: BarChart, label: 'Business Analytics' },
  { icon: Gamepad2, label: 'Educational Gaming' },
  { icon: Laptop, label: 'App Development' },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
           <Card className="w-full">
            <CardHeader>
              <CardTitle className="font-headline text-center text-2xl">Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {interests.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">About Me</h1>
          
          <div className="space-y-6 text-muted-foreground md:text-lg leading-relaxed">
            <p>
              My journey into the world of educational technology began at the intersection of two passions: the art of teaching English and the science of business analytics. This unique combination has shaped my approach to education, leading me to create learning experiences that are not only informative but also deeply engaging and data-driven.
            </p>

            <h2 className="font-headline text-3xl font-semibold text-foreground !mt-8">My Teaching Philosophy</h2>
            <p>
              I believe that learning should be an active, interactive, and joyful process. My classroom—whether physical or digital—is a space for exploration and discovery. I leverage technology not just as a tool, but as a medium to build immersive educational worlds. By creating apps, games, and interactive digital assets, I aim to transform traditional lessons into memorable adventures that spark curiosity and foster a lifelong love for learning.
            </p>

            <h2 className="font-headline text-3xl font-semibold text-foreground !mt-8">Building on the Curriculum</h2>
            <p>
              I build my teaching practice on the solid foundation of the MEXT English curriculum, ensuring all core competencies are met. From there, I personalize the learning experience by integrating my own teaching philosophy. This involves weaving in custom digital tools, interactive games, and data-driven insights to elevate the material, making it more resonant, engaging, and effective for my students. It's a blend of proven structure and personalized innovation.
            </p>

            <h2 className="font-headline text-3xl font-semibold text-foreground !mt-8">My Skills & Expertise</h2>
            <p>
              With a formal education in both English teaching and Business & Analytics, I bring a unique skill set to the table. I'm proficient in curriculum design, pedagogical strategies, and student assessment. On the technical side, I develop digital learning tools from concept to deployment, utilizing modern development practices to build robust and user-friendly applications. I'm always exploring new digital tools to find innovative ways to make education more accessible and effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
