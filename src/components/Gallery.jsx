import React, { useEffect, useState } from "react";
import "./Gallery.css";

const categories = [
  {
    name: "Cultivation",
    images: [
      { src: "c1.jpeg", caption: "Preparing soil and land" },
      { src: "c2.jpeg", caption: "Planting banana saplings" },
      { src: "c3.jpeg", caption: "Drip irrigation setup" },
      { src: "c4.jpeg", caption: "Organic compost and mulching" },
      { src: "c5.jpeg", caption: "Harvesting banana bunches" },
      { src: "c6.jpeg", caption: "Loading harvested bananas" },
    ],
  },
  {
    name: "Varieties",
    images: [
      { src: "v1.jpeg", caption: "Grand Naine (G9) variety" },
      { src: "v2.jpeg", caption: "Robusta banana" },
      { src: "v3.jpeg", caption: "Red banana" },
      { src: "v4.jpeg", caption: "Nendran (Plantain)" },
      { src: "v5.jpeg", caption: "Rasthali banana" },
      { src: "v6.jpeg", caption: "Variety comparison" },
    ],
  },
  {
    name: "Organic Farming",
    images: [
      { src: "o1.jpeg", caption: "Applying vermicompost" },
      { src: "o2.jpeg", caption: "Neem oil spraying" },
      { src: "o3.jpeg", caption: "Compost pit preparation" },
      { src: "o4.jpeg", caption: "Organic fertilizer mixing" },
      { src: "o5.jpeg", caption: "Organic certification" },
      { src: "o6.jpeg", caption: "Intercropping practice" },
    ],
  },
  {
    name: "Farmers",
    images: [
      { src: "f1.jpeg", caption: "Farmer in banana field" },
      { src: "f2.jpeg", caption: "Women farmers planting" },
      { src: "f3.jpeg", caption: "Inspecting banana bunches" },
      { src: "f4.jpeg", caption: "Farmers training session" },
      { src: "f5.jpeg", caption: "Loading bananas for sale" },
      { src: "f6.jpeg", caption: "Smart farming technology" },
    ],
  },
  {
    name: "Products",
    images: [
      { src: "p1.jpeg", caption: "Fresh bananas packed" },
      { src: "p2.jpeg", caption: "Banana chips making" },
      { src: "p3.jpeg", caption: "Banana fiber crafts" },
      { src: "p4.jpeg", caption: "Banana leaf plates" },
      { src: "p5.jpeg", caption: "Banana puree and wine" },
      { src: "p6.jpeg", caption: "Export packaging" },
    ],
  },
  {
    name: "Infrastructure",
    images: [
      { src: "i1.jpeg", caption: "Drip irrigation system" },
      { src: "i2.jpeg", caption: "Nursery with shade net" },
      { src: "i3.jpeg", caption: "Organic fertilizer tanks" },
      { src: "i4.jpeg", caption: "Cold storage facility" },
      { src: "i5.jpeg", caption: "Farm machinery" },
      { src: "i6.jpeg", caption: "Solar energy setup" },
    ],
  },
  {
    name: "Research",
    images: [
      { src: "r1.jpeg", caption: "Tissue culture lab" },
      { src: "r2.jpeg", caption: "Soil and leaf testing" },
      { src: "r3.jpeg", caption: "Banana growth data" },
      { src: "r4.jpeg", caption: "Drone monitoring" },
      { src: "r5.jpeg", caption: "Field trials" },
      { src: "r6.jpeg", caption: "IoT sensors on farm" },
    ],
  },
  {
    name: "Landscape",
    images: [
      { src: "l1.jpeg", caption: "Sunrise over banana field" },
      { src: "l2.jpeg", caption: "Aerial banana plantation" },
      { src: "l3.jpeg", caption: "Monsoon season field" },
      { src: "l4.jpeg", caption: "Rural path through farms" },
      { src: "l5.jpeg", caption: "Farmers walking rows" },
      { src: "l6.jpeg", caption: "Scenic green landscape" },
    ],
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    category: null,
    index: 0,
  });

  // Scroll reveal animation
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const openLightbox = (categoryIndex, imageIndex) => {
    setLightbox({ isOpen: true, category: categoryIndex, index: imageIndex });
  };

  const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });

  const showPrev = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        prev.index === 0
          ? categories[prev.category].images.length - 1
          : prev.index - 1,
    }));
  };

  const showNext = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        prev.index === categories[prev.category].images.length - 1
          ? 0
          : prev.index + 1,
    }));
  };

  return (
    <section className="gallery reveal">
      <h2>
        Banana <span className="highlight">Gallery</span>
      </h2>

      {categories.map((cat, i) => (
        <div key={i} className="gallery-category">
          <h3>{cat.name}</h3>
          <div className="gallery-grid">
            {cat.images.map((img, j) => (
              <div
                key={j}
                className="gallery-item"
                onClick={() => openLightbox(i, j)}
              >
                <img
                  src={`/assets/gallery/${img.src}`}
                  alt={img.caption}
                  loading="lazy"
                />
                <div className="overlay">
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {lightbox.isOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>
            ✕
          </button>
          <button className="nav-btn prev" onClick={showPrev}>
            ⟨
          </button>
          <img
            src={`/assets/gallery/${categories[lightbox.category].images[lightbox.index].src}`}
            alt="lightbox"
            className="lightbox-img"
          />
          <button className="nav-btn next" onClick={showNext}>
            ⟩
          </button>
          <p className="caption">
            {categories[lightbox.category].images[lightbox.index].caption}
          </p>
        </div>
      )}
    </section>
  );
}
