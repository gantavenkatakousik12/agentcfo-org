# AgentCFO - The CFO Podcast for the AI Era

A modern, responsive podcast website built with Next.js, TypeScript, and PostCSS. Built for finance leaders navigating AI transformation.

---

## 🎨 Color Schema

All colors are defined as CSS variables in `globals.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--white` | `#ffffff` | Background, cards |
| `--off-white` | `#f7f6f2` | Alternative light background |
| `--light` | `#eeece6` | Subtle backgrounds |
| `--mid` | `#d8d4cc` | Borders, dividers |
| `--ink` | `#0e0e0e` | Primary text |
| `--ink-soft` | `#3a3a3a` | Secondary text |
| `--ink-muted` | `#888` | Tertiary text, captions |
| `--accent` | `#0047ff` | Primary action, highlights (Blue) |
| `--accent-light` | `#e6edff` | Light blue background |
| `--accent2` | `#00c896` | Success state, alternative accent (Green) |
| `--accent3` | `#ff4e1a` | Warning/attention (Orange) |
| `--radius` | `20px` | Small rounded corners |
| `--radius-lg` | `36px` | Large rounded corners |

**Font Family**: Poppins (300, 400, 500, 600, 700, 800, 900)

---

## 📄 Pages & Structure

### Root Pages

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Hero with statistics, featured episode preview, CTA sections |
| **About** | `/about` | Mission, values, team, timeline, company history |
| **Blog** | `/blog` | AI finance articles, frameworks, how-to guides |
| **Episodes** | `/episodes` | Podcast episode archive with filtering by topic tags |
| **Guests** | `/guests` | Featured contributor profiles and expertise areas |
| **Newsletter** | `/newsletter` | Email subscription hub with past issues |
| **Show Notes** | `/show-notes` | Episode-specific show notes and resources |
| **Glossary** | `/glossary` | Finance AI terminology database (A-Z) |
| **Contact** | `/contact` | Contact form, FAQ, sponsorship/guest inquiries |
| **Topics** | `/topics` | Filter episodes by finance topic (FP&A, AP, Tax, etc.) |
| **Transcripts** | `/transcripts` | Full episode transcripts searchable |
| **Sponsor** | `/sponsor` | Sponsorship packages and opportunities |
| **Submit Guest** | `/submit-guest` | Guest application form with criteria |

### Components

- **Navigation** - Fixed header with logo, nav links, and CTA button
- **Cursor** - Custom cursor with accent color and ring effect

---

## 🚀 Getting Started

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build & Deploy

```bash
npm run build
npm run start
```

---

## 📋 WordPress HTML Forms

Below are HTML forms extracted from the Next.js components without navbar integration. Copy and paste directly into WordPress pages.

### 1. Contact Form
**From**: `/app/contact/page.tsx`

