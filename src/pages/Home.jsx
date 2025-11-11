import React, { useEffect } from "react";
import "./Home.css";
// import Logo from "../assets/logo2.png";
import bgvideo from "../assets/bg_video.mp4"
export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.18 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="home-root">
    <section className="hero reveal">
  <div className="hero-bg" aria-hidden>
    <video
      src={bgvideo}
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
    ></video>
  </div>

  <div className="hero-card">
    <h1 className="hero-title"><span className="durvasha"> Durvasha </span>Prakrutik</h1>
    <p className="hero-sub">
      Premium sustainable farming solutions — rooted in tradition, grown with science.
    </p>

    <div className="hero-actions">
      <a className="btn primary" href="/about">Learn More</a>
      <a className="btn ghost" href="/contact">Contact Us</a>
    </div>

    {/* <div className="hero-watermark" aria-hidden /> */}
  </div>
</section>


      <section className="section features reveal delay">
        <div className="wrap">
          <h2>Our Services</h2>
          <p className="lead">Holistic services that cover regenerative farming, eco-products and farmer training.</p>

          <div className="cards">
            <article className="card">
              <div className="card-top" />
              <h3>Organic Supply</h3>
              <p>Traceable, certified products from local farms.</p>
            </article>

            <article className="card">
              <div className="card-top" />
              <h3>Field Advisory</h3>
              <p>Practical on-field training and tech recommendations.</p>
            </article>

            <article className="card">
              <div className="card-top" />
              <h3>Smart Systems</h3>
              <p>Water-efficient irrigation & simple sensor tools.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section cta reveal delay-2">
        <div className="wrap narrow">
          <h2>Partner with Durvasha</h2>
          <p className="lead">Join our mission to revive soils, support farmers, and build sustainable markets.</p>
          <a className="btn primary" href="/contact">Start Partnership</a>
        </div>
      </section>
    </main>
  );
}
