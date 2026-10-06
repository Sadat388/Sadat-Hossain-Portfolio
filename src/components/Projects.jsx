import { useState } from 'react'
import { projects, categories } from '../data'
import ProjectModal from './ProjectModal'
export default function Projects() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const list = projects.filter((p) => cat === 'All' || p.cat === cat)
  return (
    <section id="work">
      <h2>Selected work</h2>
      <div className="chips" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c} className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((p) => (
          <button key={p.title} className="card" onClick={() => setOpen(p)} aria-label={`Open ${p.title}`}>
            <div className="thumb" style={{ background: p.color }}>{p.title}</div>
            <div className="in">
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="tags">{p.tools.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          </button>
        ))}
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  )
}
