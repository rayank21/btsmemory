import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Concept = () => {
    const features = [
        "Ludique & Addictif",
        "Format Sac en Coton",
        "Révision Rapide",
        "Approuvé par les étudiants"
    ];

    return (
        <section className="py-24 px-4 bg-black-matte relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-off-white">
                        Le Concept <span className="text-bts-orange">BTS MEMORY</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed font-sans">
                        Fini les fiches de révision ennuyeuses. BTS MEMORY transforme tes révisions en un jeu de stratégie rapide et efficace.
                        Emporte-le partout grâce à son format compact et son sac en tissu premium.
                    </p>

                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                                className="flex items-center gap-3 text-off-white font-medium"
                            >
                                <span className="p-1 bg-bts-orange/20 rounded-full text-bts-orange">
                                    <Check size={18} />
                                </span>
                                {feature}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-bts-orange/10 blur-3xl rounded-full transform -translate-y-1/2"></div>
                    <img
                        src="/images/Packaging + cartes.jpeg"
                        alt="BTS MEMORY Concept"
                        className="relative z-10 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 hover-trigger"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Concept;
