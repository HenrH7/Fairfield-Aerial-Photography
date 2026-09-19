import React from 'react';
import PortfolioGallery from '../components/PortfolioGallery';
import ContactSection from '../components/ContactSection';

const WorkVideoFrame: React.FC = () => {
    return (
        <div className="work-video-frame">
            <video
                className="work-video"
                src="/videos/zoom.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <header className="hero-section">
                <div className="hero-content">
                    <p className="eyebrow">Fairfield County · Connecticut</p>
                    <h1 className="portfolio-title">Fairfield Aerial Photography</h1>
                    <p className="subtitle">FAA Part 107 Remote Pilot Certified, insured up to $1 million</p>
                </div>
            </header>

            <section className="about-section content-section">
                <div className="section-heading">
                    <p className="eyebrow">Services</p>
                </div>
                <div className="section-copy">
                    <p>We offer aerial imagery, for properties, places, and projects across Fairfield County and beyond.</p>
                </div>
                <WorkVideoFrame />
            </section>

            <section className="bio-section content-section">
                <div className="section-heading">
                    <p className="eyebrow">About the pilot</p>
                </div>
                <div className="section-copy">
                    <p>Based in Fairfield, I combine a photographer's eye with a survey-minded approach to create aerial work that is both striking and useful.</p>
                    <p>FAA Part 107 certified, fully insured, and attentive to the small details that make an image feel true to its place.</p>
                </div>
            </section>


            <PortfolioGallery />
            <ContactSection />
        </div>
    );
};

export default Portfolio;