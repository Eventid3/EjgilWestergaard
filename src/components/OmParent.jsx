import React, { useState } from 'react';
import OmSubNav from './OmSubNav';
import OmContent from './OmContent';

const OmParent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNavClick = (category) => {
    setSelectedCategory(category);
  };

//   console.log("Selected cat from Parent ", category);
  return <div>
      <OmSubNav onNavClick={handleNavClick} />
      <section className="text-container">
        <OmContent selectedCategory={selectedCategory} />
      </section>
    </div>
};

export default OmParent;