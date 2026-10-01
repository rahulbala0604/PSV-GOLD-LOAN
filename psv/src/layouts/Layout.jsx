import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import { PSV_GOLD_LOAN_CONFIG } from '../constants/config';
import { MessageCircle } from 'lucide-react';
import '../components/layout/Layout.scss'; // Contains FAB and Bottom Nav styles

const FloatingWhatsApp = () => {
  return (
    <a 
      href={`https://wa.me/91${PSV_GOLD_LOAN_CONFIG.contact.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </div>
  );
};

export default Layout;
