import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { blogPosts } from '../../data/website-data';

const Blog: React.FC = () => {
    return (
        <Section id="blog" className="bg-white">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                    Latest from our{' '}
                    <span className="gradient-text">blog</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Stay updated with the latest trends, tips, and insights from the digital marketing world
                </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card
                        key={post.id}
                        title={post.title}
                        description={post.excerpt}
                        image="/api/placeholder/400/240"
                        className="h-full"
                    >
                        {/* Blog Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                            <span>{post.author}</span>
                            <span>{post.readTime}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.slice(0, 2).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Read More */}
                        <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                            Read More →
                        </button>
                    </Card>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
                <button className="btn-secondary">
                    View All Posts
                </button>
            </div>
        </Section>
    );
};

export default Blog; 