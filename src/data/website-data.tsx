import type { NavItem, ServiceCategory, Testimonial, BlogPost, ContactInfo, Feature } from '../types';
import { DesignIcon, MarketingIcon, SocialIcon, WebIcon, ChartIcon, EmailIcon } from '../components/ui/Icons';

// Navigation
export const navigationItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Enquire Now', href: '/contact', isButton: true },
];

// Service Categories
export const serviceCategories: ServiceCategory[] = [
    {
        id: 'design',
        title: 'WE DESIGN,',
        subtitle: 'YOU SHINE.',
        description: 'Creating stunning visual experiences that make your brand stand out',
        services: [
            {
                id: 'web-design',
                title: 'Stunning website design',
                description: 'Beautiful, responsive websites that convert visitors into customers',
                icon: <WebIcon />,
            },
            {
                id: 'logo-design',
                title: 'Eye-catching logos',
                description: 'Memorable brand identities that represent your business perfectly',
                icon: <DesignIcon />,
            },
            {
                id: 'product-labels',
                title: 'Product label designs',
                description: 'Professional packaging that makes your products irresistible',
                icon: <DesignIcon />,
            },
            {
                id: 'brand-redesign',
                title: 'Brand redesigning',
                description: 'Complete brand makeovers that modernize your business image',
                icon: <DesignIcon />,
            },
            {
                id: 'social-posts',
                title: 'Social media posts',
                description: 'Engaging visual content that stops the scroll and drives engagement',
                icon: <SocialIcon />,
            },
        ],
    },
    {
        id: 'marketing',
        title: 'MAKING BRANDS',
        subtitle: 'GO BOOM!',
        description: 'Explosive marketing strategies that skyrocket your business growth',
        services: [
            {
                id: 'lead-generation',
                title: 'Lead generation',
                description: 'Qualified leads that convert into paying customers',
                icon: <ChartIcon />,
            },
            {
                id: 'seo-services',
                title: 'SEO services',
                description: 'Get found on Google and dominate your competition',
                icon: <ChartIcon />,
            },
            {
                id: 'ecommerce',
                title: 'eCommerce onboarding',
                description: 'Complete online store setup and optimization',
                icon: <WebIcon />,
            },
            {
                id: 'meme-marketing',
                title: 'Meme-based marketing',
                description: 'Viral content that gets your brand noticed and shared',
                icon: <SocialIcon />,
            },
            {
                id: 'email-marketing',
                title: 'Email marketing campaigns',
                description: 'Automated sequences that nurture and convert leads',
                icon: <EmailIcon />,
            },
        ],
    },
    {
        id: 'social',
        title: 'TURNING POSTS',
        subtitle: 'INTO PROFITS.',
        description: 'Social media mastery that builds communities and drives sales',
        services: [
            {
                id: 'account-setup',
                title: 'Social accounts setup',
                description: 'Professional social media presence across all platforms',
                icon: <SocialIcon />,
            },
            {
                id: 'content-creation',
                title: 'Content Creation',
                description: 'Scroll-stopping content that engages and converts',
                icon: <DesignIcon />,
            },
            {
                id: 'content-calendar',
                title: 'Content calendar',
                description: 'Strategic posting schedules for maximum impact',
                icon: <ChartIcon />,
            },
            {
                id: 'organic-growth',
                title: 'Organic growth strategies',
                description: 'Build authentic followers who become loyal customers',
                icon: <ChartIcon />,
            },
            {
                id: 'viral-content',
                title: 'Viral content creation',
                description: 'Content that spreads like wildfire and amplifies your reach',
                icon: <SocialIcon />,
            },
        ],
    },
];

// Features/Values
export const features: Feature[] = [
    {
        id: 'scroll-stopping',
        title: 'Scroll-stopping content',
        description: 'Content that makes people pause, engage, and take action',
        icon: <SocialIcon />,
    },
    {
        id: 'converting-traffic',
        title: 'Traffic that converts',
        description: 'Not just visitors, but customers who actually buy from you',
        icon: <ChartIcon />,
    },
    {
        id: 'speaking-designs',
        title: 'Designs that speak',
        description: 'Visual storytelling that communicates your brand message perfectly',
        icon: <DesignIcon />,
    },
    {
        id: 'selling-strategies',
        title: 'Strategies that sell',
        description: 'Data-driven approaches that turn browsers into buyers',
        icon: <MarketingIcon />,
    },
    {
        id: 'flaunting-results',
        title: 'Results you\'ll flaunt',
        description: 'Success stories that you\'ll be proud to share with everyone',
        icon: <ChartIcon />,
    },
];

