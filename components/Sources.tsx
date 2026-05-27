interface SourceItem {
  label: string;
  href: string;
}

interface SourcesProps {
  items: SourceItem[];
}

export function Sources({ items }: SourcesProps) {
  return (
    <section className="sources-panel" aria-labelledby="sources-heading">
      <div className="sources-panel__header">
        <div className="sources-panel__eyebrow">Sources</div>
        <h3 id="sources-heading">References used for this page</h3>
        <p>
          Official support, warranty, and service pages should remain the
          primary factual source. This section makes that sourcing visible.
        </p>
      </div>

      <div className="sources-panel__list">
        {items.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
