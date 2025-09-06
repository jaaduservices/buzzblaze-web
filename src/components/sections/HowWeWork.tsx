import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Counter } from '../ui';


const HowWeWork: React.FC = () => {
    const navigate = useNavigate();
    const workflowSteps = [
        {
            step: "01",
            title: "Strategy",
            description: "Deep-dive analysis into your brand, audience, and market to craft a winning strategy that drives results",
            icon: "🎯",
            color: "from-accent-500 to-accent-600"
        },
        {
            step: "02",
            title: "Research",
            description: "Comprehensive market research and competitor analysis to identify opportunities and your unique edge",
            icon: "🔍",
            color: "from-electric-500 to-electric-600"
        },
        {
            step: "03",
            title: "Creative Execution",
            description: "Transform insights into stunning visuals and compelling content that resonates with your audience",
            icon: "🎨",
            color: "from-accent-400 to-electric-500"
        },
        {
            step: "04",
            title: "Launch & Optimize",
            description: "Strategic deployment with continuous monitoring, testing, and optimization for maximum performance",
            icon: "🚀",
            color: "from-electric-400 to-accent-500"
        }
    ];

    const comparisonData = [
        {
            feature: "Approach",
            us: "Tailor-made solutions for YOU",
            others: "One-size-fits-all templates",
            usIcon: "✅",
            othersIcon: "❌"
        },
        {
            feature: "Design Quality",
            us: "Designs crafted with precision & love",
            others: "Generic templates slapped together",
            usIcon: "✅",
            othersIcon: "❌"
        },
        {
            feature: "Client Focus",
            us: "Championing every brand equally",
            others: "Only big-budget clients matter",
            usIcon: "✅",
            othersIcon: "❌"
        },
        {
            feature: "Communication",
            us: "Clear, transparent communication",
            others: "Confusing jargon & buzzwords",
            usIcon: "✅",
            othersIcon: "❌"
        },
        {
            feature: "Partnership",
            us: "Long-term partnerships that grow",
            others: "Relationship ends with payment",
            usIcon: "✅",
            othersIcon: "❌"
        },
        {
            feature: "Strategy",
            us: "Adaptive strategies that evolve",
            others: "Set it and forget it approach",
            usIcon: "✅",
            othersIcon: "❌"
        },
        {
            feature: "Content",
            us: "Brand-aligned creative excellence",
            others: "Generic content for everyone",
            usIcon: "✅",
            othersIcon: "❌"
        },
        {
            feature: "Treatment",
            us: "You're our priority, always!",
            others: "You're just another number",
            usIcon: "✅",
            othersIcon: "❌"
        }
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

    const stepVariants = {
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

    const comparisonVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-neutral-900/40 to-background" />

            {/* Animated background elements */}
            <motion.div
                className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-electric-500/15 to-accent-500/15 rounded-full blur-3xl -z-10"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -80, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut" as const
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-accent-500/15 to-electric-500/15 rounded-full blur-3xl -z-10"
                animate={{
                    x: [0, -120, 0],
                    y: [0, 60, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut" as const
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
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500/20 to-accent-500/20 px-6 py-3 rounded-full border border-electric-500/30 mb-8"
                    >
                        <span className="text-2xl">⚙️</span>
                        <span className="text-sm font-medium text-electric-400 uppercase tracking-wider">Our Process</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        How We{' '}
                        <span className="gradient-text">Achieve Results</span>
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Our proven methodology that transforms vision into reality, backed by strategy,
                        creativity, and measurable outcomes.
                    </p>
                </motion.div>

                {/* Workflow Steps */}
                <motion.div
                    className="mb-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connection Lines */}
                        <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-accent-500/50 via-electric-500/50 to-accent-500/50 rounded-full"></div>

                        {workflowSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                className="relative text-center group"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Step Circle */}
                                <motion.div
                                    className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-full flex flex-col items-center justify-center shadow-glow relative z-10 overflow-hidden`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <span className="text-3xl mb-1 relative z-10">{step.icon}</span>
                                    <Counter
                                        value={step.step}
                                        className="text-white font-bold text-sm relative z-10"
                                        delay={0.5 + index * 0.2}
                                        duration={1500}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatDelay: 3 + index,
                                            ease: "easeInOut" as const
                                        }}
                                    />
                                </motion.div>

                                {/* Step Content */}
                                <div className="card-glass group-hover:bg-white/10 transition-all duration-300 h-full min-h-[200px]">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Section Divider */}
                <div className="flex justify-center mb-16">
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent rounded-full"></div>
                </div>

                {/* Comparison Section */}
                <motion.div
                    className="card-glass max-w-6xl mx-auto relative z-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="card-title mb-6">
                            Buzzblaze Media{' '}
                            <span className="gradient-text">VS</span>{' '}
                            Other Agencies
                        </h3>
                        <p className="mobile-text-base text-neutral-300">
                            Discover the differences that make us your ideal digital partner
                        </p>
                    </div>

                    <div className="overflow-x-auto pb-4">
                        <div className="min-w-[600px] sm:min-w-full">
                            {/* Comparison Header */}
                            <motion.div
                                className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="p-2 sm:p-4">
                                    <h4 className="text-sm sm:text-lg font-semibold text-neutral-300">Features</h4>
                                </div>
                                <div className="bg-gradient-to-r from-accent-500 to-electric-500 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-glow">
                                    <h4 className="text-sm sm:text-lg font-bold text-white">Buzzblaze Media</h4>
                                </div>
                                <div className="bg-neutral-800/50 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-neutral-700/50">
                                    <h4 className="text-sm sm:text-lg font-semibold text-neutral-400">Other Agencies</h4>
                                </div>
                            </motion.div>

                            {/* Comparison Rows */}
                            <motion.div
                                className="space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {comparisonData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={comparisonVariants}
                                        className="grid grid-cols-3 gap-3 sm:gap-6 items-center p-2 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 border border-neutral-800/30 hover:border-accent-500/30"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="font-medium text-white text-xs sm:text-sm md:text-base">
                                            {item.feature}
                                        </div>
                                        <div className="flex items-center space-x-1 sm:space-x-3 text-xs sm:text-sm">
                                            <motion.span
                                                className="text-green-400 text-sm sm:text-lg"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                            >
                                                {item.usIcon}
                                            </motion.span>
                                            <span className="text-neutral-200">{item.us}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 sm:space-x-3 text-xs sm:text-sm">
                                            <span className="text-orange-400 text-sm sm:text-lg">{item.othersIcon}</span>
                                            <span className="text-neutral-400">{item.others}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="text-neutral-400 mb-6 text-lg">
                            Ready to experience the Buzzblaze Media difference?
                        </p>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                        >
                            Start Your Transformation
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowWeWork;