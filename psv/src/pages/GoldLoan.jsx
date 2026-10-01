import React from 'react';
import { PSV_GOLD_LOAN_CONFIG } from '../constants/config';
import { CheckCircle2, ShieldCheck, FileText, IndianRupee } from 'lucide-react';
import './Pages.scss';
import { Link } from 'react-router-dom';

const GoldLoan = () => {
  return (
    <div className="page loan-page">
      <section style={{ background: 'var(--primary)', color: 'var(--surface)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="caption" style={{ color: 'var(--secondary)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>SUPER LOAN</span>
          <h1 className="display" style={{ color: 'var(--surface)', marginBottom: '1rem' }}>Gold Loan Services</h1>
          <p style={{ fontSize: 'var(--fs-lg)', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Premium financial solutions against your gold from {PSV_GOLD_LOAN_CONFIG.company.name}.
          </p>
          
          <div style={{ display: 'inline-block', border: '1px solid var(--secondary)', padding: '2rem 4rem', background: 'var(--primary-dark)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-6px', left: '-6px', width: '12px', height: '12px', background: 'var(--secondary)' }}></div>
            <div style={{ position: 'absolute', bottom: '-6px', right: '-6px', width: '12px', height: '12px', background: 'var(--secondary)' }}></div>
            <h2 style={{ fontSize: 'var(--fs-display)', color: 'var(--secondary)', margin: 0, lineHeight: 1 }}>₹7,500<span style={{ fontSize: 'var(--fs-2xl)' }}>/g</span></h2>
            <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.8)', fontSize: 'var(--fs-lg)', textTransform: 'uppercase', letterSpacing: '1px' }}>22K Eligible Loan Value</p>
          </div>
        </div>
      </section>
      
      <section style={{ background: 'var(--primary-dark)', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '4px solid var(--secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', textAlign: 'center', color: 'var(--surface)' }}>
            <div>
              <span style={{ display: 'block', fontSize: 'var(--fs-xl)', fontWeight: '600', color: 'var(--secondary)', marginBottom: '0.25rem' }}>2.0%</span>
              <span style={{ fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Monthly Interest</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }} className="hide-mobile"></div>
            <div>
              <span style={{ display: 'block', fontSize: 'var(--fs-xl)', fontWeight: '600', color: 'var(--surface)', marginBottom: '0.25rem' }}>₹0</span>
              <span style={{ fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Processing Fee</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }} className="hide-mobile"></div>
            <div>
              <span style={{ display: 'block', fontSize: 'var(--fs-xl)', fontWeight: '600', color: 'var(--surface)', marginBottom: '0.25rem' }}>₹0</span>
              <span style={{ fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Other Charges</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }} className="hide-mobile"></div>
            <div>
              <span style={{ display: 'block', fontSize: 'var(--fs-xl)', fontWeight: '600', color: 'var(--secondary)', marginBottom: '0.25rem' }}>1999</span>
              <span style={{ fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Established Since</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'var(--fs-3xl)', color: 'var(--primary)' }}>How the Loan Works</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--surface-alt)', border: '2px solid var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--fs-lg)', fontWeight: '600', color: 'var(--primary)', flexShrink: 0 }}>1</div>
              <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: 'var(--fs-xl)', marginBottom: '0.5rem', color: 'var(--primary)' }}>Bring Your Gold</h3>
                <p style={{ color: 'var(--text-muted)' }}>Visit our Puthiamputhur branch with your gold ornaments and basic documentation.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--surface-alt)', border: '2px solid var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--fs-lg)', fontWeight: '600', color: 'var(--primary)', flexShrink: 0 }}>2</div>
              <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: 'var(--fs-xl)', marginBottom: '0.5rem', color: 'var(--primary)' }}>Evaluation & Eligibility</h3>
                <p style={{ color: 'var(--text-muted)' }}>We assess the purity of your gold to determine your precise eligible loan value, currently fixed at ₹7,500/g for 22K.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--surface-alt)', border: '2px solid var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--fs-lg)', fontWeight: '600', color: 'var(--primary)', flexShrink: 0 }}>3</div>
              <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: 'var(--fs-xl)', marginBottom: '0.5rem', color: 'var(--primary)' }}>Instant Processing</h3>
                <p style={{ color: 'var(--text-muted)' }}>Sign the agreement with zero processing fees. Receive your funds immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '6rem 0', background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: 'var(--fs-3xl)', color: 'var(--primary)', marginBottom: '2rem' }}>Eligibility</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: 'var(--fs-lg)', color: 'var(--primary)', marginBottom: '0.25rem' }}>Age</strong>
                  <span style={{ color: 'var(--text-muted)' }}>21+ years</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: 'var(--fs-lg)', color: 'var(--primary)', marginBottom: '0.25rem' }}>Gold</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Any type of gold jewellery, subject to purity assessment.</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: 'var(--fs-lg)', color: 'var(--primary)', marginBottom: '0.25rem' }}>Income</strong>
                  <span style={{ color: 'var(--text-muted)' }}>No income proof required.</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 style={{ fontSize: 'var(--fs-3xl)', color: 'var(--primary)', marginBottom: '2rem' }}>Required Documents</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please bring any ONE of the following original valid documents:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {PSV_GOLD_LOAN_CONFIG.documents.map((doc, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                    <CheckCircle2 color="var(--secondary-dark)" size={24} />
                    <span style={{ fontSize: 'var(--fs-lg)', color: 'var(--text)' }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--primary)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'var(--fs-4xl)', color: 'var(--surface)', marginBottom: '2rem' }}>Ready to Appraise Your Gold?</h2>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: 'var(--fs-lg)', background: 'var(--secondary)', color: 'var(--primary-dark)', border: 'none' }}>Apply for Gold Loan</Link>
        </div>
      </section>
    </div>
  );
};

export default GoldLoan;
