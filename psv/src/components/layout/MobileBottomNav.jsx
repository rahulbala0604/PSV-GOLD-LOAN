import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, IndianRupee, Calculator, Phone } from 'lucide-react';
import { PSV_GOLD_LOAN_CONFIG } from '../../constants/config';

const MobileBottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="mobile-bottom-nav">
      <Link to="/" className={`bottom-nav-item ${currentPath === '/' ? 'active' : ''}`}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link to="/gold-loan" className={`bottom-nav-item ${currentPath === '/gold-loan' ? 'active' : ''}`}>
        <IndianRupee size={24} />
        <span>Gold Loan</span>
      </Link>
      <Link to="/calculator" className={`bottom-nav-item ${currentPath === '/calculator' ? 'active' : ''}`}>
        <Calculator size={24} />
        <span>Calculator</span>
      </Link>
      <Link to="/contact" className={`bottom-nav-item ${currentPath === '/contact' ? 'active' : ''}`}>
        <Phone size={24} />
        <span>Contact</span>
      </Link>
    </div>
  );
};

export default MobileBottomNav;
