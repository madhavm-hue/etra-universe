import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
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

        {/* RIGHT SIDE LINKS */}
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