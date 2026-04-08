const cards = [
  {
    status: 'Live now',
    statusClass: 'status-live',
    cardClass: 'live',
    title: 'Booking Automation',
    desc: 'Full booking, confirmation, reminder, follow-up, and reactivation system.',
  },
  {
    status: 'Live now',
    statusClass: 'status-live',
    cardClass: 'live',
    title: 'AI Chat Assistant',
    desc: '24/7 chat trained on your services, pricing, and FAQs — on every plan.',
  },
  {
    status: 'Coming soon',
    statusClass: 'status-soon',
    cardClass: 'soon',
    title: 'Voice Customer Service',
    desc: 'AI phone agent that answers calls, books appointments, and handles FAQs.',
  },
  {
    status: 'Coming soon',
    statusClass: 'status-soon',
    cardClass: 'soon',
    title: 'Business Analytics',
    desc: 'No-show rates, reactivation performance, revenue per client, and more.',
  },
]

export default function Expansion() {
  return (
    <section className="expansion">
      <span className="section-tag">What's coming</span>
      <h2 className="section-title">This is just the beginning.</h2>
      <p className="section-sub">
        TexAgent is expanding beyond booking automation. Here's what's live and
        what's coming next.
      </p>
      <div className="expansion-grid">
        {cards.map((card) => (
          <div key={card.title} className={`expansion-card ${card.cardClass}`}>
            <span className={`expansion-status ${card.statusClass}`}>
              {card.status}
            </span>
            <div className="expansion-title">{card.title}</div>
            <div className="expansion-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
