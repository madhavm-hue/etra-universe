import "../styles/contact.css";

export default function ContactCTA() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-card">

          {/* BACKGROUND GLOWS */}
          <div
            className="contact-glow contact-glow-one"
            aria-hidden="true"
          />

          <div
            className="contact-glow contact-glow-two"
            aria-hidden="true"
          />

          {/* CONTENT */}
          <div className="contact-content">
            <p className="section-label">
              Let&apos;s Connect
            </p>

            <h2 className="contact-title">
              Let&apos;s Build
              <span>Something Extraordinary.</span>
            </h2>

            <p className="contact-description">
              Whether you&apos;re looking for visual effects, gaming,
              animation or creative digital experiences, our team is ready
              to bring your ideas to life.
            </p>
          </div>

          {/* RIGHT SIDE LINKS */}
          <div className="contact-side">

            <a
              href="https://vfx.etradreams.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETRA VFX
            </a>

            <a
              href="https://etra-gaming.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETRA GAMING &amp; ANIMATIONS
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}