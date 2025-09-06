import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    ExternalLink,
    Star,
    ArrowRight,
    Filter,
    Globe,
    Palette,
    Share2,
    Target,
    TrendingUp,
    Users,
    Award,
    Eye,
    Calendar,
    CheckCircle
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

const PortfolioPage: React.FC = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');

    const portfolioCategories = [
        {
            title: "Website Design",
            icon: Globe,
            color: "from-purple-400 to-pink-400",
            projects: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
                    title: "E-commerce Platform",
                    description: "Modern online store with seamless UX and conversion optimization",
                    category: "Website Design",
                    client: "Fashion Retailer",
                    year: "2024",
                    results: ["300% increase in sales", "50% better conversion rate", "Mobile-first design"],
                    tags: ["E-commerce", "React", "Responsive"]
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
                    title: "Tech Startup Landing",
                    description: "Clean, professional SaaS website with modern animations",
                    category: "Website Design",
                    client: "TechFlow SaaS",
                    year: "2024",
                    results: ["200% lead increase", "40% bounce rate reduction", "SEO optimized"],
                    tags: ["SaaS", "Landing Page", "Animation"]
                },
                {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
                    title: "Restaurant Chain Website",
                    description: "Multi-location restaurant website with online ordering",
                    category: "Website Design",
                    client: "Gourmet Bites",
                    year: "2024",
                    results: ["500% online orders", "60% mobile traffic", "Multi-location support"],
                    tags: ["Restaurant", "E-commerce", "Multi-location"]
                }
            ]
        },
        {
            title: "Graphic Design",
            icon: Palette,
            color: "from-blue-400 to-cyan-400",
            projects: [
                {
                    id: 4,
                    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80",
                    title: "Brand Identity Design",
                    description: "Complete brand identity for luxury wellness brand",
                    category: "Graphic Design",
                    client: "Zen Wellness",
                    year: "2024",
                    results: ["Brand recognition up 400%", "Premium positioning", "Cohesive identity"],
                    tags: ["Branding", "Logo Design", "Identity"]
                },
                {
                    id: 5,
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                    title: "Social Media Graphics",
                    description: "Engaging social media content for fitness influencer",
                    category: "Graphic Design",
                    client: "FitLife Coach",
                    year: "2024",
                    results: ["1M+ impressions", "25% engagement rate", "Viral content"],
                    tags: ["Social Media", "Content", "Fitness"]
                }
            ]
        },
        {
            title: "Social Media Management",
            icon: Share2,
            color: "from-green-400 to-emerald-400",
            projects: [
                {
                    id: 6,
                    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
                    title: "Instagram Growth Campaign",
                    description: "Organic growth strategy for lifestyle brand",
                    category: "Social Media Management",
                    client: "Urban Lifestyle",
                    year: "2024",
                    results: ["50K new followers", "500% engagement boost", "Brand partnerships"],
                    tags: ["Instagram", "Growth", "Engagement"]
                },
                {
                    id: 7,
                    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
                    title: "Multi-Platform Strategy",
                    description: "Comprehensive social media strategy across all platforms",
                    category: "Social Media Management",
                    client: "Tech Startup",
                    year: "2024",
                    results: ["200% reach increase", "Cross-platform synergy", "Community building"],
                    tags: ["Multi-platform", "Strategy", "Community"]
                }
            ]
        },
        {
            title: "Lead Generation",
            icon: Target,
            color: "from-orange-400 to-orange-400",
            projects: [
                {
                    id: 8,
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                    title: "B2B Lead Generation",
                    description: "Targeted lead generation campaign for software company",
                    category: "Lead Generation",
                    client: "CloudTech Solutions",
                    year: "2024",
                    results: ["500+ qualified leads", "30% conversion rate", "ROI of 400%"],
                    tags: ["B2B", "Software", "Conversion"]
                },
                {
                    id: 9,
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                    title: "E-commerce Lead Funnel",
                    description: "Complete lead funnel optimization for online store",
                    category: "Lead Generation",
                    client: "Fashion Forward",
                    year: "2024",
                    results: ["1000+ leads/month", "25% higher LTV", "Automated nurturing"],
                    tags: ["E-commerce", "Funnel", "Automation"]
                }
            ]
        }
    ];

    const allProjects = portfolioCategories.flatMap(category => category.projects);
    const filters = ['All', ...portfolioCategories.map(cat => cat.title)];

    const filteredProjects = activeFilter === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);

    const stats = [
        { number: '50+', label: 'Projects Completed', icon: CheckCircle },
        { number: '40+', label: 'Happy Clients', icon: Users },
        { number: '500%', label: 'Average ROI', icon: TrendingUp },
        { number: '2M+', label: 'Impressions Generated', icon: Eye }
    ];

    const testimonials = [
        {
            name: "Ms Kirsha",
            company: "Star's n Cards",
            role: "Founder",
            content: "Well, I can't even recall how many times I have got praise for our product designs, their theme, labels and website too. All thanks to Buzzblaze Media for re-branding our company and providing them a professional and unique look.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Aman Singh",
            company: "YoCar",
            role: "Director",
            content: "Had an amazing experience working with Buzzblaze Media. They really helped me in building my online presence. From creating my brand logo to generating sales online, Buzzblaze Media has helped us tremendously.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Sahil Khaan",
            company: "Curly Top",
            role: "Owner",
            content: "Started working with Buzzblaze Media for designing my website. I got exactly the same funky theme of logo and website that I thought of. The content and ideas from Buzzblaze Media is beyond my expectations.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
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
                            <Award className="w-5 h-5 text-yellow-400" />
                            <span className="text-gray-300">Award-winning creative work</span>
                        </motion.div>

                        <motion.h1
                            className="text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                            variants={fadeInUp}
                        >
                            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                Our
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                            variants={fadeInUp}
                        >
                            Showcase of bold ideas, designs, and brands we've brought to life. Every project tells a story of
                            transformation, growth, and meaningful connections that drive real business results.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            variants={fadeInUp}
                        >
                            <motion.button
                                className="btn-primary group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                View All Projects
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                Start Your Project
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

            {/* Filter Section */}
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
                                Featured Work
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                            Explore our diverse portfolio of successful projects across different industries and services
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {filters.map((filter) => (
                                <motion.button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-3 rounded-full border transition-all duration-300 ${activeFilter === filter
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white'
                                        : 'bg-glass backdrop-blur-md border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-white'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Filter className="w-4 h-4 inline mr-2" />
                                    {filter}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        layout
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group bg-glass backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 shadow-purple-500/10 hover:shadow-2xl"
                                variants={scaleIn}
                                whileHover={{ y: -10, scale: 1.02 }}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="text-white w-full">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Calendar className="w-4 h-4 text-purple-400" />
                                                <span className="text-sm text-gray-300">{project.year}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-white/90 text-sm mb-4">{project.description}</p>
                                            <motion.button
                                                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View Project
                                                <ExternalLink className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-gray-400">{project.year}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-400">Client:</span>
                                        <span className="text-sm text-white font-medium">{project.client}</span>
                                    </div>

                                    {/* Results */}
                                    <div className="space-y-2 mb-4">
                                        {project.results.slice(0, 2).map((result, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                <span className="text-sm text-gray-300">{result}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
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
                                Client Success Stories
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Don't just take our word for it - hear what our clients have to say about their experience
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                        <p className="text-purple-400 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950 relative overflow-hidden"
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
                                Ready to Create Your Success Story?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's work together to create something amazing that drives real results for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="btn-primary text-lg px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.button>
                            <motion.button
                                className="btn-secondary text-lg px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/services')}
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default PortfolioPage;