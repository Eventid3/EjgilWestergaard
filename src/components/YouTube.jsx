// import React from "react";
// import YouTube from "react-youtube"

// class YouTubePlayer extends React.Component {
//     render() {
//       const opts = {
//         height: '315',
//         width: '420',
//         playerVars: {
//           autoplay: 1,
//         },
//       };
  
//       return <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
//     }
  
//     _onReady(event) {
//       // access to player in all event handlers via event.target
//       event.target.pauseVideo();
//     }
//   }

// function YouTubePlayer({videoID}) {
//     return <iframe 
//     className="youtube-player"
//     width="420" 
//     height="315"
//     src={videoID}
//     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen>
//     </iframe>
// }

function YouTubePlayer({href, src}) {
  return <a href={href}>
    <img className="video-link" src={src} />
    </a>
}

  export default YouTubePlayer