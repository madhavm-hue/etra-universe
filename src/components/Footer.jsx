"use client";

import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // URL-la #home irundha clean pannum
    if (window.history.replaceState) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        {/* =========================
            FOOTER TOP
        ========================= */}
        <div className="footer-top">
          <a
            href="#home"
            className="footer-brand"
            aria-label="ETRA Dreams home"
          >
            <Image
              src="/images/etra-dreams-logo.png"
              alt="ETRA Dreams"
              width={220}
              height={60}
              className="footer-logo"
            />
          </a>

          <p className="footer-intro">
            Creating unforgettable digital experiences through visual effects,
            gaming, animation and creative innovation.
          </p>
        </div>

        {/* =========================
            FOOTER LINKS
        ========================= */}
        <div className="footer-links-grid">

          {/* EXPLORE */}
          <div className="footer-column">
            <p className="footer-column-title">
              Explore
            </p>

            <a href="#home">
              Home
            </a>

            <a href="#universe">
              Our Universe
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>
          </div>

          {/* OUR WORLDS */}
          <div className="footer-column">
            <p className="footer-column-title">
              Our Worlds
            </p>

            <a
              href="https://vfx.etradreams.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETRA VFX
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a
              href="https://creative.etradreams.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETRA Gaming &amp; Animations
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          {/* CONNECT */}
          <div className="footer-column">
            <p className="footer-column-title">
              Connect
            </p>

            <a
              href="#"
              aria-label="ETRA Dreams LinkedIn"
            >
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a
              href="#"
              aria-label="ETRA Dreams Instagram"
            >
              Instagram
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* =========================
            FOOTER BOTTOM
        ========================= */}
        <div className="footer-bottom">
          <p>
            © {currentYear} ETRA Dreams. All Rights Reserved.
          </p>

          <a
            href="#"
            className="footer-back-top"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            Back to Top
            <span aria-hidden="true">
              ↑
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}