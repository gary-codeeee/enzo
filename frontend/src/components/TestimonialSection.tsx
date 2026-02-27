import { Shield, Clock, MapPin, UserCheck, Star } from 'lucide-react';

export default function TestimonialSection() {
    const guarantees = [
        {
            title: "Artisan Local (Valangin)",
            description: "Un artisan de proximité, réactif et à l'écoute dans tout le canton de Neuchâtel.",
            icon: <MapPin className="w-7 h-7 text-cta" />
        },
        {
            title: "Un interlocuteur unique",
            description: "Finis les retards liés aux problèmes de coordination. Nous gérons tout.",
            icon: <UserCheck className="w-7 h-7 text-cta" />
        },
        {
            title: "Garantie Décennale",
            description: "Vos travaux de structure et d'étanchéité assurés 10 ans.",
            icon: <Shield className="w-7 h-7 text-cta" />
        },
        {
            title: "Respect des Délais",
            description: "Un planning tenu et une communication claire du début à la fin.",
            icon: <Clock className="w-7 h-7 text-cta" />
        }
    ];

    return (
        <section id="temoignages" className="py-24 md:py-32 bg-[#111] text-white flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Testimonial block */}
                    <div className="p-0 lg:pr-10">
                        <div className="flex text-white mb-8">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current mr-1" />
                            ))}
                        </div>
                        <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-10 text-gray-300">
                            "Le travail du bois est tout simplement bluffant. Un chantier géré d'une main de maître de A à Z."
                        </blockquote>
                        <p className="text-sm font-bold tracking-widest uppercase text-white">
                            Marc & Sophie L. <span className="text-gray-500 font-light ml-2">Propriétaires</span>
                        </p>
                    </div>

                    {/* Guarantees block */}
                    <div className="pl-0 lg:pl-10 border-l border-white/10">
                        <h3 className="text-3xl font-bold uppercase tracking-widest mb-12 text-white">Engagements</h3>
                        <div className="grid sm:grid-cols-2 gap-10">
                            {guarantees.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <item.icon.type className="w-8 h-8 text-white" strokeWidth={1} />
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                                        <p className="text-white/70 leading-relaxed text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
