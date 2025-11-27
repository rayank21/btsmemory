import { motion } from 'framer-motion';
import { Mail, ShoppingBag, Instagram, MapPin } from 'lucide-react';

const PriceContact = ({ onBuyClick }) => {
    return (
        <section className="py-24 px-4 bg-white dark:bg-anthracite text-center relative z-10 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-bts-orange font-sans font-semibold tracking-widest uppercase text-sm mb-2 block">Prix de lancement</span>
                    <h2 className="text-6xl md:text-8xl font-serif font-bold text-anthracite dark:text-white mb-6 transition-colors duration-300">
                        4,90 <span className="text-4xl align-top">€</span>
                    </h2>
                    <motion.button
                        onClick={onBuyClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hover-trigger inline-flex items-center gap-3 px-8 py-4 bg-anthracite text-white dark:bg-white dark:text-anthracite text-lg font-sans font-bold tracking-wide rounded-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    >
                        <ShoppingBag size={20} />
                        Acheter Maintenant
                    </motion.button>
                </motion.div>

                <div className="w-full h-[1px] bg-anthracite/10 dark:bg-white/10 mb-16 transition-colors duration-300"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-serif text-anthracite dark:text-white mb-4 transition-colors duration-300">Contactez-nous</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 flex-wrap">
                        <a
                            href="mailto:accueil.btsmemory@gmail.com"
                            className="hover-trigger inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-bts-orange dark:hover:text-bts-orange transition-colors text-lg font-sans"
                        >
                            <Mail size={18} />
                            accueil.btsmemory@gmail.com
                        </a>
                        <a
                            href="https://www.instagram.com/btsmemory21/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-trigger inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-bts-orange dark:hover:text-bts-orange transition-colors text-lg font-sans"
                        >
                            <Instagram size={18} />
                            @btsmemory21
                        </a>
                        <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 text-lg font-sans">
                            <MapPin size={18} className="text-bts-orange" />
                            7 Bd de l'Europe, 21800 Quetigny
                        </div>
                    </div>
                </motion.div>

                <footer className="mt-24 text-gray-500 dark:text-gray-600 text-sm font-sans transition-colors duration-300">
                    <p>&copy; {new Date().getFullYear()} BTS MEMORY. Tous droits réservés.</p>
                </footer>
            </div>
        </section>
    );
};

export default PriceContact;
