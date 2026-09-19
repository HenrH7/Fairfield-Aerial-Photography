import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <div>
            <section className="pricing-section content-section">
                <div className="section-heading">
                    <p className="eyebrow">Pricing</p>
                </div>
                <div className="pricing-grid">
                    <article className="pricing-card">
                        <p className="pricing-label">Still imagery</p>
                        <h3>$199</h3>
                        <p>per property, edited aerial photographs and videos</p>
                    </article>
                </div>
            </section>

            <section className="contact-section">
                

                <h2>Contact Us</h2>
                <form
                    action="https://formspree.io/f/xgavvgqz"
                    method="POST"
                    >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <p>Please tell me about the location of the site, the type of imagery you're looking for, and any obstacles on the property that the drone will need to avoid</p>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                    <p>If you have any questions, feel free to reach out to us at:</p>
                    <p>Phone: (203) 216-4586</p>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;