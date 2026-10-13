import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Cpu, GraduationCap,
  Building2, Factory, HardHat, HeartPulse, Landmark, Menu, Monitor, Moon, Network, ShieldCheck, Sun, X,
} from 'lucide-react'

const industries = [
  { name: 'Education', tag: 'EDUCATION', number: '01', icon: GraduationCap, description: 'Better learning starts with a better-connected campus.', image: 'photo-1523050854058-8df90110c9f1', focus: 'A campus that works as hard as its students.', detail: 'Bring administration, learning systems and classroom technology into one secure, easier-to-run environment. Give educators more time for teaching and IT teams a clearer view of every building.', features: ['Student information systems', 'Connected learning spaces', 'Campus network & device management'], result: 'MORE TIME FOR WHAT MATTERS' },
  { name: 'Automotive', tag: 'AUTOMOTIVE', number: '02', icon: Cpu, description: 'Intelligent operations, from the factory floor to the final mile.', image: 'photo-1492144534655-ae79c964c9d7', focus: 'Less downtime between the lines.', detail: 'Connect production data, frontline tools and operational systems from the factory to the service bay. Spot friction sooner and keep teams moving with reliable edge hardware and real-time visibility.', features: ['Factory-floor edge computing', 'Connected fleet operations', 'Dealer & service workflows'], result: 'OPERATIONS IN MOTION' },
  { name: 'Healthcare', tag: 'HEALTHCARE', number: '03', icon: HeartPulse, description: 'More connected care. Fewer things between the patient and better.', image: 'photo-1519494026892-80bbd2d6fd0d', focus: 'Make room for more human care.', detail: 'Make secure information and dependable workflows easier to reach across care settings. Reduce the everyday administrative drag without compromising privacy, uptime or the patient experience.', features: ['Secure clinical workflows', 'Healthcare data integration', 'Managed endpoint devices'], result: 'CARE, WITHOUT THE FRICTION' },
  { name: 'Finance', tag: 'FINANCE', number: '04', icon: ShieldCheck, description: 'The speed to move money. The security to move with confidence.', image: 'photo-1444653614773-995cb1ef9efa', focus: 'Move at speed. Stay in control.', detail: 'Connect payment operations, secure infrastructure and the controls your team needs. Support faster, clearer workflows with reliable systems designed for regulated environments.', features: ['Secure payment operations', 'Compliance-ready workflows', 'Resilient network infrastructure'], result: 'BUILT FOR TRUST AT SCALE' },
  { name: 'Banking & Microfinance', tag: 'COMMERCIAL BANKING', number: '05', icon: Landmark, description: 'Secure, simpler banking for institutions and the communities they serve.', image: 'photo-1486406146926-c627a92ad1ab', focus: 'Modern banking, built on trust.', detail: 'Connect commercial banking operations and community lending with secure customer workflows. Give teams clearer oversight across branches, transactions and the services that help local businesses grow.', features: ['Digital branch operations', 'Microfinance lending workflows', 'Secure customer & transaction data'], result: 'FINANCIAL ACCESS, BUILT TO LAST' },
  { name: 'Manufacturing', tag: 'MANUFACTURING', number: '06', icon: Factory, description: 'More visibility across the production floor. Less time spent chasing it.', image: 'photo-1581091226825-a6a2a5aee158', focus: 'Make every part of production work better.', detail: 'Bring production systems, machines and frontline teams together with reliable industrial software and edge hardware. Improve operational visibility while keeping critical processes connected.', features: ['Industrial edge computing', 'Production & asset monitoring', 'Connected frontline operations'], result: 'A CLEARER VIEW OF THE FLOOR' },
  { name: 'Real Estate', tag: 'REAL ESTATE', number: '07', icon: Building2, description: 'Connected buildings and property operations that work for people.', image: 'photo-1600607687939-ce8a6c25118c', focus: 'Better-run buildings, from day one.', detail: 'Coordinate property workflows, building systems and tenant services across every site. Give real estate teams a dependable view of their portfolio and an easier way to manage day-to-day operations.', features: ['Property operations systems', 'Smart building connectivity', 'Tenant & portfolio workflows'], result: 'BETTER BUILDINGS, BETTER CONNECTED' },
  { name: 'Construction', tag: 'CONSTRUCTION', number: '08', icon: HardHat, description: 'Keep crews, equipment and project information moving together.', image: 'photo-1504307651254-35680f356dfd', focus: 'Every project, moving in the same direction.', detail: 'Connect field teams, jobsite devices and project workflows from the office to the site. Keep current information close to the people building with reliable connectivity where work actually happens.', features: ['Jobsite network & device solutions', 'Field team coordination', 'Project data & document workflows'], result: 'CONNECTED FROM SITE TO OFFICE' },
]

