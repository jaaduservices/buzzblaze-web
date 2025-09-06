import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  gradientText?: string;
  badge?: {
    icon: React.ReactNode;
    text: string;
    gradient?: string;
  };
  primaryButton?: {
    text: string;
    navigateTo?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  };
  secondaryButton?: {
    text: string;
    navigateTo?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  };
  backgroundGradient?: string;
  particleColor?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  gradientText,
  badge,
  primaryButton,
  secondaryButton,
  backgroundGradient = 'from-accent-400 to-accent-600',
  particleColor = 'from-accent-400 to-accent-600',
  className = ''
}) => {
  return (
    <section className={`pt-32 pb-20 px-4 ${className}`}>
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${particleColor} rounded-full`}
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

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {badge && (
            <motion.div
              className={`inline-flex items-center space-x-2 bg-gradient-to-r ${badge.gradient || 'from-accent-500/20 to-accent-600/20'} px-6 py-3 rounded-full border border-accent-500/30 mb-8`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-accent-400">{badge.icon}</span>
              <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
                {badge.text}
              </span>
            </motion.div>
          )}

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {title}{' '}
            {gradientText && (
              <span className={`bg-gradient-to-r ${backgroundGradient} bg-clip-text text-transparent`}>
                {gradientText}
              </span>
            )}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {subtitle}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryButton && (
                <Button
                  variant={primaryButton.variant || 'primary'}
                  size="lg"
                  navigateTo={primaryButton.navigateTo}
                  onClick={primaryButton.onClick}
                  showArrow
                >
                  {primaryButton.text}
                </Button>
              )}
              
              {secondaryButton && (
                <Button
                  variant={secondaryButton.variant || 'outline'}
                  size="lg"
                  navigateTo={secondaryButton.navigateTo}
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;