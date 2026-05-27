import Link from "next/link";
import { ReactNode } from "react";

interface QuickAnswerProps {
  title: string;
  children: ReactNode;
  bullets?: string[];
}

export function QuickAnswer({ title, children, bullets }: QuickAnswerProps) {
  return (
    <section className="surface-card">
      <h3>{title}</h3>
      <div>{children}</div>
      {bullets && bullets.length > 0 && (
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

interface ActionChecklistProps {
  title: string;
  items: string[];
}

export function ActionChecklist({ title, items }: ActionChecklistProps) {
  return (
    <section className="info-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

interface RelatedLink {
  href: string;
  label: string;
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
}

export function RelatedLinks({ title, links }: RelatedLinksProps) {
  return (
    <section className="info-section">
      <h3>{title}</h3>
      <div className="topic-list">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
