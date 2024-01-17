import React, { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

const basePath = import.meta.env.MODE === 'production' ? '/EjgilWestergaard/' : '/';

const ImageGallery = () => {
  const rawImages = {
    '001' : {'thumb': 'img/Skulpturer/thumbnails/001BølgenThumbnail.jpg', 'images': ['img/Skulpturer/001A.jpg', 'img/Skulpturer/001B.jpg', 'img/Skulpturer/001C.jpg', 'img/Skulpturer/001D.jpg', 'img/Skulpturer/001E.jpg'], 'name': 'Bølgen', 'info': 'Placeret i Vrist. Højde: 138 cm, bredde: 244 cm, dybde: 105 cm'},
    '002' : {'thumb': 'img/Skulpturer/thumbnails/002TukakMaskespilThumbnail.jpg', 'images': ['img/Skulpturer/002A.jpg', 'img/Skulpturer/002B.jpg', 'img/Skulpturer/002C.jpg', 'img/Skulpturer/002D.jpg', 'img/Skulpturer/002E.jpg'], 'name': 'Tukak Maskespil', 'info': 'Placeret ved Bispebjerg Hospital. Udført og opstillet 1988. Højde 160 cm, bredde: 140 cm, dybde: 106 cm'},
    '003' : {'thumb': 'img/Skulpturer/thumbnails/003BorgermusikkenThumbnail.jpg', 'images': ['img/Skulpturer/003A.jpg', 'img/Skulpturer/003B.jpg', 'img/Skulpturer/003C.jpg'], 'name': 'Borgermusikken', 'info': 'Placeret ved Skt. Annæ Gymnasium, Valby. Højde: 83 cm, Bredde: 87 cm, Dybde: 52 cm.'},
    '004' : {'thumb': 'img/Skulpturer/thumbnails/004Strengene brastThumbnail.jpg', 'images': ['img/Skulpturer/004A.jpg', 'img/Skulpturer/004B.jpg', 'img/Skulpturer/004C.jpg', 'img/Skulpturer/004D.jpg'], 'name': 'StrengeneBrast', 'info': 'Placering Lemvig Gymnasium. Størrelse: Højde: 105 cm, Bredde: 73 cm, Dybde: 95 cm.'},
    '005' : {'thumb': 'img/Skulpturer/thumbnails/005SommerfuglSkitseThumbnail.jpg', 'images': ['img/Skulpturer/005A.jpg', 'img/Skulpturer/005B.jpg', 'img/Skulpturer/005C.jpg'], 'name': 'Sommerfugl', 'info': 'Placering Lemvig Kirkegård.  Højde: 175 cm, bredde: 180 cm, dybde: 110 cm.'},
  };

  const images = Object.entries(rawImages).reduce((acc, [imgnum, data]) => {
    acc[imgnum] = data;
    acc[imgnum]['thumb'] = basePath + acc[imgnum]['thumb'];
    acc[imgnum]['images'] = data['images'].map(img => basePath + img);
    return acc;
  }, {});

  // Object.entries(images).forEach(([entry, data]) => {
  //   console.log("Entry:" + entry);
  //   console.log("Thumb:" + data["thumb"]);
  //   console.log("Images:" + data["images"]);
  //   console.log("Name:" + data["name"]);
  //   console.log("Info:" + data["info"]);
  // })

  const handleClick = (imageSet) => {
    const viewerImages = document.createElement('div');

    imageSet["images"].forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      viewerImages.appendChild(img);
    });

    const viewer = new Viewer(viewerImages, {
      hidden: () => {
        viewer.destroy();
      },
      title: () => imageSet["name"] + " - " + imageSet["info"],
      toolbar: {
        zoomIn: { show: 4,size: 'large', },
        zoomOut: { show: 4,size: 'large', },
        oneToOne: { show: 4,size: 'large', },
        reset: { show: 4,size: 'large', },
        prev: { show: 4,size: 'large', },
        play: { show: 4,size: 'large', },
        next: { show: 4,size: 'large', },
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
      {Object.entries(images).map(([imgnum, imgdata]) => (
        <img src={imgdata["thumb"]} className="thumbnail" onClick={() => handleClick(imgdata)} alt={`Thumbnail ${imgnum}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
