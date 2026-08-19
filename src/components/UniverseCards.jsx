import { FiArrowUpRight } from "react-icons/fi";
import "../styles/universe.css";

const worlds = [
  {
    id: "01",
    name: "ETRA VFX",
    category: "Film • Television • Visual Effects",
    description:
      "Crafting cinematic visual effects, rotoscopy, paint, prep and matchmove solutions for film and television productions.",
    link: "https://vfx.etradreams.com/",
    className: "dreams-card",
  },
  {
    id: "02",
    name: "ETRA GAMING & ANIMATIONS",
    category: "Games • Animation • Interactive Experiences",
    description:
      "Building immersive games, animation, CGI and interactive digital experiences that push imagination beyond limits.",
    link: "https://creative.etradreams.com/",
    className: "gaming-card",
  },
];

export default function UniverseCards() {
  return (
    <section className="universe-section section" id="universe">
      <div className="container">
        <div className="universe-heading">
          <div>
            <p className="section-label">Our Universe</p>
            <h2 className="section-title">Explore Our Creative Worlds</h2>
          </div>

          <p className="universe-intro">
            Discover ETRA VFX and ETRA Gaming & Animations, where creativity,
            technology and storytelling come together to build unforgettable
            digital experiences.
          </p>
        </div>

        <div className="world-grid">
          {worlds.map((world) => (
            <a
              key={world.name}
              href={world.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`world-card ${world.className}`}
              aria-label={`Visit ${world.name} website`}
            >
              <div className="world-card-bg" aria-hidden="true" />
              <div className="world-card-overlay" aria-hidden="true" />

              <div className="world-card-top">
                <span className="world-number">{world.id}</span>

                <FiArrowUpRight
                  className="world-arrow"
                  aria-hidden="true"
                />
              </div>

              <div className="world-card-content">
                <p className="world-category">{world.category}</p>

                <h3>{world.name}</h3>

                <p className="world-description">
                  {world.description}
                </p>

                <span className="world-link">
                  Explore {world.name}
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}