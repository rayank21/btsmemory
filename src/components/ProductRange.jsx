import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title, subtitle, image }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-[500px] w-80 rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-4 hover-trigger"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 flex flex-col items-center rounded-xl bg-black-matte shadow-2xl overflow-hidden border border-white/5"
            >
                <div
                    className="w-full h-80 bg-white/5 relative"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div style={{ transform: "translateZ(50px)" }} className="p-6 text-center w-full bg-black-matte flex-1 flex flex-col justify-center relative z-10">
                    <h3 className="text-xl font-serif font-bold text-bts-orange leading-tight mb-2">{title}</h3>
                    <p className="text-xs text-gray-400 font-sans uppercase tracking-wider">{subtitle}</p>
                </div>
            </div>
        </motion.div>
    );
};

const ProductRange = () => {
    const products = [
        {
            title: "BTS MEMORY – NDRC",
            subtitle: "Négociation et Digitalisation de la Relation Client",
            image: "/images/Packaging.jpeg"
        },
        {
            title: "BTS MEMORY – Assurance",
            subtitle: "Culture juridique, managériale et économique",
            image: "/images/Packaging.jpeg"
        },
        {
            title: "BTS MEMORY – MCO",
            subtitle: "Management Commercial Opérationnel",
            image: "/images/Packaging.jpeg"
        }
    ];

    return (
        <section className="py-24 px-4 bg-white dark:bg-anthracite relative z-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-anthracite dark:text-off-white">La Gamme</h2>
                    <div className="w-24 h-1 bg-bts-orange mx-auto"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-12 perspective-1000">
                    {products.map((product, index) => (
                        <TiltCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductRange;
