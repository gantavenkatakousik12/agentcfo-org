import Link from 'next/link';

const posts = [
  {slug:'ai-cfo-stack-2025',emoji:'🧠',title:'The AI Finance Stack Every CFO Needs in 2025',date:'Jan 20, 2025',readTime:'8 min read',category:'AI Tools',excerpt:'A curated breakdown of the AI tools our guest network is actually using and seeing ROI on — not a product directory, a practitioner shortlist.'},
  {slug:'close-cycle-compressed',emoji:'📊',title:'How to Compress Your Close Cycle with AI: A Playbook',date:'Jan 13, 2025',readTime:'12 min read',category:'Month-End Close',excerpt:'Step-by-step framework for mapping, prioritizing, and deploying AI across your close cycle. Based on real implementations from six AgentCFO guests.'},
  {slug:'fp-a-prompts',emoji:'⚡',title:'30 ChatGPT Prompts for FP&A That Actually Work',date:'Dec 30, 2024',readTime:'6 min read',category:'FP&A',excerpt:'Practical, battle-tested prompts for variance analysis, scenario commentary, board narratives, and recruiting financial talent.'},
  {slug:'agentic-finance',emoji:'🤖',title:'What Agentic AI Actually Means for Finance Teams',date:'Dec 16, 2024',readTime:'10 min read',category:'AI',excerpt:'A plain-language primer on agentic AI architectures, what autonomous agents can and cannot do in finance today, and where the real near-term wins are.'},
  {slug:'cfo-ai-primer',emoji:'📘',title:'The CFO Primer for AI: What to Know Before Your Next Board Deck',date:'Dec 2, 2024',readTime:'14 min read',category:'Strategy',excerpt:'Everything a CFO needs to understand about AI capabilities, limitations, risks, and ROI frameworks before walking into an AI budget conversation.'},
  {slug:'ap-automation-roi',emoji:'💰',title:'AP Automation ROI: How to Build the Business Case',date:'Nov 18, 2024',readTime:'9 min read',category:'AP',excerpt:'A detailed walkthrough of how to model the ROI of AP automation — including cost-per-invoice benchmarks, error rate savings, and vendor early pay discount capture.'},
];

export default function Blog() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">
            <span className="page-hero-badge-dot"></span>
            New Posts Weekly
          </div>
          <h1>Finance AI <span style={{color:'var(--accent)'}}>Blog</span></h1>
          <p>In-depth articles, frameworks, and how-to guides for finance professionals navigating AI transformation. Written by practitioners.</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <div className="section-wrap">
        {/* Featured */}
        <div style={{marginBottom:'48px'}}>
          <p className="section-label" style={{marginBottom:'16px'}}><i className="fa-solid fa-fire" style={{marginRight:'8px'}}></i>Featured</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'28px'}}>
            <Link href={`/blog/${posts[0].slug}`} className="blog-card" style={{gridColumn:'span 1'}}>
              <div className="blog-thumb"><span>{posts[0].emoji}</span></div>
              <div className="blog-body">
                <p className="blog-date"><span className="tag">{posts[0].category}</span> &nbsp;{posts[0].date}</p>
                <h2 className="blog-title">{posts[0].title}</h2>
                <p className="blog-excerpt">{posts[0].excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time"><i className="fa-regular fa-clock"></i> {posts[0].readTime}</span>
                  <span className="blog-link">Read <i className="fa-solid fa-arrow-right" style={{fontSize:'11px'}}></i></span>
                </div>
              </div>
            </Link>
            <Link href={`/blog/${posts[1].slug}`} className="blog-card">
              <div className="blog-thumb"><span>{posts[1].emoji}</span></div>
              <div className="blog-body">
                <p className="blog-date"><span className="tag">{posts[1].category}</span> &nbsp;{posts[1].date}</p>
                <h2 className="blog-title">{posts[1].title}</h2>
                <p className="blog-excerpt">{posts[1].excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time"><i className="fa-regular fa-clock"></i> {posts[1].readTime}</span>
                  <span className="blog-link">Read <i className="fa-solid fa-arrow-right" style={{fontSize:'11px'}}></i></span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* All Posts */}
        <p className="section-label" style={{marginBottom:'24px'}}><i className="fa-solid fa-newspaper" style={{marginRight:'8px'}}></i>All Posts</p>
        <div className="blog-grid">
          {posts.slice(2).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-thumb"><span>{post.emoji}</span></div>
              <div className="blog-body">
                <p className="blog-date"><span className="tag">{post.category}</span> &nbsp;{post.date}</p>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time"><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                  <span className="blog-link">Read <i className="fa-solid fa-arrow-right" style={{fontSize:'11px'}}></i></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* NEWSLETTER CTA */}
      <section className="cta-section">
        <h2>Get Every Post<br /><span style={{color:'var(--accent)'}}>Delivered</span></h2>
        <p>New articles emailed to you every Monday alongside the latest episode digest.</p>
        <div className="cta-actions">
          <Link href="/newsletter" className="btn-primary"><i className="fa-regular fa-envelope"></i> Subscribe</Link>
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
