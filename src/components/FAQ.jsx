import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-anthracite/10 dark:border-white/10 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-serif font-bold text-anthracite dark:text-white group-hover:text-bts-orange transition-colors">
                    {question}
                </span>
                <span className="text-bts-orange transition-transform duration-300">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Quelles matières sont couvertes ?",
            answer: "BTS MEMORY couvre les matières générales et professionnelles essentielles : CEJM, Culture Générale, Anglais, et les blocs de compétences spécifiques à chaque spécialité (NDRC, MCO, Assurance)."
        },
        {
            question: "Est-ce adapté à tous les BTS ?",
            answer: "Nous avons des éditions spécifiques pour les BTS NDRC, MCO et Assurance. Le tronc commun (CEJM, Culture G, Anglais) est pertinent pour la plupart des BTS tertiaires. De plus, des extensions pour d'autres filières arrivent très bientôt !"
        },
        {
            question: "Quels sont les délais de livraison ?",
            answer: "Les commandes sont expédiées sous 24h à 48h ouvrées. La livraison prend généralement 2 à 3 jours ouvrables en France métropolitaine."
        },
        {
            question: "Peut-on jouer seul ?",
            answer: "Oui ! Le jeu est conçu pour être joué à plusieurs pour se challenger, mais vous pouvez tout à fait l'utiliser seul comme outil de révision rapide (flashcards)."
        }
    ];

    return (
        <section className="py-24 px-4 bg-white dark:bg-anthracite transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-anthracite dark:text-off-white">
                        Questions <span className="text-bts-orange">Fréquentes</span>
                    </h2>
                    <div className="w-24 h-1 bg-bts-orange mx-auto rounded-full"></div>
                </motion.div>

                <div className="bg-gray-50 dark:bg-black-matte rounded-2xl p-8 border border-anthracite/5 dark:border-white/5 shadow-sm transition-colors duration-300">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
