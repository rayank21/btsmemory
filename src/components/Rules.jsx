import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Trophy, PlayCircle, AlertCircle } from 'lucide-react';

const Rules = () => {
    const rules = [
        {
            title: "But du jeu",
            icon: <Trophy className="w-6 h-6 text-bts-orange" />,
            content: [
                "Être le joueur qui a le plus de paires de cartes à la fin de la partie."
            ]
        },
        {
            title: "Contenu du jeu",
            icon: <BookOpen className="w-6 h-6 text-bts-orange" />,
            content: [
                "Des cartes représentant des images, mots ou concepts liés au BTS.",
                "Chaque carte a sa paire identique."
            ]
        },
        {
            title: "Préparation",
            icon: <Users className="w-6 h-6 text-bts-orange" />,
            content: [
                "Mélange toutes les cartes.",
                "Dispose-les face cachée sur la table en lignes et colonnes.",
                "Décidez qui commence (le plus jeune, tirage au sort, etc.)."
            ]
        },
        {
            title: "Déroulement du jeu",
            icon: <PlayCircle className="w-6 h-6 text-bts-orange" />,
            content: [
                "Le premier joueur retourne deux cartes de son choix.",
                "Si les deux cartes sont identiques, il gagne la paire, la met devant lui et rejoue.",
                "Si elles sont différentes, il les remet face cachée au même endroit, et c'est au joueur suivant.",
                "Les joueurs doivent bien mémoriser les cartes déjà vues !"
            ]
        },
        {
            title: "Fin de la partie",
            icon: <AlertCircle className="w-6 h-6 text-bts-orange" />,
            content: [
                "La partie se termine quand toutes les paires ont été trouvées."
            ]
        },
        {
            title: "Gagnant",
            icon: <Trophy className="w-6 h-6 text-bts-orange" />,
            content: [
                "Le joueur qui a le plus de paires remporte la partie !"
            ]
        }
    ];

    return (
        <section className="py-24 px-4 bg-anthracite relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-off-white mb-4">
                        Règles du <span className="text-bts-orange">Jeu</span>
                    </h2>
                    <div className="w-24 h-1 bg-bts-orange mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black-matte p-8 rounded-xl border border-white/5 hover:border-bts-orange/30 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-bts-orange/10 rounded-lg">
                                    {rule.icon}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-off-white">
                                    {rule.title}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {rule.content.map((item, i) => (
                                    <li key={i} className="text-gray-400 font-sans leading-relaxed flex items-start gap-2">
                                        <span className="mt-2 w-1.5 h-1.5 bg-bts-orange rounded-full flex-shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rules;
