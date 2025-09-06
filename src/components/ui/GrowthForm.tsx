import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Building, Hash, Settings } from 'lucide-react';

interface GrowthFormProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    firmName: string;
    ctcNumber: string;
    services: string;
}

const GrowthForm: React.FC<GrowthFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        firmName: '',
        ctcNumber: '',
        services: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const serviceOptions = [
        'Digital Marketing',
        'Social Media Management',
        'SEO & Content Marketing',
        'Paid Advertising (Google/Facebook)',
        'Brand Identity & Design',
        'Website Development',
        'Mobile Application',
        'E-commerce Solutions',
        'Analytics & Reporting',
        'CRM',
        'Influencer Marketing',
        'Email Marketing',
        'All Services'
    ];

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.firmName.trim()) newErrors.firmName = 'Firm name is required';
        if (!formData.ctcNumber.trim()) newErrors.ctcNumber = 'CTC is required';
        if (!formData.services) newErrors.services = 'Please select a service';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);

        setIsSubmitting(false);
        onClose();

        // Reset form
        setFormData({
            name: '',
            email: '',
            firmName: '',
            ctcNumber: '',
            services: ''
        });
        setErrors({});

        // Show success message (you can implement a toast notification)
        alert('Thank you! We will contact you soon to discuss your growth opportunities.');
    };

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-md bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-netflix-500 to-orange-600 p-6">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-netflix-500/20 to-orange-600/20"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Start Your Growth</h2>
                                    <p className="text-white/80 text-sm mt-1">Let's transform your digital presence</p>
                                </div>
                                <motion.button
                                    onClick={onClose}
                                    className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={20} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    <User size={16} className="inline mr-2" />
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:border-netflix-500 focus:ring-1 focus:ring-netflix-500 transition-colors"
                                    placeholder="Enter your full name"
                                />
                                {errors.name && (
                                    <motion.p
                                        className="text-orange-400 text-sm mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    <Mail size={16} className="inline mr-2" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:border-netflix-500 focus:ring-1 focus:ring-netflix-500 transition-colors"
                                    placeholder="Enter your email address"
                                />
                                {errors.email && (
                                    <motion.p
                                        className="text-orange-400 text-sm mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Firm Name Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    <Building size={16} className="inline mr-2" />
                                    Firm/Company Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.firmName}
                                    onChange={(e) => handleChange('firmName', e.target.value)}
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:border-netflix-500 focus:ring-1 focus:ring-netflix-500 transition-colors"
                                    placeholder="Enter your company name"
                                />
                                {errors.firmName && (
                                    <motion.p
                                        className="text-orange-400 text-sm mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {errors.firmName}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* CTC Number Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    <Hash size={16} className="inline mr-2" />
                                    CTC
                                </label>
                                <input
                                    type="text"
                                    value={formData.ctcNumber}
                                    onChange={(e) => handleChange('ctcNumber', e.target.value)}
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:border-netflix-500 focus:ring-1 focus:ring-netflix-500 transition-colors"
                                    placeholder="Enter your Phone Number"
                                />
                                {errors.ctcNumber && (
                                    <motion.p
                                        className="text-orange-400 text-sm mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {errors.ctcNumber}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Services Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    <Settings size={16} className="inline mr-2" />
                                    Services Looking For
                                </label>
                                <select
                                    value={formData.services}
                                    onChange={(e) => handleChange('services', e.target.value)}
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-netflix-500 focus:ring-1 focus:ring-netflix-500 transition-colors"
                                >
                                    <option value="">Select a service</option>
                                    {serviceOptions.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                                {errors.services && (
                                    <motion.p
                                        className="text-orange-400 text-sm mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {errors.services}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-netflix-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-netflix-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Start My Growth Journey</span>
                                    </>
                                )}
                            </motion.button>
                        </form>

                        {/* Footer */}
                        <div className="px-6 pb-6">
                            <p className="text-xs text-neutral-400 text-center">
                                By submitting this form, you agree to our terms and privacy policy.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GrowthForm;