import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://after-warranty.com"),
  title: {
    default: "After-Warranty.com | Independent post-warranty consumer reference",
    template: "%s | After-Warranty.com",
  },
  description:
    "Independent post-warranty guidance covering repair options, cost ranges, and brand-specific support pathways for consumer products.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "After-Warranty.com",
    url: "https://after-warranty.com",
    description:
      "Independent consumer-reference website for post-warranty repair, cost, and support questions.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <header className="site-header">
          <div className="container site-header__inner">
            <div className="brandmark">
              <Link href="/" className="brandmark__link">
                <span className="brandmark__badge">A</span>
                <span className="brandmark__text">
                  <span className="brandmark__eyebrow">
                    Independent Consumer Reference
                  </span>
                  <span className="brandmark__name">After-Warranty.com</span>
                </span>
              </Link>
            </div>

            <nav className="site-nav" aria-label="Primary">
              <Link href="/dyson">Dyson</Link>
              <Link href="/shark">Shark</Link>
              <Link href="/miele">Miele</Link>
              <Link href="/samsung">Samsung</Link>
              <Link href="/lg">LG</Link>
              <Link href="/bosch">Bosch</Link>
              <Link href="/about">About</Link>
              <Link href="/how-this-site-works">How it works</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </nav>
          </div>
        </header>

        <main className="site-main">
          <div className="container page-shell">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="container site-footer__inner">
            <div className="site-footer__copy">
              <div className="site-footer__title">After-Warranty.com</div>
              <p>
                Independent post-warranty consumer reference for repair
                pathways, cost expectations, and support context after purchase.
              </p>
              <div className="footer-links">
                <Link href="/about">About</Link>
                <Link href="/how-this-site-works">How this site works</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/disclaimer">Disclaimer</Link>
              </div>
            </div>

            <div className="site-footer__note">
              <div className="site-footer__title">Trust note</div>
              <p>
                Not affiliated with manufacturers. Official sources are cited
                where relevant, but support terms, service options, and repair
                costs can still change by model and region.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
