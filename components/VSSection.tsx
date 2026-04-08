const themItems = [
  "You set it up yourself — or pay a developer",
  "Generic message templates for every business",
  "AI chat answers stock questions, not yours",
  "Support ticket system — wait days for help",
  "No reactivation — lost clients stay lost",
  "Pay for features built for chains, not solo operators",
]

const usItems = [
  "We configure and maintain everything — you go live in 15 minutes",
  "AI writes each message based on the client's actual service",
  "AI chat trained on your services, pricing, and FAQs",
  "Direct access to the person who built and runs your system",
  "Reactivation fires automatically — brings quiet clients back",
  "Priced for independent operators, not enterprise chains",
]

export default function VSSection() {
  return (
    <section className="vs-section">
      <span className="section-tag">Why not Fresha or Square?</span>
      <h2 className="section-title">
        Off-the-shelf tools are built for everyone. This is built for you.
      </h2>
      <p className="section-sub">
        Generic software gives you features to figure out. We give you a running
        system.
      </p>
      <div className="vs-grid">
        <div className="vs-col them">
          <div className="vs-label them-label">Fresha / Square / GlossGenius</div>
          {themItems.map((item, i) => (
            <div key={i} className="vs-item bad">
              <span className="vs-dot bad">✗</span>
              {item}
            </div>
          ))}
        </div>
        <div className="vs-col us">
          <div className="vs-label us-label">TexAgent</div>
          {usItems.map((item, i) => (
            <div key={i} className="vs-item good">
              <span className="vs-dot good">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
