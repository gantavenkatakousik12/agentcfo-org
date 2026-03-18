import Link from 'next/link';

const episodes = [
  {num:'121',emoji:'🤖',title:'How AI is Rewriting the CFO Playbook',guest:'Marcus Liu',date:'Jan 23, 2025',duration:'52 min',
   sections:['Key Topics','Resources Mentioned','Timestamps','Key Takeaways']},
  {num:'120',emoji:'📊',title:'Zero-Day Close: Building an AI-Native Month End',guest:'Priya Sharma',date:'Jan 16, 2025',duration:'48 min',
   sections:['Key Topics','Resources Mentioned','Timestamps','Key Takeaways']},
  {num:'119',emoji:'💰',title:'Predictive Cash Flow in Practice',guest:'David Park',date:'Jan 9, 2025',duration:'41 min',
   sections:['Key Topics','Resources Mentioned','Timestamps','Key Takeaways']},
];

export default function ShowNotes() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            Resources for Every Episode
          </div>
          <h1>Show <span style={{color:'var(--accent)'}}>Notes</span></h1>
          <p>Timestamps, key takeaways, resources mentioned, and links from every episode. Bookmark the ones you love, share the ones that hit.</p>
        </div>
      </section>

      <div className="section-wrap">
        {episodes.map(ep => (
          <div key={ep.num} style={{marginBottom:'48px',border:'1px solid var(--mid)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
            <div style={{background:'var(--off-white)',padding:'28px 32px',display:'flex',gap:'24px',alignItems:'flex-start',borderBottom:'1px solid var(--mid)'}}>
              <span style={{fontSize:'40px'}}>{ep.emoji}</span>
              <div style={{flex:1}}>
                <p style={{fontFamily:'DM Mono,monospace',fontSize:'11px',color:'var(--acc)',marginBottom:'6px'}}>
                  EP. {ep.num} &nbsp;·&nbsp; {ep.date} &nbsp;·&nbsp; {ep.duration}
                </p>
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'20px',marginBottom:'4px'}}>{ep.title}</h3>
                <p style={{fontSize:'14px',color:'var(--ink-muted)'}}>with {ep.guest}</p>
              </div>
              <Link href={`/show-notes/${ep.num}`} className="btn-outline" style={{whiteSpace:'nowrap',fontSize:'13px'}}>
                <i className="fa-solid fa-arrow-right"></i> Full Notes
              </Link>
            </div>
            <div style={{padding:'20px 32px',display:'flex',gap:'10px',flexWrap:'wrap'}}>
              {ep.sections.map(s => (
                <span key={s} style={{display:'flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'var(--ink-muted)'}}>
                  <i className="fa-solid fa-check" style={{color:'var(--accent2)',fontSize:'11px'}}></i>{s}
                </span>
              ))}
            </div>
          </div>
        ))}
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
