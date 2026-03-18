'use client';
import { useState } from 'react';
import Link from 'next/link';

const episodes = [
  {num:'121',emoji:'🤖',title:'How AI is Rewriting the CFO Playbook',guest:'Marcus Liu',role:'CFO, NovaTech',date:'Jan 23, 2025',duration:'52 min',desc:'Deep dive into how AI is fundamentally changing the role of the CFO from forecasting to controls to board reporting.',tags:['AI','Strategy']},
  {num:'120',emoji:'📊',title:'Zero-Day Close: Building an AI-Native Month End',guest:'Priya Sharma',role:'Controller, CloudLayer',date:'Jan 16, 2025',duration:'48 min',desc:'How one Controller cut her month-end close from 8 days to 18 hours using agentic AI workflows and automated reconciliation.',tags:['Automation','Month End']},
  {num:'119',emoji:'💰',title:'Predictive Cash Flow in Practice',guest:'David Park',role:'VP Finance, Stratus',date:'Jan 9, 2025',duration:'41 min',desc:'The VP of Finance at a Series C SaaS shares how they built a 90-day cash flow prediction model that actually works in practice.',tags:['Cash Flow','FP&A']},
  {num:'118',emoji:'🏦',title:'Building the AI-Native Finance Team',guest:'Rachel Torres',role:'CFO, Meridian Capital',date:'Dec 19, 2024',duration:'55 min',desc:'What does the finance org of 2027 look like? Rachel walks through her vision of a lean AI-augmented team that punches above its weight.',tags:['Teams','AI']},
  {num:'117',emoji:'📋',title:'AP Automation at Scale: Lessons from 10K Invoices per Month',guest:'James Okafor',role:'Director of AP, GlobalMFG',date:'Dec 12, 2024',duration:'44 min',desc:'Running high-volume AP operations with AI-driven 3-way matching, exception handling, and vendor portal automation.',tags:['AP','Automation']},
  {num:'116',emoji:'🔍',title:'Modern FP and A: From Excel Jockey to AI Orchestrator',guest:'Alicia Wong',role:'Head of FP&A, SkyPlatform',date:'Dec 5, 2024',duration:'50 min',desc:'How Alicia transitioned her FP&A team from Excel-first to an AI-first model without losing analytical rigor.',tags:['FP&A','Tools']},
  {num:'115',emoji:'🌐',title:'Navigating Tax Compliance with AI',guest:'Ben Nakamura',role:'Tax Director, GlobalCo',date:'Nov 28, 2024',duration:'38 min',desc:'Real-world experience deploying AI for cross-border tax compliance, indirect tax automation, and audit trail management.',tags:['Tax','Compliance']},
  {num:'114',emoji:'📈',title:'Investor Relations in the Age of AI',guest:'Sofia Reyes',role:'CFO, Neon Ventures',date:'Nov 21, 2024',duration:'46 min',desc:'Building investor confidence when your company is an AI-native operator — what boards actually want to know about your tech stack.',tags:['IR','Strategy']},
  {num:'113',emoji:'🧠',title:'AI Agents and the Future of Finance Operations',guest:'Chris Allen',role:'CTO, FinCore',date:'Nov 14, 2024',duration:'58 min',desc:'A tech executive explains how autonomous AI agents are beginning to handle multi-step finance workflows without human intervention.',tags:['AI','Operations']},
];

const allTags = ['All','AI','Strategy','Automation','Month End','Cash Flow','FP&A','Teams','AP','Tools','Tax','Compliance','IR','Operations'];

