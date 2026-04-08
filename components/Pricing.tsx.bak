const CAL_LINK = 'https://cal.com/your-link' // TODO: replace with your Cal.com link

const plans = [
  {
    name: 'Solo',
    desc: 'Independents · 1–2 staff',
    price: '$99',
    period: 'per month',
    setup: '+ $300 one-time setup',
    earlyBird: 'Early-bird: $49/mo',
    features: [
      { text: 'We configure your booking form', included: true },
      { text: 'AI chat trained on your services', included: true },
      { text: 'SMS & email reminders', included: true },
      { text: 'Booking dashboard (1 seat)', included: true },
      { text: 'Up to 10 services · 2 staff', included: true },
      { text: 'Custom reminder templates', included: false },
      { text: 'Team seats', included: false },
    ],
    popular: false,
  },
  {
    name: 'Studio',
    desc: 'Small shops · 3–5 staff',
    price: '$199',
    period: 'per month',
    setup: '+ $600 one-time setup',
    earlyBird: 'Early-bird: $99/mo',
    features: [
      { text: 'Everything in Solo', included: true },
      { text: 'Up to 25 services · 5 staff', included: true },
      { text: '3 team seats on dashboard', included: true },
      { text: 'Custom reminder templates', included: true },
      { text: 'No-show tracking', included: true },
      { text: 'Priority email support', included: true },
      { text: 'White-label branding', included: false },
    ],
    popular: true,
  },
  {
    name: 'Growth',
    desc: 'Multi-service · 5–15 staff',
    price: '$349',
    period: 'per month',
    setup: '+ $1,200 one-time setup',
    earlyBird: 'Early-bird: $174/mo',
    features: [
      { text: 'Everything in Studio', included: true },
      { text: 'Unlimited services & staff', included: true },
      { text: '5 team seats on dashboard', included: true },
      { text: 'Advanced AI chat training', included: true },
      { text: 'We handle all ongoing changes', included: true },
      { text: 'Priority phone support', included: true },
      { text: 'White-label branding', included: true },
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <span className="section-tag">Pricing</span>
      <h2 className="section-title">
        Simple pricing. No hidden fees. We do the work.
      </h2>
      <p className="section-sub">
        Every plan includes full setup, AI chat, and a real person maintaining
        your system.
      </p>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card${plan.popular ? ' popular' : ''}`}
          >
            {plan.popular && <div className="popular-tag">Most popular</div>}
            <div className="plan-name">{plan.name}</div>
            <div className="plan-desc">{plan.desc}</div>
            <div className="plan-price">{plan.price}</div>
            <div className="plan-period">{plan.period}</div>
            <div className="plan-setup">{plan.setup}</div>
            <div className="early-bird-price">
              <strong>{plan.earlyBird}</strong> · setup waived · 6 months
            </div>
            <ul className="plan-features">
              {plan.features.map((f) => (
                <li key={f.text} className={f.included ? '' : 'no'}>
                  {f.text}
                </li>
              ))}
            </ul>
            <a
              href={CAL_LINK}
              className="plan-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </a>
          </div>
        ))}
      </div>
      <div className="pricing-footer">
        <p className="pricing-note">
          Setup includes: booking form configuration, AI chat training on your
          services and FAQs, reminder flow setup, and full testing before
          go-live. Average time on your end: 15 minutes.
        </p>
        <p className="pricing-note">
          Women & minority-owned businesses: ask about our additional discount
          when you book a demo.
        </p>
      </div>
    </section>
  )
}
