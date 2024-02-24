import React, { useState } from 'react';
import SubNav from './SubNav';
import ImageGallery from './ImageGallery';

const GalleryParent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNavClick = (category) => {
    setSelectedCategory(category);
  };

  return <div>
      <SubNav onNavClick={handleNavClick} />
      <section className="image-section">
        <ImageGallery selectedCategory={selectedCategory} />
      </section>
    </div>
};

export default GalleryParent;