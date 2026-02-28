import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function GallerySection() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Create exactly 38 unique SEO-optimized alt texts rotating through target keywords
    const altTexts = [
        "Rénovation complète par Enzo Seker à Neuchâtel",
        "Menuiserie sur mesure et architecture intérieure Fribourg",
        "Travaux de couverture et toiture Neuchâtel par Enzo Seker",
        "Architecture et rénovation de l'habitat Fribourg",
        "Aménagement intérieur menuiserie Enzo Seker Neuchâtel",
        "Chantier de rénovation complète architecture Neuchâtel",
        "Réalisation menuiserie et agencement Fribourg",
        "Couverture et ferblanterie par l'entreprise Enzo Seker",
        "Direction des travaux et rénovation Neuchâtel",
        "Agencement bois et menuiserie architecture Fribourg",
        "Restauration de charpente et couverture Neuchâtel",
        "Projet d'architecture d'intérieur Enzo Seker Fribourg",
        "Rénovation énergétique et menuiserie extérieure Neuchâtel",
        "Travaux d'aménagement et rénovation Fribourg",
        "Finitions menuiserie haut de gamme Fribourg par Enzo Seker",
        "Réfection de toiture et couverture Neuchâtel",
        "Suivi de chantier architecture par Enzo Seker",
        "Pose de parquet et menuiserie intérieure Fribourg",
        "Rénovation de façade et bâtiment Neuchâtel",
        "Agencement de cuisine sur mesure architecture Fribourg",
        "Transformation d'espace intérieur par Enzo Seker",
        "Travaux de menuiserie spécialisée Fribourg Neuchâtel",
        "Couverture traditionnelle et rénovation de toit",
        "Conception et architecture d'aménagement intérieur",
        "Rénovation d'appartement complet Enzo Seker Neuchâtel",
        "Menuiserie artisanale et créations bois Fribourg",
        "Réhabilitation de bâtiment et charpente bois",
        "Direction de travaux pour rénovation Fribourg",
        "Aménagement de combles et menuiserie Neuchâtel",
        "Architecture et rénovation de maison individuelle",
        "Travaux de menuiserie bois sur mesure Enzo Seker",
        "Intervention en couverture et zinguerie Neuchâtel",
        "Projet de rénovation avec suivi architectural Fribourg",
        "Pose d'escalier bois menuiserie traditionnelle",
        "Entretien de toiture et travaux de couverture",
        "Architecture d'intérieur et rénovation globale Neuchâtel",
        "Agencement dressing et placards menuiserie Fribourg",
        "Restauration de boiseries et rénovation Enzo Seker"
    ];

    // Map the 38 photos to their paths and alt texts
    const photos = Array.from({ length: 38 }, (_, i) => ({
        src: `/gallery/${i + 1}.webp`,
        alt: altTexts[i]
    }));

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedIndex === null) return;

        if (e.key === 'ArrowRight') {
            setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
        } else if (e.key === 'ArrowLeft') {
            setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
        } else if (e.key === 'Escape') {
            setSelectedIndex(null);
        }
    }, [selectedIndex, photos.length]);

    useEffect(() => {
        if (selectedIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, handleKeyDown]);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
        } else if (isRightSwipe) {
            setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
        }
    };

    return (
        <section id="realisations" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extralight text-primary mb-6 uppercase tracking-[0.3em]">Réalisations</h2>
                    <p className="text-sm md:text-base text-white/50 font-light tracking-[0.3em] uppercase mt-2">L'amour du bel ouvrage au service du patrimoine.</p>
                </div>

                {/* CSS Grid - 3 columns everywhere */}
                <div className="grid grid-cols-3 gap-1 sm:gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-none sm:rounded-sm shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500 border border-primary/10 bg-white/5 aspect-square"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                                <ZoomIn className="text-background w-6 h-6 sm:w-12 sm:h-12 mb-1 sm:mb-6 font-thin" strokeWidth={0.5} />
                                <span className="text-background tracking-[0.1em] sm:tracking-[0.4em] uppercase text-[6px] sm:text-[10px] font-thin">Agrandir</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 md:p-10 backdrop-blur-md transition-opacity"
                    onClick={() => setSelectedIndex(null)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Navigation Hints */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50 text-[10px] font-thin tracking-[0.4em] uppercase hidden md:flex gap-12">
                        <span>← Précédent</span>
                        <span>Échap pour fermer</span>
                        <span>Suivant →</span>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex md:hidden items-center justify-center gap-8 w-full px-8">
                        <button
                            className="text-white/70 hover:text-white p-4"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
                            }}
                            aria-label="Image précédente"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <span className="text-white/50 text-[10px] tracking-[0.2em]">{selectedIndex + 1} / {photos.length}</span>
                        <button
                            className="text-white/70 hover:text-white p-4"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
                            }}
                            aria-label="Image suivante"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>

                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                        onClick={() => setSelectedIndex(null)}
                        aria-label="Fermer"
                    >
                        <X size={48} strokeWidth={1.5} />
                    </button>

                    <img
                        src={photos[selectedIndex].src}
                        alt={photos[selectedIndex].alt}
                        className="max-w-full max-h-full object-contain shadow-2xl transition-opacity duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
