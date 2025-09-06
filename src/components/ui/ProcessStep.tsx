import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient?: string;
  stepColor?: string;
  titleColor?: string;
  index?: number;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  icon: Icon,
  gradient = 'from-accent-500 to-accent-600',
  stepColor = 'accent-400',
  titleColor = 'accent-400',
  index = 0,
  className = ''
}) => {
  return (
    <motion.div
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
        <Icon className="w-10 h-10 text-white" />
        <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${stepColor} rounded-full flex items-center justify-center text-sm font-bold`}>
          {step}
        </div>
      </div>

      <h3 className={`text-xl font-bold mb-4 text-${titleColor}`}>
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessStep;