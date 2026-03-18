import Link from 'next/link';

const topics = [
  {icon:'fa-robot',title:'AI and Automation',desc:'Autonomous workflows, agentic AI, document processing, and the tools reshaping finance operations. From RPA to LLM-driven agents.',eps:24,tag:'Most Popular'},
  {icon:'fa-chart-line',title:'FP and A Strategy',desc:'Driver-based forecasting, rolling forecasts, scenario modeling, and the evolution of the FP&A function in an AI-first world.',eps:31,tag:''},
  {icon:'fa-file-invoice-dollar',title:'Accounts Payable',desc:'Invoice capture, 3-way matching, approval routing, payment automation, and vendor management at scale.',eps:18,tag:''},
  {icon:'fa-money-bill-transfer',title:'Cash Management',desc:'Cash flow forecasting, working capital optimization, treasury automation, and liquidity strategy for CFOs.',eps:22,tag:''},
  {icon:'fa-scale-balanced',title:'Tax and Compliance',desc:'Cross-border tax compliance, indirect tax automation, provision modeling, and audit readiness in the AI era.',eps:15,tag:''},
  {icon:'fa-handshake',title:'Investor Relations',desc:'Board reporting, KPI storytelling, narrative building, and managing relationships with capital allocators.',eps:19,tag:''},
  {icon:'fa-calendar-check',title:'Month-End Close',desc:'Close cycle compression, AI reconciliation, accruals automation, and building a same-day close capability.',eps:21,tag:'Trending'},
  {icon:'fa-receipt',title:'Accounts Receivable',desc:'Collections automation, cash application, AR aging intelligence, and customer credit risk management.',eps:14,tag:''},
  {icon:'fa-people-group',title:'Finance Talent',desc:'Hiring, reskilling, team structure, and the evolving skills required in AI-augmented finance organizations.',eps:17,tag:''},
  {icon:'fa-circle-nodes',title:'ERP and Systems',desc:'ERP selection, implementation lessons, system integrations, and the data architecture behind modern finance stacks.',eps:12,tag:''},
  {icon:'fa-building-columns',title:'Corporate Finance',desc:'Capital structure, M&A finance, valuation, and strategic finance decisions at the CFO level.',eps:16,tag:''},
  {icon:'fa-landmark',title:'Startup Finance',desc:'Building finance from zero, Series A to D fundraising, runway management, and scaling the finance function.',eps:20,tag:''},
];

export default function Topics() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            12 Topic Areas
          </div>
          <h1>Browse by <span style={{color:'var(--accent)'}}>Topic</span></h1>
          <p>Find every episode on the finance topics that matter most to you. Filter by AI, FP&A, AP, treasury, compliance, and more.</p>
        </div>
      </section>

      {/* TOPICS GRID */}
      <div className="section-wrap">
        <div className="topics-grid">
          {topics.map(t => (
            <Link key={t.title} href={`/episodes?topic=${encodeURIComponent(t.title)}`} style={{textDecoration:'none',color:'inherit'}}>
              <div className="topic-card">
                <div className="topic-icon"><i className={`fa-solid ${t.icon}`}></i></div>
                {t.tag && <span className="tag" style={{marginBottom:'8px',display:'inline-block'}}>{t.tag}</span>}
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <p className="topic-count">
                  <i className="fa-solid fa-podcast" style={{marginRight:'5px'}}></i>{t.eps} episodes
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <h2>Do Not See Your Topic?</h2>
        <p>We are always expanding our coverage. Suggest a topic or pitch yourself as a guest in that area.</p>
        <div className="cta-actions">
          <Link href="/submit-guest" className="btn-primary"><i className="fa-solid fa-microphone"></i> Pitch a Topic</Link>
          <Link href="/contact" className="btn-outline"><i className="fa-regular fa-comment"></i> Contact Us</Link>
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
