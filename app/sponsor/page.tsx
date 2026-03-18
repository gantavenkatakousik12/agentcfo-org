import Link from 'next/link';

export default function Sponsor() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            Limited Slots Available
          </div>
          <h1>Sponsor <span style={{color:'var(--accent)'}}>AgentCFO</span></h1>
          <p>Reach 50,000+ finance decision-makers every month. Our audience includes CFOs, VP Finance, Controllers, and FP&A leaders at companies from Series A to Fortune 500.</p>
        </div>
      </section>

      <div className="section-wrap">

        {/* AUDIENCE STATS */}
        <div style={{marginBottom:'72px'}}>
          <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-chart-bar" style={{marginRight:'8px'}}></i>Our Audience</p>
          <h2 className="section-heading" style={{marginBottom:'40px'}}>Who <span style={{color:'var(--accent)'}}>Listens</span></h2>
          <div className="stats-row">
            {[
              {num:'50K+',label:'Monthly Listeners'},
              {num:'72%',label:'Director Level or Above'},
              {num:'12K+',label:'Newsletter Subscribers'},
              {num:'4.9',label:'Average App Rating'},
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'24px'}}>
            {[
              {icon:'fa-building',label:'Enterprise (500+ employees)',pct:'44%'},
              {icon:'fa-seedling',label:'Growth Stage (50-499)',pct:'38%'},
              {icon:'fa-rocket',label:'Startup (under 50)',pct:'18%'},
            ].map(d => (
              <div key={d.label} style={{flex:'1',minWidth:'200px',background:'var(--off-white)',border:'1px solid var(--mid)',borderRadius:'var(--radius)',padding:'20px'}}>
                <i className={`fa-solid ${d.icon}`} style={{color:'var(--accent)',fontSize:'18px',marginBottom:'8px',display:'block'}}></i>
                <p style={{fontWeight:'700',marginBottom:'4px'}}>{d.pct}</p>
                <p style={{fontSize:'13px',color:'var(--ink-muted)'}}>{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TIERS */}
        <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-layer-group" style={{marginRight:'8px'}}></i>Packages</p>
        <h2 className="section-heading" style={{marginBottom:'48px'}}>Sponsorship <span style={{color:'var(--accent)'}}>Tiers</span></h2>
        <div className="sponsor-tiers">
          {[
            {
              name:'Presenting Sponsor',
              sub:'Maximum visibility, exclusive slot',
              price:'$4,800',per:'/episode',
              perks:['60-second pre-roll mention','Mid-roll host-read ad (90 sec)','Episode co-branding','Newsletter banner placement','Guest intro segment'],
              featured:false,
            },
            {
              name:'Series Sponsor',
              sub:'Best value for ongoing campaigns',
              price:'$2,400',per:'/episode (min. 4)',
              perks:['Mid-roll host-read (60 sec)','Newsletter text ad','Episode show notes link','Social post inclusion','Monthly performance report'],
              featured:true,
              badge:'Most Popular',
            },
            {
              name:'Newsletter Sponsor',
              sub:'Engaged email audience',
              price:'$800',per:'/issue',
              perks:['Dedicated ad block in newsletter','Company blurb (100 words)','Direct link to landing page','Sponsor logo placement','Click reporting'],
              featured:false,
            },
          ].map(tier => (
            <div key={tier.name} className={`sponsor-tier${tier.featured?' featured':''}`}>
              {tier.badge && <span className="sponsor-popular-badge">{tier.badge}</span>}
              <h3>{tier.name}</h3>
              <p className="sponsor-sub">{tier.sub}</p>
              <p className="sponsor-price">{tier.price}<span> {tier.per}</span></p>
              <ul className="sponsor-perks">
                {tier.perks.map(p => (
                  <li key={p}><i className="fa-solid fa-check"></i>{p}</li>
                ))}
              </ul>
              <Link href="/contact" className={tier.featured ? 'btn-accent' : 'btn-outline'} style={{display:'flex',width:'fit-content'}}>
                <i className="fa-solid fa-paper-plane"></i> Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* CUSTOM */}
        <div style={{background:'var(--accent-light)',border:'1px solid rgba(0,71,255,.15)',borderRadius:'var(--radius-lg)',padding:'40px',marginTop:'32px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'24px'}}>
          <div>
            <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'22px',marginBottom:'8px'}}>Need a Custom Package?</h3>
            <p style={{fontSize:'15px',color:'var(--ink-soft)'}}>We work with brands on custom integrations, dedicated episodes, summit sponsorships, and multi-channel campaigns.</p>
          </div>
          <Link href="/contact" className="btn-primary"><i className="fa-regular fa-envelope"></i> Contact Sales</Link>
        </div>

        {/* PAST SPONSORS */}
        <div style={{marginTop:'72px',textAlign:'center'}}>
          <p className="section-label" style={{marginBottom:'24px'}}><i className="fa-solid fa-building" style={{marginRight:'8px'}}></i>Past Sponsors Include</p>
          <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
            {['FinTech Corp','CloudLedger','DataVault AI','Nexus ERP','ClearPath Finance'].map(name => (
              <div key={name} style={{background:'var(--off-white)',border:'1px solid var(--mid)',borderRadius:'var(--radius)',padding:'14px 28px',fontSize:'14px',fontWeight:'600',color:'var(--ink-muted)'}}>
                {name}
              </div>
            ))}
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
