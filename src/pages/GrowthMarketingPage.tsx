import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
    TrendingUp, 
    Target, 
    BarChart3, 
    Search, 
    DollarSign, 
    Zap, 
    CheckCircle, 
    ArrowRight,
    Star,
    Users,
    Rocket,
    Activity
} from 'lucide-react';
import { Header, Footer } from '../components/sections';

const GrowthMarketingPage: React.FC = () => {
    const navigate = useNavigate();
    const services = [
        {
            icon: Target,
            title: "Lead Generation Systems",
            description: "Build scalable lead generation funnels that consistently deliver qualified prospects",
            features: ["Automated Funnels", "Lead Scoring", "CRM Integration", "Multi-Channel Approach"]
        },
        {
            icon: BarChart3,
            title: "Performance Analytics",
            description: "Data-driven insights to optimize your marketing campaigns and maximize ROI",
            features: ["Real-time Tracking", "Conversion Analysis", "A/B Testing", "ROI Optimization"]
        },
        {
            icon: Search,
            title: "SEO & SEM Mastery",
            description: "Dominate search results with comprehensive SEO and paid advertising strategies",
            features: ["Technical SEO", "Content Optimization", "PPC Management", "Local SEO"]
        },
        {
            icon: DollarSign,
            title: "Conversion Optimization",
            description: "Turn visitors into customers with proven conversion rate optimization techniques",
            features: ["Landing Page Design", "User Experience", "A/B Testing", "Sales Funnel Optimization"]
        },
        {
            icon: Zap,
            title: "Growth Automation",
            description: "Scale your marketing efforts with intelligent automation and workflow optimization",
            features: ["Email Automation", "Social Media Automation", "Lead Nurturing", "Workflow Optimization"]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Audit & Analysis",
            description: "We conduct a comprehensive audit of your current marketing performance and identify growth opportunities.",
            icon: BarChart3
        },
        {
            step: "02",
            title: "Strategy Development",
            description: "Based on our analysis, we create a customized growth marketing strategy tailored to your business goals.",
            icon: Target
        },
        {
            step: "03",
            title: "Implementation",
            description: "We implement and optimize your growth marketing campaigns across all relevant channels.",
            icon: Rocket
        },
        {
            step: "04",
            title: "Scale & Optimize",
            description: "We continuously monitor performance and scale successful strategies while optimizing underperforming ones.",
            icon: TrendingUp
        }
    ];

    const stats = [
        { number: "300%", label: "Average ROI Increase", icon: TrendingUp },
        { number: "500+", label: "Leads Generated", icon: Users },
        { number: "24/7", label: "Campaign Monitoring", icon: Activity },
        { number: "95%", label: "Client Retention", icon: Star }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
            {/* Floating particles background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -inset-10 opacity-50">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-electric-400 to-electric-600 rounded-full"
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
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500/20 to-electric-600/20 px-6 py-3 rounded-full border border-electric-500/30 mb-8"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <TrendingUp className="w-5 h-5 text-electric-400" />
                                <span className="text-sm font-medium text-electric-400 uppercase tracking-wider">
                                    Growth Marketing
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                Data-Driven Strategies That{' '}
                                <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
                                    Scale Your Business
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                                We don't just run campaigns—we build scalable growth engines that deliver 
                                predictable, measurable results and exponential business growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contact')}
                                >
                                    <span>Start Growing</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    className="border border-electric-500/30 text-electric-400 hover:bg-electric-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/portfolio')}
                                >
                                    View Case Studies
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
                                Our Growth Marketing{' '}
                                <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
                                    Services
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Comprehensive growth marketing solutions designed to accelerate your business 
                                growth and maximize your marketing ROI.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-electric-500/50 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-electric-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-electric-400 flex-shrink-0" />
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
                                Our Growth{' '}
                                <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
                                    Process
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                A systematic approach to growth marketing that ensures consistent, 
                                scalable results for your business.
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
                                    <div className="w-20 h-20 bg-gradient-to-r from-electric-500 to-electric-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                        <step.icon className="w-10 h-10 text-white" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-electric-400 rounded-full flex items-center justify-center text-sm font-bold">
                                            {step.step}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 text-electric-400">
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-electric-400 mb-2">
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
                                Ready to Accelerate Your{' '}
                                <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
                                    Growth?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                                Let's build a growth marketing strategy that delivers predictable, 
                                scalable results for your business.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contact')}
                                >
                                    <span>Start Growing</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    className="border border-electric-500/30 text-electric-400 hover:bg-electric-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
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

export default GrowthMarketingPage;