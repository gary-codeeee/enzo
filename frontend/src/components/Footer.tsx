export default function Footer() {
    return (
        <footer id="contact" className="bg-background py-24 md:py-32 text-text flex flex-col justify-center items-center text-center">
            <div className="space-y-16">
                <div>
                    <h4 className="text-[10px] tracking-[0.5em] font-extralight text-secondary uppercase mb-4">Téléphone</h4>
                    <a href="tel:+41765793043" className="text-2xl md:text-5xl font-thin hover:text-white transition-colors tracking-widest">+41 76 579 30 43</a>
                </div>

                <div>
                    <h4 className="text-[10px] tracking-[0.5em] font-extralight text-secondary uppercase mb-4">Email</h4>
                    <a href="mailto:contact@enzoseker.ch" className="text-2xl md:text-5xl font-thin hover:text-white transition-colors tracking-widest">contact@enzoseker.ch</a>
                </div>

                <div className="pt-24 border-t border-white/10">
                    <p className="text-[9px] md:text-[10px] text-secondary tracking-[0.4em] font-thin uppercase">Valangin, Neuchâtel &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}
