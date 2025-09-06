import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { features } from '../../data/website-data';

const About: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <Section id="about" className="content-section">
            <div className="container-custom">
                {/* Main About Content */}
                <motion.div
                    className="text-center mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-white mb-6"
                        variants={itemVariants}
                    >
                        What makes us your brand's{' '}
                        <span className="gradient-text">BFF?</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        We're not just an agency, we're your creativity crew and growth geeks.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid-modern mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <Card
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                className="h-full text-center card-netflix"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Comparison Section */}
                <motion.div
                    className="bg-gradient-card backdrop-blur-xl border border-neutral-800/30 rounded-xl p-8 lg:p-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
                        How we achieve?
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Others */}
                        <motion.div
                            className="space-y-netflix-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="netflix-2xl font-bold text-orange-400 mb-netflix-8 text-center">
                                Others vs Us
                            </h4>
                            <div className="space-y-netflix-4">
                                {[
                                    '"One-size-fits-all" approach',
                                    'Templates slapped together',
                                    'Focused on big-budget clients',
                                    'Confusing jargon overload',
                                    'Priority ends with payment',
                                    'Set it, forget it strategies',
                                    'Generic posts for everyone',
                                    'You\'re just another number'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-netflix-3 bg-orange-500/10 p-netflix-4 rounded-netflix border border-orange-500/20"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-text-secondary netflix-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Us */}
                        <motion.div
                            className="space-y-netflix-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h4 className="netflix-2xl font-bold text-netflix-500 mb-netflix-8 text-center">
                                Buzzblaze Media Way
                            </h4>
                            <div className="space-y-netflix-4">
                                {[
                                    'Tailor-made for YOU solutions',
                                    'Designs crafted with love & detail',
                                    'Championing startups & small brands',
                                    'Clear, simple, no-fluff communication',
                                    'Partnerships that grow with you',
                                    'Strategies that adapt & evolve',
                                    'Creatives that match your brand vibe',
                                    'You\'re THE priority!'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-netflix-3 bg-netflix-500/10 p-netflix-4 rounded-netflix border border-netflix-500/20"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 107, 53, 0.15)' }}
                                    >
                                        <div className="w-2 h-2 bg-netflix-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-text-secondary netflix-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Netflix-style Impact Statement */}
                <motion.div
                    className="text-center mt-netflix-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <motion.h3
                            className="netflix-5xl lg:netflix-6xl font-black mb-netflix-8 leading-tight"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <span className="text-white">because</span>
                            <br />
                            <span className="text-netflix-500">BORING BRANDS</span>
                            <br />
                            <span className="text-netflix-500">DON'T MAKE</span>
                            <br />
                            <span className="gradient-text">BUCKS!</span>
                        </motion.h3>
                        <motion.div
                            className="inline-flex items-center justify-center bg-netflix-500/20 backdrop-blur-sm border border-netflix-500/30 rounded-netflix-lg px-netflix-6 py-netflix-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 107, 53, 0.3)' }}
                        >
                            <span className="netflix-lg text-white font-medium">
                                Know How
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;