import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Counter } from '../ui';

const BrandIdentity: React.FC = () => {
    const navigate = useNavigate();
    const stats = [
        { value: "50+", label: "Brands Transformed", color: "from-accent-500 to-accent-600" },
        { value: "300%", label: "Recognition Boost", color: "from-electric-500 to-electric-600" },
        { value: "100%", label: "Client Satisfaction", color: "from-accent-400 to-electric-500" }
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
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-500/20 to-electric-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 150, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-electric-500/20 to-accent-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 80, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-accent-400/10 to-electric-400/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
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
                    {/* Left Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-8"
                        variants={itemVariants}
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500/20 to-electric-500/20 px-6 py-3 rounded-full border border-accent-500/30 mb-8"
                            >
                                <span className="text-2xl">🎨</span>
                                <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">Brand Evolution</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Your Brand,{' '}
                                <span className="gradient-text">But Better.</span>
                            </h2>
                        </div>

                        <motion.div
                            className="space-y-6 text-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            <p className="text-neutral-300">
                                <span className="font-semibold text-white">Still using that same boring theme or outdated logo?</span><br />
                                <span className="text-accent-400">Does your brand even have its own identity?</span>
                            </p>

                            <p className="text-neutral-300">
                                Every successful brand needs a unique identity that resonates with its audience.
                                It's not just about looking good—it's about creating an emotional connection that drives loyalty and growth.
                            </p>

                            <p className="text-neutral-300">
                                Rebranding isn't just a fresh coat of paint—it's a complete transformation of how your audience
                                perceives, connects with, and remembers you. From sleek visuals to compelling messaging,
                                we'll unleash your brand's true potential.
                            </p>

                            <p className="text-xl font-semibold gradient-text">
                                Let's give your brand the identity it deserves!
                            </p>
                        </motion.div>

                        {/* Brand Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-6"
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

                        {/* CTA Button */}
                        <motion.div
                            variants={itemVariants}
                        >
                            <motion.button
                                className="btn-primary text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                Transform Your Brand
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Visual */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            {/* Main Brand Card */}
                            <motion.div
                                className="card-glass p-8 transform hover:rotate-0 transition-all duration-500"
                                initial={{ rotate: 3, scale: 0.9, opacity: 0 }}
                                whileInView={{ rotate: 3, scale: 1, opacity: 1 }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {/* Brand Preview - After */}
                                <motion.div
                                    className="bg-gradient-to-br from-white to-neutral-100 rounded-2xl p-6 mb-6"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.div
                                            className="w-12 h-12 bg-gradient-to-r from-accent-500 to-electric-500 rounded-xl shadow-glow"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="text-right">
                                            <div className="text-xs text-neutral-500 font-medium">AFTER</div>
                                            <div className="text-sm font-bold text-neutral-800">Professional</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <motion.div
                                            className="h-3 bg-gradient-to-r from-accent-500 to-electric-500 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6, duration: 0.8 }}
                                        />
                                        <motion.div
                                            className="h-2 bg-gradient-to-r from-electric-400 to-accent-400 rounded-full"
                                            style={{ width: "75%" }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "75%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.7, duration: 0.8 }}
                                        />
                                        <motion.div
                                            className="h-2 bg-gradient-to-r from-accent-400 to-electric-400 rounded-full"
                                            style={{ width: "50%" }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "50%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8, duration: 0.8 }}
                                        />
                                    </div>
                                </motion.div>

                                {/* VS Divider */}
                                <motion.div
                                    className="text-center py-4"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                >
                                    <span className="bg-gradient-to-r from-accent-500 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-glow">
                                        VS
                                    </span>
                                </motion.div>

                                {/* Old Brand Preview - Before */}
                                <motion.div
                                    className="bg-gradient-to-br from-neutral-300 to-neutral-400 rounded-2xl p-6"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-neutral-500 rounded-xl"></div>
                                        <div className="text-right">
                                            <div className="text-xs text-neutral-600 font-medium">BEFORE</div>
                                            <div className="text-sm font-bold text-neutral-700">Boring</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-3 bg-neutral-500 rounded-full"></div>
                                        <div className="h-2 bg-neutral-500 rounded-full w-3/4"></div>
                                        <div className="h-2 bg-neutral-500 rounded-full w-1/2"></div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-glow"
                                variants={floatingVariants}
                                animate="float"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                            >
                                <span className="text-2xl">✨</span>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-glow"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                style={{ animationDelay: "0.9s" }}
                            >
                                <span className="text-xl">🎨</span>
                            </motion.div>
                            <motion.div
                                className="absolute top-1/3 -left-8 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-glow"
                                variants={floatingVariants}
                                animate="float"
                                initial={{ scale: 0, x: -20 }}
                                whileInView={{ scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                            >
                                <span className="text-sm">💡</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandIdentity; 