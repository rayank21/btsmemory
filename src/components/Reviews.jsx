import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Thomas L.",
            role: "BTS NDRC",
            content: "J'ai révisé tout mon droit et mon éco avec ce jeu. C'est beaucoup plus fun que de lire des fiches !",
            rating: 5
        },
        {
            name: "Sarah M.",
            role: "BTS MCO",
            content: "Le format est top, on peut l'emmener partout. On a fait des parties en pause déj, ça rentre tout seul.",
            rating: 5
        },
        {
            name: "Lucas P.",
            role: "BTS Assurance",
            content: "Je pensais pas que ça marcherait aussi bien. J'ai validé mon CEJM grâce aux questions du jeu.",
            rating: 4
        }
    ];

    return (
        <section className="py-24 px-4 bg-gray-50 dark:bg-black-matte transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-anthracite dark:text-off-white">
                        Ils ont réussi avec <span className="text-bts-orange">BTS MEMORY</span>
                    </h2>
                    <div className="w-24 h-1 bg-bts-orange mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-anthracite p-8 rounded-xl shadow-lg border border-anthracite/5 dark:border-white/5 relative transition-colors duration-300"
                        >
                            <Quote className="absolute top-6 right-6 text-bts-orange/20 w-12 h-12" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={`${i < review.rating ? 'text-bts-orange fill-bts-orange' : 'text-gray-300 dark:text-gray-600'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 font-sans mb-6 leading-relaxed">
                                "{review.content}"
                            </p>

                            <div>
                                <h4 className="font-bold text-anthracite dark:text-white font-serif">{review.name}</h4>
                                <span className="text-sm text-bts-orange font-medium">{review.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
