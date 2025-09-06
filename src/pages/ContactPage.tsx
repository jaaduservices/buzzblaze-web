import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MessageCircle,
    Instagram as InstagramIcon,
    Facebook as FacebookIcon,
    Linkedin as LinkedinIcon
} from 'lucide-react';
import { Header } from '../components/sections';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        serviceType: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                companyName: '',
                serviceType: '',
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-dark font-sans antialiased">
            <Header />

            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-background via-neutral-900 to-background pt-24 lg:pt-32 relative overflow-hidden">
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
                    <div className="text-center max-w-5xl mx-auto transform transition-all duration-1000 ease-out">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                            Need FREE consulting?
                        </h1>
                        <div className="text-lg lg:text-xl text-neutral-300 space-y-6 mb-12 leading-relaxed">
                            <p className="leading-8 text-base lg:text-lg">
                                Whether your sales are stuck or whether you are a new brand, whether you want to give your brand a new identity or whether you want to create something that your audience remembers, whether you want to grow your social media presence or your clientele, we can provide you customized solutions as per your needs.
                            </p>
                            <p className="font-semibold text-white text-xl lg:text-2xl mt-8">
                                It all begins with a conversation. Let's start today!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding bg-gradient-to-br from-neutral-900 to-background relative overflow-hidden">
                {/* Background elements */}
                <motion.div
                    className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-netflix-500/10 to-orange-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                            Please fill out the form below for a free consultation for our marketing services and we
                            will contact you before your morning coffee kicks in!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    In case of any further queries, feel free to contact us.
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-netflix-500/20 rounded-lg flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-netflix-400" />
                                        </div>
                                        <div>
                                            <p className="text-neutral-400 font-medium">Mail</p>
                                            <p className="text-white font-semibold text-lg">connect@buzzblaze.media</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-netflix-500/20 rounded-lg flex items-center justify-center">
                                            <InstagramIcon className="w-6 h-6 text-netflix-400" />
                                        </div>
                                        <div>
                                            <p className="text-neutral-400 font-medium">Instagram</p>
                                            <p className="text-white font-semibold text-lg">@buzzblaze</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-netflix-500/20 rounded-lg flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-netflix-400" />
                                        </div>
                                        <div>
                                            <p className="text-neutral-400 font-medium">Phone</p>
                                            <p className="text-white font-semibold text-lg">
                                                90345 17463
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                            <MessageCircle className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-neutral-400 font-medium">WhatsApp</p>
                                            <a
                                                href="https://wa.me/919034517463"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white font-semibold text-lg hover:text-green-400 transition-colors duration-300"
                                            >
                                                +91 90345 17463
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message Us CTA */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    className="btn-primary glow-effect"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Message us directly"
                                    type="button"
                                >
                                    Message us
                                </motion.button>
                                <motion.a
                                    href="https://wa.me/919034517463?text=Hi%20Buzzblaze%20Media,%20I'm%20interested%20in%20your%20marketing%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Contact us on WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>WhatsApp</span>
                                </motion.a>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4 mt-8">
                                <a href="https://www.instagram.com/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="Instagram">
                                    <InstagramIcon className="w-6 h-6 text-netflix-400" />
                                </a>
                                <a href="https://facebook.com/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="Facebook">
                                    <FacebookIcon className="w-6 h-6 text-netflix-400" />
                                </a>
                                <a href="https://linkedin.com/company/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="LinkedIn">
                                    <LinkedinIcon className="w-6 h-6 text-netflix-400" />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card relative">
                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thanks for submitting!</h3>
                                    <p className="text-neutral-300">We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6" noValidate role="form" aria-label="Contact form">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-white font-medium mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="form-input"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-white font-medium mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="form-input"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-white font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="companyName" className="block text-white font-medium mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="serviceType" className="block text-white font-medium mb-2">
                                            Service Type *
                                        </label>
                                        <select
                                            id="serviceType"
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            <option value="brand-strategy">Brand Strategy</option>
                                            <option value="digital-marketing">Digital Marketing</option>
                                            <option value="content-creation">Content Creation</option>
                                            <option value="seo-analytics">SEO & Analytics</option>
                                            <option value="social-media">Social Media Management</option>
                                            <option value="consulting">General Consulting</option>
                                        </select>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="btn-primary w-full glow-effect"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </div>
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
                                <li>
                                    <a
                                        href="https://wa.me/919034517463"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        WhatsApp: +91 90345 17463
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-netflix-400">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="Instagram">
                                    <InstagramIcon className="w-5 h-5 text-netflix-400" />
                                </a>
                                <a href="https://facebook.com/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="Facebook">
                                    <FacebookIcon className="w-5 h-5 text-netflix-400" />
                                </a>
                                <a href="https://linkedin.com/company/buzzblaze" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-netflix-500/20 rounded-lg flex items-center justify-center hover:bg-netflix-500/30 transition-colors" aria-label="LinkedIn">
                                    <LinkedinIcon className="w-5 h-5 text-netflix-400" />
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

export default ContactPage;