import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { testimonials } from '../../data/website-data';
import { Counter } from '../ui';

const Testimonials: React.FC = () => {
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentTestimonial(index);
    };

    // Use default person photo for all testimonials
    const getImageUrl = () => {
        return 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
    };

    const cardVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        })
    };

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-neutral-900/30 to-background" />

            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-500/20 to-electric-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-electric-500/20 to-accent-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 120, 0],
                    y: [0, -60, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 25,
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
                        <span className="text-2xl">💬</span>
                        <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">Client Love</span>
                    </motion.div>

                    <h2 className="section-title mb-6">
                        What They're{' '}
                        <span className="gradient-text">Sayin'</span>
                    </h2>
                    <p className="section-subtitle max-w-3xl mx-auto">
                        Don't just take our word for it - hear the success stories from brands
                        who've transformed their digital presence with us.
                    </p>
                </motion.div>

                {/* Testimonial Carousel with External Navigation */}
                <div className="relative max-w-7xl mx-auto mb-16">
                    {/* Navigation Arrows - Outside the testimonial container */}
                    <motion.button
                        onClick={prevTestimonial}
                        className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-accent-500/20 to-electric-500/20 backdrop-blur-sm rounded-full border border-accent-500/30 hover:border-accent-500/60 flex items-center justify-center text-accent-400 hover:text-accent-300 transition-all duration-300 z-20 shadow-lg hover:shadow-glow group"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 88, 88, 0.25)" }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <motion.button
                        onClick={nextTestimonial}
                        className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-accent-500/20 to-electric-500/20 backdrop-blur-sm rounded-full border border-accent-500/30 hover:border-accent-500/60 flex items-center justify-center text-accent-400 hover:text-accent-300 transition-all duration-300 z-20 shadow-lg hover:shadow-glow group"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 88, 88, 0.25)" }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>

                    {/* Testimonial Container - No navigation buttons inside */}
                    <div className="max-w-5xl mx-auto px-8 sm:px-16">
                        <AnimatePresence mode="wait" custom={currentTestimonial}>
                            <motion.div
                                key={currentTestimonial}
                                custom={currentTestimonial}
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.4 }
                                }}
                                className="card-glass relative overflow-hidden"
                            >
                                {/* Background Gradient Effects */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/20 to-electric-500/20 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-electric-500/20 to-accent-500/20 rounded-full translate-y-12 -translate-x-12"></div>

                                <div className="relative z-10">
                                    {/* Quote Icon */}
                                    <motion.div
                                        className="w-16 h-16 bg-gradient-to-r from-accent-500 to-electric-500 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-glow"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                    >
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                        </svg>
                                    </motion.div>

                                    {/* Testimonial Content */}
                                    <div className="text-center md:text-left">
                                        <motion.p
                                            className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-8 italic"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            "{testimonials[currentTestimonial].content}"
                                        </motion.p>

                                        <motion.div
                                            className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {/* Client Photo */}
                                            <motion.div
                                                className="relative"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <img
                                                    src={getImageUrl()}
                                                    alt={testimonials[currentTestimonial].name}
                                                    className="w-16 h-16 rounded-full object-cover border-4 border-accent-500 shadow-glow"
                                                />
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-500/20 to-electric-500/20"></div>
                                            </motion.div>

                                            {/* Client Info */}
                                            <div className="text-center md:text-left">
                                                <h4 className="text-xl font-bold text-white mb-1">
                                                    {testimonials[currentTestimonial].name}
                                                </h4>
                                                <p className="text-accent-400 font-semibold mb-1">
                                                    {testimonials[currentTestimonial].role}
                                                </p>
                                                <p className="text-neutral-400 mb-3">
                                                    {testimonials[currentTestimonial].company}
                                                </p>

                                                {/* Rating */}
                                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <motion.svg
                                                                key={i}
                                                                className={`w-5 h-5 fill-current ${i < testimonials[currentTestimonial].rating
                                                                    ? 'text-yellow-400'
                                                                    : 'text-gray-600'
                                                                    }`}
                                                                viewBox="0 0 24 24"
                                                                initial={{ scale: 0, rotate: -180 }}
                                                                animate={{ scale: 1, rotate: 0 }}
                                                                transition={{
                                                                    delay: 0.6 + i * 0.1,
                                                                    type: "spring",
                                                                    stiffness: 200
                                                                }}
                                                                whileHover={{
                                                                    scale: 1.2,
                                                                    rotate: 15,
                                                                    filter: "drop-shadow(0 0 8px #fbbf24)"
                                                                }}
                                                            >
                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                            </motion.svg>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Counter
                                                            value={testimonials[currentTestimonial].rating.toString()}
                                                            className="text-yellow-400 font-bold text-lg"
                                                            delay={1.0}
                                                            duration={1000}
                                                        />
                                                        <span className="text-yellow-400 font-bold text-lg">/5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dots */}
                <motion.div
                    className="flex justify-center mb-16 space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                ? 'bg-gradient-to-r from-accent-500 to-electric-500 scale-125 shadow-glow'
                                : 'bg-neutral-600 hover:bg-neutral-500'
                                }`}
                            whileHover={{ scale: index === currentTestimonial ? 1.25 : 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <p className="text-lg text-neutral-400 mb-8">
                        Ready to join our growing list of success stories?
                    </p>
                    <div className="flex justify-center">
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                        >
                            Start Your Success Story
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials; 