```html
<style>
  :root {
    --accent: #0047ff;
    --accent-light: #e6edff;
    --accent2: #00c896;
    --off-white: #f7f6f2;
    --ink: #0e0e0e;
    --ink-soft: #3a3a3a;
    --ink-muted: #888;
    --mid: #d8d4cc;
    --radius: 20px;
    --radius-lg: 36px;
    --white: #ffffff;
  }
  
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .contact-section {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 24px;
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    .contact-layout {
      grid-template-columns: 1fr;
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-form h3 {
    font-family: 'Syne', -apple-system, sans-serif;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 8px;
  }

  .contact-form > p {
    font-size: 14px;
    color: var(--ink-muted);
    margin-bottom: 12px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    font-size: 14px;
    font-weight: 600;
    color: var(--ink-soft);
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    padding: 12px 16px;
    border: 1px solid var(--mid);
    border-radius: var(--radius);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--ink);
    transition: border-color 0.2s;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: var(--accent);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn-primary {
    background: var(--ink);
    color: var(--white);
    padding: 12px 28px;
    border: none;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    align-self: flex-start;
  }

  .btn-primary:hover {
    background: var(--accent);
    transform: scale(1.03);
  }

  .success-message {
    background: var(--accent-light);
    border: 1px solid rgba(0, 71, 255, 0.15);
    border-radius: var(--radius-lg);
    padding: 48px;
    text-align: center;
  }

  .success-message i {
    font-size: 48px;
    color: var(--accent2);
    margin-bottom: 16px;
    display: block;
  }

  .success-message h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 8px;
    color: var(--ink);
  }

  .success-message p {
    color: var(--ink-soft);
  }

  .contact-info-col {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .info-card {
    background: var(--off-white);
    border: 1px solid var(--mid);
    border-radius: var(--radius-lg);
    padding: 28px;
  }

  .info-card-icon {
    width: 44px;
    height: 44px;
    background: var(--accent-light);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    font-size: 20px;
    margin-bottom: 16px;
  }

  .info-card h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
    color: var(--ink);
  }

  .info-card p {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.6;
  }

  .info-card a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
  }

  .info-card a:hover {
    text-decoration: underline;
  }
</style>

<div class="contact-section">
  <div class="contact-layout">
    <!-- FORM -->
    <div>
      <form class="contact-form" id="contactForm">
        <h3>Send a Message</h3>
        <p>All fields required.</p>
        
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Jane Smith" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="jane@company.com" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <select id="subject" name="subject" required>
            <option value="">Select a topic...</option>
            <option>General Inquiry</option>
            <option>Sponsorship</option>
            <option>Guest Pitch</option>
            <option>Press and Media</option>
            <option>Technical Issue</option>
            <option>Other</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us what is on your mind..." required></textarea>
        </div>
        
        <button type="submit" class="btn-primary">Send Message</button>
      </form>
    </div>

    <!-- INFO CARDS -->
    <div class="contact-info-col">
      <div class="info-card">
        <div class="info-card-icon">📧</div>
        <h3>Email Us</h3>
        <p><a href="mailto:hello@agentcfo.fm">hello@agentcfo.fm</a></p>
        <p style="margin-top: 4px; font-size: 13px; color: var(--ink-muted);">We respond within 48 business hours.</p>
      </div>

      <div class="info-card">
        <div class="info-card-icon">🎙️</div>
        <h3>Guest Pitches</h3>
        <p>Have a story worth sharing? Apply via our guest form and someone from our team will reach out if it is a good fit.</p>
      </div>

      <div class="info-card">
        <div class="info-card-icon">🤝</div>
        <h3>Sponsorship</h3>
        <p>Reach 50K+ finance decision-makers each month. View our packages or email us for a custom proposal.</p>
      </div>

      <div class="info-card">
        <div class="info-card-icon">🔗</div>
        <h3>Follow Us</h3>
        <p style="margin-bottom: 10px;">Stay updated across platforms:</p>
        <div class="social-row">
          <a href="#" style="display: inline-block; margin-right: 12px;">Twitter</a>
          <a href="#" style="display: inline-block; margin-right: 12px;">LinkedIn</a>
          <a href="#" style="display: inline-block; margin-right: 12px;">Spotify</a>
          <a href="#" style="display: inline-block;">YouTube</a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 48 hours.');
    this.reset();
  });
</script>
```

---

### 2. Newsletter Subscription Form
**From**: `/app/newsletter/page.tsx`

```html
<style>
  :root {
    --accent: #0047ff;
    --accent-light: #e6edff;
    --accent2: #00c896;
    --off-white: #f7f6f2;
    --ink: #0e0e0e;
    --ink-soft: #3a3a3a;
    --mid: #d8d4cc;
    --radius: 20px;
    --radius-lg: 36px;
  }

  .nl-section {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 24px;
  }

  .nl-hero {
    background: linear-gradient(135deg, var(--accent-light), #b3c8ff);
    border: 1px solid rgba(0, 71, 255, 0.15);
    border-radius: var(--radius-lg);
    padding: 60px 40px;
    text-align: center;
  }

  .nl-hero h2 {
    font-family: 'Syne', -apple-system, sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: var(--ink);
    margin-bottom: 12px;
  }

  .nl-hero > p:first-of-type {
    font-size: 16px;
    color: var(--ink-soft);
    margin-bottom: 32px;
    line-height: 1.6;
  }

  .nl-form {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 640px) {
    .nl-form {
      flex-direction: column;
    }
  }

  .nl-form input {
    flex: 1;
    padding: 14px 16px;
    border: none;
    border-radius: 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  .nl-form button {
    background: var(--ink);
    color: white;
    padding: 14px 32px;
    border: none;
    border-radius: 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }

  .nl-form button:hover {
    background: var(--accent);
  }

  .success-box {
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius);
    padding: 20px;
    text-align: center;
  }

  .success-box i {
    font-size: 32px;
    margin-bottom: 8px;
    display: block;
  }

  .success-box p {
    font-weight: 700;
    color: var(--ink);
  }

  .nl-privacy {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 16px;
  }

  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    .benefit-grid {
      grid-template-columns: 1fr;
    }
  }

  .benefit-card {
    background: var(--off-white);
    border: 1px solid var(--mid);
    border-radius: var(--radius-lg);
    padding: 32px;
    text-align: center;
  }

  .benefit-icon {
    font-size: 36px;
    color: var(--accent);
    margin-bottom: 16px;
  }

  .benefit-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--ink);
  }

  .benefit-desc {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.6;
  }
</style>

<div class="nl-section">
  <div class="nl-hero">
    <h2>Join 12,000+ Finance Leaders</h2>
    <p>Get the Monday morning brief that keeps you ahead of the AI curve in finance and FP&A.</p>
    
    <form class="nl-form" id="nlForm">
      <input
        type="email"
        id="nlEmail"
        placeholder="Enter your email..."
        required
      >
      <button type="submit">Subscribe Free</button>
    </form>
    
    <p class="nl-privacy">
      🔒 Your data stays private. Unsubscribe with one click.
    </p>
  </div>

  <!-- BENEFITS -->
  <div style="margin-top: 80px;">
    <p style="font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 16px;">⭐ WHAT YOU GET</p>
    <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: 32px; margin-bottom: 40px; text-align: center;">
      Built for Finance<br><span style="color: var(--accent);">Practitioners</span>
    </h2>

    <div class="benefit-grid">
      <div class="benefit-card">
        <div class="benefit-icon">🎙️</div>
        <p class="benefit-title">Episode Recaps</p>
        <p class="benefit-desc">Concise summaries of each new episode with the top 3 actionable insights, delivered the morning it drops.</p>
      </div>

      <div class="benefit-card">
        <div class="benefit-icon">📰</div>
        <p class="benefit-title">AI Finance News</p>
        <p class="benefit-desc">The week biggest AI developments in finance, curated and contextualized by our editorial team.</p>
      </div>

      <div class="benefit-card">
        <div class="benefit-icon">🛠️</div>
        <p class="benefit-title">Tool Spotlights</p>
        <p class="benefit-desc">Honest reviews and comparisons of AI finance tools our guests and community are actually using.</p>
      </div>

      <div class="benefit-card">
        <div class="benefit-icon">📋</div>
        <p class="benefit-title">Frameworks and Templates</p>
        <p class="benefit-desc">Downloadable planning templates, prompts, and decision frameworks referenced in recent episodes.</p>
      </div>
    </div>
  </div>
</div>

<script>
  document.getElementById('nlForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing! Check your email to confirm.');
    this.reset();
  });
</script>
```

