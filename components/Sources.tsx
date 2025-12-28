export function Sources({ items }: { items: { label: string; href: string }[] }) {
  return (
    <section aria-label="Sources">
      <h3>Sources (official and recognized)</h3>
      <ul>
        {items.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
