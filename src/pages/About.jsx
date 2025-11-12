import React, { useEffect } from "react";
import "./About.css";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";
import aboutImg3 from "../assets/about3.jpg";
import aboutImg4 from "../assets/about4.jpeg";
import aboutImg5 from "../assets/about5.jpeg";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="about-root">

      {/* 🌱 Hero Section */}
      <section className="about-hero reveal">
        <div className="about-hero-text">
          <h1>About <span className="highlight">Durvasha Prakrutik</span></h1>
          <p>
            At Durvasha Prakrutik, we empower farmers with sustainable solutions, 
            blending traditional wisdom with modern technology to nurture the land and communities.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={aboutImg1} alt="Sustainable Farming" />
        </div>
      </section>

      {/* 🌿 Vision, Mission, Values */}
      <section className="about-info reveal">
        <div className="about-cards">
          <div className="about-card">
            <img src={aboutImg2} alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              A sustainable agricultural ecosystem where farmers thrive, soil is healthy, and produce is chemical-free.
            </p>
          </div>
          <div className="about-card">
            <img src={aboutImg3} alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              Deliver eco-friendly solutions, innovative farming techniques, and hands-on farmer support.
            </p>
          </div>
          <div className="about-card">
            <img src={aboutImg4} alt="Values" />
            <h3>Our Values</h3>
            <p>
              Sustainability, innovation, transparency, and community empowerment guide our work.
            </p>
          </div>
        </div>
      </section>

      {/* 🌾 Our Approach */}
      <section className="about-approach reveal">
        <h2>Our Approach</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <img src={aboutImg5} alt="Eco Practices" />
            <h3>Eco Practices</h3>
            <p>Encouraging organic fertilizers, crop rotation, and natural pest management.</p>
          </div>
          <div className="approach-card">
            <img src={aboutImg2} alt="Farmer Training" />
            <h3>Farmer Training</h3>
            <p>Hands-on guidance to adopt modern technology while preserving traditional knowledge.</p>
          </div>
          <div className="approach-card">
            <img src={aboutImg3} alt="Sustainable Markets" />
            <h3>Sustainable Markets</h3>
            <p>Connecting farmers directly to eco-conscious consumers for fair trade and pricing.</p>
          </div>
        </div>
      </section>

      {/* 🌿 Sustainability Practices */}
      <section className="about-sustain reveal">
        <h2>Sustainability Practices</h2>
        <p>
          Our commitment to the environment includes water-efficient irrigation, soil conservation, and renewable energy use in farming operations.
        </p>
        <div className="sustain-grid">
          <div className="sustain-card">
            <h3>Water Management</h3>
            <p>Smart irrigation and rainwater harvesting reduce water consumption.</p>
          </div>
          <div className="sustain-card">
            <h3>Soil Health</h3>
            <p>Regular organic composting and crop rotation maintain fertile soil.</p>
          </div>
          <div className="sustain-card">
            <h3>Energy Efficiency</h3>
            <p>Solar-powered tools and renewable energy reduce carbon footprint.</p>
          </div>
        </div>
      </section>

      {/* 🌿 Call to Action */}
      <section className="about-cta reveal">
        <h2>Join the Green Revolution</h2>
        <p>
          Partner with Durvasha to adopt sustainable farming, empower farmers, and protect the planet.
        </p>
        <a href="/contact" className="btn primary">Contact Us</a>
      </section>
      <Footer/>
    </main>
  );
}
