import React, { useEffect } from "react";
import "./Home.css";
// import Footer from "../components/Footer";
import heroVideo from "../assets/bg_video.mp4";
import aboutImg from "../assets/about.jpg";
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import farmerImg from "../assets/farmer.jpg";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-root">
      {/* 🌿 Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <h1>
            <span className="highlight">Durvasha Prakrutik</span>
            <br />
            Growing the Future Naturally
          </h1>
          <p>
            Empowering farmers and communities through sustainable agriculture
            and organic innovation.
          </p>
          <div className="hero-buttons">
            <a href="/about" className="btn primary">
              Explore More
            </a>
            <a href="/contact" className="btn ghost">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 🌾 About Section */}
      <section className="about reveal">
        <div className="about-container">
          <div className="about-img-wrapper">
            <img src={aboutImg} alt="About Durvasha" className="about-img" />
          </div>
          <div className="about-text">
            <h2>About <span className="highlight">Us</span></h2>
            <p>
              At Durvasha Prakrutik, we believe that nature holds the key to
              prosperity. Our mission is to bring innovation and tradition
              together — creating eco-friendly farming systems, educating
              farmers, and producing chemical-free food for every home.
            </p>
            <ul>
              <li>🌱 100% Organic & Natural Practices</li>
              <li>🌾 Farmer Training & Awareness</li>
              <li>💧 Smart Irrigation Systems</li>
              <li>🚜 Modern Agricultural Technologies</li>
            </ul>
            <a href="/about" className="btn secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* 🌿 Services Section */}
      <section className="services reveal">
        <h2>Our <span className="highlight">Services</span></h2>
        <p className="section-desc">
          We offer innovative and sustainable solutions to make agriculture
          smarter, efficient, and eco-friendly.
        </p>
        <div className="service-cards">
          <div className="card">
            <img src={service1} alt="Organic Farming" />
            <h3>Organic Farming</h3>
            <p>
              Helping farmers transition to sustainable, chemical-free farming
              methods that protect soil and health.
            </p>
          </div>
          <div className="card">
            <img src={service2} alt="Advisory Services" />
            <h3>Advisory Services</h3>
            <p>
              Our experts provide personalized field training and real-time
              farming assistance.
            </p>
          </div>
          <div className="card">
            <img src={service3} alt="Agri-Tech" />
            <h3>Agri-Tech Solutions</h3>
            <p>
              Integrating smart sensors and AI tools to improve water
              management and crop yields.
            </p>
          </div>
        </div>
      </section>

      {/* 🌻 Achievements Section */}
      <section className="achievements reveal">
        <div className="achieve-grid">
          <div className="achieve-item">
            <h3>1200+</h3>
            <p>Happy Farmers</p>
          </div>
          <div className="achieve-item">
            <h3>85+</h3>
            <p>Eco-Projects Completed</p>
          </div>
          <div className="achieve-item">
            <h3>15+</h3>
            <p>States Served</p>
          </div>
          <div className="achieve-item">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>

      {/* 🌻 Testimonial Section */}
      <section className="testimonial reveal">
        <h2>What <span className="highlight">Farmers Say</span></h2>
        <div className="testimonial-card">
          <img src={farmerImg} alt="Farmer" />
          <blockquote>
            “Durvasha Prakrutik helped me adopt organic farming and improve my
            soil health. My yield and profits have grown naturally!”
          </blockquote>
          <p className="farmer-name">— Ramesh Patel, Gujarat</p>
        </div>
      </section>

      {/* 🌱 CTA Section */}
      <section className="cta reveal">
        <h2>Join the Green Revolution</h2>
        <p>Partner with us to create a future that grows sustainably for all.</p>
        <a href="/contact" className="btn primary">Get in Touch</a>
      </section>

      
    </main>
  );
}
