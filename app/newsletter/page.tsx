'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            Every Monday Morning
          </div>
          <h1>The AgentCFO <span style={{color:'var(--accent)'}}>Newsletter</span></h1>
          <p>The weekly briefing for finance leaders on AI strategy, episode highlights, frameworks, and tools. Free. No spam. Cancel anytime.</p>
        </div>
      </section>

      {/* SUBSCRIBE BOX */}
      <div className="section-wrap">
        <div className="nl-hero">
          <h2>Join 12,000+ Finance Leaders</h2>
          <p>Get the Monday morning brief that keeps you ahead of the AI curve in finance and FP&A.</p>
          {done ? (
            <div style={{background:'rgba(255,255,255,.2)',borderRadius:'var(--radius)',padding:'20px',textAlign:'center'}}>
              <i className="fa-solid fa-circle-check" style={{fontSize:'32px',marginBottom:'8px',display:'block'}}></i>
              <p style={{fontWeight:'700'}}>You are on the list! Check your inbox to confirm.</p>
            </div>
          ) : (
            <form className="nl-form" onSubmit={e => { e.preventDefault(); setDone(true); }}>
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe Free</button>
            </form>
          )}
          <p style={{fontSize:'12px',opacity:.6,marginTop:'16px'}}>
            <i className="fa-solid fa-lock" style={{marginRight:'4px'}}></i>
            Your data stays private. Unsubscribe with one click.
          </p>
        </div>

        {/* BENEFITS */}
        <div style={{marginTop:'80px'}}>
          <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-star" style={{marginRight:'8px'}}></i>What You Get</p>
          <h2 className="section-heading" style={{marginBottom:'40px'}}>Built for Finance<br /><span style={{color:'var(--accent)'}}>Practitioners</span></h2>
          <div className="benefit-grid">
            {[
              {icon:'fa-podcast',title:'Episode Recaps',desc:'Concise summaries of each new episode with the top 3 actionable insights, delivered the morning it drops.'},
              {icon:'fa-newspaper',title:'AI Finance News',desc:'The week biggest AI developments in finance, curated and contextualized by our editorial team — not a Google Alert dump.'},
              {icon:'fa-tools',title:'Tool Spotlights',desc:'Honest reviews and comparisons of AI finance tools our guests and community are actually using, not just demoing at sales calls.'},
              {icon:'fa-file-code',title:'Frameworks and Templates',desc:'Downloadable planning templates, prompts, and decision frameworks referenced in recent episodes.'},
            ].map(b => (
              <div key={b.title} className="benefit-card">
                <div className="benefit-icon"><i className={`fa-solid ${b.icon}`}></i></div>
                <p className="benefit-title">{b.title}</p>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAST ISSUES */}
        <div style={{marginTop:'80px'}}>
          <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-clock-rotate-left" style={{marginRight:'8px'}}></i>Recent Issues</p>
          <h2 className="section-heading" style={{marginBottom:'40px'}}>See What You <span style={{color:'var(--accent)'}}>Missed</span></h2>
          <div style={{display:'flex',flexDirection:'column' as 'column',gap:'12px'}}>
            {[
              {num:'#187',date:'Jan 20, 2025',title:'Why the Close Cycle Is the New Battleground for AI',desc:'This week: how three CFOs cut their close to under 3 days, plus a framework for sequencing your AP automation roadmap.'},
              {num:'#186',date:'Jan 13, 2025',title:'The 4 AI Finance Tools Worth Paying For in 2025',desc:'An honest evaluation of the popular AI tools our guest network is actually budgeting for and seeing ROI on.'},
              {num:'#185',date:'Jan 6, 2025',title:'FP&A Predictions for 2025: What the Experts Got Wrong Last Year',desc:'A look back at the bold 2024 predictions from our guest roster — and what actually played out in real finance orgs.'},
              {num:'#184',date:'Dec 23, 2024',title:'Year in Review: The AI Finance Moments That Mattered',desc:'Our editorial team breaks down the 10 most significant AI finance developments of 2024 and what they mean for 2025.'},
            ].map(issue => (
              <div key={issue.num} className="issue-card">
                <span className="issue-num">{issue.num}</span>
                <div>
                  <h4>{issue.title}</h4>
                  <p style={{fontSize:'12px',color:'var(--ink-muted)',marginBottom:'6px'}}>
                    <i className="fa-regular fa-calendar" style={{marginRight:'5px'}}></i>{issue.date}
                  </p>
                  <p>{issue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div style={{marginTop:'72px'}}>
          <div className="testimonial-box">
            <p className="testimonial-text">
              I have read hundreds of finance newsletters. The AgentCFO newsletter is the only one I actually open every Monday. It is dense with real insight, not just listicles.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">📬</div>
              <div>
                <p className="testimonial-name">Diego Fernandez</p>
                <p className="testimonial-role">Director of Finance, Logistics SaaS</p>
              </div>
            </div>
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
