import type { Metadata } from 'next';
import { ContactForm } from './contact-form';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact',
};

const contactLinks = [
    { href: "mailto:abdulrgazii@gmail.com", icon: Mail, label: "Email" },
    { href: "tel:+811234567890", icon: Phone, label: "Phone" },
];

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-20 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Get In Touch</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Have a question, a project proposal, or just want to say hello? I'd love to hear from you.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="p-8">
                <h2 className="text-2xl font-headline font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        I'm currently taking an extended break from social media to focus on my projects. The best ways to reach me are via the contact form, email, or phone.
                    </p>
                     <p>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        {contactLinks.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
                            <Icon className="h-8 w-8" />
                        </Link>
                        ))}
                    </div>
                </div>
            </Card>
            <Card className="p-8">
                <ContactForm />
            </Card>
        </div>
    </div>
  );
}
