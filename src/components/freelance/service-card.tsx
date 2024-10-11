import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
    bgImage: string
}

export function ServiceCard({ title, description, icon: Icon, bgImage }: ServiceCardProps) {
    return (
        <Card className="flex-none w-64 sm:w-72 h-96">
            <div className="relative h-24 mt-1">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={bgImage}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
                <div className="absolute -bottom-6 left-4">
                    <div className="relative">
                        <div className="absolute inset-0 bg-background rounded-full border-2 border-primary"
                             style={{clipPath: 'inset(0 0 50% 0)'}}></div>
                        <div className="relative z-10 bg-background rounded-full p-2 border-2 border-background bg-black">
                            <div className="bg-primary rounded-full p-2">
                                <Icon className="w-6 h-6 text-primary-foreground"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardHeader className="pt-10">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden">
                <p /*className="animate-scroll-horizontally"*/>{description}</p>
            </CardContent>
        </Card>
    )
}