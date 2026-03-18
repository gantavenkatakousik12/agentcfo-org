import Link from 'next/link';

const stats = [
  { icon: 'fa-headphones', value: '50K+', label: 'Monthly Listeners' },
  { icon: 'fa-podcast', value: '120+', label: 'Episodes' },
  { icon: 'fa-users', value: '80+', label: 'Expert Guests' },
  { icon: 'fa-building', value: '35+', label: 'Countries Reached' },
  { icon: 'fa-star', value: '4.9', label: 'Average Rating' },
  { icon: 'fa-chart-line', value: '$2B+', label: 'Capital Deployed by Guests' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          New Episode Every Thursday
        </div>
        <div className="hero-layout">
          <div className="hero-left">
            <p className="hero-tag">The CFO Podcast for the AI Era</p>
            <h1>Finance Leadership<br /><span className="accent-word">Reimagined</span> by AI</h1>
            <p className="hero-desc">
              Real conversations with CFOs, founders, and finance operators building the future of intelligent finance. No fluff, no filler — just deep tactical insights.
            </p>
            <div className="hero-actions">
              <Link href="/episodes" className="btn-primary">
                <i className="fa-solid fa-play"></i> Listen Now
              </Link>
              <Link href="/newsletter" className="btn-outline">
                <i className="fa-regular fa-envelope"></i> Get the Newsletter
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <div className="floating-chip chip-1">
              <span className="chip-dot" style={{background:'#00c896'}}></span>
              <i className="fa-solid fa-robot" style={{color:'var(--accent)',fontSize:'12px'}}></i>
              AI-Powered Finance
            </div>
            <div className="floating-chip chip-2">
              <i className="fa-solid fa-chart-pie" style={{color:'var(--accent3)',fontSize:'12px'}}></i>
              CFO Insights Weekly
            </div>
            <div className="episode-preview-card">
              <div className="ep-preview-thumb">
                <span>🎙️</span>
                <div className="ep-preview-overlay"></div>
                <div className="ep-preview-play">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <div className="ep-preview-body">
                <p className="ep-preview-meta">EP. 121 &nbsp;&bull;&nbsp; Jan 2025</p>
                <p className="ep-preview-title">How AI is Rewriting the CFO Playbook</p>
                <div className="waveform">
                  {[...Array(15)].map((_, i) => (
                    <span key={i} className={i < 7 ? 'active' : ''}></span>
                  ))}
                </div>
                <div className="progress-bar-wrap">
                  <div className="progress-fill"></div>
                </div>
                <div className="ep-time"><span>14:32</span><span>38:10</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS TICKER */}
      <div className="stats-ticker">
        <div className="ticker-track">
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className="ticker-item">
              <i className={`fa-solid ${s.icon}`}></i>
              <span className="ticker-value">{s.value}</span> {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* FORMAT SECTION */}
      <div className="section-wrap">
        <p className="section-label"><i className="fa-solid fa-layer-group" style={{marginRight:'8px'}}></i>What We Offer</p>
        <h2 className="section-heading">Every Format.<br />One <span className="accent-word">Mission.</span></h2>
        <p className="section-sub">Deep-dive episodes, quick insights, and video breakdowns — all focused on AI-native finance leadership.</p>
        <div className="format-grid">
          <div className="format-card featured">
            <div className="format-icon"><i className="fa-solid fa-microphone-lines"></i></div>
            <p className="format-name">Long Form Episodes</p>
            <p className="format-desc">45 to 75 minute deep dives with finance executives, VCs, and founders navigating the AI transformation of their orgs.</p>
            <div className="format-cta-link"><i className="fa-solid fa-arrow-right"></i> Browse Episodes</div>
          </div>
          <div className="format-card">
            <div className="format-icon"><i className="fa-solid fa-bolt"></i></div>
            <p className="format-name">Quick Takes</p>
            <p className="format-desc">10 to 15 minute tactical breakdowns of specific finance workflows, tools, and frameworks worth your Monday morning.</p>
            <div className="format-cta-link"><i className="fa-solid fa-arrow-right"></i> Listen Now</div>
          </div>
          <div className="format-card">
            <div className="format-icon"><i className="fa-solid fa-video"></i></div>
            <p className="format-name">Video Episodes</p>
            <p className="format-desc">Full video recordings with screen shares, live demos, and visual breakdowns of complex finance models and AI tools.</p>
            <div className="format-cta-link"><i className="fa-solid fa-arrow-right"></i> Watch Now</div>
          </div>
        </div>
        <div className="format-row">
          <div className="format-card-sm">
            <div className="format-sm-icon"><i className="fa-solid fa-file-lines"></i></div>
            <div>
              <p className="format-sm-name">Show Notes</p>
              <p className="format-sm-sub">Full transcripts and key links</p>
            </div>
          </div>
          <div className="format-card-sm">
            <div className="format-sm-icon"><i className="fa-solid fa-bookmark"></i></div>
            <div>
              <p className="format-sm-name">Resource Library</p>
              <p className="format-sm-sub">Templates, frameworks, guides</p>
            </div>
          </div>
          <div className="format-card-sm">
            <div className="format-sm-icon"><i className="fa-brands fa-youtube"></i></div>
            <div>
              <p className="format-sm-name">Clips and Shorts</p>
              <p className="format-sm-sub">Best moments under 3 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features-section">
        <div className="features-inner">
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <p className="section-label"><i className="fa-solid fa-sparkles" style={{marginRight:'8px'}}></i>Why Listen</p>
            <h2 className="section-heading">Built for Finance<br /><span className="accent-word">Leaders</span></h2>
          </div>
          <div className="features-pair">
            <div className="features-visual">
              <div className="analysis-card">
                <p className="analysis-title"><i className="fa-solid fa-brain" style={{marginRight:'6px'}}></i>AI Signal Score</p>
                <div className="analysis-row">
                  <span className="analysis-label">Automation Readiness</span>
                  <div className="analysis-bar"><div className="analysis-fill" style={{width:'78%'}}></div></div>
                </div>
                <div className="analysis-row">
                  <span className="analysis-label">Cost Efficiency</span>
                  <div className="analysis-bar"><div className="analysis-fill green" style={{width:'91%'}}></div></div>
                </div>
                <div className="analysis-row">
                  <span className="analysis-label">Strategic Impact</span>
                  <div className="analysis-bar"><div className="analysis-fill orange" style={{width:'65%'}}></div></div>
                </div>
              </div>
            </div>
            <div>
              <p className="features-num">01</p>
              <h3 className="features-title">AI Insights on Every Episode</h3>
              <p className="features-desc">Every episode comes with an AI-generated insights summary covering automation opportunities, efficiency benchmarks, and strategic signals drawn from the conversation.</p>
            </div>
          </div>
          <div className="features-pair rev">
            <div className="features-visual">
              <div className="transcript-card">
                <div className="transcript-row">
                  <div className="transcript-avatar" style={{background:'var(--accent)'}}>SC</div>
                  <div className="transcript-bubble">We cut our close cycle from <span className="hl">14 days to 3 days</span> after deploying AI reconciliation.</div>
                </div>
                <div className="transcript-row">
                  <div className="transcript-avatar" style={{background:'var(--accent2)'}}>TM</div>
                  <div className="transcript-bubble">The biggest unlock was <span className="hl">eliminating manual journal entries</span> entirely.</div>
                </div>
              </div>
            </div>
            <div>
              <p className="features-num">02</p>
              <h3 className="features-title">Full Transcripts and Search</h3>
              <p className="features-desc">Never miss a key insight. Every episode includes a fully searchable transcript, timestamp navigation, and highlighted quotables for easy reference and sharing.</p>
            </div>
          </div>
          <div className="features-pair">
            <div className="features-visual" style={{background:'var(--ink)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{textAlign:'center',color:'white'}}>
                <i className="fa-solid fa-shield-halved" style={{fontSize:'48px',color:'var(--accent2)',marginBottom:'12px'}}></i>
                <p style={{fontFamily:'Syne,sans-serif',fontWeight:'700',fontSize:'18px'}}>Vetted Guests Only</p>
                <p style={{fontSize:'13px',opacity:.6,marginTop:'6px'}}>Real operators, not just pundits</p>
              </div>
            </div>
            <div>
              <p className="features-num">03</p>
              <h3 className="features-title">100% Practitioner Guests</h3>
              <p className="features-desc">Every guest is a working finance professional — active CFOs, VPs of Finance, and operators with hands-on experience deploying AI in real enterprise environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST EPISODES PREVIEW */}
      <div className="section-wrap">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'40px',flexWrap:'wrap',gap:'16px'}}>
          <div>
            <p className="section-label"><i className="fa-solid fa-podcast" style={{marginRight:'8px'}}></i>Latest Episodes</p>
            <h2 className="section-heading" style={{marginBottom:0}}>Fresh Off<br />the <span className="accent-word">Feed</span></h2>
          </div>
          <Link href="/episodes" className="btn-outline">All Episodes <i className="fa-solid fa-arrow-right" style={{fontSize:'13px'}}></i></Link>
        </div>
        <div className="episodes-grid">
          {[
            {num:'121',emoji:'🤖',title:'How AI is Rewriting the CFO Playbook',meta:'Jan 2025',desc:'Deep dive into how AI is fundamentally changing the role of the CFO — from forecasting to controls to board reporting.',duration:'52 min',tags:['AI','Strategy']},
            {num:'120',emoji:'📊',title:'Zero-Day Close: Building an AI-Native Month End',meta:'Dec 2024',desc:'How one Controller cut their month-end close from 8 days to 18 hours using agentic AI workflows.',duration:'48 min',tags:['Automation','Month End']},
            {num:'119',emoji:'💰',title:'Predictive Cash Flow in Practice',meta:'Dec 2024',desc:'The VP of Finance at a Series C SaaS shares how they built a 90-day cash flow prediction model that actually works.',duration:'41 min',tags:['Cash Flow','FP&A']},
          ].map((ep) => (
            <Link key={ep.num} href={`/episodes/ep-${ep.num}`} className="ep-card">
              <div className="ep-card-thumb" style={{background:'linear-gradient(135deg,var(--accent-light),#b3c8ff)'}}>
                <span>{ep.emoji}</span>
                <div className="ep-play"><i className="fa-solid fa-play"></i></div>
                <div className="ep-num-badge">EP. {ep.num}</div>
              </div>
              <div className="ep-body">
                <p className="ep-meta">{ep.meta} <span className="dot">•</span> {ep.duration}</p>
                <h3 className="ep-title">{ep.title}</h3>
                <p className="ep-desc">{ep.desc}</p>
                <div className="ep-card-footer">
                  <span className="ep-duration"><i className="fa-regular fa-clock"></i> {ep.duration}</span>
                  <span className="ep-link">Listen <i className="fa-solid fa-arrow-right" style={{fontSize:'11px'}}></i></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* COMMUNITY / TOPICS */}
      <section style={{background:'var(--off-white)',padding:'0'}}>
        <div className="section-wrap">
          <p className="section-label"><i className="fa-solid fa-compass" style={{marginRight:'8px'}}></i>Explore by Topic</p>
          <h2 className="section-heading">Find Your<br /><span className="accent-word">Corner</span></h2>
          <div className="topics-grid" style={{marginTop:'40px'}}>
            {[
              {icon:'fa-robot',title:'AI and Automation',desc:'Autonomous workflows, agentic AI, and the tools transforming finance operations.',eps:'24 episodes'},
              {icon:'fa-chart-line',title:'FP and A Strategy',desc:'Forecasting frameworks, driver-based models, and modern planning approaches.',eps:'31 episodes'},
              {icon:'fa-file-invoice-dollar',title:'Accounts Payable',desc:'Invoice processing, vendor management, 3-way matching, and payment automation.',eps:'18 episodes'},
              {icon:'fa-money-bill-transfer',title:'Cash Management',desc:'Cash flow forecasting, liquidity strategies, and working capital optimization.',eps:'22 episodes'},
              {icon:'fa-scale-balanced',title:'Compliance and Tax',desc:'Navigating regulatory change, AI-powered tax compliance, and audit readiness.',eps:'15 episodes'},
              {icon:'fa-handshake',title:'Investor Relations',desc:'Board reporting, KPI storytelling, and building trust with capital allocators.',eps:'19 episodes'},
            ].map((t, i) => (
              <Link key={i} href="/topics" style={{textDecoration:'none',color:'inherit'}}>
                <div className="topic-card">
                  <div className="topic-icon"><i className={`fa-solid ${t.icon}`}></i></div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <span className="topic-count"><i className="fa-solid fa-podcast" style={{marginRight:'5px'}}></i>{t.eps}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <p className="section-label" style={{textAlign:'center',marginBottom:'20px'}}><i className="fa-solid fa-quote-left" style={{marginRight:'8px'}}></i>From the Community</p>
        <div className="testimonial-box">
          <p className="testimonial-text">
            AgentCFO is the only podcast that actually keeps pace with what is happening in AI-driven finance. Every episode, I walk away with at least one playbook change I can bring to my team.
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">👤</div>
            <div>
              <p className="testimonial-name">Sarah Chen</p>
              <p className="testimonial-role">VP of Finance, Series D SaaS</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="cta-section">
        <p className="section-label"><i className="fa-regular fa-envelope" style={{marginRight:'8px'}}></i>Stay in the Loop</p>
        <h2>The CFO Newsletter<br />You <span className="accent-word">Actually</span> Read</h2>
        <p>Weekly digest of AI finance news, episode summaries, frameworks, and tools delivered every Monday morning.</p>
        <div className="cta-actions">
          <Link href="/newsletter" className="btn-primary">
            <i className="fa-regular fa-envelope"></i> Subscribe Free
          </Link>
          <Link href="/sponsor" className="btn-outline">
            <i className="fa-solid fa-handshake"></i> Sponsor the Show
          </Link>
        </div>
        <div className="platform-chips">
          <span className="platform-chip"><i className="fa-brands fa-spotify"></i> Spotify</span>
          <span className="platform-chip"><i className="fa-brands fa-apple"></i> Apple Podcasts</span>
          <span className="platform-chip"><i className="fa-brands fa-google"></i> Google Podcasts</span>
          <span className="platform-chip"><i className="fa-brands fa-youtube"></i> YouTube</span>
          <span className="platform-chip"><i className="fa-solid fa-rss"></i> RSS</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">AgentCFO</Link>
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
            <Link href="/episodes">All Episodes</Link>
            <Link href="/topics">By Topic</Link>
            <Link href="/guests">Guest Archive</Link>
            <Link href="/transcripts">Transcripts</Link>
            <Link href="/show-notes">Show Notes</Link>
          </div>
          <div className="footer-col">
            <h4>Learn</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/glossary">Finance Glossary</Link>
            <Link href="/newsletter">Newsletter</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/sponsor">Sponsor</Link>
            <Link href="/submit-guest">Be a Guest</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AgentCFO. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
