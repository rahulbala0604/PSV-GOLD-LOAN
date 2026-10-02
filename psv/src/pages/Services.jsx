import React from 'react';
import { ArrowRight, Wallet, HelpCircle } from 'lucide-react';
import { PSV_GOLD_LOAN_CONFIG } from '../constants/config';
import { Link } from 'react-router-dom';
import './Pages.scss';

const Services = () => {
  return (
    <div className="page services-page">
      <section style={{ background: 'var(--primary)', color: 'var(--surface)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="caption" style={{ color: 'var(--secondary)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>OUR SERVICES</span>
          <h1 className="display" style={{ color: 'var(--surface)', marginBottom: '1rem' }}>Financial Solutions</h1>
        </div>
      </section>
      
      <section style={{ background: 'var(--background)' }}>
        <div className="service-grid">
          <div className="service-text">
            <span className="caption" style={{ color: 'var(--primary-accent)', marginBottom: '1rem', display: 'inline-block', letterSpacing: '2px' }}>PRIMARY SERVICE</span>
            <h2 style={{ fontSize: 'var(--fs-4xl)', color: 'var(--primary)', marginBottom: '1.5rem' }}>{PSV_GOLD_LOAN_CONFIG.services[0].title}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: 'var(--fs-lg)', lineHeight: 1.8 }}>
              {PSV_GOLD_LOAN_CONFIG.services[0].description} We provide an expedited, secure, and transparent evaluation process ensuring you receive maximum value for your gold.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 3rem', background: 'var(--primary)', alignSelf: 'flex-start' }}>
              Apply Now
            </Link>
          </div>
          
          <div className="service-img" style={{ position: 'relative', minHeight: '400px' }}>
            <img src="/src/assets/images/gold_loan_services.png" alt="Secure Gold Handling" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 0', background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'var(--fs-3xl)', color: 'var(--primary)' }}>Frequently Asked Questions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {PSV_GOLD_LOAN_CONFIG.faq.map((item, index) => (
              <details key={index} className="faq-details" style={{ borderBottom: '1px solid var(--border)', transition: 'all 0.3s' }}>
                <summary style={{ padding: '1.5rem', minHeight: '52px', cursor: 'pointer', background: 'var(--primary)', color: 'var(--surface)', fontWeight: '500', fontSize: 'var(--fs-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  <span style={{ paddingRight: '1rem' }}>{item.question}</span>
                  <span className="faq-icon" style={{ color: 'var(--secondary)', flexShrink: 0, fontSize: '1.5rem', lineHeight: 1 }}>+</span>
                </summary>
                <div style={{ padding: '2rem 1.5rem', background: 'var(--surface-alt)', color: 'var(--text)', lineHeight: '1.8' }}>
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
