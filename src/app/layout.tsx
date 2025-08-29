import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'ARTB Seva Portal — One Website. All Services.',
  description: 'Registration ₹599 • Age 16–42 • AI KYC • Nationalised bank only • ANSP & ERP • Global Wallet.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <h1 className="h1">ARTB Seva Portal</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/wallet">Wallet</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer>© 2025 ARTB Contractors Pvt. Ltd. • One website. All services.</footer>
        </div>
      </body>
    </html>
  )
}
