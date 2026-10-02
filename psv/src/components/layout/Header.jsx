import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PSV_GOLD_LOAN_CONFIG } from '../../constants/config';
import { Menu, X, Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const renderTickerGroup = () => (
    <>
      <span className="ticker-item">
        <Phone size={14} /> +91 {PSV_GOLD_LOAN_CONFIG.contact.phone}
      </span>
      <span className="ticker-separator">•</span>
      <span className="ticker-item">
        Open: {PSV_GOLD_LOAN_CONFIG.contact.workingHours}
      </span>
      <span className="ticker-separator">•</span>
      <span className="ticker-item">
        Puthiamputhur - Premium Gold Loan Service
      </span>
      <span className="ticker-separator">•</span>
    </>
  );

  return (
    <>
      <div className="topbar-ticker">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {renderTickerGroup()}
            {renderTickerGroup()}
            {renderTickerGroup()}
            {renderTickerGroup()}
          </div>
          <div className="ticker-content" aria-hidden="true">
            {renderTickerGroup()}
            {renderTickerGroup()}
            {renderTickerGroup()}
            {renderTickerGroup()}
          </div>
        </div>
      </div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo">
            <img src="/src/assets/images/logo.png" alt="PSV Gold Loan Logo" className="logo-img" />
            <div className="logo-text-container">
              <span className="logo-text-primary">{PSV_GOLD_LOAN_CONFIG.company.shortName}</span>
              <span className="logo-text-secondary">GOLD LOAN</span>
            </div>
          </Link>

          <nav className="desktop-nav">
            {PSV_GOLD_LOAN_CONFIG.navigation.links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-contact" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginRight: '1.5rem' }}>
              <div style={{ background: 'var(--border-light)', padding: '0.5rem', borderRadius: '50%', color: 'var(--primary)' }}>
                <Phone size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Call Us</span>
                <a href={`tel:+91${PSV_GOLD_LOAN_CONFIG.contact.phone.replace(/\D/g, "")}`} style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', lineHeight: 1 }}>
                  {PSV_GOLD_LOAN_CONFIG.contact.phone}
                </a>
              </div>
            </div>
            
            <Link to="/contact" className="btn btn-primary">Apply Now</Link>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        closeMenu={closeMenu} 
        currentPath={location.pathname}
        links={PSV_GOLD_LOAN_CONFIG.navigation.links}
      />
    </>
  );
};

export default Header;
