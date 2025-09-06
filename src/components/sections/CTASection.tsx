import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface CTASectionProps {
  title: string;
  subtitle: string;
  gradientText?: string;
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
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  gradientText,
  primaryButton,
  secondaryButton,
  backgroundGradient = 'from-accent-400 to-accent-600',
  className = ''
}) => {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}{' '}
            {gradientText && (
              <span className={`bg-gradient-to-r ${backgroundGradient} bg-clip-text text-transparent`}>
                {gradientText}
              </span>
            )}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
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

export default CTASection;