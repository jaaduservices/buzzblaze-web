import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '../ui';

const ValueProposition: React.FC = () => {
    const values = [
        {
            icon: "🎯",
            title: "Scroll-Stopping Content",
            description: "Content that captivates, engages, and converts. We craft stories that resonate and drive action.",
            gradient: "from-netflix-500 to-netflix-600",
            bgGradient: "from-netflix-500/10 to-netflix-600/10"
        },
        {
            icon: "📈",
            title: "Traffic That Converts",
            description: "Strategic traffic generation focused on quality prospects who become loyal customers.",
            gradient: "from-orange-500 to-orange-600",
            bgGradient: "from-orange-500/10 to-orange-600/10"
        },
        {
            icon: "🎨",
            title: "Designs That Speak",
            description: "Visual storytelling that connects emotionally and communicates your brand's unique value.",
            gradient: "from-netflix-400 to-orange-500",
            bgGradient: "from-netflix-400/10 to-orange-500/10"
        },
        {
            icon: "🚀",
            title: "Strategies That Scale",
            description: "Growth-focused strategies designed to maximize ROI and accelerate your business success.",
            gradient: "from-orange-400 to-netflix-500",
            bgGradient: "from-orange-400/10 to-netflix-500/10"
        }
    ];

    const stats = [
        { value: "500+", label: "Happy Clients", color: "from-netflix-500 to-netflix-600" },
        { value: "98%", label: "Success Rate", color: "from-orange-500 to-orange-600" },
        { value: "24/7", label: "Support", color: "from-netflix-400 to-orange-500" },
        { value: "5★", label: "Average Rating", color: "from-orange-400 to-netflix-500" }
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
            y: [0, -10, 0],
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
            <div className="absolute inset-0 bg-gradient-to-br from-background via-neutral-900/50 to-background" />

            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-netflix-500/20 to-orange-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-netflix-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -80, 0],
                    y: [0, 50, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center space-content mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-netflix-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-netflix-500/30 mb-8"
                    >
                        <span className="text-2xl">💎</span>
                        <span className="text-sm font-medium text-netflix-400 uppercase tracking-wider">Our Values</span>
                    </motion.div>

                    <h2 className="section-title mb-6">
                        What Makes Us Your{' '}
                        <span className="gradient-text">Brand's BFF?</span>
                    </h2>
                    <p className="section-subtitle max-w-4xl mx-auto">
                        We're not just an agency, we're your creativity crew and growth partners.
                        Here's what sets us apart in the digital marketing landscape.
                    </p>
                </motion.div>

                {/* Value Cards Grid */}
                <motion.div
                    className="grid-modern mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="card card-hover relative group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <motion.div
                                    className="text-6xl mb-6"
                                    variants={floatingVariants}
                                    animate="float"
                                    style={{ animationDelay: `${index * 0.5}s` }}
                                >
                                    {value.icon}
                                </motion.div>
                                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                                    {value.title}
                                </h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Counter
                                value={stat.value}
                                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                                delay={0.6 + index * 0.1}
                            />
                            <div className="text-neutral-400 font-medium text-sm sm:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ValueProposition;