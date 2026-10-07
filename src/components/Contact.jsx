import { profile } from "../data";
export default function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <h2>Let's work together</h2>
        <p>Have a project or role in mind? Send me an email.</p>
        <dl>
          <dt>Location</dt>
          <dd>{profile.location}</dd>
        </dl>
        <a className="btn main" href={`mailto:${profile.email}`}>
          Email {profile.email}
        </a>
        <div className="links">
          {profile.links.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
