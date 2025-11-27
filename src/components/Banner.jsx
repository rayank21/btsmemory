import { motion } from 'framer-motion';
import { Star, Leaf, Truck, Hammer, Award } from 'lucide-react';

const Banner = () => {
    const items = [
        { text: "FAIT MAIN", icon: <Hammer size={20} /> },
        { text: "ARTISANAL", icon: <Award size={20} /> },
        { text: "100% MADE IN FRANCE", icon: <Star size={20} /> },
        { text: "ÉCO-RESPONSABLE", icon: <Leaf size={20} /> },
        { text: "LIVRAISON RAPIDE", icon: <Truck size={20} /> },
    ];

    // Duplicate items to create seamless loop
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="bg-bts-orange py-3 overflow-hidden relative z-30 border-y border-white/10">
            <div className="flex">
                <motion.div
                    className="flex gap-12 flex-shrink-0 items-center"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-black font-bold whitespace-nowrap">
                            <span className="bg-black/10 p-1.5 rounded-full">
                                {item.icon}
                            </span>
                            <span className="text-sm md:text-base tracking-wider font-sans">{item.text}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-black/30 ml-8"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
