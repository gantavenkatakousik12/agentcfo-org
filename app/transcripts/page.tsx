import Link from 'next/link';

const episodes = [
  {num:'121',title:'How AI is Rewriting the CFO Playbook',guest:'Marcus Liu',date:'Jan 23, 2025',duration:'52 min'},
  {num:'120',title:'Zero-Day Close: Building an AI-Native Month End',guest:'Priya Sharma',date:'Jan 16, 2025',duration:'48 min'},
  {num:'119',title:'Predictive Cash Flow in Practice',guest:'David Park',date:'Jan 9, 2025',duration:'41 min'},
  {num:'118',title:'Building the AI-Native Finance Team',guest:'Rachel Torres',date:'Dec 19, 2024',duration:'55 min'},
  {num:'117',title:'AP Automation at Scale: Lessons from 10K Invoices per Month',guest:'James Okafor',date:'Dec 12, 2024',duration:'44 min'},
];

export default function Transcripts() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            Full Text, Fully Searchable
          </div>
          <h1>Episode <span style={{color:'var(--accent)'}}>Transcripts</span></h1>
          <p>Complete word-for-word transcripts for every episode. Use Ctrl+F to search within any page, or browse below to find the conversation you are looking for.</p>
        </div>
      </section>

      <div className="section-wrap">
        <p className="section-label" style={{marginBottom:'24px'}}>
          <i className="fa-solid fa-file-lines" style={{marginRight:'8px'}}></i>
          Available Transcripts
        </p>
        <div style={{display:'flex',flexDirection:'column' as 'column',gap:'12px'}}>
          {episodes.map(ep => (
            <Link key={ep.num} href={`/transcripts/${ep.num}`} style={{textDecoration:'none'}}>
              <div style={{background:'var(--off-white)',border:'1px solid var(--mid)',borderRadius:'var(--radius)',padding:'20px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px',transition:'all .2s',cursor:'pointer'}}
                className="glossary-item">
                <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
                  <span style={{fontFamily:'DM Mono,monospace',fontSize:'12px',fontWeight:'600',color:'var(--accent)',minWidth:'52px'}}>EP. {ep.num}</span>
                  <div>
                    <p style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'16px',marginBottom:'4px'}}>{ep.title}</p>
                    <p style={{fontSize:'13px',color:'var(--ink-muted)'}}>{ep.guest} &nbsp;·&nbsp; {ep.date} &nbsp;·&nbsp; {ep.duration}</p>
                  </div>
                </div>
                <span style={{display:'flex',alignItems:'center',gap:'6px',color:'var(--accent)',fontWeight:'600',fontSize:'13px',whiteSpace:'nowrap'}}>
                  <i className="fa-solid fa-file-lines"></i> View
                </span>
              </div>
            </Link>
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
