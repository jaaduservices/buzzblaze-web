import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  gradient?: string;
  borderColor?: string;
  iconColor?: string;
  index?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  gradient = 'from-accent-500 to-accent-600',
  borderColor = 'accent-500/50',
  iconColor = 'accent-400',
  index = 0,
  className = ''
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-${borderColor} transition-all duration-300 group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className={`text-2xl font-bold mb-4 group-hover:text-${iconColor} transition-colors`}>
        {title}
      </h3>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
            <CheckCircle className={`w-5 h-5 text-${iconColor} flex-shrink-0`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;