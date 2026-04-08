import Link from 'next/link'

const CAL_LINK = 'https://cal.com/your-link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-slab" />
      <div className="hero-slab-stripe" />
      <div className="hero-glow" />
      <div className="hero-dot" />
      <div className="hero-content">
        <div className="hero-tag">AI automation for local service businesses</div>
        <h1>
          Your business books,
          <br />
          <em>follows up,</em> and <em>reactivates</em>
          <br />
          while you work.
        </h1>
        <p className="hero-sub">
          We build and run a fully automated booking and customer communication
          system — configured for your spa, salon, or service business. You focus
          on the service. We handle the rest.
        </p>
        <div className="hero-actions">
          <a href={CAL_LINK} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Book a free demo
          </a>
          <Link href="#how" className="btn-ghost">
            See how it works →
          </Link>
        </div>
        <div className="hero-proof">
          <div className="proof-item">
            <span className="proof-number">Done-for-you</span>
            <span className="proof-label">We configure everything</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">15 min</span>
            <span className="proof-label">Your time to go live</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">Personalized</span>
            <span className="proof-label">Every message, AI assisted</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">No dev needed</span>
            <span className="proof-label">We handle all changes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
