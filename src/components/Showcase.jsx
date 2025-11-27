import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Showcase = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    return (
        <section ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-white dark:bg-anthracite transition-colors duration-300">
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-anthracite dark:via-transparent dark:to-anthracite z-10 transition-colors duration-300"></div>
                <img
                    src="/images/Sur rayon 2.jpeg"
                    alt="BTS MEMORY en rayon"
                    className="w-full h-full object-cover opacity-60"
                />
            </motion.div>

            <div className="relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/80 dark:bg-black-matte/80 backdrop-blur-md p-8 md:p-12 rounded-sm border border-anthracite/10 dark:border-white/10 shadow-2xl max-w-2xl mx-auto transition-colors duration-300"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-anthracite dark:text-white">
                        Disponible en Magasin
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-sans">
                        Retrouvez BTS MEMORY dans vos enseignes culturelles préférées.
                        Une présence physique pour une qualité tangible.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
