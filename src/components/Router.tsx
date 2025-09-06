import React, { useEffect, useState } from 'react';
import { HomePage, ComingSoonPage, PortfolioPage, ServicesPage, AboutPage, BlogPage, ContactPage } from '../pages';

const Router: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
            setSearchParams(new URLSearchParams(window.location.search));
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Handle route changes
    const navigate = (path: string) => {
        console.log('Router navigate called with path:', path);
        window.history.pushState({}, '', path);
        setCurrentPath(path.split('?')[0]);
        setSearchParams(new URLSearchParams(path.split('?')[1] || ''));
    };

    // Add global navigation function
    useEffect(() => {
        window.navigate = navigate;
    }, []);

    // Debug: Log current path
    console.log('Router current path:', currentPath);

    // Route handling
    switch (currentPath) {
        case '/':
        case '/home':
            console.log('Rendering HomePage');
            return <HomePage />;
        case '/portfolio':
            console.log('Rendering PortfolioPage (Coming Soon)');
            return <PortfolioPage />;
        case '/services':
            console.log('Rendering ServicesPage (Coming Soon)');
            return <ServicesPage />;
        case '/about':
            console.log('Rendering AboutPage (Coming Soon)');
            return <AboutPage />;
        case '/blog':
            console.log('Rendering BlogPage (Coming Soon)');
            return <BlogPage />;
        case '/contact':
            console.log('Rendering ContactPage (Coming Soon)');
            return <ContactPage />;
        case '/coming-soon': {
            const pageTitle = searchParams.get('page') || 'This Page';
            console.log('Rendering ComingSoonPage with title:', pageTitle);
            return <ComingSoonPage pageTitle={pageTitle} />;
        }
        default:
            console.log('Rendering default HomePage for unknown path:', currentPath);
            return <HomePage />;
    }
};

export default Router; 