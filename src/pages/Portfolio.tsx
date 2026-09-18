import React from 'react';
import PortfolioGallery from '../components/PortfolioGallery';
import ContactSection from '../components/ContactSection';

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
                    <p className="eyebrow">The work</p>
                    <h2>Perspective with a purpose.</h2>
                </div>
                <div className="section-copy">
                    <p>Thoughtful aerial imagery for properties, places, and projects across Fairfield County and beyond.</p>
                    <p>Every flight is planned around the story you need to tell, from a clear site overview to a frame that makes someone stop and look.</p>
                </div>
            </section>

            <section className="bio-section content-section">
                <div className="section-heading">
                    <p className="eyebrow">About the pilot</p>
                    <h2>Local knowledge. Careful flights.</h2>
                </div>
                <div className="section-copy">
                    <p>Based in Fairfield, I combine a photographer's eye with a survey-minded approach to create aerial work that is both striking and useful.</p>
                    <p>FAA Part 107 certified, fully insured, and attentive to the small details that make an image feel true to its place.</p>
                </div>
            </section>

            <section className="pricing-section content-section">
                <div className="section-heading">
                    <p className="eyebrow">Starting points</p>
                    <h2>Simple pricing, tailored flights.</h2>
                </div>
                <div className="pricing-grid">
                    <article className="pricing-card">
                        <p className="pricing-label">Still imagery</p>
                        <h3>$350</h3>
                        <p>Up to one hour on site, edited aerial photographs, and a private online gallery.</p>
                    </article>
                    <article className="pricing-card pricing-card-featured">
                        <p className="pricing-label">Property story</p>
                        <h3>$650</h3>
                        <p>Expanded coverage for listings, venues, and land with a curated set of final images.</p>
                    </article>
                    <article className="pricing-card">
                        <p className="pricing-label">Survey & progress</p>
                        <h3>Custom</h3>
                        <p>Repeat site visits, mapping, and documentation planned around your project timeline.</p>
                    </article>
                </div>
            </section>

            <PortfolioGallery />
            <ContactSection />
        </div>
    );
};

export default Portfolio;