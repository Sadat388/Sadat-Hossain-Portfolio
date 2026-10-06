import useScrollSpy from '../hooks/useScrollSpy'
import useTheme from '../hooks/useTheme'
const items = [['top', 'Home'], ['work', 'Work'], ['about', 'About'], ['experience', 'Experience'], ['contact', 'Contact']]
const ids = items.map((i) => i[0])
export default function Nav() {
  const active = useScrollSpy(ids)
  const toggleTheme = useTheme()
  return (
    <nav>
      <div className="pill">
        {items.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>
        ))}
        <button onClick={toggleTheme} aria-label="Toggle light or dark theme">◐</button>
      </div>
    </nav>
  )
}
