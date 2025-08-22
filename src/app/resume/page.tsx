"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Briefcase, GraduationCap, Globe, Phone, Mail, Award } from 'lucide-react';
import Link from 'next/link';

// Note: Metadata is not supported in Client Components.
// export const metadata: Metadata = {
//   title: 'Resume',
// };

const education = [
    {
        institution: "RMIT University",
        degree: "Master of Analytics",
        period: "2018 - 2020",
        description: "Focused on data analysis, statistical modeling, and machine learning techniques to solve complex business problems. Initiated several projects with the university's incubator hub, all centered on the digital transformation of education."
    },
    {
        institution: "Pune University",
        degree: "Bachelor of Business Administration, Computer Applications",
        period: "2015 - 2018",
        description: "Specialized in the intersection of business management and technology, gaining a strong foundation in software development and IT strategy. Notably, won a national-level hackathon in 2017 for creating 'Shakti,' a women's safety application."
    },
];

const experience = [
  {
    company: "Interac",
    role: "Assistant Language Teacher",
    period: "2024 - Present",
    location: "Yokohama, Japan",
    description: [
        "Developed and delivered dynamic English lesson plans for a diverse range of student ages and abilities.",
        "Fostered an inclusive and engaging classroom environment by integrating interactive digital tools and gamified learning experiences.",
        "Boosted student participation and confidence by making learning fun, relevant, and effective.",
        "Adapted communication styles to bridge cultural and linguistic gaps, building strong rapport with students and staff."
    ]
  },
  {
    company: "National Bank of Australia",
    role: "Associate Business Analyst",
    period: "2022 - 2024",
    location: "Melbourne, Australia",
    description: [
        "Supported the analytics team by gathering requirements and analyzing complex data sets to identify key business trends.",
        "Created insightful reports and dashboards to translate data into actionable strategies.",
        "Acted as a key liaison between technical teams and business stakeholders to drive data-informed decision-making.",
        "Effectively presented complex analytical findings to non-technical stakeholders, fostering clear understanding and alignment."
    ]
  },
   {
    company: "DoorDash",
    role: "Inbound Consultant",
    period: "2021 - 2022",
    location: "Melbourne, Australia",
    description: [
        "Managed the end-to-end onboarding process for new restaurant partners, ensuring a seamless and positive experience.",
        "Provided expert guidance on menu optimization and promotional strategies to maximize partner success on the platform.",
        "Consistently exceeded targets for partner activation and satisfaction through proactive communication and support.",
        "Built and maintained strong relationships with partners, acting as a trusted advisor to help their businesses thrive."
    ]
  },
];

const teachingSkills = ["Curriculum Design", "Student Assessment", "Classroom Management", "TESOL", "Differentiated Instruction", "Gamification", "Lesson Planning", "Student Engagement", "Educational Technology"];
const technicalSkills = ["React", "Next.js", "TypeScript", "Game Development (Unity)", "UI/UX Design", "SQL", "Python", "Firebase", "Genkit AI", "Tailwind CSS"];

const certifications = [
    {
        title: "IELTS Certificate (8.0/9.0)",
        description: [
            "Achieved an overall band score of 8.0, demonstrating a high level of English proficiency suitable for academic and professional environments.",
            "Scored consistently high across all four modules: Listening, Reading, Writing, and Speaking.",
            "This result reflects dedicated preparation and a strong, versatile command of the English language."
        ]
    }
]

const TimelineItem = ({ icon: Icon, title, subtitle, period, location, description }: {icon: React.ElementType, title: string, subtitle?: string, period?: string, location?: string, description: string | string[]}) => (
  <div className="relative pl-12 pb-8 last:pb-0 break-inside-avoid">
    <div className="absolute left-0 top-1">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
        <Icon className="w-5 h-5" />
      </span>
    </div>
    <div className="absolute left-[15px] top-8 h-full w-px bg-border print:hidden"></div>
    <p className="font-semibold text-lg font-headline text-foreground">{title}</p>
    {subtitle && location && (
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>{subtitle}</span>
            <span className="text-xs">({location})</span>
        </div>
    )}
    {period && <p className="text-xs text-muted-foreground mt-1 mb-3">{period}</p>}
    {Array.isArray(description) ? (
      <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mt-2">
        {description.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
    ) : (
      <p className="text-sm text-muted-foreground">{description}</p>
    )}
  </div>
);

const EducationTimelineItem = ({ icon: Icon, title, subtitle, period, description }: {icon: React.ElementType, title: string, subtitle: string, period: string, description: string}) => (
  <div className="relative pl-12 pb-8 last:pb-0 break-inside-avoid">
    <div className="absolute left-0 top-1">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
        <Icon className="w-5 h-5" />
      </span>
    </div>
    <div className="absolute left-[15px] top-8 h-full w-px bg-border print:hidden"></div>
    <p className="font-semibold text-lg font-headline text-foreground">{title}</p>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
    <p className="text-xs text-muted-foreground mt-1 mb-2">{period}</p>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const PrintHeader = () => (
    <div className="hidden print:block mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Abdul Gazi</h1>
        <div className="flex justify-center items-center gap-x-6 gap-y-1 text-sm text-muted-foreground mt-2 flex-wrap">
            <div className="flex items-center gap-2">
                <Globe size={14} />
                <span>Yokohama, Japan</span>
            </div>
            <div className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+811234567890">+81 12-3456-7890</a>
            </div>
            <div className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:abdulrgazii@gmail.com">abdulrgazii@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>Portfolio Website</span>
                </Link>
            </div>
        </div>
    </div>
);


export default function ResumePage() {
  return (
    <div className="container py-12 md:py-20 animate-fade-in">
      <PrintHeader />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 print:hidden">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Resume</h1>
        <Button onClick={() => window.print()}>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold font-headline mb-8 flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-primary" /> Work Experience
            </h2>
            <div className="relative">
              {experience.map((item, index) => (
                <TimelineItem key={index} icon={Briefcase} title={item.role} subtitle={item.company} period={item.period} location={item.location} description={item.description} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold font-headline mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-primary" /> Education
            </h2>
            <div className="relative">
              {education.map((item, index) => (
                <EducationTimelineItem key={index} icon={GraduationCap} title={item.degree} subtitle={item.institution} period={item.period} description={item.description} />
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-8">
           <section className="break-inside-avoid">
             <h2 className="text-2xl font-semibold font-headline mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />Certifications
             </h2>
             <div className="relative">
              {certifications.map(cert => (
                  <TimelineItem key={cert.title} icon={Award} title={cert.title} description={cert.description} />
              ))}
             </div>
          </section>
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="font-headline">Teaching Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {teachingSkills.map(skill => <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>)}
            </CardContent>
          </Card>
          <Card className="break-inside-avoid">
            <CardHeader>
              <CardTitle className="font-headline">Technical/Digital Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {technicalSkills.map(skill => <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>)}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