// Testimonials
export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Ms Kirsha',
        role: 'Founder',
        company: 'Star\'s n Cards',
        content: 'Well, I can\'t even recall how many times I have got praise for our product designs, their theme, labels and website too. All thanks to Buzzblaze Media for re-branding our company and providing them a professional and unique look. If you are unsure about their work, I highly recommend to go visit our website, everything is designed, listed & marketed by them.',
        rating: 5,
    },
    {
        id: '2',
        name: 'Aman Singh',
        role: 'Director',
        company: 'YoCar',
        content: 'Had an amazing experience working with Buzzblaze Media. They really helped me in building my online presence. I was an offline store owner but from creating my brand logo to generating sales online on my website, Buzzblaze Media has helped us tremendously. Still looking forward to grow more with them online.',
        rating: 5,
    },
    {
        id: '3',
        name: 'Sahil Khaan',
        role: 'Owner',
        company: 'Curly Top',
        content: 'Started working with Buzzblaze Media for designing my website. I got exactly the same funky theme of logo and website that I thought of. The content, the ideas and the vision that I got from Buzzblaze Media is beyond my expectations. Not to miss, I\'m also getting leads for my offline store due to Buzzblaze Media\'s content and advertisement campaigns.',
        rating: 5,
    },
    {
        id: '4',
        name: 'Simran Singh Sidhu',
        role: 'Owner',
        company: 'Migration Master',
        content: 'Buzzblaze Media transformed our travel business completely. Their strategic approach to digital marketing and stunning website design helped us reach customers globally. The booking system they created is seamless and our online revenue has increased dramatically.',
        rating: 5,
    },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'SEO vs SEM: Decoding the Difference',
        slug: 'seo-vs-sem-decoding-the-difference',
        excerpt: 'In the digital jungle, SEO (Search Engine Optimization) and SEM (Search Engine Marketing) are often thrown around like interchangeable...',
        content: 'Full blog content would go here...',
        author: 'Buzzblaze Media Team',
        publishedAt: '2024-01-15',
        readTime: '5 min read',
        tags: ['SEO', 'SEM', 'Digital Marketing'],
        imageUrl: '/blog/seo-sem.jpg',
    },
    {
        id: '2',
        title: 'What Kind of Posts Actually Help a Brand Grow?',
        slug: 'what-posts-help-brand-grow',
        excerpt: 'Social media is crowded—let\'s face it. With brands fighting for attention, how do you ensure your posts stand out and actually help your...',
        content: 'Full blog content would go here...',
        author: 'Buzzblaze Media Team',
        publishedAt: '2024-01-10',
        readTime: '7 min read',
        tags: ['Social Media', 'Content Strategy', 'Brand Growth'],
        imageUrl: '/blog/brand-growth.jpg',
    },
    {
        id: '3',
        title: 'How Branding Helps You Make Your Presence?',
        slug: 'how-branding-helps-presence',
        excerpt: 'Your brand isn\'t just your logo, tagline, or the font you picked from Canva—it\'s the entire personality of your business. Think of it as...',
        content: 'Full blog content would go here...',
        author: 'Buzzblaze Media Team',
        publishedAt: '2024-01-05',
        readTime: '6 min read',
        tags: ['Branding', 'Business Strategy', 'Brand Identity'],
        imageUrl: '/blog/branding-presence.jpg',
    },
];

// Contact Information
export const contactInfo: ContactInfo = {
    phone: '90345 17463',
    whatsapp: '+919034517463',
    email: 'connect@buzzblaze.media',
    location: 'Chandigarh | Bangalore',
    socialLinks: [
        {
            platform: 'Instagram',
            url: 'https://www.instagram.com/buzzblaze',
            icon: <SocialIcon />,
        },
        {
            platform: 'Facebook',
            url: 'https://facebook.com/buzzblaze',
            icon: <SocialIcon />,
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/company/buzzblaze',
            icon: <SocialIcon />,
        },
    ],
};