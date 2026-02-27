import { Home, Grid, Trees } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            title: "Charpente Traditionnelle & Ossature Bois",
            description: "La colonne vertébrale de votre maison. De la création d'ossatures robustes à la restauration d'ouvrages centenaires, nous concevons des structures faites pour défier le temps et les éléments.",
            icon: <Trees className="w-12 h-12 text-cta group-hover:text-white transition-colors duration-300" />
        },
        {
            title: "Couverture & Zinguerie",
            description: "La protection absolue de votre patrimoine. Rénovation de toitures (tuiles, ardoises, zinc), étanchéité méticuleuse et isolation, pour vous garantir un habitat perspirant, sain et sec.",
            icon: <Home className="w-12 h-12 text-cta group-hover:text-white transition-colors duration-300" />
        },
        {
            title: "Menuiserie & Agencement",
            description: "La signature de vos espaces. Fermetures extérieures à haute performance énergétique (portes, fenêtres) et boiseries intérieures : le bois travaillé avec précision pour sublimer vos volumes.",
            icon: <Grid className="w-12 h-12 text-cta group-hover:text-white transition-colors duration-300" />
        }
    ];

    return (
        <section id="services" className="py-24 md:py-32 bg-white flex flex-col justify-center border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-widest">Expertises</h2>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Savoir-faire artisanal</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="group flex flex-col items-start p-8 border border-gray-100 hover:border-black transition-colors duration-500 bg-white">
                            <div className="mb-8">
                                <service.icon.type className="w-10 h-10 text-black" strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-black">{service.title}</h3>
                            <p className="text-gray-500 font-light leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
