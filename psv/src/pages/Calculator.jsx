import React, { useState } from 'react';
import { PSV_GOLD_LOAN_CONFIG } from '../constants/config';
import { calculateGoldValue, calculateEligibleLoan, calculateOutstanding, calculateInterestForMonth } from '../utils/goldLoanCalculator';
import { Link } from 'react-router-dom';
import { Calculator as CalcIcon, RefreshCw, AlertCircle, Phone } from 'lucide-react';
import './Pages.scss';

const Calculator = () => {
  const { calculator } = PSV_GOLD_LOAN_CONFIG;
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState(calculator.defaultPurity);
  const [duration, setDuration] = useState('1');

  const numWeight = parseFloat(weight);
  const numDuration = parseInt(duration, 10);
  const isValidWeight = !isNaN(numWeight) && numWeight > 0;
  const isValidDuration = !isNaN(numDuration) && numDuration > 0;

  const estimatedGoldValue = isValidWeight ? calculateGoldValue(numWeight, purity, calculator) : 0;
  const eligibleLoan = isValidWeight ? calculateEligibleLoan(estimatedGoldValue, calculator) : null;
  const monthInterest = (isValidWeight && eligibleLoan && isValidDuration) ? calculateInterestForMonth(eligibleLoan, numDuration, calculator) : null;
  const outstandingPrincipal = (isValidWeight && eligibleLoan && isValidDuration) ? calculateOutstanding(eligibleLoan, numDuration, calculator) : null;

  const handleReset = () => {
    setWeight('');
    setPurity(calculator.defaultPurity);
    setDuration('1');
  };

  return (
    <div className="page calculator-page">
      <section style={{ background: 'var(--primary)', color: 'var(--surface)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="caption" style={{ color: 'var(--secondary)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>CALCULATE</span>
          <h1 className="display" style={{ color: 'var(--surface)', marginBottom: '1rem' }}>Gold Loan Calculator</h1>
          <p style={{ fontSize: 'var(--fs-lg)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Estimate your eligible loan amount based on gold weight and purity.
          </p>
        </div>
      </section>
      
      <section style={{ background: 'var(--background)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '600px' }}>
          
          {/* Input Area */}
          <div style={{ background: 'var(--surface-alt)', padding: '4rem 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div className="btn-icon" style={{ background: 'var(--background)', color: 'var(--primary)' }}>
                <CalcIcon size={24} />
              </div>
              <h2 style={{ fontSize: 'var(--fs-xl)', marginBottom: 0 }}>Enter Details</h2>
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>
                Gold Weight (Grams)
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="number" 
                  min="0"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g., 20"
                  style={{ paddingRight: '4rem', fontSize: 'var(--fs-lg)' }}
                />
                <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                  grams
                </span>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>
                Gold Purity
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                {['18K', '20K', '22K', '24K'].map(p => (
                  <button 
                    key={p}
                    type="button"
                    onClick={() => setPurity(p)}
                    style={{
                      padding: '0.75rem 0',
                      borderRadius: 'var(--radius-sm)',
                      border: `1px solid ${purity === p ? 'var(--secondary)' : 'var(--border)'}`,
                      background: purity === p ? 'var(--secondary-light)' : 'transparent',
                      color: purity === p ? 'var(--primary-dark)' : 'var(--text)',
                      fontWeight: purity === p ? '600' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>
                Loan Duration
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', fontSize: 'var(--fs-md)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)' }}
                >
                  <option value="1">1 month</option>
                  <option value="2">2 months</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>
            </div>

            <button onClick={handleReset} className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--primary)', color: 'var(--primary)' }}>
              <RefreshCw size={18} /> Reset Calculator
            </button>
          </div>

          {/* Result Area */}
          <div style={{ background: 'var(--primary-dark)', padding: '4rem 10%', color: 'var(--surface)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 'var(--fs-xl)', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', color: 'var(--secondary)' }}>
              Estimated Results
            </h2>

            <div style={{ marginBottom: '2rem' }}>
              <p className="text-muted" style={{ marginBottom: '0.25rem', fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,0.7)' }}>Estimated Gold Value</p>
              <p style={{ fontSize: 'var(--fs-2xl)', fontWeight: '600', color: 'var(--surface)' }}>
                ₹ {estimatedGoldValue.toLocaleString('en-IN')}
              </p>
            </div>

            <div style={{ marginTop: 'auto', background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              {calculator.ltv === null ? (
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--secondary-light)', marginBottom: '1rem' }}>
                    <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: 'var(--fs-sm)', margin: 0, lineHeight: 1.4 }}>
                      The official PSV loan-to-value (LTV) and calculation method are currently being configured.
                    </p>
                  </div>
                  <Link to="/contact" className="btn" style={{ background: 'var(--surface)', color: 'var(--primary)', width: '100%', padding: '0.75rem' }}>
                    <Phone size={18} /> Contact Branch for Eligibility
                  </Link>
                </div>
              ) : (
                <div>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <p className="text-muted" style={{ marginBottom: '0.25rem', fontSize: 'var(--fs-sm)' }}>Initial Eligible Loan</p>
                    <p style={{ fontSize: 'var(--fs-3xl)', fontWeight: '700', color: 'var(--secondary)', margin: 0 }}>
                      ₹ {eligibleLoan?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  
                  {monthInterest !== null && outstandingPrincipal !== null && (
                    <div style={{ marginBottom: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <p className="text-muted" style={{ margin: 0, fontSize: 'var(--fs-sm)' }}>Monthly Interest Rate</p>
                        <p style={{ fontSize: 'var(--fs-lg)', fontWeight: '500', margin: 0 }}>
                          {calculator.interestRate.toFixed(1)}%
                        </p>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <p className="text-muted" style={{ margin: 0, fontSize: 'var(--fs-sm)' }}>Processing Fee</p>
                        <p style={{ fontSize: 'var(--fs-md)', fontWeight: '500', margin: 0 }}>
                          ₹0
                        </p>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p className="text-muted" style={{ margin: 0, fontSize: 'var(--fs-sm)' }}>Other Charges</p>
                        <p style={{ fontSize: 'var(--fs-md)', fontWeight: '500', margin: 0 }}>
                          ₹0
                        </p>
                      </div>
                    </div>
                  )}

                  {monthInterest !== null && outstandingPrincipal !== null && (
                    <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <p style={{ margin: 0, fontSize: 'var(--fs-sm)', fontWeight: '500', color: '#E2E8F0' }}>Month {numDuration} Interest</p>
                        <p style={{ fontSize: 'var(--fs-xl)', fontWeight: '600', margin: 0, color: 'var(--surface)' }}>
                          ₹ {monthInterest.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                        <p style={{ margin: 0, fontSize: 'var(--fs-sm)', fontWeight: '500', color: '#E2E8F0' }}>Month {numDuration} Outstanding</p>
                        <p style={{ fontSize: 'var(--fs-xl)', fontWeight: '600', margin: 0, color: 'var(--secondary)' }}>
                          ₹ {outstandingPrincipal.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  )}

                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    Apply Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--background)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ padding: '2rem', border: '1px solid var(--border)', background: 'var(--surface)', borderTop: '4px solid var(--secondary)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: 'var(--fs-lg)' }}>Information</h3>
            <p className="body-text" style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              Interest is charged at {calculator.interestRate.toFixed(1)}% per month on the outstanding balance. If the applicable monthly interest is not settled, it is added to the outstanding balance. The total outstanding amount is paid when the loan is closed.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--primary-accent)', fontWeight: '600', fontSize: 'var(--fs-sm)' }}>
              22K eligible loan value: ₹{calculator.referenceRate.toLocaleString('en-IN')} per gram
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
