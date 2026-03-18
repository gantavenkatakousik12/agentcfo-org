import Link from 'next/link';

const terms = [
  {term:'Agentic AI',category:'AI',def:"AI systems that can plan, take actions, and complete multi-step tasks autonomously without human input at each step. In finance, agentic AI can run reconciliations, flag exceptions, and trigger approvals without a human in the loop."},
  {term:'AP Automation',category:'Operations',def:"The use of software and AI to handle accounts payable workflows including invoice capture, 3-way matching, approval routing, and payment execution — reducing manual processing and error rates."},
  {term:'Driver-Based Forecasting',category:'FP&A',def:"A planning methodology where financial forecasts are built from operational and business drivers rather than historical trends alone. Examples include revenue driven by headcount, pipeline, or unit volume."},
  {term:'Month-End Close',category:'Accounting',def:"The process of finalizing all accounting transactions for a given month, including reconciliations, accruals, journal entries, and financial statement preparation. AI is being used to compress close cycles from days to hours."},
  {term:'Cash Flow Forecasting',category:'Treasury',def:"The process of estimating future cash inflows and outflows over a defined time horizon. AI-powered models can now generate rolling 90-day forecasts with significantly higher accuracy than traditional methods."},
  {term:'3-Way Matching',category:'AP',def:"The process of verifying a vendor invoice against its corresponding purchase order and receiving document before approving payment. AI systems can automate this check in real time across thousands of invoices."},
  {term:'Zero-Based Budgeting',category:'FP&A',def:"A budgeting methodology where every expense must be justified from zero each period, rather than relying on prior-year baselines. Used to drive cost discipline and strategic resource allocation."},
  {term:'Working Capital',category:'Treasury',def:"The difference between a company current assets and current liabilities. Efficient management of working capital — especially AR, AP, and inventory — is a key lever for liquidity and growth."},
  {term:'LLM (Large Language Model)',category:'AI',def:"A type of AI model trained on large text datasets capable of generating, summarizing, and analyzing text. Finance applications include contract review, audit preparation, and automated commentary generation."},
  {term:'Intercompany Reconciliation',category:'Accounting',def:"The process of eliminating and reconciling transactions between legal entities within a corporate group before consolidating financial statements. High-volume intercompany flows are a prime candidate for AI automation."},
  {term:'Rolling Forecast',category:'FP&A',def:"A financial forecast that is continuously updated to cover a fixed forward horizon (e.g., always 12 months ahead) as each period ends, replacing static annual budgets."},
  {term:'Tax Provision',category:'Tax',def:"An estimate of the income tax a company expects to pay for a given period, recorded as an expense before the actual tax return is filed. AI tools are beginning to automate provision modeling and variance analysis."},
  {term:'ERP (Enterprise Resource Planning)',category:'Systems',def:"Integrated software platforms that manage core business processes including finance, HR, supply chain, and operations. Major ERPs include SAP, Oracle, and Microsoft Dynamics."},
  {term:'Autonomous Finance',category:'AI',def:"A vision of finance operations where AI agents handle the full cycle of routine finance tasks (record, report, analyze, decide) without requiring human initiation at each step."},
  {term:'Close Cycle',category:'Accounting',def:"The total time from period end to the completion and sign-off of financial statements. Best-in-class close cycles are now 1 to 3 days, with some AI-native companies achieving same-day or next-day close."},
  {term:'AI Reconciliation',category:'AI',def:"Automated matching and clearing of transactions across accounts or entities using machine learning. AI reconciliation engines can handle thousands of matches per minute and flag only genuine exceptions for human review."},
];

const alpha = [...new Set(terms.map(t => t.term[0]))].sort();

export default function Glossary() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            Free Resource
          </div>
          <h1>Finance AI <span style={{color:'var(--accent)'}}>Glossary</span></h1>
          <p>Plain-language definitions of the terms driving the AI transformation in finance. Curated by practitioners, updated quarterly.</p>
        </div>
      </section>

      {/* GLOSSARY CONTENT */}
      <div className="section-wrap">
        {/* Alpha nav */}
        <div className="alpha-nav">
          {alpha.map(l => (
            <a key={l} href={`#${l}`} className="alpha-btn">{l}</a>
          ))}
        </div>

        {/* Terms grouped by first letter */}
        {alpha.map(letter => {
          const group = terms.filter(t => t.term[0] === letter);
          return (
            <div key={letter} id={letter} style={{marginBottom:'48px'}}>
              <p style={{fontFamily:'Syne,sans-serif',fontWeight:'800',fontSize:'28px',color:'var(--accent)',marginBottom:'16px'}}>{letter}</p>
              {group.map(t => (
                <div key={t.term} className="glossary-item">
                  <h3>
                    {t.term}
                    <span className="glossary-tag">{t.category}</span>
                  </h3>
                  <p>{t.def}</p>
                </div>
              ))}
            </div>
          );
        })}

        {/* Suggest a term */}
        <div style={{background:'var(--accent-light)',border:'1px solid rgba(0,71,255,.15)',borderRadius:'var(--radius-lg)',padding:'40px',textAlign:'center',marginTop:'32px'}}>
          <i className="fa-solid fa-plus-circle" style={{fontSize:'32px',color:'var(--accent)',marginBottom:'12px',display:'block'}}></i>
          <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'20px',marginBottom:'8px'}}>Missing a Term?</h3>
          <p style={{fontSize:'14px',color:'var(--ink-soft)',marginBottom:'20px'}}>We add new terms monthly. Suggest a definition via email or our contact form.</p>
          <Link href="/contact" className="btn-accent">Suggest a Term</Link>
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
