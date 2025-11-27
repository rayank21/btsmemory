import { motion } from 'framer-motion';

const Hero = () => {
    const slogan = "Le jeu qui fait réussir tes révisions.";
    const words = slogan.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-off-white dark:bg-anthracite transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/4 left-1/4 w-64 h-96 bg-gradient-to-br from-bts-orange to-transparent rounded-full blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-1/4 right-1/4 w-64 h-96 bg-gradient-to-tl from-bts-orange to-transparent rounded-full blur-[100px]"
                />
            </div>

            {/* Content */}
            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <img
                        src="/images/LOGO%20BTS%20MEMORY.png"
                        alt="BTS MEMORY Logo"
                        className="h-32 md:h-48 object-contain mx-auto hover-trigger"
                    />
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="overflow-hidden flex flex-wrap justify-center gap-2 mb-16"
                >
                    {words.map((word, index) => (
                        <motion.span
                            variants={child}
                            key={index}
                            className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium tracking-wide text-anthracite dark:text-off-white transition-colors duration-300"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hover-trigger px-8 py-4 bg-bts-orange text-white text-lg font-sans font-semibold tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] transition-all duration-300"
                >
                    Découvrir la gamme
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-bts-orange to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
