import React from 'react';
import { motion } from 'framer-motion';
import { 
    Palette, 
    Globe, 
    Smartphone, 
    Target, 
    RefreshCw, 
    Star,
    Users,
    Clock,
    Award,
    Zap
} from 'lucide-react';
import { Header, Footer, HeroSection, CTASection } from '../components/sections';
import { ServiceCard, ProcessStep, StatsCard } from '../components/ui';

const BrandDesignPage: React.FC = () => {
    const services = [
        {
            icon: Globe,
            title: "Modern Web Design",
            description: "Responsive, user-centric websites that convert visitors into customers",
            features: ["Mobile-First Design", "SEO Optimized", "Fast Loading", "User Experience Focus"]
        },
        {
            icon: Palette,
            title: "Brand Id``````````entity Systems",
            description: "Comprehensive visual identity that tells your brand story",
            features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
        },
        {
            icon: Smartphone,
            title: "Digital Asset Creation",
            description: "High-quality digital assets for all your marketing needs",
            features: ["Social Media Graphics", "Email Templates", "Digital Ads", "Presentation Materials"]
        },
        {
            icon: Target,
            title: "UI/UX Optimization",
            description: "User interface and experience design that drives engagement",
            features: ["Wireframing", "Prototyping", "User Testing", "Conversion Optimization"]
        },
        {
            icon: RefreshCw,
            title: "Brand Evolution",
            description: "Strategic brand updates to keep your business relevant",
            features: ["Brand Audits", "Rebranding", "Visual Updates", "Market Adaptation"]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Research",
            description: "We analyze your brand, competitors, and target audience to understand your unique position in the market.",
            icon: Target
        },
        {
            step: "02",
            title: "Strategy & Concept",
            description: "Based on research, we develop a comprehensive design strategy and creative concepts.",
            icon: Palette
        },
        {
            step: "03",
            title: "Design & Development",
            description: "Our team creates stunning visuals and develops functional, responsive designs.",
            icon: Globe
        },
        {
            step: "04",
            title: "Launch & Optimize",
            description: "We launch your new brand identity and continuously optimize for maximum impact.",
            icon: Zap
        }
    ];

    const stats = [
        { number: "200+", label: "Brands Transformed", icon: Award },
        { number: "98%", label: "Client Satisfaction", icon: Star },
        { number: "24/7", label: "Support Available", icon: Clock },
        { number: "150+", label: "Happy Clients", icon: Users }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
            {/* Floating particles background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -inset-10 opacity-50">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"
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
                <HeroSection
                    title="Visual Identity That"
                    gradientText="Commands Attention"
                    subtitle="We don't just design logos and websites—we craft complete brand experiences that resonate with your audience and drive measurable business results."
                    badge={{
                        icon: <Palette className="w-5 h-5" />,
                        text: "Brand Design Excellence"
                    }}
                    primaryButton={{
                        text: "Start Your Project",
                        navigateTo: "/contact"
                    }}
                    secondaryButton={{
                        text: "View Portfolio",
                        navigateTo: "/portfolio"
                    }}
                    backgroundGradient="from-accent-400 to-accent-600"
                    particleColor="from-accent-400 to-accent-600"
                />

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
                                Our Brand Design{' '}
                                <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                                    Services
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                From concept to execution, we deliver comprehensive brand design solutions 
                                that elevate your business and connect with your audience.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    features={service.features}
                                    gradient="from-accent-500 to-accent-600"
                                    borderColor="accent-500/50"
                                    iconColor="accent-400"
                                    index={index}
                                />
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
                                Our Design{' '}
                                <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                                    Process
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                A proven methodology that ensures your brand design project is delivered 
                                on time, on budget, and exceeds expectations.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <ProcessStep
                                    key={index}
                                    step={step.step}
                                    title={step.title}
                                    description={step.description}
                                    icon={step.icon}
                                    gradient="from-accent-500 to-accent-600"
                                    stepColor="accent-400"
                                    titleColor="accent-400"
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <StatsCard
                                    key={index}
                                    number={stat.number}
                                    label={stat.label}
                                    icon={stat.icon}
                                    gradient="from-accent-500 to-accent-600"
                                    numberColor="accent-400"
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection
                    title="Ready to Transform Your"
                    gradientText="Brand?"
                    subtitle="Let's create a brand identity that not only looks amazing but also drives real business results for your company."
                    primaryButton={{
                        text: "Start Your Project",
                        navigateTo: "/contact"
                    }}
                    secondaryButton={{
                        text: "Schedule Consultation",
                        navigateTo: "/contact"
                    }}
                    backgroundGradient="from-accent-400 to-accent-600"
                />
            </main>

            <Footer />
        </div>
    );
};

export default BrandDesignPage;