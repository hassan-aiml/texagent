const steps = [
  {
    num: '01',
    title: 'Client books online',
    desc: 'They pick a service and time from your mobile-first booking form. No phone calls, no back-and-forth.',
  },
  {
    num: '02',
    title: 'Instant confirmation',
    desc: 'A personalized confirmation goes out by SMS and email — written by AI based on exactly what they booked.',
  },
  {
    num: '03',
    title: 'Smart reminder',
    desc: 'An automated reminder fires before the appointment. Fewer no-shows, nothing on your plate.',
  },
  {
    num: '04',
    title: 'Post-service follow-up',
    desc: 'A personalized thank-you message goes out after the appointment — the step most owners never get to.',
  },
  {
    num: '05',
    title: 'Reactivation',
    desc: 'If a client goes quiet for 30 days, a reactivation message pulls them back. Automatically.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <span className="section-tag">How it works</span>
      <h2 className="section-title">Five things that run automatically — forever.</h2>
      <p className="section-sub">
        Once we configure your system, it works without you. Every booking,
        every reminder, every follow-up.
      </p>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.num} className="step">
            <div className="step-num">{step.num}</div>
            <div className="step-body">
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
