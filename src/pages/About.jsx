import React, { useEffect } from "react";
import "./About.css";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.16 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="about-root">
      <section className="about-hero reveal">
        <div className="hero-decor" aria-hidden />
        <div className="hero-body">
          <h1>About Durvasha Prakrutik</h1>
          <p className="intro">We combine traditional farming wisdom with modern methods to create regenerative, profitable agriculture.</p>
        </div>
      </section>

      <section className="about-values reveal delay">
        <div className="wrap">
          <h2>Our Values</h2>
          <div className="values-grid">
            <article className="value-card">
              <h3>Regeneration</h3>
              <p>Restoring soil health through organic practices & crop diversity.</p>
            </article>

            <article className="value-card">
              <h3>Community</h3>
              <p>Farmer-first programs, fair prices and shared growth.</p>
            </article>

            <article className="value-card">
              <h3>Innovation</h3>
              <p>Practical tech that saves water, cost and builds resilience.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-story reveal delay-2">
        <div className="wrap narrow">
          <h2>Our Story</h2>
          <p>Founded to make farming profitable and sustainable. We started with a small farmer group and now support many communities through training, inputs and market connections.</p>
        </div>
      </section>
        <Footer/>
    </main>
   
  );
}
