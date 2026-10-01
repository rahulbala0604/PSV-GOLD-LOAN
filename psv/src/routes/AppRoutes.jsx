import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

// Pages
import Home from '../pages/Home';
import GoldLoan from '../pages/GoldLoan';
import Calculator from '../pages/Calculator';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gold-loan" element={<GoldLoan />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
