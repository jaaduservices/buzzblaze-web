import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/buzzblaze',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/buzzblaze',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/company/buzzblaze',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <footer className="relative bg-gradient-netflix-dark border-t border-neutral-800/30">
            {/* Netflix-style background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-netflix-500/3 via-transparent to-orange-500/3" />
                <motion.div
                    className="absolute top-netflix-20 left-netflix-20 w-32 h-32 bg-netflix-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut" as const
                    }}
                />
            </div>

            <div className="container-custom py-netflix-20 relative z-10">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Company Info */}
                    <motion.div className="sm:col-span-2 lg:col-span-2" variants={itemVariants}>
                        <Link to="/" className="flex items-center space-x-netflix-3 mb-netflix-8 group">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="text-white text-xl lg:text-2xl font-bold tracking-tight">
                                    Buzzblaze Media
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-netflix-500/20 to-orange-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </Link>

                        <p className="text-text-secondary netflix-lg leading-relaxed mb-netflix-8 max-w-md">
                            We're not just an agency, we're your digital transformation partners.
                            Crafting experiences that convert and strategies that scale.
                        </p>

                        <div className="space-y-netflix-4">
                            {[
                                { icon: "📍", text: "Chandigarh | Bangalore, India" },
                                { icon: "📞", text: "90345 17463" },
                                { icon: "💬", text: "WhatsApp: +919034517463" },
                                { icon: "✉️", text: "connect@buzzblaze.media" }
                            ].map((contact, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center space-x-4 text-neutral-400 hover:text-white transition-colors duration-300 group"
                                    whileHover={{ x: 5 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <div className="w-8 h-8 bg-gradient-to-r from-netflix-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:from-netflix-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                                        <span className="text-sm">{contact.icon}</span>
                                    </div>
                                    <span>{contact.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-white mb-8">Quick Links</h3>
                        <div className="space-y-4">
                            {footerLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="block text-neutral-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform nav-link"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social & CTA */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-white mb-8">Stay Connected</h3>

                        {/* Social Links */}
                        <div className="flex space-x-4 mb-8">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-electric-500/20 border border-neutral-800/50 hover:border-accent-500/30 transition-all duration-300"
                                    aria-label={social.name}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Newsletter/CTA */}
                        <motion.div
                            className="card-glass p-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-3">Ready to Transform?</h4>
                            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                                Let's create something extraordinary together and take your brand to the next level.
                            </p>
                            <motion.button
                                className="w-full btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/contact')}
                            >
                                Start Your Journey
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="mt-20 pt-8 border-t border-neutral-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-neutral-400 text-center md:text-left">
                            <p>&copy; {currentYear} Buzzblaze Media. All Rights Reserved.</p>
                            <p className="text-sm mt-1">Crafted with ❤️ for digital excellence</p>
                        </div>

                        <div className="flex items-center space-x-8 text-sm">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-neutral-400 hover:text-white transition-colors duration-300 nav-link"
                                    whileHover={{ y: -2 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;