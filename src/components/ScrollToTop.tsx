import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-netflix-500 to-orange-500 transform-origin-0 z-50"
                style={{ scaleX }}
            />

            {/* Scroll to Top Button */}
            <motion.button
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-netflix-500 to-orange-500 text-white rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 z-40 group flex items-center justify-center"
                onClick={scrollToTop}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isVisible ? 1 : 0,
                    opacity: isVisible ? 1 : 0
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                aria-label="Scroll to top"
            >
                <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                    />
                </motion.svg>

                {/* Progress Circle */}
                <svg
                    className="absolute inset-0 w-full h-full transform -rotate-90"
                    viewBox="0 0 56 56"
                >
                    <circle
                        cx="28"
                        cy="28"
                        r="26"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-20"
                    />
                    <motion.circle
                        cx="28"
                        cy="28"
                        r="26"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="163.36"
                        style={{
                            strokeDashoffset: useSpring(
                                scrollYProgress,
                                { stiffness: 100, damping: 30 }
                            )
                        }}
                        className="opacity-80"
                    />
                </svg>
            </motion.button>
        </>
    );
};

export default ScrollToTop;