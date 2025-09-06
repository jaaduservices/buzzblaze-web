import React from 'react';
import { motion } from 'framer-motion';
import { useCounterAnimation, parseNumberString } from '../../hooks/useCounterAnimation';

interface CounterProps {
    value: string | number;
    className?: string;
    duration?: number;
    delay?: number;
    triggerOnView?: boolean;
    prefix?: string;
    suffix?: string;
    decimal?: number;
}

export const Counter: React.FC<CounterProps> = ({
    value,
    className = '',
    duration = 2000,
    delay = 0,
    triggerOnView = true,
    prefix,
    suffix,
    decimal
}) => {
    // Parse the value if it's a string with special formatting
    const stringValue = typeof value === 'string' ? value : value.toString();
    const parsedOptions = parseNumberString(stringValue);

    // Override with custom props if provided
    const options = {
        ...parsedOptions,
        duration,
        triggerOnView,
        ...(prefix !== undefined && { prefix }),
        ...(suffix !== undefined && { suffix }),
        ...(decimal !== undefined && { decimal })
    };

    const { count, ref } = useCounterAnimation(options);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay,
                duration: 0.6,
                ease: "easeOut"
            }}
        >
            {count}
        </motion.span>
    );
};

// Specialized counter for different number types
export const StatCounter: React.FC<{
    number: string;
    label: string;
    className?: string;
    numberClassName?: string;
    labelClassName?: string;
    delay?: number;
}> = ({
    number,
    label,
    className = '',
    numberClassName = '',
    labelClassName = '',
    delay = 0
}) => {
        return (
            <motion.div
                className={className}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay, duration: 0.6 }}
            >
                <Counter
                    value={number}
                    className={numberClassName}
                    delay={delay + 0.2}
                />
                <div className={labelClassName}>
                    {label}
                </div>
            </motion.div>
        );
    };

export default Counter; 