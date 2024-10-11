"use client"
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Palette, Puzzle } from 'lucide-react'
import { Section } from '@/components/freelance/section'
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

const inter = Inter({ subsets: ['latin'] })

export default function Component() {
    const services = [
        { title: "Custom Logic", description: "Tailor-made modifications for your specific needs.", icon: Wrench, bgImage: "https://placeholder.pics/svg/300x200" },
        { title: "Model Replacements", description: "Replace any model in the game.", icon: Zap, bgImage: "https://placeholder.pics/svg/300x200" },
        { title: "UI Enhancements", description: "Improve user interface and experience.", icon: Palette, bgImage: "https://placeholder.pics/svg/300x200" },
        { title: "And More", description: "What ever you can imagine.", icon: Puzzle, bgImage: "https://placeholder.pics/svg/300x200" },
    ]

    const experience = [
        { title: "UEditor", description: "A platform to easily create Unreal Engine mods.", icon: Wrench, bgImage: "https://placeholder.pics/svg/300x200" },
        { title: "Example", description: "Example.", icon: Zap, bgImage: "https://placeholder.pics/svg/300x200" },
        { title: "Example", description: "Example.", icon: Palette, bgImage: "https://placeholder.pics/svg/300x200" },
        { title: "Example", description: "Example.", icon: Puzzle, bgImage: "https://placeholder.pics/svg/300x200" },
    ]

    return (
        <div className={`min-h-screen flex flex-col ${inter.className}`}>
            <header className="w-full p-4 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                    <Image
                        src="/UEditor Logo White.svg"
                        alt="Mods by UEditor Logo"
                        //layout="fill"
                        objectFit="contain"
                        height={64}
                        width={64}
                    />
                </div>
            </header>

            <main className="flex-grow">
                <section className="hero text-center py-12 px-4 sm:py-24 sm:px-8">
                    {/*<h1 className="text-3xl sm:text-5xl md:text-6xl mb-4">
                        <span className="font-bold">Mods</span>{' '}
                        <span className="font-semibold italic">by</span>{' '}
                        <span className="font-black">UEditor</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Elevate your experience with custom modifications tailored to your needs.
                    </p>*/}
                    <div className="flex items-center justify-center rounded-2xl w-full">
                        <TextRevealCard
                            text="I need a mod made."
                            revealText="Mods by UEditor"
                        >
                            <TextRevealCardTitle>
                                Sometimes, you need a helping hand.
                            </TextRevealCardTitle>
                            <TextRevealCardDescription>
                                Elevate your experience with custom modifications tailored to your needs.
                            </TextRevealCardDescription>
                        </TextRevealCard>
                    </div>
                    <Button size="lg" className="bg-white text-black"
                            onClick={() => window.location.href = 'mailto:hello@ueditor.lol'}>
                        Contact Us
                    </Button>
                </section>

                <Section header="What we'll do" items={services}/>
                <Section header="Our experience" items={experience}/>
            </main>

            <footer className="w-full text-center p-4 text-sm text-muted-foreground">
                © 2024 UEditor LLC. All rights reserved.
            </footer>
        </div>
    )
}