import Timeline from "./Timeline";
import { experience, background } from "../data";
export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <Timeline items={experience} />
      <h2 className="sub">Education & activities</h2>
      <Timeline items={background} />
    </section>
  );
}
