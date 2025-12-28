import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://after-warranty.com"),
  title: "After-Warranty.com",
  description:
    "Independent, neutral reference on out-of-warranty options and trade-offs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1>After-Warranty.com</h1>
            <nav>
              <a href="/">Home</a>
              <a href="/dyson">Dyson</a>
              <a href="/about">About</a>
              <a href="/disclaimer">Disclaimer</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>Independent reference. Not affiliated with any manufacturer.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
