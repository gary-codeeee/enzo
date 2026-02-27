import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90svh] flex flex-col items-center justify-center bg-background">
            <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center">

                <div className="flex flex-col items-center justify-center fade-in">
                    <img
                        src="/logo.png"
                        alt="Enzo Seker Menuiserie"
                        className="w-64 md:w-96 lg:w-[450px] object-contain transition-transform duration-700 invert mix-blend-screen"
                    />
                </div>

            </div>

            {/* Desktop scroll indicator */}
            <div className="hidden md:flex absolute bottom-16 right-16 flex-col items-center gap-4 opacity-30 fade-in" style={{ animationDelay: '1s' }}>
                <span className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-white/50" style={{ writingMode: 'vertical-rl' }}>Découvrir</span>
                <div className="w-[1px] h-16 bg-text/20 overflow-hidden relative">
                    <div className="w-full h-full bg-text absolute top-0 left-0 animate-[scroll-down_2s_ease-in-out_infinite]"></div>
                </div>
            </div>

            {/* Mobile minimalist scroll indicator - Centered chevron under logo */}
            <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 fade-in" style={{ animationDelay: '1s' }}>
                <ChevronDown className="w-8 h-8 animate-bounce text-text" strokeWidth={1} />
            </div>
        </section>
    );
}
