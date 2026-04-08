'use client'

import Link from 'next/link'
import { useState } from 'react'

const CAL_LINK = 'https://cal.com/your-link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link href="#" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="wordmark-tex">Tex</span>
          <span className="wordmark-agent">Agent</span>
        </Link>

        {/* Desktop links */}
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

        {/* Mobile right side */}
        <div className="nav-mobile-right">
          <a href={CAL_LINK} className="nav-cta nav-cta-mobile" target="_blank" rel="noopener noreferrer">
            Book a demo
          </a>
          <button
            className={`hamburger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? ' is-open' : ''}`}>
        <nav className="mobile-nav">
          <Link href="#how" className="mobile-nav-link" onClick={() => setOpen(false)}>
            <span className="mobile-nav-num">01</span>
            How it works
          </Link>
          <Link href="#features" className="mobile-nav-link" onClick={() => setOpen(false)}>
            <span className="mobile-nav-num">02</span>
            Features
          </Link>
          <Link href="#pricing" className="mobile-nav-link" onClick={() => setOpen(false)}>
            <span className="mobile-nav-num">03</span>
            Pricing
          </Link>
          <a
            href={CAL_LINK}
            className="mobile-nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Book a free 20-min demo →
          </a>
          <div className="mobile-nav-footer">
            <span>AI automation for local service businesses</span>
            <a href="mailto:hassan@texagent.co">hassan@texagent.co</a>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {open && <div className="drawer-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}
