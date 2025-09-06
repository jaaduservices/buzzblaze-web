import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ui';

const ClientWork: React.FC = () => {
    const clientProjects = [
        {
            id: 1,
            title: "E-commerce Revolution",
            client: "TechStore Pro",
            category: "Web Design & Development",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            description: "Complete e-commerce transformation with seamless user experience and conversion optimization",
            metrics: { growth: "300%", timeline: "3 months", satisfaction: "98%" },
            color: "from-accent-500 to-accent-600"
        },
        {
            id: 2,
            title: "Brand Identity Makeover",
            client: "Green Earth Co.",
            category: "Branding & Logo Design",
            image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=300&fit=crop",
            description: "Complete brand refresh with modern identity system and visual consistency",
            metrics: { growth: "250%", timeline: "2 months", satisfaction: "100%" },
            color: "from-electric-500 to-electric-600"
        },
        {
            id: 3,
            title: "Social Media Explosion",
            client: "FitLife Studio",
            category: "Social Media Marketing",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
            description: "Social media strategy that built engaged community and drove massive growth",
            metrics: { growth: "500K+", timeline: "6 months", satisfaction: "95%" },
            color: "from-accent-400 to-electric-500"
        },
        {
            id: 4,
            title: "Lead Generation Mastery",
            client: "BusinessBoost",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            description: "Advanced lead generation system delivering high-quality prospects consistently",
            metrics: { growth: "1000%", timeline: "4 months", satisfaction: "99%" },
            color: "from-electric-400 to-accent-500"
        },
        {
            id: 5,
            title: "Content Strategy Success",
            client: "Creative Minds",
            category: "Content Marketing",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
            description: "Content strategy that established thought leadership and organic growth",
            metrics: { growth: "450%", timeline: "5 months", satisfaction: "97%" },
            color: "from-accent-500 to-electric-400"
        },
        {
            id: 6,
            title: "SEO Domination",
            client: "Local Heroes",
            category: "SEO & Analytics",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
            description: "SEO optimization strategy achieving top rankings and sustained visibility",
            metrics: { growth: "2000%", timeline: "8 months", satisfaction: "100%" },
            color: "from-electric-500 to-accent-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
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
            <div className="absolute inset-0 bg-gradient-to-b from-background via-neutral-900/30 to-background" />

            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-electric-500/20 to-accent-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-accent-500/20 to-electric-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 20,
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
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500/20 to-accent-500/20 px-6 py-3 rounded-full border border-electric-500/30 mb-8"
                    >
                        <span className="text-2xl">🏆</span>
                        <span className="text-sm font-medium text-electric-400 uppercase tracking-wider">Success Stories</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        For Our{' '}
                        <span className="gradient-text">Happy Clients</span>
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Discover the amazing results we've achieved together. Each project tells a story of
                        transformation, growth, and success that speaks to our commitment to excellence.
                    </p>
                </motion.div>

                {/* Client Work Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {clientProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            client={project.client}
                            category={project.category}
                            image={project.image}
                            description={project.description}
                            metrics={project.metrics}
                            color={project.color}
                            index={index}
                            cardVariants={cardVariants}
                        />
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className="text-neutral-400 mb-8 text-lg">
                        Ready to become our next success story?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Projects
                        </motion.button>
                        <motion.button
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientWork; 