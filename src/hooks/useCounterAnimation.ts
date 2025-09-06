import { useState, useEffect, useRef } from 'react';

interface CounterOptions {
    start?: number;
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimal?: number;
    separator?: string;
    triggerOnView?: boolean;
}

export const useCounterAnimation = ({
    start = 0,
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    decimal = 0,
    separator = '',
    triggerOnView = true
}: CounterOptions) => {
    const [count, setCount] = useState(start);
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef<HTMLElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!triggerOnView) {
            animate();
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsInView(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.3 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [triggerOnView]);

    useEffect(() => {
        if (isInView || !triggerOnView) {
            animate();
        }
    }, [isInView, triggerOnView]);

    const animate = () => {
        let startTime: number;
        const startValue = start;
        const endValue = end;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Use easeOutCubic for smooth animation
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
            const easedProgress = easeOutCubic(progress);

            const currentValue = startValue + (endValue - startValue) * easedProgress;
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    };

    const formatNumber = (num: number) => {
        const rounded = Number(num.toFixed(decimal));
        const formatted = separator ? rounded.toLocaleString() : rounded.toString();
        return `${prefix}${formatted}${suffix}`;
    };

    return {
        count: formatNumber(count),
        ref: elementRef,
        isAnimating: count < end
    };
};

// Utility function to parse common number formats
export const parseNumberString = (value: string): CounterOptions => {
    // Handle special cases first
    if (value === '24/7') {
        return { end: 24, suffix: '/7' };
    }

    if (value === '5★') {
        return { end: 5, suffix: '★' };
    }

    // Handle formatted display values like "2.3M", "10M+", "150+", etc.
    if (value === '2.3M') {
        return { end: 2.3, suffix: 'M', decimal: 1 };
    }

    if (value === '10M+') {
        return { end: 10, suffix: 'M+' };
    }

    // Extract number and suffix/prefix
    const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) {
        return { end: 0 };
    }

    const [, prefix, numberStr, suffix] = match;
    const number = parseFloat(numberStr);
    const decimal = numberStr.includes('.') ? numberStr.split('.')[1].length : 0;

    return {
        end: number,
        prefix: prefix || '',
        suffix: suffix || '',
        decimal,
        separator: number >= 1000 && decimal === 0 && !suffix.includes('%') ? ',' : ''
    };
}; 