import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Globe,
    Palette,
    Share2,
    Target,
    Lightbulb,
    Heart,
    Mail,
    Phone,
    MapPin,
    Instagram,
    Facebook,
    Linkedin,
    ArrowRight,
    CheckCircle,
    Star,
    TrendingUp,
    Users,
    Clock,
    Award,
    Zap,
    PieChart,
    Shield,
    MessageCircle
} from 'lucide-react';
import { Header, Footer } from '../components/sections';
import { Counter } from '../components/ui';

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
};

const ServicesPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        serviceType: '',
    });

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
        // Handle form submission here
    };

    const services = [
        {
            icon: Globe,
            title: 'Website Design',
            description: 'Think of your website as your brand\'s 24/7 salesperson—it needs to be persuasive, stylish, and fast! We don\'t just create pretty pages, we craft digital experiences that guide visitors effortlessly and leave a lasting impression.',
            features: ['Responsive Design', 'SEO Optimized', '24/7 Support', 'Fast Loading'],
            color: 'from-purple-400 to-pink-400',
            glowColor: 'shadow-purple-500/20'
        },
        {
            icon: Palette,
            title: 'Graphic Design',
            description: 'Design is the silent ambassador of your brand, and we\'re fluent in its language. Whether it\'s your brand logo, eye-catching social media posts, banners, sleek flyers, or jaw-dropping images.',
            features: ['Brand Identity', 'Social Graphics', 'Print Design', 'Creative Direction'],
            color: 'from-blue-400 to-cyan-400',
            glowColor: 'shadow-blue-500/20'
        },
        {
            icon: Share2,
            title: 'Social Media Management',
            description: 'Social media is more than just likes and shares—it\'s your brand\'s stage, and we\'re the directors behind the curtain. From curating eye-catching posts to handling the nitty-gritty of schedules.',
            features: ['Content Strategy', 'Community Management', 'Analytics', 'Paid Campaigns'],
            color: 'from-green-400 to-emerald-400',
            glowColor: 'shadow-green-500/20'
        },
        {
            icon: Target,
            title: 'Lead Generation',
            description: 'Why fish in an empty pond? With us, every lead you catch is worth keeping. We use cutting-edge targeting and engaging strategies to reel in prospects who are genuinely interested.',
            features: ['Targeted Campaigns', 'A/B Testing', 'CRM Integration', 'ROI Tracking'],
            color: 'from-orange-400 to-orange-400',
            glowColor: 'shadow-orange-500/20'
        },
        {
            icon: Lightbulb,
            title: 'Creative Content',
            description: 'Whether it\'s posts, videos, or those short, snappy captions, we create content with 100% potential to go viral. We tell your brand\'s story in a way that sticks.',
            features: ['Video Production', 'Copywriting', 'Photography', 'Content Strategy'],
            color: 'from-yellow-400 to-orange-400',
            glowColor: 'shadow-yellow-500/20'
        },
        {
            icon: Heart,
            title: 'Brand Engagement',
            description: 'Your social media is not just a platform but a daily TV show that your customers should watch daily. We help you build meaningful connections with your audience.',
            features: ['Community Building', 'Interactive Campaigns', 'Influencer Partnerships', 'Brand Loyalty'],
            color: 'from-pink-400 to-rose-400',
            glowColor: 'shadow-pink-500/20'
        }
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Discovery & Strategy',
            description: 'We dive deep into your brand, audience, and goals to create a roadmap for success.',
            icon: Target
        },
        {
            step: '02',
            title: 'Creative Development',
            description: 'Our team crafts compelling visuals and content that resonates with your audience.',
            icon: Palette
        },
        {
            step: '03',
            title: 'Launch & Optimize',
            description: 'We launch your campaigns and continuously optimize for maximum performance.',
            icon: TrendingUp
        },
        {
            step: '04',
            title: 'Scale & Grow',
            description: 'Once we find what works, we scale successful strategies to accelerate growth.',
            icon: Zap
        }
    ];

    const stats = [
        { number: '150+', label: 'Happy Clients', icon: Users },
        { number: '500+', label: 'Projects Completed', icon: CheckCircle },
        { number: '98%', label: 'Client Satisfaction', icon: Star },
        { number: '24/7', label: 'Support Available', icon: Clock }
    ];

    const benefits = [
        {
            icon: Award,
            title: 'Proven Results',
            description: 'Track record of delivering measurable outcomes for our clients across industries.'
        },
        {
            icon: Shield,
            title: 'Reliable Partnership',
            description: 'We\'re not just service providers - we\'re your dedicated growth partners.'
        },
        {
            icon: PieChart,
            title: 'Data-Driven Approach',
            description: 'Every decision is backed by analytics and performance metrics.'
        },
        {
            icon: MessageCircle,
            title: 'Clear Communication',
            description: 'Regular updates, transparent reporting, and direct access to our team.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
            {/* Floating particles background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -inset-10 opacity-50">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 10,
                            }}
                        />
                    ))}
                </div>
            </div>

            <Header />

            {/* Hero Section */}
            <motion.section
                className="section-padding pt-32 pb-20 relative overflow-hidden"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
                <div className="container-custom relative">
                    <motion.div
                        className="text-center max-w-5xl mx-auto"
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 bg-glass backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-8"
                            variants={scaleIn}
                        >
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="text-gray-300">Trusted by 150+ brands worldwide</span>
                        </motion.div>

                        <motion.h1
                            className="text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                            variants={fadeInUp}
                        >
                            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                Crafting Brands,
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Not Just Campaigns!
                            </span>
                        </motion.h1>

                        <motion.div
                            className="text-xl text-gray-300 space-y-6 mb-12 leading-relaxed max-w-4xl mx-auto"
                            variants={fadeInUp}
                        >
                            <p className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                                Here's the deal:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 text-left">
                                <div className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        We don't do boring. Our services are like your chai—classic essentials with a twist of masala.
                                        Whether it's designing content that wow, generating leads that converts, or turning social media
                                        into your brand's playground.
                                    </p>
                                </div>
                                <div className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        We are honestly aware that likes and content are of no use if the brand doesn't ultimately sell.
                                        That's why we aim to make you reach out to the audience that actually converts into your client!
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            variants={fadeInUp}
                        >
                            <motion.button
                                className="btn-primary group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                Get Started Today
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/portfolio')}
                            >
                                View Our Work
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
                        variants={staggerContainer}
                    >
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                                    variants={scaleIn}
                                    whileHover={{ y: -5 }}
                                >
                                    <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <Counter
                                        value={stat.number}
                                        className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                                        delay={index * 0.1}
                                    />
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Grid */}
            <motion.section
                className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950/50 relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Our Services
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive digital marketing solutions designed to elevate your brand and drive real results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className={`group bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 ${service.glowColor} hover:shadow-2xl`}
                                    variants={scaleIn}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-sm text-gray-400">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="mt-6 w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 py-3 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => navigate('/contact')}
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Process Section */}
            <motion.section
                className="section-padding relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Our Process
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A proven methodology that delivers consistent results for our clients
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative group"
                                    variants={scaleIn}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                                            {step.step}
                                        </div>
                                        <IconComponent className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                        <p className="text-gray-300">{step.description}</p>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-y-1/2" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section
                className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950/50"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Why Choose Us?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We're not just another agency - we're your growth partners
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                                    variants={scaleIn}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="section-padding relative overflow-hidden"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30" />
                <div className="container-custom relative text-center">
                    <motion.div
                        className="bg-glass backdrop-blur-md border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Ready to Transform Your Brand?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's create something amazing together. Start your journey to digital success today.
                        </p>
                        <motion.button
                            className="btn-primary text-lg px-8 py-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                        >
                            Get Your Free Consultation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
            <motion.section
                className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Let's Elevate Together!
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Fill out the form below for a free consultation and we'll contact you before your morning coffee kicks in!
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <motion.div
                            className="space-y-8"
                            variants={fadeInUp}
                        >
                            <div className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Get in Touch
                                </h3>
                                <div className="space-y-6">
                                    <motion.div
                                        className="flex items-center space-x-4 group"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Email</p>
                                            <p className="text-white font-semibold">connect@buzzblaze.media</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-4 group"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Phone</p>
                                            <p className="text-white font-semibold">90345 17463</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-4 group"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Location</p>
                                            <p className="text-white font-semibold">Chandigarh | Bangalore</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-4 group"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Instagram className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Instagram</p>
                                            <p className="text-white font-semibold">@buzzblaze</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {[
                                    { icon: Instagram, href: 'https://www.instagram.com/buzzblaze' },
                                    { icon: Facebook, href: 'https://facebook.com/buzzblaze' },
                                    { icon: Linkedin, href: 'https://linkedin.com/company/buzzblaze' }
                                ].map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            className="w-12 h-12 bg-glass backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8"
                            variants={fadeInUp}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyName" className="block text-white font-medium mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="serviceType" className="block text-white font-medium mb-2">
                                        What type of service are you looking for? *
                                    </label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    >
                                        <option value="" className="text-gray-900">Select a service</option>
                                        <option value="website-design" className="text-gray-900">Website Design</option>
                                        <option value="graphic-design" className="text-gray-900">Graphic Design</option>
                                        <option value="social-media" className="text-gray-900">Social Media Management</option>
                                        <option value="lead-generation" className="text-gray-900">Lead Generation</option>
                                        <option value="creative-content" className="text-gray-900">Creative Content</option>
                                        <option value="brand-engagement" className="text-gray-900">Brand Engagement</option>
                                        <option value="multiple-services" className="text-gray-900">Multiple Services</option>
                                        <option value="consultation" className="text-gray-900">Free Consultation</option>
                                    </select>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn-primary w-full text-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit Application
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default ServicesPage;