const solutions = [
  { name: 'CampusOS', type: 'Software', category: 'Education', description: 'One calm command center for the business of learning.', metric: '01 / SOFTWARE', color: 'mint', icon: GraduationCap },
  { name: 'Nexus Edge', type: 'Hardware', category: 'Automotive', description: 'Industrial edge computing, built for life in motion.', metric: '02 / HARDWARE', color: 'rose', icon: Cpu },
  { name: 'Careflow', type: 'Software', category: 'Healthcare', description: 'Secure workflows for the people who care for people.', metric: '03 / SOFTWARE', color: 'blue', icon: HeartPulse },
  { name: 'VaultPay', type: 'Software', category: 'Finance', description: 'Compliant payment operations at enterprise scale.', metric: '04 / SOFTWARE', color: 'gold', icon: ShieldCheck },
  { name: 'Orbit Display', type: 'Hardware', category: 'Education', description: 'A brighter, simpler way to bring every room together.', metric: '05 / HARDWARE', color: 'blue', icon: Monitor },
  { name: 'Sentinel Gateway', type: 'Hardware', category: 'Finance', description: 'Purpose-built security at the network perimeter.', metric: '06 / HARDWARE', color: 'mint', icon: Network },
  { name: 'BranchOS', type: 'Software', category: 'Banking & Microfinance', description: 'Connected branch and lending workflows for institutions and communities.', metric: '07 / SOFTWARE', color: 'gold', icon: Landmark },
  { name: 'ForgeLink', type: 'Hardware', category: 'Manufacturing', description: 'Rugged edge computing for a more visible production floor.', metric: '08 / HARDWARE', color: 'rose', icon: Factory },
  { name: 'EstateFlow', type: 'Software', category: 'Real Estate', description: 'A single operational view across properties, people and building systems.', metric: '09 / SOFTWARE', color: 'mint', icon: Building2 },
  { name: 'SiteSync', type: 'Hardware', category: 'Construction', description: 'Reliable jobsite connectivity for crews, devices and project data.', metric: '10 / HARDWARE', color: 'blue', icon: HardHat },
]

