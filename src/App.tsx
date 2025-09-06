import { Routes, Route } from 'react-router-dom'
import { HomePage, ComingSoonPage, ServicesPage, ContactPage, AboutPage, BlogPage, PortfolioPage, BrandDesignPage, GrowthMarketingPage, ContentStrategyPage } from './pages'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Updated routes to use the new pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dedicated service page routes */}
        <Route path="/services/brand-design" element={<BrandDesignPage />} />
        <Route path="/services/growth-marketing" element={<GrowthMarketingPage />} />
        <Route path="/services/content-strategy" element={<ContentStrategyPage />} />

        {/* Catch-all route for any other paths */}
        <Route path="*" element={<ComingSoonPage pageTitle="This Page" />} />
      </Routes>
    </div>
  );
}

export default App;
