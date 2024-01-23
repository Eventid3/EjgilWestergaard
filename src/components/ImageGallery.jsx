import React, { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

const basePath = import.meta.env.MODE === 'production' ? '/EjgilWestergaard/' : '/';

const ImageGallery = () => {
  const rawImages = {
    '001' : {'thumb': 'img/Skulpturer/thumbnails/001MusikstenThumbnail.jpg', 'images': ['img/Skulpturer/001AMusiksten.jpg', 'img/Skulpturer/001BMusiksten.jpg', 'img/Skulpturer/001CMusiksten.jpg', 'img/Skulpturer/001DMusiksten.jpg'], 'name': 'Musiksten', 'info': 'Placeret ved Enghøjskolen, Avedøre. Størrelse: Højde 109 cm, Bredde 125 cm, Dybde 59 cm'},
    '002' : {'thumb': 'img/Skulpturer/thumbnails/002NæbogKlørThumbnail.jpg', 'images': ['img/Skulpturer/002ANæbogKlør.JPG', 'img/Skulpturer/002BNæbogKlør.JPG', 'img/Skulpturer/002CNæbogKlør.JPG', 'img/Skulpturer/002DNæbogklør.JPG'], 'name': 'Næb og Klør', 'info': 'Opstillet 2004 ved Selsmose i Taastrup – på vestsiden af søen. Størrelse: Højde 138 cm, Bredde 165 cm, Dybde 52 cm'},
    '003' : {'thumb': 'img/Skulpturer/thumbnails/003TrækspilThumbnail.jpg', 'images': ['img/Skulpturer/003ATrækspil.jpg', 'img/Skulpturer/003BTrækspil.jpg', 'img/Skulpturer/003CTrækspil.jpg'], 'name': 'Trækspil', 'info': 'Opstillet i Atriumgården på Sengeløse Plejehjem. 2007. Størrelse: Højde 33 cm, Bredde 54 cm, Dybde 30 cm'},
    '004' : {'thumb': 'img/Skulpturer/thumbnails/004UrokseThumbnail.jpg', 'images': ['img/Skulpturer/004AUrokse.jpg', 'img/Skulpturer/004BUrokse.jpg', 'img/Skulpturer/004CUrokse.jpg'], 'name': 'Urokse', 'info': 'Opstillet i en børnehave ved Søhusskolen , Odense. Størrelse: Højde 77 cm, Bredde 140 cm, Dybde 110 cm'},
    '005' : {'thumb': 'img/Skulpturer/thumbnails/005SkrubtudseThumbnail.jpg', 'images': ['img/Skulpturer/005ASkrubtudse.jpg', 'img/Skulpturer/005BSkrubtudse.jpg', 'img/Skulpturer/005CSkrubtudse.jpg', 'img/Skulpturer/005DSkrubtudse.jpg', 'img/Skulpturer/005ESkrubtudse.jpg'], 'name': 'Skrubtudse', 'info': 'Opstillet i Vintapperstræde i Odense. Højde 106 cm, Bredde 160 cm, Dybde 150 cm'},
    '006' : {'thumb': 'img/Skulpturer/thumbnails/006BølgenThumbnail.jpg', 'images': ['img/Skulpturer/006ABølgen.jpg', 'img/Skulpturer/006BBølgen.jpg', 'img/Skulpturer/006CBølgen.jpg', 'img/Skulpturer/006DBølgen.jpg', 'img/Skulpturer/006EBølgen.jpg', 'img/Skulpturer/006FBølgen.jpg'], 'name': 'Bølgen', 'info': 'Opstillet i Vrist, Harboeøre. Højde 138 cm, Bredde 244 cm, Dybde105 cm'},
    '007' : {'thumb': 'img/Skulpturer/thumbnails/007OmsorgThumbnail.jpg', 'images': ['img/Skulpturer/007AOmsorg.jpg', 'img/Skulpturer/007BOmsorg.jpg'], 'name': 'Omsorg', 'info': 'Opstillet ved Lemvig Sygehus 1988. Højde 46 cm, Bredde 24 cm, Dybde 17 cm'},
    '008' : {'thumb': 'img/Skulpturer/thumbnails/008HønsefugleThumbnail.jpg', 'images': ['img/Skulpturer/008AHønsefugle.jpg', 'img/Skulpturer/008BHønsefugle.jpg'], 'name': 'Hønsefugle', 'info': 'Opstillet på Kvicklys parkeringsplads, Lemvig. Højde 57 cm, Bredde 54 cm, Dybde 28 cm'},
    '009' : {'thumb': 'img/Skulpturer/thumbnails/009RødfiskThumbnail.jpg', 'images': ['img/Skulpturer/009ARødfisk.jpg', 'img/Skulpturer/009BRødfisk.jpg', 'img/Skulpturer/009CRødfisk.jpg'], 'name': 'Rødfisk', 'info': 'Opstillet på Rådhustorvet v Musikskolen, Lemvig. Højde 160 cm, Bredde 135 cm, Dybde 80 cm'},
    '010' : {'thumb': 'img/Skulpturer/thumbnails/010HønsThumbnail.jpg', 'images': ['img/Skulpturer/010AHøns.jpg', 'img/Skulpturer/010BHøns.jpg'], 'name': 'Høns', 'info': 'Opstillet på Rådhustorvet v Musikskolen, Lemvig. Højde 55 cm, Bredde 70 cm, Dybde 44 cm'},
    '011' : {'thumb': 'img/Skulpturer/thumbnails/011SneglenThumbnail.jpg', 'images': ['img/Skulpturer/011ASneglen.jpg', 'img/Skulpturer/011BSneglen.jpg', 'img/Skulpturer/011CSneglen.jpg', 'img/Skulpturer/011DSneglen.jpg'], 'name': 'Sneglen', 'info': 'Opstillet i Vestergade, Lemvig. Højde 173 cm, Bredde 130 cm, Dybde 148 cm'},
    '012' : {'thumb': 'img/Skulpturer/thumbnails/012SøhestThumbnail.jpg', 'images': ['img/Skulpturer/012ASøhest.jpg', 'img/Skulpturer/012BSøhest.jpg'], 'name': 'Søhest', 'info': 'Opstillet ved Lemvig Kirke. Højde 85 cm, Bredde 26 cm, Dybde 13 cm'},
    '013' : {'thumb': 'img/Skulpturer/thumbnails/013_Studenterstenen_Thumbnail.jpg', 'images': ['img/Skulpturer/013A_Studenterstenen_.jpg', 'img/Skulpturer/013B_Studenterstenen_.jpg', 'img/Skulpturer/013C_Studenterstenen_.jpg'], 'name': 'Studenterstenen', 'info': 'Placeret  for enden af Posthusgade. Højde 130 cm, Bredde 260 cm, Dybde 180 cm'},
    '014' : {'thumb': 'img/Skulpturer/thumbnails/014SommerfuglThumbnail.jpg', 'images': ['img/Skulpturer/014ASommerfugl.jpg', 'img/Skulpturer/014BSommerfugl.jpg'], 'name': 'Sommerfugl', 'info': 'Opstillet på Lemvig Kirkegård. Højde 175 cm, 180 cm, Dybde 110 cm'},
    '015' : {'thumb': 'img/Skulpturer/thumbnails/015Lyttende drengThumpnail.jpg', 'images': ['img/Skulpturer/015ALyttende dreng.jpg', 'img/Skulpturer/015BLyttende dreng.jpg'], 'name': 'Lyttende dreng', 'info': 'Opstillet på Lemvig Gymnasium. Højde 64 cm, Bredde 40 cm, Dybde 60 cm'},
    '016' : {'thumb': 'img/Skulpturer/thumbnails/016StrengenebrastThumbnail.jpg', 'images': ['img/Skulpturer/016AStrengenebrast.jpg', 'img/Skulpturer/016BStrengenebrast.jpg', 'img/Skulpturer/016CStrengenebrast.jpg', 'img/Skulpturer/016DStrengenebrast.jpg'], 'name': 'Strengene brast', 'info': 'Opstillet på Lemvig Gymnasium. Bredde 105 cm, Bredde 73 cm, Dybde 95 cm'},
    '017' : {'thumb': 'img/Skulpturer/thumbnails/017TuskærThumbnail.jpg', 'images': ['img/Skulpturer/017ATuskær.jpg', 'img/Skulpturer/017BTuskær.jpg'], 'name': 'Tuskær', 'info': 'Opstillet på gårdspladsen på Tuskær, kunst og kulturcenter. Højde 100 cm, Bredde 140 cm, Dybde 60 cm'},
    '018' : {'thumb': 'img/Skulpturer/thumbnails/018ElinThumbnail.jpg', 'images': ['img/Skulpturer/018AElin.jpg', 'img/Skulpturer/018BElin.jpg'], 'name': 'Elins gravminde', 'info': 'Placeret på Fjaltring Kirkegård. Højde 22 cm, Bredde 19 cm, Dybde 13 cm'},
    '019' : {'thumb': 'img/Skulpturer/thumbnails/019LomborgEfterskoleThumbnail.jpg', 'images': ['img/Skulpturer/019ALomborgEfterskole.jpg', 'img/Skulpturer/019BLomborgEfterskole.jpg'], 'name': 'Lomborg', 'info': 'Opstillet på Lomborg Ungdomsskole. Højde 101 cm, Bredde 45 cm, Dybde 19 cm'},
    '020' : {'thumb': 'img/Skulpturer/thumbnails/020SvungetSejlThumbnail.jpg', 'images': ['img/Skulpturer/020ASvungetSejl.jpg', 'img/Skulpturer/020BSvungetSejl.jpg'], 'name': 'Svinget Sejl', 'info': 'Opstillet på havnen i Lemvig. Højde 205 cm, Bredde 140 cm, Dybde 65 cm'},
    '021' : {'thumb': 'img/Skulpturer/thumbnails/021VækstThumbnail.jpg', 'images': ['img/Skulpturer/021AVækst.jpg', 'img/Skulpturer/021BVækst.jpg'], 'name': 'Vækst', 'info': 'Opstillet i et gårdsrum på Cheminova, Harboøre Tange. Højde 169 cm, Bredde 78 cm, Dybde 38 cm'},
    '022' : {'thumb': 'img/Skulpturer/thumbnails/022SkyggerimulmThumbnail.jpg', 'images': ['img/Skulpturer/022ASkyggerimulm.jpg'], 'name': 'Skygger i mulm', 'info': 'Opstillet ved Bøvling Valgmenighedskirke. Højde 87 cm, Bredde 75 cm, Dybde 28 cm'},
    '023' : {'thumb': 'img/Skulpturer/thumbnails/023StøvogåndThumbnail.jpg', 'images': ['img/Skulpturer/023AStøvogånd.jpg'], 'name': 'Støv og Ånd', 'info': 'Opstillet ved Bøvling Valgmenighedskirke. Ejgils svendestykke 1947. Højde 146 cm, Bredde 40 cm, Dybde 29 cm'},
    '024' : {'thumb': 'img/Skulpturer/thumbnails/024BondenfraVejrumThumbnail.jpg', 'images': ['img/Skulpturer/024ABondenfraVejrum.jpg', 'img/Skulpturer/024BBondenfraVejrum.jpg'], 'name': 'Bonden fra Vejrum', 'info': 'Placeret ved VIA University College Nørre Nissum. Højde 77 cm, Bredde 45 cm, Dybde 50 cm'},
    '025' : {'thumb': 'img/Skulpturer/thumbnails/025BrandstenenThumbnail.jpg', 'images': ['img/Skulpturer/025ABrandstenen.jpg', 'img/Skulpturer/025BBrandstenen.jpg', 'img/Skulpturer/025CBrandstenen.jpg'], 'name': 'Brandstenen', 'info': 'Placeret i Holstebro. Højde 145 cm, Bredde 215 cm, Dybde 106 cm'},
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
      {Object.entries(images).map(([imgnum, imgdata]) => (
        <img src={imgdata["thumb"]} className="thumbnail" onClick={() => handleClick(imgdata)} alt={`Thumbnail ${imgnum}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