---

### 3. Guest Application Form
**From**: `/app/submit-guest/page.tsx`

```html
<style>
  :root {
    --accent: #0047ff;
    --accent-light: #e6edff;
    --accent2: #00c896;
    --off-white: #f7f6f2;
    --ink: #0e0e0e;
    --ink-soft: #3a3a3a;
    --ink-muted: #888;
    --mid: #d8d4cc;
    --radius: 20px;
    --radius-lg: 36px;
    --white: #ffffff;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .guest-section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 24px;
  }

  .guest-layout {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 64px;
    align-items: start;
  }

  @media (max-width: 768px) {
    .guest-layout {
      grid-template-columns: 1fr;
    }
  }

  .criteria-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }

  .criteria-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 16px;
    background: var(--off-white);
    border-radius: var(--radius);
    border: 1px solid var(--mid);
  }

  .criteria-icon {
    width: 36px;
    height: 36px;
    background: var(--accent-light);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    font-size: 14px;
    flex-shrink: 0;
  }

  .criteria-item p:first-child {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 4px;
    color: var(--ink);
  }

  .criteria-item p:last-child {
    font-size: 13px;
    color: var(--ink-muted);
    line-height: 1.55;
  }

  .info-box {
    background: var(--ink);
    color: white;
    border-radius: var(--radius-lg);
    padding: 28px;
  }

  .info-box i {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--accent2);
    display: block;
  }

  .info-box p:first-of-type {
    font-weight: 700;
    margin-bottom: 6px;
  }

  .info-box p:last-of-type {
    font-size: 13px;
    opacity: 0.7;
    line-height: 1.6;
  }

  .submit-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .submit-form h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 12px;
    color: var(--ink);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 640px) {
    .form-row {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .submit-form.single-col .form-row {
    grid-template-columns: 1fr;
  }

  .form-group label {
    font-size: 14px;
    font-weight: 600;
    color: var(--ink-soft);
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    padding: 12px 16px;
    border: 1px solid var(--mid);
    border-radius: var(--radius);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--ink);
    transition: border-color 0.2s;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: var(--accent);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .btn-primary {
    background: var(--ink);
    color: white;
    padding: 12px 28px;
    border: none;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    align-self: flex-start;
  }

  .btn-primary:hover {
    background: var(--accent);
    transform: scale(1.03);
  }

  .success-message {
    background: var(--accent-light);
    border: 1px solid rgba(0, 71, 255, 0.15);
    border-radius: var(--radius-lg);
    padding: 48px;
    text-align: center;
  }

  .success-message i {
    font-size: 48px;
    color: var(--accent2);
    margin-bottom: 16px;
    display: block;
  }

  .success-message h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 8px;
    color: var(--ink);
  }

  .success-message p {
    color: var(--ink-soft);
  }
</style>

<div class="guest-section">
  <div class="guest-layout">
    <!-- CRITERIA -->
    <div>
      <p style="font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 16px;">
        🔍 WHAT WE LOOK FOR
      </p>
      <h2 style="font-family: 'Syne', sans-serif; font-weight: 700; font-size: clamp(24px, 2.5vw, 36px); margin-bottom: 24px; color: var(--ink);">
        Our Guest <span style="color: var(--accent);">Criteria</span>
      </h2>

      <div class="criteria-box">
        <div class="criteria-item">
          <div class="criteria-icon">💼</div>
          <div>
            <p>Active Practitioner</p>
            <p>You are currently working in a finance role — CFO, VP Finance, Controller, FP&A Lead, AP Director, or similar.</p>
          </div>
        </div>

        <div class="criteria-item">
          <div class="criteria-icon">🤖</div>
          <div>
            <p>Real AI Experience</p>
            <p>You have deployed AI in your finance workflows — not just evaluated it. You have numbers, stories, and hard lessons.</p>
          </div>
        </div>

        <div class="criteria-item">
          <div class="criteria-icon">💬</div>
          <div>
            <p>Candid Communicator</p>
            <p>You are comfortable sharing what did not work, not just the wins. Our listeners want honest, not polished.</p>
          </div>
        </div>

        <div class="criteria-item">
          <div class="criteria-icon">📅</div>
          <div>
            <p>Available for 60 Min</p>
            <p>Our episodes run 45 to 75 minutes. You need a quiet space, decent audio, and about 90 minutes of your schedule.</p>
          </div>
        </div>
      </div>

      <div class="info-box">
        <i class="fa-solid fa-circle-info" style="color: var(--accent2);">ℹ️</i>
        <p>Response Time</p>
        <p>We review every application within 2 weeks. If your background is a good fit, we will reach out to schedule a pre-interview call.</p>
      </div>
    </div>

    <!-- FORM -->
    <div id="formContainer">
      <form class="submit-form" id="guestForm">
        <h3>Guest Application</h3>

        <div class="form-row">
          <div class="form-group">
            <label for="guestName">Full Name *</label>
            <input type="text" id="guestName" name="name" placeholder="Jane Smith" required>
          </div>
          <div class="form-group">
            <label for="guestTitle">Current Title *</label>
            <input type="text" id="guestTitle" name="title" placeholder="CFO, VP Finance..." required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="guestCompany">Company *</label>
            <input type="text" id="guestCompany" name="company" placeholder="Acme Corp" required>
          </div>
          <div class="form-group">
            <label for="guestEmail">Work Email *</label>
            <input type="email" id="guestEmail" name="email" placeholder="jane@acme.com" required>
          </div>
        </div>

        <div class="form-group">
          <label for="guestLinkedin">LinkedIn URL</label>
          <input type="url" id="guestLinkedin" name="linkedin" placeholder="linkedin.com/in/...">
        </div>

        <div class="form-group">
          <label for="guestTopic">Proposed Topic *</label>
          <select id="guestTopic" name="topic" required>
            <option value="">Select a topic area...</option>
            <option>AI and Automation in Finance</option>
            <option>FP&A Strategy and Tools</option>
            <option>Month-End Close</option>
            <option>AP Automation</option>
            <option>Treasurer and Cash Flow</option>
            <option>Tax and Compliance</option>
            <option>Finance Transformation</option>
            <option>Building Finance Teams</option>
            <option>Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="guestBio">Short Bio (100 words) *</label>
          <textarea id="guestBio" name="bio" placeholder="Tell us about your background and expertise..." required></textarea>
        </div>

        <div class="form-group">
          <label for="guestStory">Your Story: What AI Finance Achievement Would You Share? *</label>
          <textarea id="guestStory" name="story" placeholder="What have you deployed? What worked? What did you learn the hard way?" required></textarea>
        </div>

        <button type="submit" class="btn-primary">Submit Application</button>
      </form>
    </div>
  </div>
</div>

<script>
  document.getElementById('guestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const container = document.getElementById('formContainer');
    container.innerHTML = `
      <div class="success-message">
        <span style="font-size: 48px; color: var(--accent2); margin-bottom: 16px; display: block;">✓</span>
        <h3>Application Received!</h3>
        <p>We will review your pitch and get back to you within 2 weeks. Thank you for applying.</p>
      </div>
    `;
  });
</script>
```

---

## 📦 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: CSS with PostCSS
- **Font**: Poppins (via Google Fonts)
- **Icons**: Font Awesome 6.4.0
- **Deployment**: Vercel recommended

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 License

Copyright © 2025 AgentCFO