const features = [
  { label: 'One platform', eyebrow: 'A CLEARER PICTURE', title: 'Everything connected. Nothing lost.', text: 'Bring data, workflows and teams into one secure view. See the whole operation without stitching together another patchwork of point solutions.', stat: '01 / CONNECTED BY DESIGN' },
  { label: 'Built for you', eyebrow: 'YOUR INDUSTRY, IN FOCUS', title: 'The right tools for your world.', text: 'Purpose-built software and hardware for the moments that matter in education, mobility, care delivery and financial services.', stat: '02 / INDUSTRY READY' },
  { label: 'Here to stay', eyebrow: 'A PARTNER FOR THE LONG RUN', title: 'Real humans. Long after launch.', text: 'A named team, thoughtful onboarding and a service model designed around your operation, not an endless support queue.', stat: '03 / HUMAN SUPPORT' },
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('northstar-theme') || 'cherry')
  const [filter, setFilter] = useState('All solutions')
  const [selectedIndustry, setSelectedIndustry] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('northstar-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!modalOpen) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setModalOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [modalOpen])

  const visibleSolutions = solutions.filter((solution) => filter === 'All solutions' || solution.type === filter)
  const active = features[activeFeature]

  const openInquiry = () => {
    setSubmitted(false)
    setModalOpen(true)
    setMobileMenu(false)
  }

  return (
    <main className="min-h-screen antialiased">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Northstar Systems home"><span className="brand-mark">n<span>.</span></span><span className="brand-name">northstar<span>systems</span></span></a>
        <div className={`nav-links ${mobileMenu ? 'nav-links-open' : ''}`}>
          <a href="#solutions" onClick={() => setMobileMenu(false)}>Solutions</a>
          <a href="#industries" onClick={() => setMobileMenu(false)}>Industries</a>
          <a href="#approach" onClick={() => setMobileMenu(false)}>Our approach</a>
          <a className="mobile-contact" href="#contact" onClick={(event) => { event.preventDefault(); openInquiry() }}>Let’s talk <ArrowUpRight size={14} /></a>
        </div>
        <div className="nav-actions">
          <label className="theme-select-wrap" aria-label="Color theme">
            {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
            <select aria-label="Choose color theme" value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value="cherry">Cherry</option><option value="glacier">Glacier</option><option value="dark">After hours</option>
            </select>
            <ChevronDown className="select-chevron" size={12} />
          </label>
          <button className="nav-cta" onClick={openInquiry}>Let’s talk <ArrowUpRight size={15} /></button>
          <button className="menu-toggle icon-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label={mobileMenu ? 'Close menu' : 'Open menu'}>{mobileMenu ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> TECHNOLOGY, IN ITS ELEMENT.</div>
          <h1>Make complexity<br />feel <span className="serif-accent">simple.</span></h1>
          <p className="hero-intro">The systems behind your next big thing. Thoughtful software and purpose-built hardware for the industries that keep our world moving.</p>
          <div className="hero-actions"><a className="button-primary" href="#solutions">Find your solution <ArrowRight size={16} /></a><a className="text-link" href="#industries">Explore industries <ArrowDownRight size={16} /></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>300+ teams</strong><br />move forward with us</p><span className="proof-divider" /><p className="proof-stat"><strong>99.98%</strong><br />platform uptime</p></div>
        </div>
        <div className="hero-art" aria-label="Modern connected technology operations center" role="img">
          <div className="hero-image" />
          <div className="hero-image-overlay" />
          <div className="hero-art-top"><span>FIELD NOTE 001</span><span>43° 38' N — 79° 23' W</span></div>
          <div className="system-card"><div className="system-icon"><Network size={17} /></div><div><span className="system-caption">NORTHSTAR NETWORK</span><p>All systems, connected.</p></div><span className="system-live"><span className="live-dot" /> LIVE</span></div>
          <div className="hero-image-caption"><span>BUILT FOR WHAT’S NEXT</span><span>01 — 08</span></div>
        </div>
        <div className="hero-bottom-line"><span>ONE STRATEGIC PARTNER.</span><span>SOFTWARE <i>+</i> HARDWARE <i>+</i> HUMANITY</span><span>SCROLL TO DISCOVER <ArrowDownRight size={12} /></span></div>
      </section>

      <section className="trust-strip" aria-label="Trusted by teams at"><p>IN GOOD COMPANY</p><div className="trust-logos"><span>evergreen<span className="trust-light">health</span></span><span className="logo-serif">North<span>bridge</span></span><span className="logo-wide">MOTION<span>WORKS</span></span><span className="logo-fin">◎ FINWELL</span><span className="logo-edu">SUMMIT<span> UNIVERSITY</span></span></div></section>

      <section className="industries-section section-pad" id="industries">
        <div className="section-heading"><div><p className="eyebrow">EIGHT INDUSTRIES. ONE NORTHSTAR.</p><h2>Built around the<br /><span className="serif-accent">way you work.</span></h2></div><p className="section-sidecopy">Every industry has its own kind of complexity.<br />We make sure it doesn’t have to feel complicated.</p></div>
        <div className="industry-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return <a key={industry.name} className="industry-card" href="#industry-details" onClick={() => { setSelectedIndustry(index); setFilter('All solutions') }}>
              <div className="industry-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=900&q=80)` }} />
              <div className="industry-photo-shade" /><span className="industry-number">{industry.number} / {String(industries.length).padStart(2, '0')}</span><Icon className="industry-icon" size={23} strokeWidth={1.5} />
              <div className="industry-card-copy"><span className="industry-tag">{industry.tag}</span><h3>{industry.name}</h3><p>{industry.description}</p></div><span className="industry-arrow"><ArrowUpRight size={18} /></span>
            </a>
          })}
        </div>
        <div className="industry-detail" id="industry-details">
          <div className="industry-detail-nav" role="tablist" aria-label="Industry solution details">{industries.map((industry, index) => <button key={industry.name} role="tab" aria-selected={selectedIndustry === index} aria-controls="industry-detail-panel" className={selectedIndustry === index ? 'industry-detail-tab industry-detail-tab-active' : 'industry-detail-tab'} onClick={() => setSelectedIndustry(index)}><span>{industry.number}</span>{industry.name}<ArrowUpRight size={14} /></button>)}</div>
          {(() => {
            const industry = industries[selectedIndustry]
            const Icon = industry.icon
            return <div className="industry-detail-panel" id="industry-detail-panel" role="tabpanel" key={industry.name}>
              <div className="industry-detail-copy"><p className="eyebrow">{industry.tag} / MADE FOR YOUR WORLD</p><h3>{industry.focus}</h3><p className="industry-detail-text">{industry.detail}</p><ul>{industry.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul><span className="industry-result"><span className="live-dot" />{industry.result}</span></div>
              <div className="industry-detail-image" style={{ backgroundImage: `linear-gradient(0deg, rgba(19,28,23,.22), rgba(19,28,23,.02)), url(https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=1100&q=85)` }}><span><Icon size={19} /> NORTHSTAR / {industry.number}</span></div>
            </div>
          })()}
        </div>
      </section>

      <section className="catalog-section section-pad" id="solutions">
        <div className="catalog-header"><div><p className="eyebrow">A SMALLER STACK. A BIGGER PICTURE.</p><h2>The right thing.<br /><span className="serif-accent">All in one place.</span></h2></div><p className="section-sidecopy">Software for the everyday. Hardware for the edge cases.<br />Both designed to work better together.</p></div>
        <div className="catalog-controls"><div className="catalog-note"><span className="live-dot" /> {visibleSolutions.length} solutions, thoughtfully selected</div><div className="filter-tabs" role="group" aria-label="Filter solutions">{['All solutions', 'Software', 'Hardware'].map((item) => <button key={item} className={`filter-tab ${filter === item ? 'filter-active' : ''}`} onClick={() => setFilter(item)}>{item}<span>{String(item === 'All solutions' ? solutions.length : solutions.filter((solution) => solution.type === item).length).padStart(2, '0')}</span></button>)}</div></div>
        <div className="solution-grid" aria-live="polite">{visibleSolutions.map((solution) => {
          const Icon = solution.icon
          return <article className={`solution-card ${solution.color}`} key={solution.name}><div className="solution-card-top"><span className="solution-type">{solution.metric}</span><button className="solution-open icon-button" aria-label={`Ask about ${solution.name}`} onClick={openInquiry}><ArrowUpRight size={17} /></button></div><div className="solution-illustration"><div className="solution-orbit orbit-one" /><div className="solution-orbit orbit-two" /><div className="solution-product-icon"><Icon size={34} strokeWidth={1.45} /></div><div className="solution-glow" /></div><div className="solution-copy"><div><h3>{solution.name}</h3><span className="solution-category">{solution.category}</span></div><p>{solution.description}</p></div></article>
        })}</div>
        <div className="catalog-foot"><span>NOT SURE WHERE TO START?</span><button className="text-link" onClick={openInquiry}>Let’s figure it out together <ArrowRight size={16} /></button></div>
      </section>

      <section className="approach-section" id="approach"><div className="approach-left"><p className="eyebrow"><span className="live-dot" /> THE NORTHSTAR DIFFERENCE</p><h2>A little less<br />juggling.<br /><span className="serif-accent">A lot more</span><br /><span className="serif-accent">forward.</span></h2><div className="approach-index">A DIFFERENT KIND<br />OF TECHNOLOGY PARTNER.</div></div><div className="approach-right"><div className="feature-tabs" role="tablist" aria-label="Why Northstar">{features.map((feature, index) => <button id={`tab-${index}`} key={feature.label} role="tab" aria-selected={activeFeature === index} aria-controls="feature-panel" className={`feature-tab ${activeFeature === index ? 'feature-tab-active' : ''}`} onClick={() => setActiveFeature(index)}><span>0{index + 1}</span>{feature.label}<ArrowUpRight size={15} /></button>)}</div><div className="feature-panel" role="tabpanel" id="feature-panel" aria-labelledby={`tab-${activeFeature}`} key={activeFeature}><span className="feature-eyebrow">{active.eyebrow}</span><h3>{active.title}</h3><p>{active.text}</p><span className="feature-stat">{active.stat}</span></div><div className="approach-foot"><span>BUILT FOR THE LONG VIEW.</span><ShieldCheck size={17} /><span>DESIGNED FOR YOUR WORLD.</span></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-main"><div><p className="eyebrow">THERE’S A BETTER WAY THROUGH.</p><h2>Let’s find<br />your <span className="serif-accent">northstar.</span></h2></div><button className="contact-circle" onClick={openInquiry} aria-label="Start a conversation"><ArrowUpRight size={27} /><span>START A<br />CONVERSATION</span></button></div><div className="contact-bottom"><span>GOOD TECHNOLOGY STARTS WITH A GOOD CONVERSATION.</span><button onClick={openInquiry}>TELL US WHAT YOU’RE WORKING ON <ArrowRight size={14} /></button></div></section>

      <footer className="footer"><a href="#top" className="brand"><span className="brand-mark">n<span>.</span></span><span className="brand-name">northstar<span>systems</span></span></a><span className="footer-copy">Technology, in its element. <span>© 2025 Northstar Systems</span></span><div className="footer-links"><a href="#solutions">Solutions</a><a href="#industries">Industries</a><button onClick={openInquiry}>Contact</button><a href="#top" aria-label="Back to top"><ArrowUpRight size={15} /></a></div></footer>

      {modalOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false) }}><section className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close icon-button" onClick={() => setModalOpen(false)} aria-label="Close inquiry form"><X size={20} /></button>{submitted ? <div className="form-success"><div className="success-icon"><Check size={24} /></div><p className="eyebrow">MESSAGE RECEIVED</p><h2>We’ll take it<br /><span className="serif-accent">from here.</span></h2><p>Someone from our team will be in touch shortly. Good things start with a conversation.</p><button className="button-primary" onClick={() => setModalOpen(false)}>Back to exploring <ArrowRight size={16} /></button></div> : <><p className="eyebrow">A GOOD PLACE TO START.</p><h2 id="modal-title">Tell us what<br />you’re <span className="serif-accent">building.</span></h2><p className="modal-intro">A little context goes a long way. We’ll get the right person in the room.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Alex Morgan" /></label><label>Work email<input name="email" type="email" autoComplete="email" required placeholder="alex@company.com" /></label></div><label>I'm exploring<select name="interest" defaultValue=""><option value="" disabled>Select a solution area</option><option>Education technology</option><option>Automotive systems</option><option>Healthcare technology</option><option>Financial services</option><option>Something else</option></select></label><label>A little more about it<textarea name="message" rows="3" placeholder="What would you like to make simpler?" /></label><button type="submit" className="button-primary form-submit">Send your note <ArrowRight size={16} /></button><p className="form-privacy"><ShieldCheck size={13} /> Your details stay between us. Always.</p></form></>}</section></div>}
    </main>
  )
}

export default App