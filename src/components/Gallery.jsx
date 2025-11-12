import React from 'react';
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  const items = [
    {
      id: 1,
      title: 'Banana Leaf Mulch',
      description: 'Eco-friendly mulch for soil retention and weed control.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', // Placeholder banana leaf image
    },
    {
      id: 2,
      title: 'Natural Pesticide Wraps',
      description: 'Banana leaves used to wrap produce and deter pests naturally.',
      image: 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400&h=300&fit=crop', // Another placeholder
    },
    {
      id: 3,
      title: 'Banana Leaf Fertilizer',
      description: 'Decomposed leaves as organic fertilizer for crops.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', // Placeholder
    },
    {
      id: 4,
      title: 'Agricultural Drug Extracts',
      description: 'Natural extracts from banana leaves for plant health.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', // Reused placeholder
    },
    // Add more items as needed
  ];

  return (
    <div className="gallery-container">
      <h1>Agricultural Drugs Made by Banana Leaves - Gallery</h1>
      <p>Explore our range of natural, banana leaf-based agricultural products.</p>
      <div className="gallery-grid">
        {items.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;