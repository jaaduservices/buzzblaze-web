import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Header from './Header';

interface ComingSoonProps {
    pageTitle?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
    pageTitle = "This Page"
}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set different target dates based on page type
        const targetDate = new Date();
        const pageDays = {
            'Portfolio': 45,
            'Services': 30,
            'About': 21,
            'Blog': 60,
            'default': 30
        };
        const daysToAdd = pageDays[pageTitle as keyof typeof pageDays] || pageDays.default;
        targetDate.setDate(targetDate.getDate() + daysToAdd);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [pageTitle]);

    const handleGoHome = () => {
        window.navigate?.('/');
    };

    const handleNotifyMe = () => {
        const email = prompt("Enter your email to get notified when this page launches:");
        if (email) {
            alert("Thanks! We'll notify you at " + email + " when this page is ready.");
        }
    };

    const getPageDescription = (page: string) => {
        const descriptions = {
            'Portfolio': 'Our stunning portfolio showcasing amazing projects and client success stories.',
            'Services': 'Comprehensive service offerings designed to boost your business growth.',
            'About': 'Learn more about our team, mission, and what makes us unique.',
            'Blog': 'Insights, tips, and industry knowledge to help your business thrive.',
            'default': 'An amazing experience tailored just for you.'
        };
        return descriptions[page as keyof typeof descriptions] || descriptions.default;
    };

    return (
        <div className="min-h-screen">
            {/* Add Header for navigation */}
            <Header />

            <Section id="coming-soon" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-bounce-slow"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-white rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="relative z-10 w-full text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Main Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                                <div className="text-6xl">🚀</div>
                            </div>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight">
                                <span className="block">{pageTitle}</span>
                                <span className="block text-cyan-200">Coming Soon!</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-cyan-100 max-w-2xl mx-auto">
                                {getPageDescription(pageTitle)}
                            </p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto my-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.days}</div>
                                <div className="text-sm text-cyan-100">Days</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours}</div>
                                <div className="text-sm text-cyan-100">Hours</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes}</div>
                                <div className="text-sm text-cyan-100">Minutes</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds}</div>
                                <div className="text-sm text-cyan-100">Seconds</div>
                            </div>
                        </div>

                        {/* Quick Navigation Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto my-12">
                            <div
                                onClick={() => window.navigate?.('/coming-soon?page=Portfolio')}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="text-2xl mb-2">🎨</div>
                                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-200">Portfolio</h3>
                                <p className="text-xs text-cyan-100">45 days</p>
                            </div>
                            <div
                                onClick={() => window.navigate?.('/coming-soon?page=Services')}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="text-2xl mb-2">🛠️</div>
                                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-200">Services</h3>
                                <p className="text-xs text-cyan-100">30 days</p>
                            </div>
                            <div
                                onClick={() => window.navigate?.('/coming-soon?page=About')}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="text-2xl mb-2">👥</div>
                                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-200">About</h3>
                                <p className="text-xs text-cyan-100">21 days</p>
                            </div>
                            <div
                                onClick={() => window.navigate?.('/coming-soon?page=Blog')}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="text-2xl mb-2">📝</div>
                                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-200">Blog</h3>
                                <p className="text-xs text-cyan-100">60 days</p>
                            </div>
                        </div>

                        {/* Features Preview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <div className="text-4xl mb-4">✨</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Amazing Features</h3>
                                <p className="text-cyan-100 text-sm">Revolutionary tools that will transform your experience</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Targeted Solutions</h3>
                                <p className="text-cyan-100 text-sm">Customized specifically for your business needs</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                                <p className="text-cyan-100 text-sm">Optimized performance for the best user experience</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                onClick={handleNotifyMe}
                                className="bg-white text-primary-700 hover:bg-cyan-50 border-0 shadow-lg"
                            >
                                Notify Me When Ready
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleGoHome}
                                className="border-white text-white hover:bg-white/10"
                            >
                                Back to Home
                            </Button>
                        </div>

                        {/* Progress Bar */}
                        <div className="max-w-md mx-auto mt-12">
                            <div className="flex justify-between text-cyan-100 text-sm mb-2">
                                <span>Progress</span>
                                <span>75%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-gradient-to-r from-white to-cyan-200 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <p className="text-cyan-100 mb-4">Follow us for updates:</p>
                            <div className="flex justify-center space-x-4">
                                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <span className="text-xl">📧</span>
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <span className="text-xl">📱</span>
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <span className="text-xl">💼</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
            </Section>
        </div>
    );
};

export default ComingSoon; 