import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient?: string;
  numberColor?: string;
  index?: number;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  number,
  label,
  icon: Icon,
  gradient = 'from-accent-500 to-accent-600',
  numberColor = 'accent-400',
  index = 0,
  className = ''
}) => {
  return (
    <motion.div
      className={`text-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className={`text-3xl md:text-4xl font-bold text-${numberColor} mb-2`}>
        {number}
      </div>
      <div className="text-gray-300 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default StatsCard;