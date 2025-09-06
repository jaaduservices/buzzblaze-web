import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Coffee,
    Heart,
    Plane,
    Rocket,
    Building2,
    Car,
    GraduationCap,
    ArrowRight
} from 'lucide-react';

const Expertise: React.FC = () => {
    const navigate = useNavigate();
    const expertiseAreas = [
        {
            id: 'cafes-hotels',
            title: 'Cafes & Hotels',
            description: 'Creating memorable experiences that keep guests coming back',
            icon: Coffee,
            color: 'from-amber-500 to-orange-500',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/20',
        },
        {
            id: 'healthcare',
            title: 'Healthcare',
            description: 'Building trust and connecting patients with quality care',
            icon: Heart,
            color: 'from-orange-500 to-pink-500',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/20',
        },
        {
            id: 'travel-transportation',
            title: 'Travels & Transportation',
            description: 'Attract ready to book with targeted data driven marketing campaign',
            icon: Plane,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20',
        },
        {
            id: 'tech-startup',
            title: 'Tech Startup',
            description: 'Launching innovations that disrupt and transform industries',
            icon: Rocket,
            color: 'from-purple-500 to-indigo-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20',
        },
        {
            id: 'real-estate',
            title: 'Real Estate',
            description: 'Turning properties into dreams and investments into success',
            icon: Building2,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/20',
        },
        {
            id: 'automobile',
            title: 'Automobile',
            description: 'Driving brand awareness in the fast lane of innovation',
            icon: Car,
            color: 'from-gray-500 to-slate-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-gray-500/20',
        },
        {
            id: 'educational',
            title: 'Educational Institutions',
            description: 'Empowering education through strategic digital presence',
            icon: GraduationCap,
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-teal-500/10',
            borderColor: 'border-teal-500/20',
        },
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

    const itemVariants = {
        hidden: { y: 60, opacity: 0 },
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
        <section className="relative section-padding bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Animated gradient mesh */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-netflix-500/5 via-transparent to-orange-500/5"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-netflix-500/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -50, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 8,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    {/* Section Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-netflix-500/10 border border-netflix-500/20 mb-6"
                    >
                        <div className="w-2 h-2 bg-netflix-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-netflix-400 uppercase tracking-wide">
                            Our Expertise
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="section-title mb-6"
                    >
                        We Expertise{' '}
                        <motion.span
                            className="bg-gradient-to-r from-netflix-500 via-orange-500 to-netflix-400 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            In
                        </motion.span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="section-subtitle max-w-3xl mx-auto"
                    >
                        From startups to enterprises, we've mastered the art of digital transformation
                        across diverse industries, delivering tailored solutions that drive real results.
                    </motion.p>
                </motion.div>

                {/* Expertise Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                >
                    {expertiseAreas.map((area) => (
                        <motion.div
                            key={area.id}
                            variants={itemVariants}
                            className={`relative group p-6 rounded-2xl border ${area.borderColor} ${area.bgColor} backdrop-blur-sm hover:border-netflix-500/40 transition-all duration-500 cursor-pointer overflow-hidden`}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Hover Background Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-netflix-500/10 to-transparent opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                            />

                            {/* Icon */}
                            <motion.div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${area.color} p-3 mb-4 relative z-10`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <area.icon className="w-full h-full text-white" />
                            </motion.div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-netflix-400 transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4 group-hover:text-neutral-300 transition-colors">
                                    {area.description}
                                </p>

                                {/* Arrow Icon */}
                                <motion.div
                                    className="flex items-center text-netflix-500 opacity-0 group-hover:opacity-100"
                                    initial={{ x: -10 }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-sm font-medium mr-2">Learn More</span>
                                    <ArrowRight size={16} />
                                </motion.div>
                            </div>

                            {/* Decorative Element */}
                            <motion.div
                                className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-netflix-500/10 to-transparent opacity-0 group-hover:opacity-100"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-netflix-500 to-orange-600 text-white font-semibold rounded-xl hover:from-netflix-600 hover:to-orange-700 transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                    >
                        <span>Discuss Your Industry</span>
                        <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight size={20} />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;