export default function Episodes() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? episodes : episodes.filter(e => e.tags.includes(active));

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            New Episode Every Thursday
          </div>
          <h1>Episode <span style={{color:'var(--accent)'}}>Archive</span></h1>
          <p>Every conversation, searchable and filtered by topic. Deep dives with working finance practitioners building in the AI era.</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="filter-section">
        <span className="filter-label"><i className="fa-solid fa-filter"></i></span>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`filter-chip ${active === tag ? 'active' : ''}`}
            onClick={() => setActive(tag)}
          >{tag}</button>
        ))}
      </div>

      {/* FEATURED EPISODE */}
      {active === 'All' && (
        <div className="section-wrap" style={{paddingBottom:0}}>
          <div className="featured-ep-card">
            <div>
              <span className="featured-badge"><i className="fa-solid fa-star"></i> Featured Episode</span>
              <p className="ep-meta" style={{marginTop:'8px'}}>EP. 121 &nbsp;&bull;&nbsp; Jan 23, 2025 &nbsp;&bull;&nbsp; 52 min</p>
              <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:'800',fontSize:'clamp(24px,3vw,40px)',lineHeight:'1.1',letterSpacing:'-.02em',margin:'12px 0 16px'}}>How AI is Rewriting the CFO Playbook</h2>
              <p style={{fontSize:'16px',lineHeight:'1.65',color:'var(--ink-soft)',marginBottom:'24px'}}>Marcus Liu, CFO of NovaTech, shares what actually changed in his team's workflow after adopting AI across forecasting, close, and controls. The answer might surprise you.</p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                <button className="btn-primary"><i className="fa-solid fa-play"></i> Play Episode</button>
                <Link href="/episodes/ep-121" className="btn-outline">Show Notes</Link>
              </div>
            </div>
            <div className="featured-thumb">
              <span>🤖</span>
              <div className="featured-thumb-overlay">
                <i className="fa-solid fa-circle-play"></i>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EPISODES GRID */}
      <div className="section-wrap">
        <p className="section-label" style={{marginBottom:'28px'}}>
          <i className="fa-solid fa-podcast" style={{marginRight:'8px'}}></i>
          {active === 'All' ? `All Episodes (${episodes.length})` : `${filtered.length} episodes tagged "${active}"`}
        </p>
        <div className="episodes-grid">
          {filtered.map(ep => (
            <Link key={ep.num} href={`/episodes/ep-${ep.num}`} className="ep-card">
              <div className="ep-card-thumb" style={{background:'linear-gradient(135deg,var(--accent-light),#b3c8ff)'}}>
                <span>{ep.emoji}</span>
                <div className="ep-play"><i className="fa-solid fa-play"></i></div>
                <div className="ep-num-badge">EP. {ep.num}</div>
              </div>
              <div className="ep-body">
                <p className="ep-meta">{ep.date} <span className="dot">•</span> {ep.duration}</p>
                <h3 className="ep-title">{ep.title}</h3>
                <p className="ep-desc">{ep.desc}</p>
                <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'14px'}}>
                  {ep.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="ep-card-footer">
                  <span className="ep-duration"><i className="fa-regular fa-clock"></i> {ep.duration}</span>
                  <span className="ep-link">Listen <i className="fa-solid fa-arrow-right" style={{fontSize:'11px'}}></i></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* NEWSLETTER CTA */}
      <section className="cta-section">
        <h2>Never Miss an Episode</h2>
        <p>Subscribe to our weekly newsletter and get new episode alerts plus exclusive bonus content.</p>
        <div className="cta-actions">
          <Link href="/newsletter" className="btn-primary"><i className="fa-regular fa-envelope"></i> Subscribe Free</Link>
          <Link href="/submit-guest" className="btn-outline"><i className="fa-solid fa-microphone"></i> Be a Guest</Link>
        </div>
        <div className="platform-chips">
          <span className="platform-chip"><i className="fa-brands fa-spotify"></i> Spotify</span>
          <span className="platform-chip"><i className="fa-brands fa-apple"></i> Apple Podcasts</span>
          <span className="platform-chip"><i className="fa-brands fa-google"></i> Google</span>
          <span className="platform-chip"><i className="fa-brands fa-youtube"></i> YouTube</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">AgentCFO</a>
            <p className="footer-brand-text">The podcast for finance leaders navigating the AI era. Honest conversations, real operators, zero hype.</p>
            <div className="footer-social">
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-spotify"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Listen</h4>
            <a href="/episodes">All Episodes</a>
            <a href="/topics">By Topic</a>
            <a href="/guests">Guests</a>
            <a href="/transcripts">Transcripts</a>
          </div>
          <div className="footer-col">
            <h4>Learn</h4>
            <a href="/blog">Blog</a>
            <a href="/glossary">Glossary</a>
            <a href="/newsletter">Newsletter</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/sponsor">Sponsor</a>
            <a href="/submit-guest">Be a Guest</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AgentCFO. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a><a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
