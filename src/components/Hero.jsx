import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background effect */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Bubble / orbit effects */}
      <div
        className="hero-orbit hero-orbit-one"
        aria-hidden="true"
      />

      <div
        className="hero-orbit hero-orbit-two"
        aria-hidden="true"
      />

      {/* Glow effects */}
      <div
        className="hero-glow hero-glow-one"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-two"
        aria-hidden="true"
      />

      <div className="container hero-inner">

        <div className="hero-content">
          <p className="hero-eyebrow">
            Welcome to ETRA World
          </p>

          <h1 className="hero-title">
            One World.
            <span>Infinite Creativity.</span>
          </h1>

          <p className="hero-description">
            From cinematic visual effects to immersive gaming experiences,
            we create, innovate and inspire across powerful creative worlds.
          </p>
        </div>

        <div className="hero-meta">
          <a
            href="https://vfx.etradreams.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETRA Dreams
          </a>

          <a
            href="https://etra-gaming.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETRA Gaming
          </a>
        </div>

      </div>
    </section>
  );
}