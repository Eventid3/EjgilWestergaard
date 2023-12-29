
// window.addEventListener('DOMContentLoaded', function () {
//     var gallery = document.getElementById('gallery');
//     var imageUrls = {
//       'img/Skulpturer/thumbnails/001BølgenThumbnail.jpg' : ['img/Skulpturer/001Bølgen.jpg', 'img/Skulpturer/001BølgenA.jpg', 'img/Skulpturer/001BølgenB.jpg', 'img/Skulpturer/001BølgenC.jpg', 'img/Skulpturer/001BølgenD.jpg'],
//       'img/Skulpturer/thumbnails/002TukakMaskespilThumbnail.jpg' : ['img/Skulpturer/002Tukak Maskespil.jpg', 'img/Skulpturer/002Tukak MaskespilA.jpg', 'img/Skulpturer/002Tukak MaskespilB.jpg', 'img/Skulpturer/002Tukak MaskespilC.jpg', 'img/Skulpturer/002Tukak MaskespilD.jpg'],
//       'img/Skulpturer/thumbnails/003BorgermusikkenThumbnail.jpg' : ['img/Skulpturer/003Borgermusikken.jpg', 'img/Skulpturer/003BorgermusikkenA.jpg', 'img/Skulpturer/003BorgermusikkenB.jpg'],
//       'img/Skulpturer/thumbnails/004Strengene brastThumbnail.jpg' : ['img/Skulpturer/004Strengene brast.jpg', 'img/Skulpturer/004Strengene brastA.jpg', 'img/Skulpturer/004Strengene brastB.jpg', 'img/Skulpturer/004Strengene brastC.jpg'],
//       'img/Skulpturer/thumbnails/005SommerfuglSkitseThumbnail.jpg' : ['img/Skulpturer/005Sommerfugl.jpg', 'img/Skulpturer/005SommerfuglA.jpg', 'img/Skulpturer/005SommerfuglSkitse.jpg'],
//       'img/Skulpturer/thumbnails/005SommerfuglThumbnail.jpg' : ['img/Skulpturer/005Sommerfugl.jpg', 'img/Skulpturer/005SommerfuglA.jpg', 'img/Skulpturer/005SommerfuglSkitse.jpg'],
//     };

//       imageUrls.forEach(function(url) {
//           var img = new Image();
//           img.src = url;
//           img.className = "thumbnail";
//           gallery.appendChild(img);
//       });
//       var viewer = new Viewer(gallery, {
//         url: 'data-original',
//         title: function (image) {
//           return image.alt + ' (' + (this.index + 1) + '/' + this.length + ')';
//         },
//         toolbar: {
//             zoomIn: 1,
//             zoomOut: 1,
//             oneToOne: 1,
//             reset: 1,
//             prev: 1,
//             play: {
//             show: 1,
//             size: 'large',
//             },
//             next: 1,
//             rotateLeft: 0,
//             rotateRight: 0,
//             flipHorizontal: 0,
//             flipVertical: 0
//         }
//       });
//     });

    var images = {
      'img/Skulpturer/thumbnails/001BølgenThumbnail.jpg' : ['img/Skulpturer/001Bølgen.jpg', 'img/Skulpturer/001BølgenA.jpg', 'img/Skulpturer/001BølgenB.jpg', 'img/Skulpturer/001BølgenC.jpg', 'img/Skulpturer/001BølgenD.jpg'],
      'img/Skulpturer/thumbnails/002TukakMaskespilThumbnail.jpg' : ['img/Skulpturer/002Tukak Maskespil.jpg', 'img/Skulpturer/002Tukak MaskespilA.jpg', 'img/Skulpturer/002Tukak MaskespilB.jpg', 'img/Skulpturer/002Tukak MaskespilC.jpg', 'img/Skulpturer/002Tukak MaskespilD.jpg'],
      'img/Skulpturer/thumbnails/003BorgermusikkenThumbnail.jpg' : ['img/Skulpturer/003Borgermusikken.jpg', 'img/Skulpturer/003BorgermusikkenA.jpg', 'img/Skulpturer/003BorgermusikkenB.jpg'],
      'img/Skulpturer/thumbnails/004Strengene brastThumbnail.jpg' : ['img/Skulpturer/004Strengene brast.jpg', 'img/Skulpturer/004Strengene brastA.jpg', 'img/Skulpturer/004Strengene brastB.jpg', 'img/Skulpturer/004Strengene brastC.jpg'],
      'img/Skulpturer/thumbnails/005SommerfuglSkitseThumbnail.jpg' : ['img/Skulpturer/005Sommerfugl.jpg', 'img/Skulpturer/005SommerfuglA.jpg', 'img/Skulpturer/005SommerfuglSkitse.jpg'],
      'img/Skulpturer/thumbnails/005SommerfuglThumbnail.jpg' : ['img/Skulpturer/005Sommerfugl.jpg', 'img/Skulpturer/005SommerfuglA.jpg', 'img/Skulpturer/005SommerfuglSkitse.jpg'],
    };

    window.addEventListener('DOMContentLoaded', function () {
      var gallery = document.getElementById('gallery');
  
      Object.keys(images).forEach(function(thumbnailUrl) {
          var img = new Image();
          img.src = thumbnailUrl;
          img.className = "thumbnail";
          img.onclick = function() {
              openViewer(images[thumbnailUrl]);
          };
          gallery.appendChild(img);
      });
  });
  
  function openViewer(imageUrls) {
      var viewerImages = document.createElement('div');
  
      imageUrls.forEach(function(url) {
          var img = new Image();
          img.src = url;
          viewerImages.appendChild(img);
      });
  
      var viewer = new Viewer(viewerImages, {
          // ... viewer options
          shown: function() {
              viewer.view(0);
          },
          hidden: function() {
              viewer.destroy();
          },
      });
  
      viewer.show();
  }