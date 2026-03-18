import Link from 'next/link';

const categories = [
  {
    id:'cfos', label:'Chief Financial Officers',
    guests:[
      {emoji:'👤',name:'Marcus Liu',role:'CFO',company:'NovaTech',bio:'20 years leading finance at enterprise SaaS companies. Pioneered AI-driven close at NovaTech, reducing cycle time by 70%.',ep:'121',epTitle:'How AI is Rewriting the CFO Playbook'},
      {emoji:'👤',name:'Rachel Torres',role:'CFO',company:'Meridian Capital',bio:'Former Big 4 partner turned startup CFO. Known for building lean finance teams that scale without adding headcount.',ep:'118',epTitle:'Building the AI-Native Finance Team'},
      {emoji:'👤',name:'Sofia Reyes',role:'CFO',company:'Neon Ventures',bio:'Specializes in investor relations and board communication for AI-native companies. Previously CFO at two unicorns.',ep:'114',epTitle:'Investor Relations in the Age of AI'},
    ]
  },
  {
    id:'fpa', label:'FP and A Leaders',
    guests:[
      {emoji:'👤',name:'Alicia Wong',role:'Head of FP&A',company:'SkyPlatform',bio:'Rebuilt SkyPlatform FP&A from scratch on an AI-first stack. Evangelist for driver-based forecasting and zero-based budgeting.',ep:'116',epTitle:'Modern FP and A: From Excel to AI Orchestrator'},
      {emoji:'👤',name:'David Park',role:'VP Finance',company:'Stratus',bio:'Built Stratus predictive cash flow model from the ground up. Background in quantitative finance and ML engineering.',ep:'119',epTitle:'Predictive Cash Flow in Practice'},
    ]
  },
  {
    id:'controllers', label:'Controllers and Ops',
    guests:[
      {emoji:'👤',name:'Priya Sharma',role:'Controller',company:'CloudLayer',bio:'Redesigned CloudLayer month-end close using agentic AI workflows. Cut 8-day close to under 18 hours over 6 months.',ep:'120',epTitle:'Zero-Day Close: Building an AI-Native Month End'},
      {emoji:'👤',name:'James Okafor',role:'Director of AP',company:'GlobalMFG',bio:'Manages 10,000+ invoices per month at GlobalMFG. Built and deployed their AI-powered 3-way matching system in-house.',ep:'117',epTitle:'AP Automation at Scale'},
    ]
  },
  {
    id:'tech', label:'Finance Technology',
    guests:[
      {emoji:'👤',name:'Chris Allen',role:'CTO',company:'FinCore',bio:'Builds autonomous AI agents for enterprise finance workflows. Advisor to several CFOs on agentic automation deployments.',ep:'113',epTitle:'AI Agents and the Future of Finance Ops'},
      {emoji:'👤',name:'Ben Nakamura',role:'Tax Director',company:'GlobalCo',bio:'Expert in AI-assisted cross-border tax compliance and automated indirect tax workflows across 40+ jurisdictions.',ep:'115',epTitle:'Navigating Tax Compliance with AI'},
    ]
  },
];

export default function Guests() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            All Working Practitioners
          </div>
          <h1>Our <span style={{color:'var(--accent)'}}>Guests</span></h1>
          <p>Every guest is a working finance professional with hands-on experience deploying AI in real enterprise environments. No pundits, no theorists.</p>
        </div>
      </section>

      {/* GUEST CATEGORIES */}
      <div className="section-wrap">
        {categories.map(cat => (
          <div key={cat.id} style={{marginBottom:'72px'}}>
            <p className="category-heading">
              <i className="fa-solid fa-users"></i>
              {cat.label}
            </p>
            <div className="guests-grid">
              {cat.guests.map(g => (
                <div key={g.name} className="guest-card">
                  <div className="guest-avatar-wrap">
                    <span style={{fontSize:'60px'}}>{g.emoji}</span>
                  </div>
                  <div className="guest-body">
                    <h3 className="guest-name">{g.name}</h3>
                    <p className="guest-role">{g.role}</p>
                    <p className="guest-company"><i className="fa-solid fa-building" style={{marginRight:'5px',fontSize:'11px'}}></i>{g.company}</p>
                    <p className="guest-bio">{g.bio}</p>
                    <div className="guest-ep-link">
                      <i className="fa-solid fa-podcast"></i>
                      <span>EP. {g.ep}:</span>
                      <Link href={`/episodes/ep-${g.ep}`}>{g.epTitle}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* APPLY CTA */}
      <section className="cta-section">
        <p className="section-label"><i className="fa-solid fa-microphone" style={{marginRight:'8px'}}></i>Join the Roster</p>
        <h2>Want to Be<br />on the <span style={{color:'var(--accent)'}}>Show?</span></h2>
        <p>We are always looking for experienced finance professionals with real AI transformation stories. Apply to be a guest.</p>
        <div className="cta-actions">
          <Link href="/submit-guest" className="btn-primary"><i className="fa-solid fa-paper-plane"></i> Apply Now</Link>
          <Link href="/episodes" className="btn-outline"><i className="fa-solid fa-headphones"></i> Listen First</Link>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">AgentCFO</a>
            <p className="footer-brand-text">Real conversations with the finance leaders shaping the AI era.</p>
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
