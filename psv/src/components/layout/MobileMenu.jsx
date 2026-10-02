import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import './MobileMenu.scss';
import { PSV_GOLD_LOAN_CONFIG } from '../../constants/config';

const MobileMenu = ({ isOpen, closeMenu }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeMenu]);

  return (
    <>
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/images/logo.png" alt="PSV Gold Loan Logo" className="logo-img" />
            <div className="logo-text-container" style={{ display: 'flex', flexDirection: 'column', marginLeft: '0.75rem' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: '700', color: 'var(--secondary)', lineHeight: 1 }}>{PSV_GOLD_LOAN_CONFIG.company.shortName}</span>
              <span style={{ fontSize: '0.6rem', fontWeight: '600', letterSpacing: '2px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>GOLD LOAN</span>
            </div>
          </Link>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        
        <nav className="mobile-nav">
          <ul>
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/gold-loan" onClick={closeMenu}>Gold Loan</NavLink></li>
            <li><NavLink to="/calculator" onClick={closeMenu}>Calculator</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
        
        <div className="mobile-menu-footer">
          <Link to="/contact" className="btn btn-primary btn-block" onClick={closeMenu}>Apply Now</Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
