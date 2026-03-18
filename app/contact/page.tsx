'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            We Respond Within 48h
          </div>
          <h1>Get in <span style={{color:'var(--accent)'}}>Touch</span></h1>
          <p>Questions, sponsorship inquiries, guest pitches, or just want to say hello — we read every message.</p>
        </div>
      </section>

      <div className="section-wrap">
        <div className="contact-layout">

          {/* FORM */}
          <div>
            {sent ? (
              <div style={{background:'var(--accent-light)',border:'1px solid rgba(0,71,255,.15)',borderRadius:'var(--radius-lg)',padding:'48px',textAlign:'center'}}>
                <i className="fa-solid fa-circle-check" style={{fontSize:'48px',color:'var(--accent2)',marginBottom:'16px',display:'block'}}></i>
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'22px',marginBottom:'8px'}}>Message Sent!</h3>
                <p style={{color:'var(--ink-soft)'}}>We will get back to you within 48 hours. Check out the latest episode while you wait.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'22px',marginBottom:'8px'}}>Send a Message</h3>
                <p style={{fontSize:'14px',color:'var(--ink-muted)',marginBottom:'20px'}}>All fields required.</p>
                <div className="form-group">
                  <label htmlFor="name"><i className="fa-regular fa-user" style={{marginRight:'6px'}}></i>Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="fa-regular fa-envelope" style={{marginRight:'6px'}}></i>Email Address</label>
                  <input type="email" id="email" name="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject"><i className="fa-solid fa-tag" style={{marginRight:'6px'}}></i>Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a topic...</option>
                    <option>General Inquiry</option>
                    <option>Sponsorship</option>
                    <option>Guest Pitch</option>
                    <option>Press and Media</option>
                    <option>Technical Issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message"><i className="fa-regular fa-comment" style={{marginRight:'6px'}}></i>Message</label>
                  <textarea id="message" name="message" placeholder="Tell us what is on your mind..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn-primary" style={{alignSelf:'flex-start'}}>
                  <i className="fa-solid fa-paper-plane"></i> Send Message
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="contact-info-col">
            <div className="info-card">
              <div className="info-card-icon"><i className="fa-regular fa-envelope"></i></div>
              <h3>Email Us</h3>
              <p><a href="mailto:hello@agentcfo.fm">hello@agentcfo.fm</a></p>
              <p style={{marginTop:'4px',fontSize:'13px',color:'var(--ink-muted)'}}>We respond within 48 business hours.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><i className="fa-solid fa-microphone"></i></div>
              <h3>Guest Pitches</h3>
              <p>Have a story worth sharing? <a href="/submit-guest">Apply here</a> and someone from our team will reach out if it is a good fit.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><i className="fa-solid fa-handshake"></i></div>
              <h3>Sponsorship</h3>
              <p>Reach 50K+ finance decision-makers each month. <a href="/sponsor">View our packages</a> or email us for a custom proposal.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><i className="fa-solid fa-share-nodes"></i></div>
              <h3>Follow Us</h3>
              <p style={{marginBottom:'10px'}}>Stay updated across platforms:</p>
              <div className="social-row">
                <a href="#" className="social-btn"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="social-btn"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="social-btn"><i className="fa-brands fa-spotify"></i></a>
                <a href="#" className="social-btn"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{marginTop:'80px'}}>
          <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-circle-question" style={{marginRight:'8px'}}></i>FAQ</p>
          <h2 className="section-heading" style={{marginBottom:'40px'}}>Common <span style={{color:'var(--accent)'}}>Questions</span></h2>
          {[
            {q:'How do I become a guest on AgentCFO?',a:'Submit your pitch via our guest application form. We prioritize guests with hands-on experience deploying AI in finance. We receive many applications, so please be specific about your story and the outcomes you have achieved.'},
            {q:'Do you accept sponsored content?',a:'We offer dedicated sponsor segments within episodes as well as newsletter sponsorships. We do not accept guests who are pitching a product. All sponsor relationships are clearly disclosed.'},
            {q:'Can I republish episode transcripts?',a:'You are welcome to quote excerpts (up to 200 words) with attribution. For longer republication or commercial use, please email us for permission.'},
            {q:'How do I report a technical issue with the website or player?',a:'Email hello@agentcfo.fm with the subject line "Technical Issue" and describe what you are experiencing. Screenshots are helpful.'},
            {q:'Where can I follow along with new episodes?',a:'Subscribe on Spotify, Apple Podcasts, Google, or YouTube — or sign up for our newsletter and we will deliver episode alerts straight to your inbox every Thursday.'},
          ].map(faq => (
            <div key={faq.q} className="faq-item">
              <p className="faq-q"><i className="fa-solid fa-chevron-right" style={{color:'var(--accent)',fontSize:'12px',marginRight:'8px'}}></i>{faq.q}</p>
              <p className="faq-a">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">AgentCFO</a>
            <p className="footer-brand-text">The podcast for finance leaders navigating the AI era.</p>
            <div className="footer-social">
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-spotify"></i></a>
            </div>
          </div>
          <div className="footer-col"><h4>Listen</h4><a href="/episodes">Episodes</a><a href="/topics">Topics</a><a href="/guests">Guests</a></div>
          <div className="footer-col"><h4>Learn</h4><a href="/blog">Blog</a><a href="/glossary">Glossary</a><a href="/newsletter">Newsletter</a></div>
          <div className="footer-col"><h4>Connect</h4><a href="/about">About</a><a href="/contact">Contact</a><a href="/sponsor">Sponsor</a></div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AgentCFO.</p>
          <div className="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </footer>
    </>
  );
}
