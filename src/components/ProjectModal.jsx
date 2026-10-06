import { useEffect, useRef } from 'react'
const plain = { cursor: 'pointer', font: 'inherit', background: 'none', color: 'inherit' }
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const d = ref.current
    if (project && !d.open) d.showModal()
    if (!project && d.open) d.close()
  }, [project])
  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      {project && (
        <>
          <h3>{project.title}</h3>
          <p>{project.detail}</p>
          <dl>
            <dt>Category</dt><dd>{project.cat}</dd>
            <dt>Date</dt><dd>{project.date}</dd>
            <dt>Tools</dt><dd>{project.tools.join(', ')}</dd>
          </dl>
          <div className="cta">
            {project.link && <a className="btn main" href={project.link} target="_blank" rel="noreferrer">View live project</a>}
            <button className="btn" onClick={onClose} style={plain}>Close</button>
          </div>
        </>
      )}
    </dialog>
  )
}
