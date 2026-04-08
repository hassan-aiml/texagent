import Link from 'next/link'

const CAL_LINK = 'https://cal.com/your-link' // TODO: replace with your Cal.com link

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="#" className="nav-logo">
        <span className="wordmark-tex">Tex</span>
        <span className="wordmark-agent">Agent</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="#how">How it works</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li>
          <a href={CAL_LINK} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a demo
          </a>
        </li>
      </ul>
    </nav>
  )
}
