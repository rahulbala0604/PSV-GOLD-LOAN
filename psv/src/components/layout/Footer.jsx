import React from 'react';
import { Link } from 'react-router-dom';
import { PSV_GOLD_LOAN_CONFIG } from '../../constants/config';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', letterSpacing: '1px' }}>{PSV_GOLD_LOAN_CONFIG.company.shortName}</h3>
            <p className="tagline" style={{ color: 'var(--secondary)' }}>GOLD LOAN</p>
            <p className="established" style={{ marginTop: '1rem', color: 'var(--secondary)' }}>
              Serving customers since {PSV_GOLD_LOAN_CONFIG.company.establishedYear}.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              {PSV_GOLD_LOAN_CONFIG.navigation.links.map(link => (
                <Link key={link.path} to={link.path}>{link.label}</Link>
              ))}
            </nav>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <Phone size={18} className="icon" />
              <a href={`tel:+91${PSV_GOLD_LOAN_CONFIG.contact.phone.replace(/\D/g, "")}`}>
                +91 {PSV_GOLD_LOAN_CONFIG.contact.phone}
              </a>
            </div>
            <div className="contact-item">
              <Mail size={18} className="icon" />
              <a href={`mailto:${PSV_GOLD_LOAN_CONFIG.contact.email}`}>
                {PSV_GOLD_LOAN_CONFIG.contact.email}
              </a>
            </div>
            <div className="contact-item align-start">
              <MapPin size={18} className="icon" style={{ marginTop: '4px' }} />
              <p>{PSV_GOLD_LOAN_CONFIG.contact.address}</p>
            </div>
          </div>
          
          <div className="footer-hours">
            <h4>Working Hours</h4>
            <p className="hours-text">{PSV_GOLD_LOAN_CONFIG.contact.workingHours}</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex', padding: '0.75rem 1.5rem' }}>
              Apply for Loan
            </Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {PSV_GOLD_LOAN_CONFIG.company.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
