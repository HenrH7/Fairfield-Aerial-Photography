import React from 'react';
import { portfolioItems } from '../data/portfolio';

const PortfolioGallery: React.FC = () => {
    return (
        <div className="portfolio-gallery">
            <h2 className="gallery-title">Portfolio Gallery</h2>
            <div className="gallery-grid">
                {portfolioItems.map((item) => (
                    <div key={item.title} className="gallery-item">
                        <img src={item.image} alt={item.title} className="gallery-image" />
                        <div className="gallery-info">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-location">{item.location}</p>
                            <p className="item-category">{item.category}</p>
                            <p className="item-content">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioGallery;