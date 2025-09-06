import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { serviceCategories } from '../../data/website-data';

const Services: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <Section id="services" className="content-section">
            <div className="container-custom">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        What we can do for you?
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        From design to marketing to social media management - we've got all your digital needs covered
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {serviceCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.id}
                            className="space-y-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                        >
                            {/* Category Header */}
                            <div className="text-center">
                                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                                    <span className="text-white">{category.title}</span>
                                    <br />
                                    <span className="gradient-text">{category.subtitle}</span>
                                </h3>
                                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                    {category.description}
                                </p>
                            </div>

                            {/* Services Grid */}
                            <motion.div
                                className="grid-modern"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.services.map((service) => (
                                    <motion.div
                                        key={service.id}
                                        variants={itemVariants}
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card
                                            title={service.title}
                                            description={service.description}
                                            icon={service.icon}
                                            className="h-full card-netflix"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Netflix-style separator */}
                            {categoryIndex < serviceCategories.length - 1 && (
                                <motion.div
                                    className="flex justify-center"
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <div className="w-24 h-1 bg-gradient-netflix rounded-full"></div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Netflix-style Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-gradient-card backdrop-blur-xl border border-neutral-800/30 rounded-xl p-8 lg:p-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to transform your business?
                        </h3>
                        <p className="text-lg text-text-secondary mb-8">
                            Let's discuss how we can help you achieve your goals
                        </p>
                        <motion.button
                            onClick={() => {
                                const contactSection = document.querySelector('#contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Now
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Services; 