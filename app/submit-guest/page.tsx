'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SubmitGuest() {
  const [form, setForm] = useState({ name:'', title:'', company:'', email:'', linkedin:'', topic:'', bio:'', story:'' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            Accepting Applications
          </div>
          <h1>Be a <span style={{color:'var(--accent)'}}>Guest</span></h1>
          <p>We book working finance professionals with real AI transformation stories. If you have deployed something, changed something, or learned something hard — we want to hear from you.</p>
        </div>
      </section>

      <div className="section-wrap">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'64px',alignItems:'start'}}>

          {/* WHAT WE LOOK FOR */}
          <div>
            <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-magnifying-glass" style={{marginRight:'8px'}}></i>What We Look For</p>
            <h2 className="section-heading" style={{marginBottom:'24px',fontSize:'clamp(24px,2.5vw,36px)'}}>Our Guest <span style={{color:'var(--accent)'}}>Criteria</span></h2>
            <div style={{display:'flex',flexDirection:'column' as 'column',gap:'16px',marginBottom:'40px'}}>
              {[
                {icon:'fa-briefcase',title:'Active Practitioner',desc:"You are currently working in a finance role — CFO, VP Finance, Controller, FP&A Lead, AP Director, or similar."},
                {icon:'fa-robot',title:'Real AI Experience',desc:"You have deployed AI in your finance workflows — not just evaluated it. You have numbers, stories, and hard lessons."},
                {icon:'fa-comment-dots',title:'Candid Communicator',desc:"You are comfortable sharing what did not work, not just the wins. Our listeners want honest, not polished."},
                {icon:'fa-calendar-alt',title:'Available for 60 Min',desc:"Our episodes run 45 to 75 minutes. You need a quiet space, decent audio, and about 90 minutes of your schedule."},
              ].map(c => (
                <div key={c.title} style={{display:'flex',gap:'14px',alignItems:'flex-start',padding:'16px',background:'var(--off-white)',borderRadius:'var(--radius)',border:'1px solid var(--mid)'}}>
                  <div style={{width:'36px',height:'36px',background:'var(--accent-light)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent)',flexShrink:0,fontSize:'14px'}}>
                    <i className={`fa-solid ${c.icon}`}></i>
                  </div>
                  <div>
                    <p style={{fontWeight:'700',fontSize:'15px',marginBottom:'4px'}}>{c.title}</p>
                    <p style={{fontSize:'13px',color:'var(--ink-muted)',lineHeight:'1.55'}}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:'var(--ink)',color:'white',borderRadius:'var(--radius-lg)',padding:'28px'}}>
              <i className="fa-solid fa-circle-info" style={{fontSize:'20px',marginBottom:'10px',color:'var(--accent2)',display:'block'}}></i>
              <p style={{fontWeight:'700',marginBottom:'6px'}}>Response Time</p>
              <p style={{fontSize:'13px',opacity:.7,lineHeight:'1.6'}}>We review every application within 2 weeks. If your background is a good fit, we will reach out to schedule a pre-interview call.</p>
            </div>
          </div>

          {/* FORM */}
          <div>
            {sent ? (
              <div style={{background:'var(--accent-light)',border:'1px solid rgba(0,71,255,.15)',borderRadius:'var(--radius-lg)',padding:'48px',textAlign:'center'}}>
                <i className="fa-solid fa-circle-check" style={{fontSize:'48px',color:'var(--accent2)',marginBottom:'16px',display:'block'}}></i>
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'22px',marginBottom:'8px'}}>Application Received!</h3>
                <p style={{color:'var(--ink-soft)'}}>We will review your pitch and get back to you within 2 weeks. Thank you for applying.</p>
              </div>
            ) : (
              <form className="submit-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'20px',marginBottom:'24px'}}>Guest Application</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Current Title *</label>
                    <input name="title" placeholder="CFO, VP Finance..." value={form.title} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Company *</label>
                    <input name="company" placeholder="Acme Corp" value={form.company} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Work Email *</label>
                    <input name="email" type="email" placeholder="jane@acme.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>LinkedIn URL</label>
                  <input name="linkedin" placeholder="linkedin.com/in/..." value={form.linkedin} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Proposed Topic *</label>
                  <select name="topic" value={form.topic} onChange={handleChange} required>
                    <option value="">Select a topic area...</option>
                    <option>AI and Automation in Finance</option>
                    <option>FP&A Strategy and Tools</option>
                    <option>Month-End Close</option>
                    <option>Accounts Payable and AP Automation</option>
                    <option>Cash Flow and Treasury</option>
                    <option>Tax and Compliance</option>
                    <option>Investor Relations and Board Reporting</option>
                    <option>Finance Team Structure and Talent</option>
                    <option>ERP and Finance Systems</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Brief Bio *</label>
                  <textarea name="bio" placeholder="3 to 5 sentences on your background, current role, and areas of expertise..." value={form.bio} onChange={handleChange} style={{minHeight:'100px'}} required />
                </div>
                <div className="form-group">
                  <label>Your Story *</label>
                  <textarea name="story" placeholder="What specific AI deployment, transformation, or experience do you want to discuss? What will listeners learn? Be concrete." value={form.story} onChange={handleChange} style={{minHeight:'140px'}} required />
                </div>
                <button type="submit" className="btn-primary"><i className="fa-solid fa-paper-plane"></i> Submit Application</button>
              </form>
            )}
          </div>
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
