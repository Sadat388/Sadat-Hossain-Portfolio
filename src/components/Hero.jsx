import { profile } from '../data'
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="status"><span className="dot" />{profile.status}</div>
      <h1>{profile.name[0]}<span>{profile.name[1]}</span></h1>
      <p>{profile.tagline}</p>
      <div className="cta">
        <a className="btn main" href="#work">See my work</a>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
    </section>
  )
}
