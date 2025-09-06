import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Target,
    Heart,
    Users,
    Lightbulb,
    Award,
    Zap,
    Instagram,
    Facebook,
    Linkedin,
    ArrowRight,
    Calendar,
    TrendingUp,
    CheckCircle,
    Coffee,
    Shield,
    Clock,
    Mail,
    Phone,
    MessageCircle,
    MapPin,
    Play
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

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const values = [
        {
            icon: Target,
            title: 'Purpose-Driven',
            description: 'We believe every brand has a story worth telling and a purpose worth pursuing.',
            color: 'from-purple-400 to-pink-400'
        },
        {
            icon: Heart,
            title: 'Authenticity',
            description: 'We create genuine connections between brands and their audiences through honest storytelling.',
            color: 'from-blue-400 to-cyan-400'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'Your success is our success. We work as partners, not just service providers.',
            color: 'from-green-400 to-emerald-400'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We stay ahead of trends while maintaining timeless design principles that work.',
            color: 'from-yellow-400 to-orange-400'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We never settle for good enough. Every project gets our absolute best effort.',
            color: 'from-orange-400 to-orange-400'
        },
        {
            icon: Zap,
            title: 'Impact',
            description: 'We measure success by the real results we generate for your business.',
            color: 'from-pink-400 to-rose-400'
        }
    ];

    const stats = [
        { number: '150+', label: 'Happy Clients', icon: Users },
        { number: '3+', label: 'Years Experience', icon: Calendar },
        { number: '500+', label: 'Projects Completed', icon: CheckCircle },
        { number: '24/7', label: 'Support Available', icon: Clock }
    ];

    // Future team members data - ready for implementation
    // const teamMembers = [
    //     {
    //         name: 'Sarah Johnson',
    //         role: 'Creative Director',
    //         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
    //         description: 'With 8+ years in brand design, Sarah leads our creative vision and ensures every project tells a compelling story.',
    //         expertise: ['Brand Strategy', 'Visual Identity', 'Creative Direction']
    //     },
    //     {
    //         name: 'Michael Chen',
    //         role: 'Digital Marketing Strategist',
    //         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    //         description: 'Michael combines data-driven insights with creative thinking to develop marketing strategies that drive real results.',
    //         expertise: ['Digital Strategy', 'Analytics', 'Campaign Management']
    //     },
    //     {
    //         name: 'Emily Rodriguez',
    //         role: 'Lead Developer',
    //         image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    //         description: 'Emily brings technical excellence to every project, creating websites that are both beautiful and performant.',
    //         expertise: ['Web Development', 'UX/UI Design', 'Technical Strategy']
    //     }
    // ];

    // Future timeline data - ready for implementation
    // const timeline = [
    //     {
    //         year: '2021',
    //         title: 'The Beginning',
    //         description: 'Founded with a vision to help small businesses tell their stories better.',
    //         icon: Rocket
    //     },
    //     {
    //         year: '2022',
    //         title: 'Growth & Recognition',
    //         description: 'Expanded our team and won our first industry award for brand design excellence.',
    //         icon: Award
    //     },
    //     {
    //         year: '2023',
    //         title: 'Digital Expansion',
    //         description: 'Launched our comprehensive digital marketing services and doubled our client base.',
    //         icon: Globe
    //     },
    //     {
    //         year: '2024',
    //         title: 'Innovation Focus',
    //         description: 'Pioneering new approaches in brand engagement and customer experience design.',
    //         icon: Lightbulb
    //     }
    // ];

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
                            <Heart className="w-5 h-5 text-pink-400" />
                            <span className="text-gray-300">Passionate about your success</span>
                        </motion.div>

                        <motion.h1
                            className="text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                            variants={fadeInUp}
                        >
                            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                Want to Know
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Us Better?
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                            variants={fadeInUp}
                        >
                            We're not just another marketing agency. We're storytellers, strategists, and dream-builders who
                            believe every brand deserves to shine in its own unique way.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            variants={fadeInUp}
                        >
                            <motion.button
                                className="btn-primary group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/portfolio')}
                            >
                                <Play className="w-5 h-5 mr-2" />
                                Watch Our Story
                            </motion.button>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                Meet the Team
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

            {/* Our Mission Section */}
            <motion.section
                className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950/50"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="relative"
                            variants={fadeInUp}
                        >
                            <div className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="Team collaboration"
                                    className="rounded-xl w-full h-80 object-cover relative z-10"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Our Mission
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                        >
                            <h2 className="text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Our Mission
                                </span>
                            </h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p>
                                    Our mission is simple yet powerful: to transform businesses into memorable brands that resonate deeply with their target audiences. We believe that great marketing isn't about selling products—it's about creating meaningful connections.
                                </p>
                                <p>
                                    Every day, we work to bridge the gap between what businesses offer and what their customers truly need. Through strategic thinking, creative excellence, and data-driven insights, we help brands find their authentic voice in a noisy digital world.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="bg-glass backdrop-blur-md border border-white/10 rounded-xl p-4">
                                        <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                                        <Counter
                                            value="300%"
                                            className="text-2xl font-bold text-white"
                                            delay={0.5}
                                        />
                                        <div className="text-sm text-gray-400">Avg. Growth Rate</div>
                                    </div>
                                    <div className="bg-glass backdrop-blur-md border border-white/10 rounded-xl p-4">
                                        <Shield className="w-8 h-8 text-blue-400 mb-2" />
                                        <Counter
                                            value="100%"
                                            className="text-2xl font-bold text-white"
                                            delay={0.7}
                                        />
                                        <div className="text-sm text-gray-400">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Our Story Section */}
            {/* <motion.section
                className="section-padding relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="order-2 lg:order-1"
                            variants={fadeInUp}
                        >
                            <h2 className="text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Our Story
                                </span>
                            </h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p>
                                    Elevique was born from a simple observation: too many great businesses were struggling to tell their stories effectively. Founded by a team of passionate marketers and creatives, we started with one goal—to help brands find their unique voice.
                                </p>
                                <p>
                                    What began as a small design studio has evolved into a full-service branding and marketing agency. We've worked with startups taking their first steps, established businesses looking to rebrand, and everything in between.
                                </p>
                                <p>
                                    Our journey has taught us that successful branding isn't about following trends—it's about understanding what makes each business special and communicating that authentically.
                                </p>
                            </div>
                            <motion.button
                                className="mt-8 btn-secondary group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Read Full Story
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2 relative"
                            variants={fadeInUp}
                        >
                            <div className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300" />
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                                    alt="Creative workspace"
                                    className="rounded-xl w-full h-80 object-cover relative z-10"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Our Journey
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section> */}

            {/* Timeline Section */}
            {/* <motion.section
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
                                Our Journey
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            From humble beginnings to industry recognition - here's how we've grown together
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden lg:block" />

                        {timeline.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className={`flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    variants={scaleIn}
                                >
                                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                        <div className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                    {item.year}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden lg:flex w-2/12 justify-center">
                                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 z-10" />
                                    </div>

                                    <div className="hidden lg:block w-5/12" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section> */}

            {/* Team Section */}
            {/* <motion.section
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
                                Meet Our Team
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            The passionate individuals behind every successful campaign and creative breakthrough
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                                variants={scaleIn}
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-purple-300 text-sm font-medium">{member.role}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                        {member.description}
                                    </p>
                                    <div className="space-y-2">
                                        {member.expertise.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs mr-2"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section> */}

            {/* Our Values Section */}
            <motion.section
                className="section-padding"
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
                                Our Values
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            These core principles guide everything we do and every decision we make for our clients
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                                    variants={scaleIn}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
            <motion.section
                className="section-padding relative overflow-hidden"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30" />
                <div className="container-custom relative">
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Ready to Work Together?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            If our values align, let's start a conversation about your vision and how we can help bring it to life.
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
                                    Let's Connect
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
                                            <p className="text-white font-semibold">connect@vidyaads.com</p>
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
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <MessageCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">WhatsApp</p>
                                            <a 
                                                href="https://wa.me/919034517463" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-white font-semibold hover:text-green-400 transition-colors duration-300"
                                            >
                                                +91 90345 17463
                                            </a>
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
                                            <Coffee className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Let's Grab Coffee</p>
                                            <p className="text-white font-semibold">Available for meetups</p>
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
                                <div className="grid md:grid-cols-2 gap-6">
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
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
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
                                            Phone
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
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-white font-medium mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="form-input resize-none"
                                        placeholder="Tell us about your project and goals..."
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn-primary w-full text-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Let's Start the Conversation
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

export default AboutPage;