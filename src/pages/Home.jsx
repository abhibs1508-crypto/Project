import React, { useEffect } from "react";
import Footer from "../components/Footer";
import heroVideo from "../assets/bg_video.mp4";
import aboutImg from "../assets/about.jpg";
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import farmerImg from "../assets/farmer.jpg";

// Flowing slider images
import c1 from "../assets/gallery/cultivation/c1.jpeg";
import c2 from "../assets/gallery/cultivation/c2.jpeg";
import c3 from "../assets/gallery/cultivation/c3.jpeg";
import c4 from "../assets/gallery/cultivation/c4.jpeg";

import "./Home.css";

export default function Home() {
  // Scroll reveal effect
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        }),
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="hero reveal">
        <video className="hero-video" autoPlay muted loop src={heroVideo}></video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Durvasha Prakrutik</h1>
          <p>Organic farming solutions for sustainable growth and healthy soil.</p>
          <div className="hero-buttons">
            <a href="/about" className="btn primary">Learn More</a>
            <a href="/contact" className="btn ghost">Contact Us</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about reveal">
        <div className="about-container">
          <div className="about-img-wrapper">
            <img src={aboutImg} alt="About" className="about-img" />
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>We help farmers transition to organic farming, improving soil health and crop yield naturally.</p>
            <ul>
              <li>Organic Fertilizers</li>
              <li>Soil Improvement</li>
              <li>Sustainable Farming Practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services reveal">
        <h2>Our Services</h2>
        <p className="section-desc">Providing the best solutions for organic farming and sustainable agriculture.</p>
        <div className="service-cards">
          <div className="card">
            <img src={service1} alt="Service 1" />
            <h3>Organic Fertilizers</h3>
            <p>High-quality natural fertilizers for healthy crops and soil.</p>
          </div>
          <div className="card">
            <img src={service2} alt="Service 2" />
            <h3>Soil Enrichment</h3>
            <p>Enhancing soil fertility using eco-friendly techniques.</p>
          </div>
          <div className="card">
            <img src={service3} alt="Service 3" />
            <h3>Farm Consultation</h3>
            <p>Expert advice to improve yield and reduce chemical dependency.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial reveal">
        <h2>What <span className="highlight">Farmers Say</span></h2>
        <div className="testimonial-card">
          <img src={farmerImg} alt="Farmer" />
          <blockquote>
            “Durvasha Prakrutik helped me adopt organic farming and improve my soil health. My yield and profits have grown naturally!”
          </blockquote>
          <p className="farmer-name">Ramesh Patel</p>
        </div>
      </section>

      {/* Flowing Image Slider Section */}
      <section className="flow-gallery reveal">
        <h2>Our Farm Highlights</h2>
        <div className="flow-container">
          <div className="flow-track">
            {[c1, c2, c3, c4, c1, c2, c3, c4, c1, c2, c3, c4].map((img, index) => (
              <img src={img} alt={`Farm ${index + 1}`} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
