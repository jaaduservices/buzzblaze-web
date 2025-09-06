import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Counter, GrowthForm } from '../ui';
import { Play, TrendingUp, BarChart3, Target, Zap, Eye, MousePointer2, Activity } from 'lucide-react';

// Mock real-time data
const generateRealtimeData = () => ({
    impressions: Math.floor(2300000 + Math.random() * 100000),
    ctr: (18.7 + (Math.random() - 0.5) * 2).toFixed(2),
    conversions: Math.floor(1250 + Math.random() * 50),
    revenue: Math.floor(45000 + Math.random() * 5000),
});

const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [realtimeData, setRealtimeData] = useState(generateRealtimeData());
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition] = useState({ x: 0, y: 0 });
    const [isGrowthFormOpen, setIsGrowthFormOpen] = useState(false);

    // Real-time data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setRealtimeData(generateRealtimeData());
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: BarChart3 },
        { id: 'performance', label: 'Performance', icon: TrendingUp },
        { id: 'targeting', label: 'Targeting', icon: Target },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-netflix-dark">
            {/* Netflix-style background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

            {/* Enhanced animated mesh gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-netflix-500/5 via-orange-500/3 to-netflix-500/5"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear" as const
                }}
            />

            {/* Enhanced floating particles with interaction */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-netflix-500/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                        }}
                        whileHover={{ scale: 2, opacity: 1 }}
                    />
                ))}
            </div>

            <div className="container-custom pt-netflix-20 pb-netflix-16 relative z-10">
                <motion.div
                    className="grid lg:grid-cols-2 gap-netflix-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Content */}
                    <div className="space-y-netflix-8 text-center lg:text-left">
                        {/* Enhanced Netflix-style badge with pulse */}
                        <motion.div
                            className="flex justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="badge-netflix relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                animate={{ boxShadow: ["0 0 0 0 rgba(255, 107, 53, 0.7)", "0 0 0 10px rgba(255, 107, 53, 0)", "0 0 0 0 rgba(255, 107, 53, 0)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                    animate={{ x: [-100, 200] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                />
                                #1 Digital Marketing Agency
                            </motion.div>
                        </motion.div>

                        {/* Main Headline - Netflix style */}
                        <motion.div className="space-y-netflix-6" variants={itemVariants}>
                            <h1 className="hero-title text-white">
                                Transform Your{' '}
                                <motion.span
                                    className="gradient-text block lg:inline"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    Digital Presence
                                </motion.span>
                            </h1>
                            <p className="hero-subtitle max-w-xl mx-auto lg:mx-0">
                                We don't just create campaigns. We architect digital experiences that convert visitors into customers and followers into advocates.
                            </p>
                        </motion.div>

                        {/* Enhanced performance metrics with interaction */}
                        <motion.div
                            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4"
                            variants={itemVariants}
                        >
                            {[
                                { value: "300%", label: "Growth", icon: "📈", color: "from-green-500 to-emerald-500" },
                                { value: "15x", label: "ROI", icon: "💰", color: "from-yellow-500 to-orange-500" },
                                { value: "10M+", label: "Reach", icon: "🌍", color: "from-blue-500 to-cyan-500" }
                            ].map((metric, index) => (
                                <motion.div
                                    key={metric.label}
                                    className="card-netflix p-2 sm:p-4 text-center min-w-[80px] sm:min-w-[100px] relative overflow-hidden group cursor-pointer"
                                    whileHover={{
                                        scale: 1.1,
                                        rotateY: 10,
                                        z: 50,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10`}
                                        layoutId={`bg-${index}`}
                                    />
                                    <motion.div
                                        className="text-lg sm:text-2xl mb-1"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        {metric.icon}
                                    </motion.div>
                                    <Counter
                                        value={metric.value}
                                        className="text-lg sm:text-2xl font-bold text-netflix-500 block relative z-10"
                                        delay={0.5 + index * 0.1}
                                    />
                                    <div className="text-xs sm:text-sm text-text-muted font-medium relative z-10">
                                        {metric.label}
                                    </div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-netflix-500 to-orange-500"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Enhanced value propositions with stagger */}
                        <motion.div
                            className="space-y-netflix-4"
                            variants={itemVariants}
                        >
                            {[
                                { icon: "🎯", text: "AI-powered targeting that actually works" },
                                { icon: "📊", text: "Real-time analytics and insights" },
                                { icon: "💎", text: "Premium results at startup prices" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center lg:justify-start space-x-netflix-3 text-text-secondary group cursor-pointer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <motion.span
                                        className="text-xl"
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {item.icon}
                                    </motion.span>
                                    <span className="netflix-base font-medium group-hover:text-white transition-colors duration-300">{item.text}</span>
                                    <motion.div
                                        className="w-0 h-0.5 bg-netflix-500 group-hover:w-4"
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Enhanced CTA buttons with advanced animations */}
                        <motion.div
                            className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="play-button relative overflow-hidden group w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div className="relative z-10 flex items-center space-x-2">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Play fill="currentColor" />
                                    </motion.div>
                                    <span>Start Your Growth</span>
                                </motion.div>
                            </motion.button>
                        </motion.div>

                        {/* Enhanced trust indicators */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start space-x-netflix-6 text-text-muted"
                            variants={itemVariants}
                        >
                            <div className="flex items-center space-x-1">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            className="text-yellow-400 text-lg cursor-pointer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.5 + i * 0.1 }}
                                            whileHover={{
                                                scale: 1.3,
                                                rotate: [0, -10, 10, 0],
                                                filter: "drop-shadow(0 0 8px #fbbf24)"
                                            }}
                                        >
                                            ★
                                        </motion.span>
                                    ))}
                                </div>
                                <span className="netflix-sm ml-2">5.0 from 500+ clients</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Enhanced Right Content - Interactive Dashboard */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Main dashboard mockup with enhanced interactions */}
                            <motion.div
                                className="w-80 h-96 lg:w-96 lg:h-[450px] relative"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                whileHover={{
                                    scale: 1.02,
                                    rotateX: 5,
                                    rotateY: 5,
                                }}
                            >
                                {/* Interactive cursor follower */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            className="absolute w-4 h-4 bg-netflix-500 rounded-full pointer-events-none z-50"
                                            style={{
                                                left: mousePosition.x - 8,
                                                top: mousePosition.y - 8,
                                            }}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 0.8 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 28 }}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Netflix-style card with enhanced effects */}
                                <motion.div
                                    className="card-netflix h-full relative overflow-hidden group"
                                    whileHover={{ y: -5 }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Animated border */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-netflix-500 via-transparent to-netflix-500 rounded-lg"
                                        animate={{
                                            background: [
                                                "linear-gradient(0deg, #FF6B35, transparent, #FF6B35)",
                                                "linear-gradient(90deg, #FF6B35, transparent, #FF6B35)",
                                                "linear-gradient(180deg, #FF6B35, transparent, #FF6B35)",
                                                "linear-gradient(270deg, #FF6B35, transparent, #FF6B35)",
                                                "linear-gradient(360deg, #FF6B35, transparent, #FF6B35)"
                                            ]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        style={{ padding: "1px" }}
                                    >
                                        <div className="w-full h-full bg-neutral-900 rounded-lg" />
                                    </motion.div>

                                    {/* Header with interactive tabs */}
                                    <div className="p-netflix-6 border-b border-neutral-800 relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <motion.h3
                                                    className="netflix-lg font-semibold text-white"
                                                    animate={{ opacity: [1, 0.8, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    Campaign Performance
                                                </motion.h3>
                                                <div className="flex items-center space-x-2">
                                                    <motion.div
                                                        className="w-2 h-2 bg-green-500 rounded-full"
                                                        animate={{ opacity: [1, 0.3, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                    />
                                                    <p className="netflix-sm text-text-muted">Live Analytics Dashboard</p>
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                <motion.div
                                                    className="w-3 h-3 bg-netflix-500 rounded-full cursor-pointer"
                                                    whileHover={{ scale: 1.2, boxShadow: "0 0 10px #FF6B35" }}
                                                    whileTap={{ scale: 0.8 }}
                                                />
                                                <motion.div
                                                    className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                                                    whileHover={{ scale: 1.2, boxShadow: "0 0 10px #10b981" }}
                                                    whileTap={{ scale: 0.8 }}
                                                />
                                            </div>
                                        </div>

                                        {/* Interactive tabs */}
                                        <div className="flex bg-neutral-800 rounded-lg p-0.5 sm:p-1 gap-0.5 sm:gap-1">
                                            {tabs.map((tab) => (
                                                <motion.button
                                                    key={tab.id}
                                                    className={`flex-1 flex items-center justify-center space-x-0.5 sm:space-x-2 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                                                        ? 'bg-netflix-500 text-white'
                                                        : 'text-text-muted hover:text-white'
                                                        }`}
                                                    onClick={() => setActiveTab(tab.id)}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    layout
                                                >
                                                    <tab.icon size={10} className="sm:w-[14px] sm:h-[14px] flex-shrink-0" />
                                                    <span className="truncate">{tab.label}</span>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content with tab switching */}
                                    <div className="p-netflix-6 space-y-netflix-6 relative z-10">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeTab}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {/* Real-time key metrics with live updates */}
                                                <div className="grid grid-cols-2 gap-netflix-4">
                                                    <motion.div
                                                        className="bg-netflix-500/10 p-netflix-3 rounded-netflix relative overflow-hidden group cursor-pointer"
                                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 53, 0.2)" }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                                            animate={{ x: [-100, 200] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                                                        />
                                                        <div className="flex items-center justify-between">
                                                            <Counter
                                                                value={`${(realtimeData.impressions / 1000000).toFixed(1)}M`}
                                                                className="netflix-2xl font-bold text-netflix-500 block"
                                                                delay={1.5}
                                                            />
                                                            <motion.div
                                                                animate={{ rotate: [0, 360] }}
                                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                            >
                                                                <Eye size={16} className="text-netflix-500" />
                                                            </motion.div>
                                                        </div>
                                                        <div className="netflix-xs text-text-muted">Impressions</div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="bg-green-500/10 p-netflix-3 rounded-netflix relative overflow-hidden group cursor-pointer"
                                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                                            animate={{ x: [-100, 200] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                                                        />
                                                        <div className="flex items-center justify-between">
                                                            <Counter
                                                                value={`${realtimeData.ctr}%`}
                                                                className="netflix-2xl font-bold text-green-400 block"
                                                                delay={1.7}
                                                            />
                                                            <motion.div
                                                                animate={{ y: [0, -3, 0] }}
                                                                transition={{ duration: 2, repeat: Infinity }}
                                                            >
                                                                <MousePointer2 size={16} className="text-green-400" />
                                                            </motion.div>
                                                        </div>
                                                        <div className="netflix-xs text-text-muted">CTR</div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="bg-blue-500/10 p-netflix-3 rounded-netflix relative overflow-hidden group cursor-pointer"
                                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                                            animate={{ x: [-100, 200] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                                                        />
                                                        <div className="flex items-center justify-between">
                                                            <Counter
                                                                value={realtimeData.conversions.toString()}
                                                                className="netflix-2xl font-bold text-blue-400 block"
                                                                delay={1.9}
                                                            />
                                                            <motion.div
                                                                animate={{ scale: [1, 1.2, 1] }}
                                                                transition={{ duration: 2, repeat: Infinity }}
                                                            >
                                                                <Target size={16} className="text-blue-400" />
                                                            </motion.div>
                                                        </div>
                                                        <div className="netflix-xs text-text-muted">Conversions</div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="bg-yellow-500/10 p-netflix-3 rounded-netflix relative overflow-hidden group cursor-pointer"
                                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.2)" }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                                            animate={{ x: [-100, 200] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                                                        />
                                                        <div className="flex items-center justify-between">
                                                            <Counter
                                                                value={`$${(realtimeData.revenue / 1000).toFixed(1)}K`}
                                                                className="netflix-2xl font-bold text-yellow-400 block"
                                                                delay={2.1}
                                                            />
                                                            <motion.div
                                                                animate={{
                                                                    rotate: [0, 15, -15, 0],
                                                                    scale: [1, 1.1, 1]
                                                                }}
                                                                transition={{ duration: 3, repeat: Infinity }}
                                                            >
                                                                <span className="text-yellow-400 text-lg">💰</span>
                                                            </motion.div>
                                                        </div>
                                                        <div className="netflix-xs text-text-muted">Revenue</div>
                                                    </motion.div>
                                                </div>

                                                {/* Enhanced progress indicators with hover details */}
                                                <div className="space-y-netflix-4">
                                                    {[
                                                        { label: "Social Media", value: 85, color: "bg-blue-500", trend: "+12%", icon: <Activity size={14} /> },
                                                        { label: "Search Ads", value: 72, color: "bg-green-500", trend: "+8%", icon: <Target size={14} /> },
                                                        { label: "Display", value: 93, color: "bg-netflix-500", trend: "+15%", icon: <Zap size={14} /> }
                                                    ].map((item, index) => (
                                                        <motion.div
                                                            key={item.label}
                                                            className="space-y-2 group cursor-pointer"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            <div className="flex justify-between netflix-sm">
                                                                <div className="flex items-center space-x-2">
                                                                    <motion.div
                                                                        whileHover={{ rotate: 180 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        {item.icon}
                                                                    </motion.div>
                                                                    <span className="text-text-secondary group-hover:text-white transition-colors">
                                                                        {item.label}
                                                                    </span>
                                                                    <motion.span
                                                                        className="text-green-400 text-xs opacity-0 group-hover:opacity-100"
                                                                        initial={{ scale: 0 }}
                                                                        whileHover={{ scale: 1 }}
                                                                    >
                                                                        {item.trend}
                                                                    </motion.span>
                                                                </div>
                                                                <Counter
                                                                    value={`${item.value}%`}
                                                                    className="text-text-muted group-hover:text-white transition-colors"
                                                                    delay={2 + index * 0.2}
                                                                />
                                                            </div>
                                                            <div className="progress-bar group-hover:scale-105 transition-transform">
                                                                <motion.div
                                                                    className={`progress-fill ${item.color} relative overflow-hidden`}
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${item.value}%` }}
                                                                    transition={{ delay: 1 + index * 0.2, duration: 1 }}
                                                                    whileHover={{
                                                                        boxShadow: `0 0 10px ${item.color.includes('blue') ? '#3b82f6' : item.color.includes('green') ? '#10b981' : '#FF6B35'}`
                                                                    }}
                                                                >
                                                                    <motion.div
                                                                        className="absolute inset-0 bg-white opacity-20"
                                                                        animate={{ x: ['-100%', '100%'] }}
                                                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                                                    />
                                                                </motion.div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Enhanced status with real-time indicator */}
                                        <motion.div
                                            className="flex items-center justify-between pt-netflix-4 border-t border-neutral-800"
                                            whileHover={{ borderColor: "rgba(255, 107, 53, 0.5)" }}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <motion.div
                                                    className="w-2 h-2 bg-green-500 rounded-full"
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [1, 0.7, 1]
                                                    }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                />
                                                <span className="netflix-sm text-text-secondary">Live</span>
                                                <motion.div
                                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <Activity size={12} className="text-green-500" />
                                                </motion.div>
                                            </div>
                                            <motion.div
                                                className="rating-netflix cursor-pointer"
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: "0 0 10px rgba(255, 107, 53, 0.5)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                98% Success Rate
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Enhanced floating feature badges with better positioning */}
                            {[
                                { icon: "🎯", label: "AI Targeting", pos: { top: "5%", right: "-15%" }, color: "from-blue-500 to-cyan-500" },
                                { icon: "⚡", label: "Real-time", pos: { bottom: "10%", left: "-20%" }, color: "from-yellow-500 to-orange-500" },
                                { icon: "📱", label: "Mobile First", pos: { top: "40%", left: "-25%" }, color: "from-purple-500 to-pink-500" }
                            ].map((badge, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute card-netflix p-netflix-3 text-center min-w-[80px] cursor-pointer group overflow-hidden hidden lg:block"
                                    style={badge.pos}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        opacity: { delay: 1.5 + index * 0.3 },
                                        scale: { delay: 1.5 + index * 0.3 },
                                        y: { delay: 2, duration: 3, repeat: Infinity },
                                        rotate: { delay: 3, duration: 4, repeat: Infinity }
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        z: 50,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-20`}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        className="text-lg mb-1 relative z-10"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        {badge.icon}
                                    </motion.div>
                                    <div className="netflix-xs text-white font-medium relative z-10">{badge.label}</div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-netflix-500 to-white"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}

                            {/* Enhanced background glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-netflix-500/10 to-orange-500/10 rounded-full blur-3xl -z-10"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.8, 0.3],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Enhanced scroll indicator with pulse effect */}
                <motion.div
                    className="absolute bottom-32 sm:bottom-netflix-8 left-1/2 transform -translate-x-1/2 hidden lg:flex"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                >
                    <motion.div
                        className="flex flex-col items-center space-y-2 text-text-muted cursor-pointer group"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span className="netflix-sm font-medium group-hover:text-white transition-colors">Scroll to explore</span>
                        <motion.div
                            className="w-6 h-10 border-2 border-netflix-500/50 rounded-full flex justify-center relative overflow-hidden"
                            whileHover={{ borderColor: "rgba(255, 107, 53, 0.8)" }}
                            animate={{
                                boxShadow: ["0 0 0 0 rgba(255, 107, 53, 0.7)", "0 0 0 10px rgba(255, 107, 53, 0)", "0 0 0 0 rgba(255, 107, 53, 0)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1 h-3 bg-netflix-500 rounded-full mt-2"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Growth Form Modal */}
            <GrowthForm
                isOpen={isGrowthFormOpen}
                onClose={() => setIsGrowthFormOpen(false)}
            />
        </section>
    );
};

export default Hero;