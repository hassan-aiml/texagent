import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="#" className="footer-logo">
        <span className="wordmark-tex">Tex</span>
        <span className="wordmark-agent">Agent</span>
      </Link>
      <ul className="footer-links">
        <li><Link href="#how">How it works</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><a href="mailto:hassan@texagent.co">Contact</a></li>
        <li><Link href="#">Privacy</Link></li>
      </ul>
      <span className="footer-copy">© 2025 TexAgent. All rights reserved.</span>
    </footer>
  )
}
