import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface ProjectMetrics {
    growth: string;
    timeline: string;
    satisfaction: string;
}

interface ProjectCardProps {
    id: number;
    title: string;
    client: string;
    category: string;
    image: string;
    description: string;
    metrics: ProjectMetrics;
    color: string;
    index: number;
    cardVariants?: Variants;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    client,
    category,
    image,
    description,
    metrics,
    color,
    index,
    cardVariants
}) => {
    return (
        <motion.div
            key={id}
            variants={cardVariants}
            className="group relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Card Background with Hover Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

            <div className="card card-hover relative z-10 h-full overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <motion.div
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <span className={`bg-gradient-to-r ${color} text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm`}>
                            {category}
                        </span>
                    </motion.div>

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                            className="w-full btn-primary text-sm py-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Project Details
                        </motion.button>
                    </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-accent-400 font-medium text-sm mb-3">
                            {client}
                        </p>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            {description}
                        </p>
                    </div>

                    {/* Metrics - Fixed overflow issue */}
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { label: 'Growth', value: metrics.growth },
                            { label: 'Timeline', value: metrics.timeline },
                            { label: 'Rating', value: metrics.satisfaction } // Changed from 'Satisfaction' to 'Rating' to prevent overflow
                        ].map((metric, metricIndex) => (
                            <motion.div
                                key={metric.label}
                                className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-neutral-800/50 hover:border-accent-500/30 transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1 + metricIndex * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-lg font-bold text-accent-400 mb-1">
                                    {metric.value}
                                </div>
                                <div className="text-xs text-neutral-500 uppercase tracking-wider break-words">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard; 