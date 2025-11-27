import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const Card = ({ frontImage, backImage, title }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    };

    return (
        <div className="h-[400px] w-full perspective-1000 group cursor-pointer" onClick={handleFlip}>
            <motion.div
                className="absolute inset-0 backface-hidden rounded-xl shadow-xl overflow-hidden border-2 border-bts-orange/20 bg-white dark:bg-anthracite rotate-y-180"
            >
                <img
                    src={frontImage}
                    alt={title}
                    className="w-full h-full object-contain p-2"
                />
        </div>
            </motion.div >
    <div className="text-center mt-4">
        <h3 className="text-lg font-serif font-bold text-anthracite dark:text-white mb-1">{title}</h3>
        <div className="flex items-center justify-center gap-2 text-sm text-bts-orange font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <RotateCcw size={14} />
            Retourner
        </div>
    </div>
        </div >
    );
};

const Demo = () => {
    const cards = [
        {
            title: "Droit Civil",
            image: "/images/Droit%20Civil%20BTS%20Memory.png"
        },
        {
            title: "Management",
            image: "/images/Formule%20BTS%20Memory.png"
        },
        {
            title: "Négociation",
            image: "/images/Arg%20de%20vente%20BTS%20Memory.png"
        }
    ];

    return (
        <section className="py-24 px-4 bg-white dark:bg-anthracite transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-anthracite dark:text-off-white">
                        Testez vos <span className="text-bts-orange">Connaissances</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-sans max-w-2xl mx-auto">
                        Cliquez sur une carte pour la retourner et découvrir un exemple de question/réponse tiré du jeu.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <Card
                                frontImage={card.image}
                                title={card.title}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Demo;
