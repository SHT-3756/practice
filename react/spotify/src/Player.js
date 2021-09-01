import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    // 플레이를 true 로 설정해제하기위한
    setPlay(true);
  }, [trackUri]); //트랙uri 를 변경할 때마다 setPlay를 트루로 설정, 모든재생이끝나면 false

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        //callback함수의 state는 우리가 플레이하고있는지 여부
        if (state.isPlaying) setPlay(false); //노래가 끝날때마다 변경될때마다.시작할때마다 이콜백은 우리가 재생하지 않을때마다 호출될거다.
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  );
}
