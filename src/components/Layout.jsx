import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        const moveCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    // Add event listeners for hoverable elements
    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const hoverables = document.querySelectorAll('a, button, .hover-trigger');

        hoverables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }); // Re-run on updates to catch new elements

    return (
        <div className="relative min-h-screen bg-anthracite selection:bg-bts-orange selection:text-white overflow-hidden">
            <motion.div
                className="cursor-dot"
                animate={{
                    x: cursorPosition.x,
                    y: cursorPosition.y,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            <motion.div
                className="cursor-outline"
                animate={{
                    x: cursorPosition.x,
                    y: cursorPosition.y,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? '#FF6A00' : 'rgba(255, 106, 0, 0.5)'
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />

            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
