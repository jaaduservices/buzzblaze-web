import React from 'react';
import { motion } from 'framer-motion';
import {
    Header,
    Hero,
    ServiceBreakdown,
    Expertise,
    // ClientWork,
    ValueProposition,
    HowWeWork,
    Testimonials,
    Partners,
    BrandIdentity,
    BottomCTA,
    Footer
} from '../components/sections';

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
};

const pageTransition = {
    type: 'tween' as const,
    ease: 'anticipate' as const,
    duration: 0.8
};

const HomePage: React.FC = () => {
    return (
        <motion.div
            className="HomePage min-h-screen bg-gradient-dark"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Header />
            <main className="relative">
                {/* Animated gradient background overlay */}
                <div className="fixed inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-electric-500/5 pointer-events-none" />

                {/* Floating particles background */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-accent-400/20 rounded-full"
                            animate={{
                                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                            }}
                            transition={{
                                duration: 20 + Math.random() * 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                            }}
                        />
                    ))}
                </div>

                <Hero />
                <ServiceBreakdown />
                <Expertise />
                {/* <ClientWork /> */}
                <ValueProposition />
                <HowWeWork />
                <Testimonials />
                <Partners />
                <BrandIdentity />
                <BottomCTA />
            </main>
            <Footer />

            {/* Modern back to top button with animation */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white p-4 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 z-50 group"
                aria-label="Back to top"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: 1 }}
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
            </motion.button>
        </motion.div>
    );
};

export default HomePage; 