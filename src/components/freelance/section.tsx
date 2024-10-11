import { LucideIcon } from 'lucide-react'
import { ServiceCard } from '@/components/freelance/service-card';

interface SectionProps {
    header: string;
    items: {
        title: string;
        description: string;
        icon: LucideIcon;
        bgImage: string;
    }[];
}

export function Section({ header, items }: SectionProps) {
    const shouldScroll = items.length > 4;

    return (
        <section className="services py-12 px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">{header}</h2>
            <div className="overflow-hidden" style={{ width: '100%', height: 'auto' }}>
                <div className={`flex ${shouldScroll ? 'animate-scroll-horizontally' : 'justify-center'}`} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    {items.map((item, index) => (
                        <div key={index} className="flex-none w-64 sm:w-80">
                            <ServiceCard
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                bgImage={item.bgImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}