import React, { useState } from 'react';
import { PSV_GOLD_LOAN_CONFIG } from '../constants/config';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Loader2, MapPin } from 'lucide-react';
import './Pages.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: 'Super Loan',
    goldWeight: '',
    goldPurity: '22K',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isPreparing, setIsPreparing] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsPreparing(true);

    const message = `PSV GOLD LOAN - NEW CUSTOMER APPLICATION

Customer Details
Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
${formData.email.trim() ? `Email: ${formData.email.trim()}` : ''}

Loan Details
Loan Type: ${formData.loanType}
${formData.goldPurity ? `Gold Purity: ${formData.goldPurity}` : ''}
${formData.goldWeight.trim() ? `Approximate Gold Weight: ${formData.goldWeight.trim()}` : ''}

Additional Message:
${formData.message.trim() || 'No additional message.'}

Please contact the customer for further verification.`;

    const targetWhatsAppNumber = PSV_GOLD_LOAN_CONFIG.contact.whatsapp;
    const url = createWhatsAppUrl(targetWhatsAppNumber, message);
    
    // Immediate redirect to WhatsApp
    window.location.href = url;
    
    // Reset preparation state in case user navigates back
    setTimeout(() => {
      setIsPreparing(false);
    }, 1000);
  };

  return (
    <div className="page contact-page">
      <div className="contact-container" style={{ display: 'flex', minHeight: '100vh', flexWrap: 'wrap' }}>
        
        {/* Left Side: Contact Information (Red Panel) */}
        <div className="contact-panel contact-left" style={{ flex: '1 1 400px', background: 'var(--primary)', color: 'var(--surface)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="caption" style={{ color: 'var(--secondary)', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>CONTACT US</span>
          <h1 className="display" style={{ color: 'var(--surface)', marginBottom: '3rem' }}>Get in Touch</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              <div style={{ marginBottom: '1.25rem', borderLeft: '2px solid var(--secondary)', paddingLeft: '1.5rem' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone / WhatsApp</h4>
                <p style={{ fontSize: 'var(--fs-xl)' }}>
                  <a href={`tel:+91${PSV_GOLD_LOAN_CONFIG.contact.phone.replace(/\D/g, "")}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    +91 {PSV_GOLD_LOAN_CONFIG.contact.phone}
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: '1.25rem', borderLeft: '2px solid var(--secondary)', paddingLeft: '1.5rem' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                <p style={{ fontSize: 'var(--fs-xl)' }}>
                  <a href={`mailto:${PSV_GOLD_LOAN_CONFIG.contact.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {PSV_GOLD_LOAN_CONFIG.contact.email}
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: '1.25rem', borderLeft: '2px solid var(--secondary)', paddingLeft: '1.5rem' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</h4>
                <p style={{ fontSize: 'var(--fs-lg)', marginBottom: '1rem', lineHeight: '1.6', opacity: 0.9 }}>
                  {PSV_GOLD_LOAN_CONFIG.contact.address}
                </p>
                {PSV_GOLD_LOAN_CONFIG.contact.googleMapsUrl && (
                  <a href={PSV_GOLD_LOAN_CONFIG.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontSize: 'var(--fs-sm)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>
                    <MapPin size={16} /> View on Google Maps
                  </a>
                )}
              </div>
              <div style={{ borderLeft: '2px solid var(--secondary)', paddingLeft: '1.5rem' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '1px' }}>Working Hours</h4>
                <p style={{ fontSize: 'var(--fs-lg)', opacity: 0.9 }}>{PSV_GOLD_LOAN_CONFIG.contact.workingHours}</p>
              </div>
            </div>
          </div>

        {/* Right Side: Application Form (Cream Panel) */}
        <div className="contact-panel contact-right" style={{ flex: '1 1 600px', background: 'var(--surface-alt)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: 'var(--fs-3xl)', color: 'var(--primary)', marginBottom: '2rem' }}>Send an Inquiry</h2>
          <form onSubmit={handleSubmit} noValidate style={{ maxWidth: '600px', width: '100%' }}>
            <div className="contact-form-grid" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>
                    Full Name <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    style={{ borderColor: errors.name ? 'var(--danger)' : 'var(--border)' }}
                  />
                  {errors.name && <span style={{ color: 'var(--danger)', fontSize: 'var(--fs-xs)', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>
                    Phone Number <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    style={{ borderColor: errors.phone ? 'var(--danger)' : 'var(--border)' }}
                  />
                  {errors.phone && <span style={{ color: 'var(--danger)', fontSize: 'var(--fs-xs)', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email (optional)"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>Loan Type</label>
                  <select name="loanType" value={formData.loanType} onChange={handleInputChange}>
                    <option value="Super Loan">Super Loan</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>Gold Purity</label>
                  <select name="goldPurity" value={formData.goldPurity} onChange={handleInputChange}>
                    <option value="18K">18K</option>
                    <option value="20K">20K</option>
                    <option value="22K">22K</option>
                    <option value="24K">24K</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>Approximate Gold Weight</label>
                <input 
                  type="text" 
                  name="goldWeight"
                  value={formData.goldWeight}
                  onChange={handleInputChange}
                  placeholder="e.g. 20 grams"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: 'var(--fs-sm)' }}>Additional Message</label>
                <textarea 
                  name="message"
                  rows="3" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any specific requirements?"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isPreparing}>
                {isPreparing ? (
                  <><Loader2 className="animate-spin" size={20} /> Redirecting to WhatsApp...</>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
