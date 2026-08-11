import { FiArrowUpRight } from "react-icons/fi";
import "../styles/about.css";

const stats = [
  {
    value: "02",
    label: "Creative Divisions",
  },
  {
    value: "06+",
    label: "Core Capabilities",
  },
  {
    value: "01",
    label: "Shared Vision",
  },
];

export default function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-visual-bg" aria-hidden="true" />

          <div className="about-visual-content">
            <span className="about-visual-label">
  Welcome to ETRA World
</span>

            <h3>
  Dream.
  <span>Create. Inspire.</span>
</h3>
          </div>

          <div className="about-orbit about-orbit-one" aria-hidden="true" />
          <div className="about-orbit about-orbit-two" aria-hidden="true" />
        </div>

        <div className="about-content">
          <p className="section-label">
  About ETRA Dreams
</p>

        <h2 className="about-title">
  Turning
  <span>Dreams Into Reality.</span>
</h2>

          <div className="about-copy">
            <p>
    ETRA Dreams is a creative studio focused on transforming bold ideas into
    immersive digital experiences through design, storytelling and innovation.
  </p>


            <p>
    From visual effects and animation to gaming and interactive media, we
    create experiences that inspire audiences and shape the future of digital
    entertainment.
  </p>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="about-link">
         Let&apos;s Build Together
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}