"use client";

import { useEffect, useState } from "react";
import "../styles/theme-toggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "etra-universe-theme"
    );

    const preferredTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    document.documentElement.setAttribute(
      "data-theme",
      preferredTheme
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(preferredTheme);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme =
      theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );

    localStorage.setItem(
      "etra-universe-theme",
      nextTheme
    );
  };

  if (!mounted) {
    return (
      <div className="theme-toggle-placeholder" />
    );
  }

  /*
    IMPORTANT:
    Button shows the mode the user can switch TO.

    Dark page  -> ☀️ Light
    Light page -> 🌙 Dark
  */

  const nextTheme =
    theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span
        className="theme-toggle-icon"
        aria-hidden="true"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </span>

      <span className="theme-toggle-label">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}