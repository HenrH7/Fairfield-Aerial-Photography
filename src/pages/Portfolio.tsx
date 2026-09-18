import React from 'react';
import PortfolioGallery from '../components/PortfolioGallery';
import ContactSection from '../components/ContactSection';

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <h1 className="portfolio-title">Fairfield Aerial Photography</h1>
            <PortfolioGallery />
            <ContactSection />
        </div>
    );
};

export default Portfolio;