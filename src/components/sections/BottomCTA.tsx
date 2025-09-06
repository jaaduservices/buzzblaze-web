import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Counter } from '../ui';

const BottomCTA: React.FC = () => {
    const navigate = useNavigate();
    const stats = [
        { value: "10x", label: "More Quality Leads", color: "from-accent-500 to-accent-600" },
        { value: "85%", label: "Conversion Rate", color: "from-electric-500 to-electric-600" },
        { value: "48h", label: "First Lead Time", color: "from-accent-400 to-electric-500" },
        { value: "24/7", label: "Lead Generation", color: "from-electric-400 to-accent-500" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const floatingVariants = {
        float: {
            y: [0, -15, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-neutral-900/40 to-background" />

            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-electric-500/20 to-accent-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-accent-500/20 to-electric-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 120, 0],
                    y: [0, -60, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container-custom relative z-10">
                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Content - Visual */}
                    <motion.div
                        className="flex justify-center lg:justify-start order-2 lg:order-1"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            {/* Customer Journey Visualization */}
                            <motion.div
                                className="card-glass max-w-md relative overflow-hidden"
                                initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {/* Search Bar Mockup */}
                                <motion.div
                                    className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-neutral-700/50"
                                    initial={{ y: -20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <motion.div
                                            className="w-6 h-6 bg-gradient-to-r from-accent-500 to-electric-500 rounded-full flex items-center justify-center shadow-glow"
                                            whileHover={{ scale: 1.1, rotate: 180 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </motion.div>
                                        <motion.div
                                            className="flex-1 h-3 bg-gradient-to-r from-accent-500 to-electric-500 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 0.8 }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Search Results */}
                                <div className="space-y-4">
                                    <motion.div
                                        className="bg-gradient-to-r from-accent-500/20 to-electric-500/20 rounded-xl p-4 border-l-4 border-accent-500 backdrop-blur-sm"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-electric-500 rounded-lg flex items-center justify-center shadow-glow">
                                                <span className="text-white font-bold text-sm">1</span>
                                            </div>
                                            <div className="flex-1">
                                                <motion.div
                                                    className="h-3 bg-gradient-to-r from-accent-500 to-electric-500 rounded-full mb-2"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6, duration: 0.8 }}
                                                />
                                                <motion.div
                                                    className="h-2 bg-neutral-500 rounded-full w-3/4"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "75%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.7, duration: 0.6 }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="bg-neutral-800/30 rounded-xl p-4 border-l-4 border-neutral-600 backdrop-blur-sm"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-neutral-600 rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">2</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-3 bg-neutral-600 rounded-full mb-2"></div>
                                                <div className="h-2 bg-neutral-700 rounded-full w-2/3"></div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="bg-neutral-800/30 rounded-xl p-4 border-l-4 border-neutral-600 backdrop-blur-sm"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-neutral-600 rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">3</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-3 bg-neutral-600 rounded-full mb-2"></div>
                                                <div className="h-2 bg-neutral-700 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Click Through */}
                                <motion.div
                                    className="mt-6 text-center"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                                >
                                    <motion.div
                                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-glow"
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            boxShadow: [
                                                "0 0 20px rgba(249, 147, 251, 0.3)",
                                                "0 0 40px rgba(249, 147, 251, 0.5)",
                                                "0 0 20px rgba(249, 147, 251, 0.3)"
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <span>Click!</span>
                                        <motion.svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ rotate: [0, 15, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </motion.svg>
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Success Indicators */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-glow"
                                variants={floatingVariants}
                                animate="float"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                            >
                                <span className="text-2xl">📈</span>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-glow"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-xl">🎯</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Content - Text */}
                    <motion.div
                        className="text-center lg:text-left order-1 lg:order-2 space-y-8"
                        variants={itemVariants}
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500/20 to-accent-500/20 px-6 py-3 rounded-full border border-electric-500/30 mb-8"
                            >
                                <span className="text-2xl">🚀</span>
                                <span className="text-sm font-medium text-electric-400 uppercase tracking-wider">Ready to Launch</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Let Customers{' '}
                                <span className="gradient-text">Find You!</span>
                            </h2>
                        </div>

                        <motion.div
                            className="space-y-6 text-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            <p className="text-neutral-300">
                                <span className="font-semibold text-white">Your dream clients are searching right now...</span>
                                <span className="text-accent-400"> but are they finding you?</span>
                            </p>

                            <p className="text-neutral-300">
                                We engineer conversion-focused strategies that transform curious browsers into loyal customers.
                                No outdated tactics or generic approaches—just intelligent targeting, compelling content,
                                and ads that actually convert.
                            </p>

                            <p className="text-xl font-semibold gradient-text">
                                Quality leads that convert? That's our specialty!
                            </p>

                            <p className="italic text-accent-400 text-lg">
                                Stop chasing leads. Let them chase you.
                            </p>
                        </motion.div>

                        {/* Lead Generation Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Counter
                                        value={stat.value}
                                        className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                                        delay={0.5 + index * 0.1}
                                    />
                                    <div className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="btn-primary text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                Get Started Today
                            </motion.button>
                            <motion.button
                                className="btn-secondary text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/portfolio')}
                            >
                                View Success Stories
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BottomCTA; 