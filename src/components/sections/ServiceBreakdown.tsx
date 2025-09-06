import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceBreakdown: React.FC = () => {
    const navigate = useNavigate();
    
    const services = [
        {
            title: "Brand Design Excellence",
            description: "Visual identity that commands attention and drives engagement",
            items: [
                { icon: "🎨", text: "Modern Web Design" },
                { icon: "✨", text: "Brand Identity Systems" },
                { icon: "📱", text: "Digital Asset Creation" },
                { icon: "🎯", text: "UI/UX Optimization" },
                { icon: "🔄", text: "Brand Evolution" }
            ],
            gradient: "from-accent-500 to-accent-600",
            bgGradient: "from-accent-500/10 to-accent-600/10",
            path: "/services/brand-design"
        },
        {
            title: "Growth Marketing",
            description: "Data-driven strategies that scale your business exponentially",
            items: [
                { icon: "🚀", text: "Lead Generation Systems" },
                { icon: "📊", text: "Performance Analytics" },
                { icon: "🔍", text: "SEO & SEM Mastery" },
                { icon: "💰", text: "Conversion Optimization" },
                { icon: "⚡", text: "Growth Automation" }
            ],
            gradient: "from-electric-500 to-electric-600",
            bgGradient: "from-electric-500/10 to-electric-600/10",
            path: "/services/growth-marketing"
        },
        {
            title: "Content Strategy",
            description: "Content that converts, engages, and builds lasting relationships",
            items: [
                { icon: "📝", text: "Strategic Content Planning" },
                { icon: "🎬", text: "Video & Visual Content" },
                { icon: "📈", text: "Social Media Mastery" },
                { icon: "🔥", text: "Viral Content Creation" },
                { icon: "🎤", text: "Brand Storytelling" }
            ],
            gradient: "from-accent-400 to-electric-500",
            bgGradient: "from-accent-400/10 to-electric-500/10",
            path: "/services/content-strategy"
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

    const cardVariants = {
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

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-neutral-900/50 to-background" />

            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-500/20 to-electric-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-electric-500/20 to-accent-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 15,
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
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500/20 to-electric-500/20 px-6 py-3 rounded-full border border-accent-500/30 mb-8"
                    >
                        <span className="text-2xl">⚡</span>
                        <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">Our Services</span>
                    </motion.div>

                    <h2 className="section-title mb-6">
                        What We Can Do{' '}
                        <span className="gradient-text">For You</span>
                    </h2>
                    <p className="section-subtitle max-w-3xl mx-auto">
                        We're not just another agency. We're your growth partners with the expertise
                        to transform your digital presence into measurable business results.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Card Background with Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                            <div className="card card-hover relative z-10 h-full">
                                {/* Card Header */}
                                <div className="mb-8">
                                    <motion.div
                                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-glow relative overflow-hidden`}
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <span className="text-2xl relative z-10">✨</span>
                                        <motion.div
                                            className="absolute inset-0 bg-white/20"
                                            animate={{
                                                x: ['-100%', '100%'],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatDelay: 3,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Service Items */}
                                <div className="space-y-4 mb-8">
                                    {service.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={itemIndex}
                                            className="flex items-center space-x-4 text-neutral-300 hover:text-white transition-colors duration-200 group/item"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + itemIndex * 0.1 }}
                                        >
                                            <motion.span
                                                className="text-xl bg-white/5 w-10 h-10 rounded-lg flex items-center justify-center group-hover/item:bg-white/10 transition-colors duration-200"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {item.icon}
                                            </motion.span>
                                            <span className="font-medium">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Card Footer */}
                                <div className="mt-auto">
                                    <motion.button
                                        className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-glow text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group/btn`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => navigate(service.path)}
                                    >
                                        <span className="relative z-10">Explore Service</span>
                                        <motion.div
                                            className="absolute inset-0 bg-white/20"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: '100%' }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className="text-neutral-400 mb-8 text-lg">
                        Ready to transform your business with our expertise?
                    </p>
                    <div className="flex justify-center">
                        <motion.button
                            className="btn-primary w-full sm:w-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                        >
                            Start Your Project
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceBreakdown; 