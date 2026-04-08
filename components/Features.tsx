export default function Features() {
  return (
    <section className="features" id="features">
      <span className="section-tag">What's included</span>
      <h2 className="section-title">
        Not just a booking tool. A complete client communication system.
      </h2>
      <p className="section-sub">
        Every plan includes AI chat, full setup, and a real person managing your
        system.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <div className="feature-title">Smart booking forms</div>
          <div className="feature-desc">
            Mobile-first, real-time availability, built around your services and
            staff. We configure it — you don't touch code.
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✉️</div>
          <div className="feature-title">AI-written messages</div>
          <div className="feature-desc">
            Confirmations, reminders, follow-ups, and reactivation — all written
            by AI based on the client's specific service. Not templates.
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <div className="feature-title">AI chat — on every plan</div>
          <div className="feature-desc">
            A 24/7 chat assistant trained on your services, pricing, and FAQs.
            Answers questions and captures leads while you sleep.
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <div className="feature-title">Booking dashboard</div>
          <div className="feature-desc">
            Real-time view of all bookings, no-show tracking, and staff
            scheduling. Included on every plan.
          </div>
        </div>
        <div className="feature-card wide">
          <div>
            <div className="feature-icon">🔁</div>
            <div className="feature-title">We handle all changes</div>
            <div className="feature-desc">
              New service? Staff change? Pricing update? Message us and we update
              your system. No tickets, no waiting. You get a real person who knows
              your setup — not a support queue.
            </div>
          </div>
          <div className="key-quote-box">
            <div className="key-quote-label">The difference</div>
            <div className="key-quote-text">
              "Fresha gives you a calendar. TexAgent gives you a system that works
              like an <em>employee.</em>"
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
