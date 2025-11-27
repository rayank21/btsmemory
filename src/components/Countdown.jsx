import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Target date: May 18, 2026 (CEJM Exam)
        const targetDate = new Date('2026-05-18T14:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="bg-white dark:bg-anthracite w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-lg border border-anthracite/10 dark:border-white/10 flex items-center justify-center mb-2 relative overflow-hidden group transition-colors duration-300">
                <div className="absolute inset-0 bg-bts-orange/5 group-hover:bg-bts-orange/10 transition-colors duration-300"></div>
                <span className="text-3xl md:text-4xl font-bold font-serif text-anthracite dark:text-white z-10">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-xs md:text-sm font-sans font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-12 px-4 bg-gray-50 dark:bg-black-matte transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white dark:bg-anthracite rounded-2xl p-8 md:p-12 shadow-xl border border-anthracite/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-bts-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-bts-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bts-orange/10 text-bts-orange text-sm font-bold mb-4">
                                <Clock size={16} />
                                <span>OBJECTIF DIPLÔME</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-anthracite dark:text-white mb-4">
                                L'échéance approche. <br />
                                <span className="text-bts-orange">Soyez prêts.</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-sans max-w-md">
                                Chaque jour compte. Optimisez vos révisions dès maintenant avec la méthode BTS MEMORY.
                            </p>
                        </div>

                        <div className="flex gap-4 md:gap-6">
                            <TimeUnit value={timeLeft.days} label="Jours" />
                            <TimeUnit value={timeLeft.hours} label="Heures" />
                            <TimeUnit value={timeLeft.minutes} label="Min" />
                            <TimeUnit value={timeLeft.seconds} label="Sec" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
