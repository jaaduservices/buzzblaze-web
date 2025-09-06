import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Partners: React.FC = () => {
    const partners = [
        {
            id: 'google',
            name: 'Google',
            logo: (
                <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
            )
        },
        {
            id: 'meta',
            name: 'Meta',
            logo: (
                <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 48 48" fill="none">
                    <path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"/>
                    <linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#0081fb"/>
                        <stop offset=".995" stopColor="#0064e1"/>
                    </linearGradient>
                    <path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"/>
                    <linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#0081fb"/>
                        <stop offset=".995" stopColor="#0064e1"/>
                    </linearGradient>
                    <path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"/>
                    <path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"/>
                    <path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"/>
                </svg>
            )
        },
        {
            id: 'hubspot',
            name: 'HubSpot',
            logo: (
                <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.164 7.931V5.967a1.9 1.9 0 0 0-1.9-1.9 1.9 1.9 0 0 0-1.9 1.9v1.964a6.494 6.494 0 0 0-2.328 1.728L9.731 7.354a2.546 2.546 0 1 0-1.292 1.292l2.305 2.305a6.48 6.48 0 0 0-.526 2.584 6.565 6.565 0 0 0 6.565 6.565 6.565 6.565 0 0 0 6.565-6.565 6.494 6.494 0 0 0-4.184-6.104z" fill="#FF7A59" />
                    <circle cx="7.731" cy="6.731" r="1.731" fill="#FF7A59" />
                    <circle cx="16.264" cy="5.967" r="1.9" fill="#FF7A59" />
                </svg>
            )
        },
        {
            id: 'upwork',
            name: 'Upwork',
            logo: (
                <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.012-2.439-5.463-5.439-5.463z" fill="#6FDA44" />
                </svg>
            )
        }
    ];

    return (
        <Section id="partners" className="content-section bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="container-custom">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Trusted by Industry{' '}
                        <span className="gradient-text">Leaders</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        We're proud to be certified partners with the world's leading platforms,
                        ensuring you get the best strategies and cutting-edge solutions.
                    </p>
                </motion.div>
            </div>

            {/* Moving Partners Logos - Right to Left Animation - Full Width */}
            <div className="relative py-16 overflow-hidden w-full">
                <motion.div
                    className="flex items-center gap-16 whitespace-nowrap"
                    animate={{
                        x: [0, -2000]
                    }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }}
                >
                    {/* First set of logos */}
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            className="flex flex-col items-center group flex-shrink-0 mx-4"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative p-4 md:p-6">
                                <div className="relative z-10 filter drop-shadow-lg">
                                    {partner.logo}
                                </div>
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg mt-4 text-center group-hover:text-accent-400 transition-colors duration-300">
                                {partner.name}
                            </h3>
                        </motion.div>
                    ))}

                    {/* Second set of logos for seamless loop */}
                    {partners.map((partner) => (
                        <motion.div
                            key={`${partner.id}-2`}
                            className="flex flex-col items-center group flex-shrink-0 mx-4"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative p-4 md:p-6">
                                <div className="relative z-10 filter drop-shadow-lg">
                                    {partner.logo}
                                </div>
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg mt-4 text-center group-hover:text-accent-400 transition-colors duration-300">
                                {partner.name}
                            </h3>
                        </motion.div>
                    ))}

                    {/* Third set of logos for extra smoothness */}
                    {partners.map((partner) => (
                        <motion.div
                            key={`${partner.id}-3`}
                            className="flex flex-col items-center group flex-shrink-0 mx-4"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative p-4 md:p-6">
                                <div className="relative z-10 filter drop-shadow-lg">
                                    {partner.logo}
                                </div>
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg mt-4 text-center group-hover:text-accent-400 transition-colors duration-300">
                                {partner.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-transparent via-transparent to-transparent pointer-events-none z-10"></div>
            </div>

            <div className="container-custom">
                {/* Partnership Benefits */}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="text-4xl mb-6">🎯</div>
                        <h3 className="text-xl font-semibold text-white mb-4">Certified Expertise</h3>
                        <p className="text-text-secondary">
                            Our team holds official certifications from industry leaders, ensuring top-tier service quality.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="text-4xl mb-6">⚡</div>
                        <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Tools</h3>
                        <p className="text-text-secondary">
                            Access to premium features and beta tools that give your campaigns a competitive edge.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="text-4xl mb-6">🏆</div>
                        <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
                        <p className="text-text-secondary">
                            Our partnership status reflects our track record of delivering exceptional results for clients.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Partners; 