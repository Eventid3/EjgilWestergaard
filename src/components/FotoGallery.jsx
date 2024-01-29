import React, { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

const basePath = import.meta.env.MODE === 'production' ? '/EjgilWestergaard/' : '/';

const FotoGallery = () => {
    const images = [
        "img/Foto af Ejgil/01FotoEjgil Westergaard.jpg",
        "img/Foto af Ejgil/02FotoEjgil Westergaard.jpg",
        "img/Foto af Ejgil/03FotoEjgil Westergaard.jpg",
        "img/Foto af Ejgil/04FotoEjgil Westergaard.jpg",
        "img/Foto af Ejgil/05FotoEjgil Westergaard.jpg",
        "img/Foto af Ejgil/06FotoEjgil Westergaard.jpg",
    ]

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
      toolbar: {
        zoomIn: { show: 1,size: 'large', },
        zoomOut: { show: 1,size: 'large', },
        oneToOne: { show: 1,size: 'large', },
        reset: { show: 1,size: 'large', },
        prev: { show: 1,size: 'large', },
        play: { show: 1,size: 'large', },
        next: { show: 1,size: 'large', },
        rotateLeft: 0,
        rotateRight: 0,
        flipHorizontal: 0,
        flipVertical: 0,
      },
    });

    viewer.show();
  };

  return (
    <div className="image-container">
      {Object.entries(images).map(([imgnum,url]) => (
        <div className='image-sub-container'>
        <img src={url} className="thumbnail" onClick={() => handleClick(images)} key={imgnum}/>
        {/* <div className='image-overlay'>{imgdata["name"]}</div> */}
        </div>
      ))}
    </div>
  );
};

export default FotoGallery;
