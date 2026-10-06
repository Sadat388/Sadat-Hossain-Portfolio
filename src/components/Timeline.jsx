export default function Timeline({ items }) {
  return (
    <div className="tl">
      {items.map((t) => (
        <article key={t.title + t.when}>
          <time>{t.when}</time>
          <h3>{t.title}</h3>
          {t.sub && <h4>{t.sub}</h4>}
          {t.points && <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>}
        </article>
      ))}
    </div>
  )
}
