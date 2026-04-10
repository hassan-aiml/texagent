const CAL_LINK = 'https://cal.com/hassan-hai-jegppt/30min'

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact">
      <span className="section-tag">Get started</span>
      <h2>
        Ready to stop losing clients
        <br />
        to <em>missed follow-ups?</em>
      </h2>
      <p>
        Book a free 20-minute demo. We'll show you the system live and tell you
        exactly what it would look like for your business.
      </p>
      <div className="final-actions">
        <a href={CAL_LINK} className="btn-white" target="_blank" rel="noopener noreferrer">
          Book a free demo
        </a>
        <a href="mailto:hassan@texagent.co" className="btn-outline-white">
          Send us a message
        </a>
      </div>
    </section>
  )
}
