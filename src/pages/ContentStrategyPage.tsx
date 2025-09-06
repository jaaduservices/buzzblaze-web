import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
    FileText, 
    Video, 
    TrendingUp, 
    Zap, 
    Mic, 
    CheckCircle, 
    ArrowRight,
    Star,
    Clock,
    Share2
} from 'lucide-react';
import { Header, Footer } from '../components/sections';

const ContentStrategyPage: React.FC = () => {
    const navigate = useNavigate();
    const services = [
        {
            icon: FileText,
            title: "Strategic Content Planning",
            description: "Data-driven content strategies that align with your business goals and audience needs",
            features: ["Content Audits", "Editorial Calendars", "SEO Integration", "Performance Tracking"]
        },
        {
            icon: Video,
            title: "Video & Visual Content",
            description: "Engaging video content that tells your story and drives audience engagement",
            features: ["Brand Videos", "Social Media Content", "Product Demos", "Live Streaming"]
        },
        {
            icon: TrendingUp,
            title: "Social Media Mastery",
            description: "Strategic social media management that builds communities and drives engagement",
            features: ["Platform Strategy", "Community Management", "Paid Campaigns", "Analytics"]
        },
        {
            icon: Zap,
            title: "Viral Content Creation",
            description: "Content designed to go viral and maximize your brand's reach and impact",
            features: ["Trend Analysis", "Viral Mechanics", "Shareable Content", "Influencer Partnerships"]
        },
        {
            icon: Mic,
            title: "Brand Storytelling",
            description: "Compelling narratives that connect with your audience and build brand loyalty",
            features: ["Story Development", "Voice & Tone", "Content Pillars", "Brand Messaging"]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Content Audit",
            description: "We analyze your existing content, audience, and competitors to identify opportunities and gaps.",
            icon: FileText
        },
        {
            step: "02",
            title: "Strategy Development",
            description: "Based on our audit, we create a comprehensive content strategy aligned with your business objectives.",
            icon: TrendingUp
        },
        {
            step: "03",
            title: "Content Creation",
            description: "Our team creates high-quality, engaging content across all relevant platforms and formats.",
            icon: Video
        },
        {
            step: "04",
            title: "Distribution & Optimization",
            description: "We distribute your content strategically and continuously optimize for maximum reach and engagement.",
            icon: Share2
        }
    ];

    const stats = [
        { number: "500%", label: "Engagement Increase", icon: TrendingUp },
        { number: "1000+", label: "Content Pieces Created", icon: FileText },
        { number: "24/7", label: "Content Monitoring", icon: Clock },
        { number: "99%", label: "Client Satisfaction", icon: Star }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
            {/* Floating particles background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -inset-10 opacity-50">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-accent-400 to-electric-500 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            <Header />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500/20 to-electric-500/20 px-6 py-3 rounded-full border border-accent-500/30 mb-8"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <FileText className="w-5 h-5 text-accent-400" />
                                <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
                                    Content Strategy
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                Content That{' '}
                                <span className="bg-gradient-to-r from-accent-400 to-electric-500 bg-clip-text text-transparent">
                                    Converts & Engages
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                                We don't just create content—we craft strategic narratives that build lasting 
                                relationships with your audience and drive measurable business results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    className="bg-gradient-to-r from-accent-500 to-electric-500 hover:from-accent-600 hover:to-electric-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contact')}
                                >
                                    <span>Start Creating</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    className="border border-accent-500/30 text-accent-400 hover:bg-accent-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/portfolio')}
                                >
                                    View Portfolio
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Our Content Strategy{' '}
                                <span className="bg-gradient-to-r from-accent-400 to-electric-500 bg-clip-text text-transparent">
                                    Services
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Comprehensive content solutions designed to engage your audience, 
                                build brand authority, and drive meaningful business outcomes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-accent-500/50 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-electric-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Our Content{' '}
                                <span className="bg-gradient-to-r from-accent-400 to-electric-500 bg-clip-text text-transparent">
                                    Process
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                A systematic approach to content creation that ensures consistency, 
                                quality, and measurable results for your brand.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-electric-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                        <step.icon className="w-10 h-10 text-white" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center text-sm font-bold">
                                            {step.step}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 text-accent-400">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-electric-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-300 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Create{' '}
                                <span className="bg-gradient-to-r from-accent-400 to-electric-500 bg-clip-text text-transparent">
                                    Amazing Content?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                                Let's develop a content strategy that engages your audience, 
                                builds your brand, and drives real business results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    className="bg-gradient-to-r from-accent-500 to-electric-500 hover:from-accent-600 hover:to-electric-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contact')}
                                >
                                    <span>Start Creating</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    className="border border-accent-500/30 text-accent-400 hover:bg-accent-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contact')}
                                >
                                    Schedule Consultation
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContentStrategyPage;