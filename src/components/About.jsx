import { profile, skills } from "../data";

// Turns [text](url) in a string into a link
function RichText({ text }) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? (
      <a
        key={i}
        href={m[2]}
        target="_blank"
        rel="noreferrer"
        style={{ color: "var(--accent)" }}
      >
        {m[1]}
      </a>
    ) : (
      part
    );
  });
}

export default function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="about">
        <div>
          {profile.about.map((p) => (
            <p key={p}>
              <RichText text={p} />
            </p>
          ))}
        </div>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <div className="tags big">
                {g.items.map((i) => (
                  <span key={i} className="tag">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
