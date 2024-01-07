import React, { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

const basePath = import.meta.env.MODE === 'production' ? '/EjgilWestergaard' : '';

const ImageGallery = () => {
  const rawImages = {
    '/img/Skulpturer/thumbnails/001BølgenThumbnail.jpg' : ['img/Skulpturer/001Bølgen.jpg', 'img/Skulpturer/001BølgenA.jpg', 'img/Skulpturer/001BølgenB.jpg', 'img/Skulpturer/001BølgenC.jpg', 'img/Skulpturer/001BølgenD.jpg'],
    '/img/Skulpturer/thumbnails/002TukakMaskespilThumbnail.jpg' : ['img/Skulpturer/002Tukak Maskespil.jpg', 'img/Skulpturer/002Tukak MaskespilA.jpg', 'img/Skulpturer/002Tukak MaskespilB.jpg', 'img/Skulpturer/002Tukak MaskespilC.jpg', 'img/Skulpturer/002Tukak MaskespilD.jpg'],
    '/img/Skulpturer/thumbnails/003BorgermusikkenThumbnail.jpg' : ['img/Skulpturer/003Borgermusikken.jpg', 'img/Skulpturer/003BorgermusikkenA.jpg', 'img/Skulpturer/003BorgermusikkenB.jpg'],
    '/img/Skulpturer/thumbnails/004Strengene brastThumbnail.jpg' : ['img/Skulpturer/004Strengene brast.jpg', 'img/Skulpturer/004Strengene brastA.jpg', 'img/Skulpturer/004Strengene brastB.jpg', 'img/Skulpturer/004Strengene brastC.jpg'],
    '/img/Skulpturer/thumbnails/005SommerfuglSkitseThumbnail.jpg' : ['img/Skulpturer/005Sommerfugl.jpg', 'img/Skulpturer/005SommerfuglA.jpg', 'img/Skulpturer/005SommerfuglSkitse.jpg'],
    '/img/Skulpturer/thumbnails/005SommerfuglThumbnail.jpg' : ['img/Skulpturer/005Sommerfugl.jpg', 'img/Skulpturer/005SommerfuglA.jpg', 'img/Skulpturer/005SommerfuglSkitse.jpg'],
  };

  const images = Object.entries(rawImages).reduce((acc, [thumbnail, imageSet]) => {
    acc[basePath + thumbnail] = imageSet.map(img => basePath + img);
    return acc;
  }, {});

  const handleClick = (imageSet) => {
    const viewerImages = document.createElement('div');

    imageSet.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      viewerImages.appendChild(img);
    });

    const viewer = new Viewer(viewerImages, {
      hidden: () => {
        viewer.destroy();
      },
    });

    viewer.show();
  };

  return (
    <div className="image-container">
      {Object.entries(images).map(([thumbnail, imageSet], index) => (
        <img src={thumbnail} className="thumbnail" onClick={() => handleClick(imageSet)} alt={`Thumbnail ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;