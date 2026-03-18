import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            Est. 2022
          </div>
          <h1>About <span style={{color:'var(--accent)'}}>AgentCFO</span></h1>
          <p>We built AgentCFO because the finance world was changing faster than any existing podcast could keep up with. Two years and 120+ episodes later, we are just getting started.</p>
        </div>
      </section>

      {/* STATS ROW */}
      <div className="section-wrap">
        <div className="stats-row">
          {[
            {num:'50K+',label:'Monthly Listeners'},
            {num:'120+',label:'Episodes Published'},
            {num:'80+',label:'Expert Guests'},
            {num:'35+',label:'Countries Reached'},
          ].map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* MISSION */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center',marginBottom:'80px'}}>
          <div>
            <p className="section-label"><i className="fa-solid fa-bullseye" style={{marginRight:'8px'}}></i>Our Mission</p>
            <h2 className="section-heading">Finance Leadership for the AI Era</h2>
            <p style={{fontSize:'16px',lineHeight:'1.7',color:'var(--ink-soft)',marginBottom:'20px'}}>
              AgentCFO exists to close the gap between what is happening in AI and what finance professionals actually know how to do with it. We are not a hype machine. We are a practitioner community.
            </p>
            <p style={{fontSize:'16px',lineHeight:'1.7',color:'var(--ink-soft)'}}>
              Every episode features working operators — people running real finance teams, deploying real AI tools, and dealing with real tradeoffs. We dig into the details so you can take action.
            </p>
          </div>
          <div style={{background:'var(--off-white)',border:'1px solid var(--mid)',borderRadius:'var(--radius-lg)',padding:'40px',display:'flex',flexDirection:'column' as 'column',gap:'20px'}}>
            {[
              {icon:'fa-magnifying-glass',title:'Deep Expertise',desc:'Every guest has shipped something real. No theorists, no pundits.'},
              {icon:'fa-ban',title:'Zero Hype',desc:'We call out the BS when we see it. This is a no-fluff zone.'},
              {icon:'fa-graduation-cap',title:'Actionable Insights',desc:'Every episode ends with something you can use on Monday.'},
            ].map(i => (
              <div key={i.title} style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
                <div style={{width:'40px',height:'40px',background:'var(--accent-light)',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent)',fontSize:'16px',flexShrink:0}}>
                  <i className={`fa-solid ${i.icon}`}></i>
                </div>
                <div>
                  <p style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'16px',marginBottom:'4px'}}>{i.title}</p>
                  <p style={{fontSize:'13px',color:'var(--ink-muted)',lineHeight:'1.55'}}>{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-heart" style={{marginRight:'8px'}}></i>What We Stand For</p>
        <h2 className="section-heading" style={{marginBottom:'40px'}}>Our <span style={{color:'var(--accent)'}}>Values</span></h2>
        <div className="values-grid" style={{marginBottom:'80px'}}>
          {[
            {icon:'fa-handshake-angle',title:'Practitioner First',desc:'We only book guests who have done the work. Credentials matter less than shipped outcomes.'},
            {icon:'fa-scale-balanced',title:'Intellectual Honesty',desc:'We will tell you when AI is overhyped for a use case, even if it is not what sponsors want to hear.'},
            {icon:'fa-universal-access',title:'Accessibility',desc:'Finance knowledge should not be locked behind paywalls. The podcast is free, the transcripts are free, the glossary is free.'},
            {icon:'fa-forward-fast',title:'Relentless Improvement',desc:'We iterate on format, topics, and quality every single season based on listener feedback.'},
          ].map(v => (
            <div key={v.title} className="value-card">
              <div className="value-icon"><i className={`fa-solid ${v.icon}`}></i></div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* TEAM */}
        <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-users" style={{marginRight:'8px'}}></i>The Team</p>
        <h2 className="section-heading" style={{marginBottom:'40px'}}>Who Runs the <span style={{color:'var(--accent)'}}>Show</span></h2>
        <div className="team-grid" style={{marginBottom:'80px'}}>
          {[
            {emoji:'🎙️',name:'Alex Rivera',role:'Host and Founder',bio:'Former VP Finance at two unicorns. Started AgentCFO to document the AI revolution in finance in real time.'},
            {emoji:'🎧',name:'Jamie Kim',role:'Producer',bio:'10 years in podcast production. Obsessed with audio quality, tight editing, and finding the insight in every conversation.'},
            {emoji:'✍️',name:'Priya Nair',role:'Research and Content',bio:'Finance writer and analyst. Writes all the show notes, newsletter issues, and blog content you see on this site.'},
            {emoji:'⚙️',name:'Tom Walsh',role:'Technical Lead',bio:'Keeps the AI tools running that power our transcripts, summaries, and signal scoring for every episode.'},
          ].map(m => (
            <div key={m.name} className="team-member">
              <div className="team-avatar"><span>{m.emoji}</span></div>
              <h4>{m.name}</h4>
              <p className="team-role">{m.role}</p>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-clock-rotate-left" style={{marginRight:'8px'}}></i>Our Story</p>
        <h2 className="section-heading" style={{marginBottom:'40px'}}>How We Got <span style={{color:'var(--accent)'}}>Here</span></h2>
        <div className="timeline">
          {[
            {year:'2022',title:'AgentCFO Launches',desc:'Started as a 10-episode experiment covering AI in FP&A. Episode 1 hit 2,000 downloads in the first week.'},
            {year:'2023',title:'Community and Editorial Expansion',desc:'Launched the weekly newsletter, added the Finance Glossary, and crossed 20,000 monthly listeners.'},
            {year:'2024',title:'Full Practitioner Network',desc:'Grew to 80+ vetted guest alumni across CFO, controller, FP&A, AP, and tax disciplines. Crossed 40K listeners.'},
            {year:'2025',title:'The AI Era Goes Mainstream',desc:'Finance AI adoption accelerated. We are now the go-to resource for finance leaders navigating autonomous AI in their orgs.'},
          ].map(t => (
            <div key={t.year} className="timeline-item">
              <p className="timeline-year">{t.year}</p>
              <p className="timeline-title">{t.title}</p>
              <p className="timeline-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <h2>Join the <span style={{color:'var(--accent)'}}>Community</span></h2>
        <p>Subscribe to the newsletter, follow us on Spotify, and never fall behind on what is happening in AI finance.</p>
        <div className="cta-actions">
          <Link href="/newsletter" className="btn-primary"><i className="fa-regular fa-envelope"></i> Subscribe</Link>
          <Link href="/contact" className="btn-outline"><i className="fa-solid fa-comment"></i> Get in Touch</Link>
        </div>
      </section>

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
