import React from 'react';
import videojs from 'video.js';
import VideoJS from './VideoJS';

interface vidProps {
  src: string;
  posterThumb: string;
}

export default function VidComp ({ src, posterThumb }: vidProps) {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    preload: true,
    poster: posterThumb,
    sources: [{
      src: src, // Using the src prop here
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
  );
}
