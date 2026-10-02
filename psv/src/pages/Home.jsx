import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, FileText, Lock, Building, Calculator, ArrowRight, Phone } from 'lucide-react';
import { PSV_GOLD_LOAN_CONFIG } from '../constants/config';
import './Pages.scss';

const Home = () => {
  return (
    <div className="page home-page">
      <div style={{ background: 'var(--primary)', color: 'var(--secondary)', textAlign: 'center', padding: '0.5rem', fontSize: 'var(--fs-sm)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
        Trusted Gold Loan Services Since {PSV_GOLD_LOAN_CONFIG.company.establishedYear}
      </div>

      <section className="hero-section" style={{ background: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '50%', background: 'var(--primary-dark)', zIndex: 0, opacity: 0.03, clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow" style={{ color: 'var(--primary-accent)', fontWeight: '700', letterSpacing: '2px', display: 'inline-block', marginBottom: '1.5rem', borderBottom: '1px solid var(--secondary)', paddingBottom: '0.5rem' }}>PSV GOLD LOAN • SINCE {PSV_GOLD_LOAN_CONFIG.company.establishedYear}</span>
              <h1 className="display" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Trusted Gold Loan Services for Your Financial Needs</h1>
              <p className="hero-subtitle" style={{ fontSize: 'var(--fs-lg)', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.8' }}>We provide a premium gold loan experience prioritizing your convenience, clear financial terms, and the absolute safety of your assets.</p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: 'var(--fs-md)', background: 'var(--primary)', color: 'var(--surface)', border: 'none' }}>Apply Now</Link>
                <Link to="/calculator" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: 'var(--fs-md)', borderColor: 'var(--primary)', color: 'var(--primary)' }}>Calculate Loan</Link>
              </div>
            </div>
            <div className="hero-visual" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', bottom: '-10px', left: '-10px', border: '1px solid var(--secondary)', opacity: 0.5 }}></div>
              <img src="/images/hero_gold.png" alt="Premium Gold Jewellery" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 2, boxShadow: 'var(--shadow-lg)' }} loading="eager" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="trust-strip" style={{ background: 'var(--primary-dark)', color: 'var(--surface)', borderTop: '4px solid var(--secondary)' }}>
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon" style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Building size={36} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: 'var(--fs-lg)', color: 'var(--surface)', marginBottom: '0.5rem', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>Since {PSV_GOLD_LOAN_CONFIG.company.establishedYear}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--fs-sm)' }}>Experienced Service</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon" style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><ShieldCheck size={36} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: 'var(--fs-lg)', color: 'var(--surface)', marginBottom: '0.5rem', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>₹{PSV_GOLD_LOAN_CONFIG.calculator.referenceRate}/g 22K Loan</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--fs-sm)' }}>Eligible Loan Value</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon" style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Calculator size={36} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: 'var(--fs-lg)', color: 'var(--surface)', marginBottom: '0.5rem', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>2.0% Monthly</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--fs-sm)' }}>Interest Rate</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon" style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><FileText size={36} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: 'var(--fs-lg)', color: 'var(--surface)', marginBottom: '0.5rem', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>Simple Documentation</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--fs-sm)' }}>Easy Application</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div>
              <img src="/images/gold_assessment.png" alt="Gold Assessment" style={{ width: '100%', objectFit: 'cover', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-md)' }} loading="lazy" />
            </div>
            <div>
              <span className="caption" style={{ color: 'var(--primary-accent)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>SUPER LOAN</span>
              <h2 style={{ fontSize: 'var(--fs-4xl)', color: 'var(--primary)', marginBottom: '2rem' }}>Premium Gold Loan Service</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  <span style={{ fontSize: 'var(--fs-lg)', color: 'var(--text)' }}>22K Eligible Loan</span>
                  <span style={{ fontSize: 'var(--fs-xl)', fontWeight: '600', color: 'var(--secondary-dark)' }}>₹{PSV_GOLD_LOAN_CONFIG.calculator.referenceRate}/g</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  <span style={{ fontSize: 'var(--fs-lg)', color: 'var(--text)' }}>Monthly Interest</span>
                  <span style={{ fontSize: 'var(--fs-xl)', fontWeight: '600', color: 'var(--secondary-dark)' }}>2.0%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  <span style={{ fontSize: 'var(--fs-lg)', color: 'var(--text)' }}>Processing Fee</span>
                  <span style={{ fontSize: 'var(--fs-xl)', fontWeight: '600', color: 'var(--secondary-dark)' }}>₹0</span>
                </div>
              </div>
              
              <Link to="/gold-loan" className="btn btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', padding: '0.75rem 2rem' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="caption" style={{ color: 'var(--primary-accent)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>HOW IT WORKS</span>
            <h2 style={{ color: 'var(--primary)', fontSize: 'var(--fs-3xl)' }}>A Transparent Process</h2>
          </div>
          
          <div className="process-timeline">
            <div className="process-timeline-line"></div>
            
            <div className="process-item">
              <div className="process-icon">01</div>
              <h3 style={{ fontSize: 'var(--fs-md)', color: 'var(--primary)', fontFamily: 'Inter, sans-serif' }}>Bring Your Gold</h3>
            </div>
            
            <div className="process-item">
              <div className="process-icon">02</div>
              <h3 style={{ fontSize: 'var(--fs-md)', color: 'var(--primary)', fontFamily: 'Inter, sans-serif' }}>Purity Assessment</h3>
            </div>
            
            <div className="process-item">
              <div className="process-icon">03</div>
              <h3 style={{ fontSize: 'var(--fs-md)', color: 'var(--primary)', fontFamily: 'Inter, sans-serif' }}>Eligibility Assessment</h3>
            </div>
            
            <div className="process-item">
              <div className="process-icon">04</div>
              <h3 style={{ fontSize: 'var(--fs-md)', color: 'var(--primary)', fontFamily: 'Inter, sans-serif' }}>Loan Processing</h3>
            </div>
            
            <div className="process-item">
              <div className="process-icon">05</div>
              <h3 style={{ fontSize: 'var(--fs-md)', color: 'var(--primary)', fontFamily: 'Inter, sans-serif' }}>Repayment & Closure</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--primary)', color: 'var(--surface)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'var(--fs-4xl)', color: 'var(--surface)', marginBottom: '1.5rem' }}>Know Your Estimated Loan Value</h2>
              <p style={{ fontSize: 'var(--fs-lg)', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem' }}>
                Use our calculator to estimate your eligible loan amount and monthly interest obligations instantly.
              </p>
              <Link to="/calculator" className="btn btn-primary" style={{ background: 'var(--secondary)', color: 'var(--primary-dark)', padding: '1rem 2.5rem', border: 'none', fontWeight: '600' }}>Calculate Now</Link>
            </div>
            <div style={{ background: 'var(--primary-dark)', padding: '3rem', border: '1px solid var(--secondary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '40px', borderTop: '2px solid var(--secondary)', borderLeft: '2px solid var(--secondary)' }}></div>
              <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '40px', borderBottom: '2px solid var(--secondary)', borderRight: '2px solid var(--secondary)' }}></div>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: 'var(--fs-2xl)' }}>Premium Estimation</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>22K Base Rate</span>
                  <span style={{ color: 'var(--surface)' }}>₹7,500/g</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Monthly Interest</span>
                  <span style={{ color: 'var(--surface)' }}>2.0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="caption" style={{ color: 'var(--primary-accent)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>REQUIREMENTS</span>
            <h2 style={{ color: 'var(--primary)', fontSize: 'var(--fs-3xl)' }}>Required Documents</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Any one of the listed original documents is required for processing.</p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {PSV_GOLD_LOAN_CONFIG.documents.map((doc, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--secondary-dark)' }}><FileText size={24} /></div>
                <span style={{ fontSize: 'var(--fs-lg)', fontWeight: '500', color: 'var(--text)' }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--surface-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary)', fontSize: 'var(--fs-4xl)', marginBottom: '1.5rem' }}>Visit PSV Gold Loan</h2>
          <p style={{ fontSize: 'var(--fs-lg)', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Puthiamputhur
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', background: 'var(--primary)' }}>Call Now</Link>
            <a href={`https://wa.me/91${PSV_GOLD_LOAN_CONFIG.contact.whatsapp.replace(/\D/g, "")}`} className="btn btn-outline" style={{ padding: '1rem 3rem', borderColor: 'var(--primary)', color: 'var(--primary)' }}>WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
