import { PenLine, Hammer, CheckCircle } from 'lucide-react';

export default function ExpertiseSection() {
    const steps = [
        {
            id: "01",
            title: "Conception & Étude technique",
            description: "Analyse de votre bâti et de vos besoins. Choix des essences de bois, calculs de charges et optimisation thermique : votre projet démarre sur des fondations solides.",
            icon: <PenLine className="w-8 h-8 text-white" />
        },
        {
            id: "02",
            title: "Gros Œuvre : Charpente & Couverture",
            description: "Le cœur de votre maison. Nous sécurisons, redressons ou restaurons votre structure bois, avant de la mettre définitivement hors d'eau avec une couverture posée dans les règles de l'art.",
            icon: <Hammer className="w-8 h-8 text-white" />
        },
        {
            id: "03",
            title: "Second Œuvre : Menuiserie & Finitions",
            description: "La touche finale. Pose de fenêtres hybrides, portes sur mesure ou agencements intérieurs avec un soin méticuleux, pour allier confort thermique et esthétisme authentique.",
            icon: <CheckCircle className="w-8 h-8 text-white" />
        }
    ];

    return (
        <section id="expertise" className="py-24 md:py-32 bg-gray-50 flex flex-col justify-center">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-widest">La Promesse</h2>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Un seul interlocuteur en 3 étapes</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gray-200 -z-0"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center group bg-gray-50">
                            <span className="text-6xl font-black text-gray-200 mb-8 select-none group-hover:text-black transition-colors duration-500">{step.id}</span>
                            <div className="w-full flex flex-col items-center">
                                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-light text-sm max-w-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
