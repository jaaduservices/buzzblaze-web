import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Portfolio: React.FC = () => {
    const portfolioItems = [
        {
            id: '1',
            title: 'Fitvittle Rebranding',
            description: 'Complete brand redesign including logo, website, and product packaging for a health food startup.',
            category: 'Branding',
            image: '/api/placeholder/400/300',
        },
        {
            id: '2',
            title: 'Gildtoe E-commerce',
            description: 'Full e-commerce website design and development with integrated marketing strategies.',
            category: 'Web Design',
            image: '/api/placeholder/400/300',
        },
        {
            id: '3',
            title: 'Gauddly Social Campaign',
            description: 'Viral social media campaign that generated 500% increase in brand awareness.',
            category: 'Social Media',
            image: '/api/placeholder/400/300',
        },
        {
            id: '4',
            title: 'Local Restaurant SEO',
            description: 'SEO optimization that increased local search visibility by 300% for a restaurant chain.',
            category: 'SEO',
            image: '/api/placeholder/400/300',
        },
        {
            id: '5',
            title: 'Tech Startup Branding',
            description: 'Modern brand identity design for a tech startup including logo and marketing materials.',
            category: 'Branding',
            image: '/api/placeholder/400/300',
        },
        {
            id: '6',
            title: 'Fashion Brand Campaign',
            description: 'Comprehensive digital marketing campaign for a fashion brand with 250% ROI.',
            category: 'Marketing',
            image: '/api/placeholder/400/300',
        },
    ];

    const categories = ['All', 'Branding', 'Web Design', 'Social Media', 'SEO', 'Marketing'];
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredItems = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <Section id="portfolio" className="bg-white">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                    Our{' '}
                    <span className="gradient-text">portfolio</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Take a look at some of the amazing projects we've worked on and the results we've achieved for our clients
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeCategory === category
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        className="h-full group"
                    >
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mt-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                                {item.category}
                            </span>
                            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors group-hover:translate-x-2 duration-300">
                                View Case Study →
                            </button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Stats Section */}
            <div className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                        <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                        <div className="text-gray-600">Happy Clients</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
                        <div className="text-gray-600">Client Satisfaction</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
                        <div className="text-gray-600">Years Experience</div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to see your project here?
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                    Let's create something amazing together
                </p>
                <button
                    onClick={() => {
                        const contactSection = document.querySelector('#contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="btn-primary"
                >
                    Start Your Project
                </button>
            </div>
        </Section>
    );
};

export default Portfolio; 