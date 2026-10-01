import React from 'react';
import { PSV_GOLD_LOAN_CONFIG } from '../constants/config';
import { MapPin, Calendar } from 'lucide-react';
import './Pages.scss';

const About = () => {
  return (
    <div className="page about-page">
      <section style={{ background: 'var(--primary)', padding: '6rem 0', color: 'var(--surface)', textAlign: 'center' }}>
        <div className="container">
          <span className="caption" style={{ color: 'var(--secondary)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>OUR HISTORY</span>
          <h1 className="display" style={{ color: 'var(--surface)', marginBottom: '1rem' }}>About {PSV_GOLD_LOAN_CONFIG.company.name}</h1>
          <p style={{ fontSize: 'var(--fs-lg)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Serving since {PSV_GOLD_LOAN_CONFIG.company.establishedYear}
          </p>
        </div>
      </section>
      
      <section style={{ padding: '6rem 0', background: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', left: '-20px', bottom: '-20px', right: '20px', border: '1px solid var(--secondary)', zIndex: 0 }}></div>
              <img src="/src/assets/images/gold_assessment.png" alt="Professional Consultation" style={{ width: '100%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-lg)' }} loading="lazy" />
            </div>
            
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ width: '2px', background: 'var(--secondary)', flexShrink: 0 }}></div>
              <div>
                <h2 style={{ fontSize: 'var(--fs-3xl)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Reliable Financial Solutions</h2>
                <p className="body-text" style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: 'var(--fs-lg)', marginBottom: '2rem' }}>
                  {PSV_GOLD_LOAN_CONFIG.company.tagline} We are committed to providing trustworthy financial solutions to our customers. Our focus is on maintaining clear communication, simple documentation, and securing your assets at every step.
                </p>
                
                <h3 style={{ fontSize: 'var(--fs-xl)', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={24} color="var(--secondary-dark)" /> Our Location
                </h3>
                <address style={{ fontStyle: 'normal', color: 'var(--text-muted)', fontSize: 'var(--fs-lg)', lineHeight: '1.8' }}>
                  PSV Complex,<br />
                  Opposite to Balaji Mahal,<br />
                  Ottapidram Road,<br />
                  Puthiamputhur - 628402
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
