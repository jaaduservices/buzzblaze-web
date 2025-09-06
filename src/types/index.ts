export interface NavItem {
    label: string;
    href: string;
    isButton?: boolean;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features?: string[];
}

export interface ServiceCategory {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    services: Service[];
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    publishedAt: string;
    readTime: string;
    tags: string[];
    imageUrl: string;
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface Stats {
    id: string;
    label: string;
    value: string;
    suffix?: string;
}

export interface ContactInfo {
    phone: string;
    whatsapp?: string;
    email: string;
    location: string;
    socialLinks: {
        platform: string;
        url: string;
        icon: React.ReactNode;
    }[];
}

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

// Global window interface extension
declare global {
    interface Window {
        navigate?: (path: string) => void;
    }
} 