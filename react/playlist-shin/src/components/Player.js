import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  }, [trackUri]);
  console.log("trackUri", trackUri);
  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      magnifySliderOnHover={true}
      autoplay={true}
      play={play}
      uris={trackUri ? [trackUri] : []}
      styles={{
        activeColor: "#fff",
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
    />
  );
}

export default Player;
