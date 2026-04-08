const verticals = [
  { label: 'Facial Spas', active: true },
  { label: 'Hair & Nail Salons', active: true },
  { label: 'HVAC', active: false },
  { label: 'Electrical', active: false },
  { label: 'Plumbing', active: false },
  { label: 'Pet Grooming', active: false },
]

export default function WhoWeServe() {
  return (
    <section className="serve-section" id="serve">
      <span className="section-tag">Who we serve</span>
      <h2 className="section-title">
        Built for any business that runs on appointments.
      </h2>
      <p className="section-sub">
        Currently focused on spas and salons — expanding to every service
        vertical that loses revenue to missed follow-ups.
      </p>
      <div className="verticals">
        {verticals.map((v) => (
          <span
            key={v.label}
            className={`vertical-pill${v.active ? ' active' : ''}`}
          >
            {v.label}
          </span>
        ))}
      </div>
      <div className="serve-card">
        <p>
          "If your business runs on appointments and your customers expect fast,
          responsive communication — TexAgent works for you. The same system that
          reactivates a spa client reactivates a homeowner who hasn't called their
          electrician in two years."
        </p>
      </div>
    </section>
  )
}
