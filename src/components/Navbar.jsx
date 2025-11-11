import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo2.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Services", "Blog", "Contact"];

  return (
    <header className={`ag-nav ${scrolled ? "scrolled" : ""}`}>
      <nav className="ag-inner">
        <Link to="/" className="ag-brand" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Durvasha Prakrutik" className="ag-logo" />
          <span className="ag-title">Durvasha Prakrutik</span>
        </Link>

        <button
          className={`ag-burger ${open ? "open" : ""}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`ag-links ${open ? "open" : ""}`}>
          {links.map((n) => {
            const p = n === "Home" ? "/" : `/${n.toLowerCase()}`;
            return (
              <li key={n}>
                <Link
                  to={p}
                  className={loc.pathname === p ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {n}
                  <i aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
