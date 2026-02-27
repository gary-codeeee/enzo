import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function GallerySection() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Load the 9 exact converted WebP authentic client photos
    const images = Array.from({ length: 9 }, (_, i) => `/gallery/${i + 1}.webp`);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedIndex === null) return;

        if (e.key === 'ArrowRight') {
            setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
        } else if (e.key === 'ArrowLeft') {
            setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
        } else if (e.key === 'Escape') {
            setSelectedIndex(null);
        }
    }, [selectedIndex, images.length]);

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
            setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
        } else if (isRightSwipe) {
            setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
        }
    };

    return (
        <section id="realisations" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extralight text-primary mb-6 uppercase tracking-[0.3em]">Réalisations</h2>
                    <p className="text-xs md:text-sm text-secondary font-thin tracking-[0.4em] uppercase">L'amour du bel ouvrage au service du patrimoine.</p>
                </div>

                {/* CSS Grid - 3 columns everywhere */}
                <div className="grid grid-cols-3 gap-1 sm:gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-none sm:rounded-sm shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500 border border-primary/10 bg-white/5 aspect-square"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img
                                src={src}
                                alt={`Chantier Enzo Seker ${index + 1}`}
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
                                setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
                            }}
                            aria-label="Image précédente"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <span className="text-white/50 text-[10px] tracking-[0.2em]">{selectedIndex + 1} / {images.length}</span>
                        <button
                            className="text-white/70 hover:text-white p-4"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
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
                        src={images[selectedIndex]}
                        alt={`Aperçu Réalisation ${selectedIndex + 1} Plein Écran`}
                        className="max-w-full max-h-full object-contain shadow-2xl transition-opacity duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
