import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Header } from '../components/sections';
import { Counter } from '../components/ui';

const BlogPage: React.FC = () => {
    const navigate = useNavigate();
    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            title: "The Art of Brand Storytelling in 2024",
            excerpt: "Learn how authentic storytelling can transform your brand's connection with customers and drive meaningful engagement in today's digital landscape."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            date: "Dec 12, 2024",
            readTime: "7 min read",
            title: "Data-Driven Marketing: Beyond the Numbers",
            excerpt: "Discover how to leverage data analytics to create more effective marketing campaigns while maintaining the human touch that customers crave."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
            date: "Dec 10, 2024",
            readTime: "4 min read",
            title: "Social Media Trends That Actually Matter",
            excerpt: "Cut through the noise and focus on the social media strategies that deliver real results for businesses in various industries."
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
            date: "Dec 8, 2024",
            readTime: "6 min read",
            title: "Building Brand Identity from Scratch",
            excerpt: "A comprehensive guide to creating a memorable brand identity that resonates with your target audience and stands the test of time."
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            date: "Dec 5, 2024",
            readTime: "8 min read",
            title: "The Psychology of Color in Marketing",
            excerpt: "Explore how different colors influence consumer behavior and learn to choose the perfect color palette for your brand's success."
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
            date: "Dec 3, 2024",
            readTime: "5 min read",
            title: "ROI Strategies for Small Business Marketing",
            excerpt: "Practical tips and proven strategies to maximize your marketing return on investment, even with limited budgets and resources."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-dark font-sans antialiased">
            <Header />

            {/* Hero Section */}
            <motion.section
                className="section-padding bg-gradient-to-br from-background via-neutral-900 to-background pt-24 lg:pt-32 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Netflix-style background elements */}
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-netflix-500/20 to-orange-500/20 rounded-full blur-3xl"
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
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                            Unfiltered Insights
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                            Raw thoughts, proven strategies, and honest perspectives on branding, marketing, and building businesses that matter. No fluff, just insights that work.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Blog Grid */}
            <section className="section-padding bg-gradient-to-b from-background to-neutral-900">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="card card-hover group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className="relative overflow-hidden rounded-xl mb-6">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 text-sm text-neutral-400">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4" />
                                            <span>
                                                <Counter
                                                    value={post.readTime.split(' ')[0]}
                                                    className="inline"
                                                    delay={0.3 + index * 0.1}
                                                    duration={1000}
                                                />
                                                {` ${post.readTime.split(' ').slice(1).join(' ')}`}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-netflix-400 transition-colors duration-300">
                                        {post.title}
                                    </h2>

                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-netflix-400 font-semibold group-hover:text-netflix-300 transition-colors duration-300">
                                        <span className="mr-2">Read More</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Load More Section */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="btn-primary glow-effect"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                        >
                            Load More Articles
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="section-padding bg-gradient-to-br from-neutral-900 to-background relative overflow-hidden">
                {/* Background elements */}
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-netflix-500/10 to-orange-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="container-custom relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Stay Updated with Our Latest Insights
                        </h2>
                        <p className="text-xl text-neutral-300 mb-8">
                            Get exclusive marketing tips and industry insights delivered to your inbox every week.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-input flex-1"
                            />
                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-900 text-white py-16 border-t border-neutral-800/50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-netflix-400">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="/" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">Homepage</a></li>
                                <li><a href="/services" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">Services</a></li>
                                <li><a href="/portfolio" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">Portfolio</a></li>
                                <li><a href="/about" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">About</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-netflix-400">Services</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">Brand Strategy</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">Digital Marketing</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">Content Creation</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-netflix-400 transition-colors duration-300">SEO & Analytics</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-netflix-400">Contact</h3>
                            <ul className="space-y-3">
                                <li className="text-neutral-300">connect@buzzblaze.media</li>
                                <li className="text-neutral-300">90345 17463</li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-netflix-400">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="Instagram">
                                    <Instagram className="w-5 h-5 text-netflix-400" />
                                </a>
                                <a href="https://facebook.com/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="Facebook">
                                    <Facebook className="w-5 h-5 text-netflix-400" />
                                </a>
                                <a href="https://linkedin.com/company/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5 text-netflix-400" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800/50 mt-12 pt-8 text-center">
                        <p className="text-neutral-400">
                            © 2024 Buzzblaze Media. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlogPage;