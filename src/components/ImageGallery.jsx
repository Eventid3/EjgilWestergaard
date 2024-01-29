import React, { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

const basePath = import.meta.env.MODE === 'production' ? '/EjgilWestergaard/' : '/';

const ImageGallery = ({ selectedCategory}) => {
  const lemvigImages = {
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

  const uLemvigImages = {
    };

  const grundenImages = {
    '000' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/000GrundenThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/000AGrunden.jpg', 'img/Skulpturer på Grunden/000BGrunden.jpg', 'img/Skulpturer på Grunden/000CGrunden.jpg', 'img/Skulpturer på Grunden/000DGrunden.jpg'], 'name': 'Grunden', 'info': 'Skulpturer på Grunden. Bente Westergaard og Lasse Ebbensgaard'},
    '001' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/001LailaThombnail.jpg', 'images': ['img/Skulpturer på Grunden/001ALaila.jpg', 'img/Skulpturer på Grunden/001BLaila.jpg', 'img/Skulpturer på Grunden/001CLaila.jpg'], 'name': 'Laila', 'info': 'Størrelse: Højde 65 cm Bredde 65 cm Dybde 44 cm'},
    '002' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/002RygradThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/002ARygrad.jpg', 'img/Skulpturer på Grunden/002BRygrad.jpg'], 'name': 'Rygrad', 'info': 'Størrelse: Højde 223 cm Bredde 98 cm Dybde 69 cm'},
    '003' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/003MønsterThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/003AMønster.jpg', 'img/Skulpturer på Grunden/003BMønster.jpg', 'img/Skulpturer på Grunden/003CMønster.jpg'], 'name': 'Mønster', 'info': 'Ufuldendt. Størrelse: Højre 132 cm Bredde 132 cm Dybde 75 cm'},
    '004' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/004KompositionThombnail.jpg', 'images': ['img/Skulpturer på Grunden/004AKomposition.jpg', 'img/Skulpturer på Grunden/004BKomposition.jpg'], 'name': 'Komposition', 'info': 'Størrelse: Højde 63 cm Bredde 90 cm Dybde 78 cm'},
    '005' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/005HornThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/005AHorn.jpg', 'img/Skulpturer på Grunden/005BHorn.jpg', 'img/Skulpturer på Grunden/005CHorn.jpg'], 'name': 'Horn', 'info': 'Størrelse: Højde 76 cm Bredde 115 cm Dybde 80 cm'},
    '006' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/006ParThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/006APar.jpg', 'img/Skulpturer på Grunden/006BPar.jpg'], 'name': 'Par', 'info': 'Størrelse: Højde 107 cn Bredde 125 cm Dybde 100 cm'},
    '007' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/007ØkseThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/007AØkse.jpg', 'img/Skulpturer på Grunden/007BØkse.jpg'], 'name': 'Økse', 'info': 'Størrelse: Højde 70 Bredde 95 Dybde 68 cm'},
    '008' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/008So med to griseThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/008ASo med to grise.jpg', 'img/Skulpturer på Grunden/008BSo med to grise.jpg', 'img/Skulpturer på Grunden/008CSo med to grise.jpg'], 'name': 'So med to grise', 'info': 'Størrelse: Højde 86 cm Bredde 82 cm 53 cm'},
    '009' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/009BrædderThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/009ABrædder.jpg', 'img/Skulpturer på Grunden/009BBrædder.jpg', 'img/Skulpturer på Grunden/009CBrædder.jpg'], 'name': 'Brædder', 'info': 'Størrelse: Højde 144 cm Bredde 180 cm Dybde 63 cm'},
    '010' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/010Urokse med tre øjneThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/010AUrokse med tre øjne.jpg', 'img/Skulpturer på Grunden/010BUrokse med tre øjne.jpg', 'img/Skulpturer på Grunden/010CUrokse med tre øjne.jpg'], 'name': 'Urko med tre øjne', 'info': 'Størrelse: Højde 121 cm Bredde 200 cm Dybde 70 cm'},
    '011' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/011Buk - SlangeThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/011ABuk - Slange.jpg', 'img/Skulpturer på Grunden/011BBuk - Slange.jpg'], 'name': 'Buk og Slange', 'info': 'Størrelse: Højde 34 cm Bredde 76 cm Dybde 36 cm'},
    '012' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/012Mand i kornmarkThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/012AMand i kornmark.jpg', 'img/Skulpturer på Grunden/012BMand i kornmark.jpg'], 'name': 'Mand i kornmark', 'info': 'Størrelse: Højde 88 cm Bredde 52 cm Dybde 38 cm'},
    '013' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/013Dreng og StorkThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/013ADreng og Stork.jpg', 'img/Skulpturer på Grunden/013BDreng og Stork.jpg', 'img/Skulpturer på Grunden/013CDreng og Stork.jpg', 'img/Skulpturer på Grunden/013DDreng og Stork.jpg'], 'name': 'Dreng og Stork', 'info': 'Størrelse: Højde 77 cm Bredde 110 cm Dybde 45 cm'},
    '014' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/014To menneskerThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/014ATo mennesker.jpg', 'img/Skulpturer på Grunden/014BTo mennesker.jpg'], 'name': 'To mennesker', 'info': 'Størrelse: Højde 67 cm Bredde 103 cm Dybde 64 cm'},
    '015' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/015KoThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/015AKo.jpg', 'img/Skulpturer på Grunden/015BKo.jpg', 'img/Skulpturer på Grunden/015CKo.jpg'], 'name': 'Ko', 'info': 'Størrelse: Højde 33 cm Bredde 42 cm Dybde 64 cm'},
    '016' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/016Træ og SlangeThymbnail.jpg', 'images': ['img/Skulpturer på Grunden/016ATræ og Slange.jpg', 'img/Skulpturer på Grunden/016BTræ og Slange.jpg'], 'name': 'Træ og Slange', 'info': 'Størrelse: Højde 61 cm Bredde 76 cm Dybde 40 cm'},
    '017' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/017Tre PersonerThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/017ATre Personer.jpg', 'img/Skulpturer på Grunden/017BTre Personer.jpg', 'img/Skulpturer på Grunden/017CTre Personer.jpg'], 'name': 'Tre Personer', 'info': 'Størrelse: højde 88 cm Bredde 90 cm 45 cm'},
    '018' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/018FugleThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/018AFugle.jpg', 'img/Skulpturer på Grunden/018BFugle.jpg'], 'name': 'Fugle', 'info': 'Størrelse: Højde 159 cm Bredde 50 cm Dybde 18 cm'},
    '019' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/019To PersonerThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/019ATo Personer.jpg', 'img/Skulpturer på Grunden/019BTo Personer.jpg', 'img/Skulpturer på Grunden/019CTo Personer.jpg'], 'name': 'To Personer', 'info': 'Størrelse: Højde 58 cm Bredde 44 cm Dybde 27 cm'},
    '020' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/020VindThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/020AVind.jpg', 'img/Skulpturer på Grunden/020BVind.jpg', 'img/Skulpturer på Grunden/020CVind.jpg'], 'name': 'Vind', 'info': 'Størrelse: Højde 66 cm Bredde 82 cm Dybde 44 cm'},
    '021' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/021Person og dyrThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/021APerson og dyr.jpg', 'img/Skulpturer på Grunden/021BPerson og dyr.jpg', 'img/Skulpturer på Grunden/021CPerson og dyr.jpg'], 'name': 'Person og Dyr', 'info': 'Størrelse: Højde 83 cm Bredde 62 cm Dybde 44 cm'},
    '022' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/022KamelThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/022AKamel.jpg', 'img/Skulpturer på Grunden/022BKamel.jpg'], 'name': 'Kamel', 'info': 'Størrelse: Højde 105 cm Bredde 75 cm Dybde 53 cm'},
    '023' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/023MenneskegruppeThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/023AMenneskegruppe.jpg', 'img/Skulpturer på Grunden/023BMenneskegruppe.jpg', 'img/Skulpturer på Grunden/023CMenneskegruppe.jpg'], 'name': 'Menneskegruppe', 'info': 'Størrelse: Højde 62 cm Bredde 86 cm Dybde 72 cm'},
    '024' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/024ØrnThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/024AØrn.jpg', 'img/Skulpturer på Grunden/024BØrn.jpg'], 'name': 'Ørn', 'info': 'Størrelse: Højde 47 cm Bredde 73 cm Dybde 24 cm'},
    '025' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/025FavntagThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/025AFavntag.jpg', 'img/Skulpturer på Grunden/025BFavntag.jpg'], 'name': 'Favntag', 'info': 'Størrelse: Højde 58 cm Bredde 77 cm Dybde 23 cm'},
    '026' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/026BølgerThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/026ABølger.jpg', 'img/Skulpturer på Grunden/026BBølger.jpg', 'img/Skulpturer på Grunden/026CBølger.jpg'], 'name': 'Bølger', 'info': 'Størrelse: Højde 55 cm Bredde 86 cm Dybde 35'},
    '027' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/027NaturThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/027ANatur.jpg', 'img/Skulpturer på Grunden/027BNatur.jpg', 'img/Skulpturer på Grunden/027CNatur.jpg'], 'name': 'Natur', 'info': 'Størrelse: Højde 65 cm Bredde 94 cm Dybde 67 cm'},
    '028' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/028Winston ChurchillThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/028AWinston Churchill.jpg', 'img/Skulpturer på Grunden/028BWinston Churchill.jpg', 'img/Skulpturer på Grunden/028CWinston Churchill.jpg'], 'name': 'Winston Churchill', 'info': 'Størrelse: Højde 102 cm Bredde 66 cm Dybde 68 cm'},
    '029' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/029SnoningThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/029ASnoning.jpg', 'img/Skulpturer på Grunden/029BSnoning.jpg'], 'name': 'Snoning', 'info': 'Størrelse: Højde 26 cm Bredde 38 cm Dybde 36 cm'},
    '030' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/030SøjleThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/030ASøjle.jpg', 'img/Skulpturer på Grunden/030BSøjle.jpg'], 'name': 'Søjle', 'info': 'Størrelse: Højde 90 cm Bredde 41 cm Dybde 19 cm'},
    '031' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/031FantasiThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/031AFantasi.jpg', 'img/Skulpturer på Grunden/031BFantasi.jpg'], 'name': 'Fantasi', 'info': 'Størrelse: Højde 87 cm Bredde 213 cm Dybde 49 cm'},
    '032' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/032HimmelkigThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/032AHimmelkig.jpg', 'img/Skulpturer på Grunden/032BHimmelkig.jpg', 'img/Skulpturer på Grunden/032CHimmelkig.jpg'], 'name': 'Himmelkig', 'info': 'Størrelse: Højde 132 cm Bredde 75 cm Dybde 20 cm'},
    '033' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/033PersonThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/033APerson.jpg', 'img/Skulpturer på Grunden/033BPerson.jpg', 'img/Skulpturer på Grunden/033CPerson.jpg', 'img/Skulpturer på Grunden/033DPerson.jpg'], 'name': 'Person', 'info': 'Størrelse: Højde 47 cm Bredde 40 cm Dybde 25 cm'},
    '034' : {'thumb': 'img/Skulpturer på Grunden/thumbnails/034LedeblokThumbnail.jpg', 'images': ['img/Skulpturer på Grunden/034ALedeblok.jpg', 'img/Skulpturer på Grunden/034BLedeblok.jpg'], 'name': 'Ledeblok', 'info': 'Størrelse: Højde 230 cm Bredde 190 Dybde 70 cm'},
    };

  const vaerkstedetImages = {
    '001' : {'thumb': 'img/Foto i værksted/thumbnails/001InteriørThumnail.jpg', 'images': ['img/Foto i værksted/001AInteriør.jpg', 'img/Foto i værksted/001BInteriør.jpg', 'img/Foto i værksted/001CInteriør.jpg', 'img/Foto i værksted/001DInteriør.jpg'], 'name': 'Interiør', 'info': 'Glimt fra Ejgil Westergaards værksted'},
    '002' : {'thumb': 'img/Foto i værksted/thumbnails/002Værktøj01Thumbnail.jpg', 'images': ['img/Foto i værksted/002AVærktøj01.jpg', 'img/Foto i værksted/002BVærktøj01.jpg', 'img/Foto i værksted/002CVærktøj01.jpg', 'img/Foto i værksted/002DVærktøj01.jpg', 'img/Foto i værksted/002EVærktøj01.jpg', 'img/Foto i værksted/002FVærktøj01.jpg'], 'name': 'Værktøj og redskaber', 'info': 'Ejgil Westergaards værktøj som han efterlod ved sin død.'},
    '003' : {'thumb': 'img/Foto i værksted/thumbnails/003Værktøj02Thumbnail.jpg', 'images': ['img/Foto i værksted/003AVærktøj02.jpg', 'img/Foto i værksted/003BVærktøj02.jpg', 'img/Foto i værksted/003CVærktøj02.jpg', 'img/Foto i værksted/003DVærktøj02.jpg', 'img/Foto i værksted/003EVærktøj02.jpg', 'img/Foto i værksted/003FVærktøj02.jpg'], 'name': 'Værktøj og redskaber', 'info': 'Ejgil Westergaards værktøj som han efterlod ved sin død.'},
    '004' : {'thumb': 'img/Foto i værksted/thumbnails/004SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/004ASkitse.jpg'], 'name': 'Skitse', 'info': 'Størrelse: Højde 27 cm Bredde 17 cm Dybde 4,5 cm'},
    '005' : {'thumb': 'img/Foto i værksted/thumbnails/005SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/005ASkitse.jpg', 'img/Foto i værksted/005BSkitse.jpg'], 'name': 'Skitse', 'info': 'To-del figur. Størrelse: Højde 40 cm Bredde 12 cm Dybde 12 cm'},
    '006' : {'thumb': 'img/Foto i værksted/thumbnails/006SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/006ASkitse.jpg'], 'name': 'Skitse', 'info': 'Bronze. Størrelse: Højde 11,5 cm Bredde 22 cm Dybde 13 cm'},
    '007' : {'thumb': 'img/Foto i værksted/thumbnails/007SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/007ASkitse.jpg'], 'name': 'Skitse', 'info': 'Sandsten. Størrelse: Højde 13,5 cm Bredde 27 cm Dybde 6 cm'},
    '008' : {'thumb': 'img/Foto i værksted/thumbnails/008skitseThumbnail.jpg', 'images': ['img/Foto i værksted/008Askitse.jpg', 'img/Foto i værksted/008Bskitse.jpg', 'img/Foto i værksted/008Cskitse.jpg'], 'name': 'Skitse', 'info': 'Sandsten. Størrelse: Højde 18 cm Bredde 24 cm Dybde 10 cm'},
    '009' : {'thumb': 'img/Foto i værksted/thumbnails/009SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/009ASkitse.jpg', 'img/Foto i værksted/009BSkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt ler ude chamotte. Størrelse: Højde 18 cm Bredde 14cm Dybde 10 cm'},
    '010' : {'thumb': 'img/Foto i værksted/thumbnails/010SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/010ASkitse.jpg'], 'name': 'Skitse', 'info': 'Granit og fedtsten/klæbersten. Størrelsr: Højde 8,5 cm Bredde 13 cm Dybde 9,5 cm'},
    '011' : {'thumb': 'img/Foto i værksted/thumbnails/011SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/011ASkitse.jpg'], 'name': 'Skitse', 'info': 'Granit. Størrelse: Højde 37 cm Bredde 13 cm Dybde 8 cm'},
    '012' : {'thumb': 'img/Foto i værksted/thumbnails/012SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/012Askitse.jpg'], 'name': 'Skitse', 'info': 'Mærket EW 1980. Fedtsten/klæbersten. Størrelse: Højde 11,5 cm Bredde 12 cm Dybde 9,5 cm'},
    '013' : {'thumb': 'img/Foto i værksted/thumbnails/013UdkastThumbnail.jpg', 'images': ['img/Foto i værksted/013AUdkast.jpg', 'img/Foto i værksted/013BUdkast.jpg'], 'name': 'Medaljon', 'info': 'Udkast til medaljon, Ler. Størrelse: Diameter 17 cm Tykkelse 1,8 cm'},
    '014' : {'thumb': 'img/Foto i værksted/thumbnails/014SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/014Askitse.jpg', 'img/Foto i værksted/014BSkitse.jpg'], 'name': 'Skitse', 'info': 'Granit. Størrelse: Højde 29 cm Bredde 23 cm Dybde 20 cm'},
    '015' : {'thumb': 'img/Foto i værksted/thumbnails/015SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/015ASkitse.jpg', 'img/Foto i værksted/015BSkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt ler den charmotte. Størrelse: Højde 24 cm Bredde 18 cm Dybde 18 cm'},
    '016' : {'thumb': 'img/Foto i værksted/thumbnails/016SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/016ASkitse.jpg', 'img/Foto i værksted/016BSkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt ler med charmotte. Størrelse: Højde 13 cm Bredde 18 cm Dybde 14 cm'},
    '017' : {'thumb': 'img/Foto i værksted/thumbnails/017SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/017ASkitse.jpg', 'img/Foto i værksted/017BSkitse.jpg'], 'name': 'Skitse', 'info': 'Marmor. Størrelse: Højde 25 cm Bredde 19 cm Dybde 12 cm'},
    '018' : {'thumb': 'img/Foto i værksted/thumbnails/018SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/018ASkitse.jpg', 'img/Foto i værksted/018BSkitse.jpg', 'img/Foto i værksted/018CSkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt ler den charmotte. Størrelse: Højde 24 Bredde 28 Dybde 12 cm'},
    '019' : {'thumb': 'img/Foto i værksted/thumbnails/019SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/019ASkitse.jpg'], 'name': 'Skitse', 'info': 'Blåler uden charmotte. Størrelse<. Højde 15,5 cm Bredde 14 cm Dybde 11 cm'},
    '020' : {'thumb': 'img/Foto i værksted/thumbnails/020SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/020ASkitse.jpg'], 'name': 'Skitse', 'info': 'Brændt rødler med fin charmotte. Størrelse: Højde 52 cm Bredde 17 cm Dybde 10 cm'},
    '021' : {'thumb': 'img/Foto i værksted/thumbnails/021SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/021ASkitse.jpg'], 'name': 'Skitse', 'info': 'Brændt rødler med charmotte. Størrelse: Højde 47 cm Bredde 32 cm Dybde 27 cm'},
    '022' : {'thumb': 'img/Foto i værksted/thumbnails/022SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/022ASkitse.jpg', 'img/Foto i værksted/022BSkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt rødler uden charmotte. Størrelse: Højde 21 cm Bredde 27 cm Dybde 14 cm'},
    '023' : {'thumb': 'img/Foto i værksted/thumbnails/023SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/023ASkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt ler uden charmotte. Størrelse: Højde 28 cm Bredde 25 cm Dybde 12 cm'},
    '024' : {'thumb': 'img/Foto i værksted/thumbnails/024SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/024ASkitse.jpg', 'img/Foto i værksted/024BSkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt leer den charmotte. Størrelse: Højde 28 cm Bredde 12 cm Dybde 12 cm'},
    '025' : {'thumb': 'img/Foto i værksted/thumbnails/025SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/025ASkitse.jpg'], 'name': 'Skitse', 'info': 'Gips. Størrelse: Højde 38 cm Diameter 16 cm'},
    '026' : {'thumb': 'img/Foto i værksted/thumbnails/026SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/026ASkitse.jpg'], 'name': 'Skitse', 'info': 'Mærket Ejgil Westergaard 1946. Størrelse: Højde 38 cm Bredde 35 cm Dybde 27 cm'},
    '027' : {'thumb': 'img/Foto i værksted/thumbnails/027SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/027ASkitse.jpg'], 'name': 'Skitse', 'info': 'Brændt rødler. Størrelse: Højde 51 cm Bredde 26 cm Dybde 21 cm'},
    '028' : {'thumb': 'img/Foto i værksted/thumbnails/028SkitsejpgThumbnail.jpg', 'images': ['img/Foto i værksted/028ASkitse.jpg', 'img/Foto i værksted/028BSkitse.jpg'], 'name': 'Skitse', 'info': 'Brændt rødler med charmotte. Størrelse: Højde 50 cm Bredde 46 cm Dybde 24 cm'},
    '029' : {'thumb': 'img/Foto i værksted/thumbnails/029SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/029ASkitse.jpg', 'img/Foto i værksted/029BSkitse.jpg'], 'name': 'Skitse', 'info': 'Gips. Størrelse: Højde 35 cm Bredde 21 cm Dybde 24 cm'},
    '030' : {'thumb': 'img/Foto i værksted/thumbnails/030SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/030ASkitse.jpg'], 'name': 'Skitse', 'info': 'Ubrændt leer den charmotte. Størrelse: Højde 15 cm Bredde 31 cm Dybde 17 cm'},
    '031' : {'thumb': 'img/Foto i værksted/thumbnails/031SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/031ASkitse.jpg', 'img/Foto i værksted/031BSkitse.jpg'], 'name': 'Skitse', 'info': 'Gips. Størrelse: Højde 30,5 cm Bredde 17 cm Dybde 11,5 cm'},
    '032' : {'thumb': 'img/Foto i værksted/thumbnails/032SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/032ASkitse.jpg'], 'name': 'Skitse', 'info': 'Størrelse: Højde 21 cm Bredde 16 cm Dybde 9,5 cm'},
    '033' : {'thumb': 'img/Foto i værksted/thumbnails/033SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/033ASkitse.jpg'], 'name': 'Skitse', 'info': 'Sandsten. Størrelse: Højde 26 cm Bredde 23 cm Dybde 11,5 cm'},
    '034' : {'thumb': 'img/Foto i værksted/thumbnails/034SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/034ASkitse.jpg'], 'name': 'Skitse', 'info': 'Granit. Størrelse: Højde 37 cm Bredde 21 cm Dybde 25 cm'},
    '035' : {'thumb': 'img/Foto i værksted/thumbnails/035SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/035ASkitse.jpg'], 'name': 'To høner', 'info': 'Bronze. Størrelse: Højde 27,5 cm Bredde 27 cm Dybde 19 cm'},
    '036' : {'thumb': 'img/Foto i værksted/thumbnails/036SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/036ASkitse.jpg', 'img/Foto i værksted/036BSkitse.jpg'], 'name': 'Høne', 'info': 'Bronze. Størrelse: Højde 26 cm Bredde 26 cm Dybde 16,5 cm'},
    '037' : {'thumb': 'img/Foto i værksted/thumbnails/037SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/037ASkitse.jpg', 'img/Foto i værksted/037BSkitse.jpg'], 'name': 'To musikere', 'info': 'Klæbersten/fedtsten. Størrelse: Højde 29,5 cm Bredde 27 cm Dybde 16 cm'},
    '038' : {'thumb': 'img/Foto i værksted/thumbnails/038SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/038ASkitse.jpg', 'img/Foto i værksted/038BSkitse.jpg'], 'name': 'To køer', 'info': 'Granit. Størrelse: Højde 33 cm Bredde 31 cm Dybde 26 cm'},
    '039' : {'thumb': 'img/Foto i værksted/thumbnails/039SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/039ASkitse.jpg'], 'name': 'Stenbidder', 'info': 'Bemalet bronze. Størrelse: Højde 26 cm Bredde 44 cm Dybde 19 cm'},
    '040' : {'thumb': 'img/Foto i værksted/thumbnails/040SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/040ASkitse.jpg', 'img/Foto i værksted/040BSkitse.jpg'], 'name': 'Skitse', 'info': 'Granit. Størrelse: Højde 29,5 cm Bredde 36 cm Dybde 20 cm'},
    '041' : {'thumb': 'img/Foto i værksted/thumbnails/041SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/041ASkitse.jpg'], 'name': 'Natur', 'info': 'Bronze. Størrelse: Højde 15 cm Bredde 21 cm Dybde 12,5 cm'},
    '042' : {'thumb': 'img/Foto i værksted/thumbnails/042SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/042ASkitse.jpg', 'img/Foto i værksted/042BSkitse.jpg'], 'name': 'Liv', 'info': 'Sandsten. Størrelse: Højde 15 cm Bredde 10 cm Dybde 11 cm'},
    '043' : {'thumb': 'img/Foto i værksted/thumbnails/043SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/043ASkitse.jpg', 'img/Foto i værksted/043BSkitse.jpg'], 'name': 'Skitse', 'info': 'Granit. Størrelse: Højde 20 cm Bredde 33 cm Dybde 12 cm'},
    '044' : {'thumb': 'img/Foto i værksted/thumbnails/044SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/044ASkitse.jpg'], 'name': 'Skitse', 'info': 'Granit. Størrelse: Højde 33 cm Bredde 20 cm Dybde 13 cm'},
    '045' : {'thumb': 'img/Foto i værksted/thumbnails/045SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/045ASkitse.jpg', 'img/Foto i værksted/045BSkitse.jpg'], 'name': 'Skitse', 'info': 'Granit. Størrelse: Højde 41 cm Bredde 32 cm Dybde 20 cm'},
    '046' : {'thumb': 'img/Foto i værksted/thumbnails/046SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/046ASkitse.jpg'], 'name': 'Gås', 'info': 'Bemalet gips. Størrelse: Højde 58 cm Bredde 58 cm Dybde 27 cm'},
    '047' : {'thumb': 'img/Foto i værksted/thumbnails/047SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/047ASkitse.jpg', 'img/Foto i værksted/047BSkitse.jpg', 'img/Foto i værksted/047CSkitse.jpg'], 'name': 'Skitse', 'info': ''},
    '048' : {'thumb': 'img/Foto i værksted/thumbnails/048SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/048ASkitse.jpg', 'img/Foto i værksted/048BSkitse.jpg'], 'name': 'Mand', 'info': 'Gips. Størrelse: Højde 61 cm Bredde 50 cm Dybde 27 cm'},
    '049' : {'thumb': 'img/Foto i værksted/thumbnails/049SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/049ASkitse.jpg'], 'name': 'Vejrum Bonden', 'info': 'Gips. Størrelse: Højde 80 cm Bredde 50 cm Dybde 48 cm'},
    '050' : {'thumb': 'img/Foto i værksted/thumbnails/050SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/050ASkitse.jpg'], 'name': 'Rødfisk', 'info': 'Størrelse: Højde 18,5 cm Bredde 18 cm Dybde 5 cm'},
    '051' : {'thumb': 'img/Foto i værksted/thumbnails/051SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/051ASkitse.jpg'], 'name': 'To høns', 'info': 'Bronze. Størrelse: Højde 20 cm Bredde 28 cm Dybde 12 cm'},
    '052' : {'thumb': 'img/Foto i værksted/thumbnails/052SkitseThumbnail.jpg', 'images': ['img/Foto i værksted/052ASkitse.jpg', 'img/Foto i værksted/052BSkitse.jpg'], 'name': 'Elof', 'info': 'Bronze. Størrelse: Højde 13 cm Bredde 47 cm Dybde 23 cm'},
    '053' : {'thumb': 'img/Foto i værksted/thumbnails/053Mor med BarnThumbnail.jpg', 'images': ['img/Foto i værksted/053AMor med Barn.jpg'], 'name': 'Mor med barn', 'info': 'Træ. Størrelse: Højde 162 cm Bredde 60 cm Dybde 62 cm'},
    };

  const categorySelector = (category) => {
    switch (selectedCategory) {
      case "lemvig":
        return lemvigImages;
      case "ulemvig":
        return uLemvigImages;
      case "grunden":
        return grundenImages;
      case "vaerkstedet":
        return vaerkstedetImages;
      default:
        return {};
    }
  };

  const rawImages = selectedCategory ? categorySelector(selectedCategory) : lemvigImages;

  const images = Object.entries(rawImages).reduce((acc, [imgnum, data]) => {
    acc[imgnum] = data;
    acc[imgnum]['thumb'] = basePath + acc[imgnum]['thumb'];
    acc[imgnum]['images'] = data['images'].map(img => basePath + img);
    return acc;
  }, {});

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
        <div className='image-sub-container'>
        <img src={imgdata["thumb"]} className="thumbnail" onClick={() => handleClick(imgdata)} alt={`Thumbnail ${imgnum}`} key={imgnum}/>
        <div className='image-overlay'>{imgdata["name"]}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
