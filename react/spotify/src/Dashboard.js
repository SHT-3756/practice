import React, { useState, useEffect } from "react";
import useAuth from "./useAuth";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./TrackSearchResult";
import Player from "./Player";
import axios from "axios";

const spotifyWebApi = new SpotifyWebApi({
  clientId: "87eff4b3bd2e48f6a0f4d72e067bca7b",
});

export default function Dashboard({ code }) {
  // console.log(code);
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }
  // console.log(searchResults);

  useEffect(() => {
    //우리 api 가 가사에 액세스할수 있도록
    if (!playingTrack) return;

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [playingTrack]); //노래를 플레이할때마다, 노래가 변경될 때마다 발생

  useEffect(() => {
    if (!accessToken) return console.log("a1");
    spotifyWebApi.setAccessToken(accessToken);
    //스포티 api에 액세스 토큰을설정했는지 확인하여 spotify 액세스 토큰을 전달할 수있어야한다.
  }, [accessToken]); //액세스토큰이 있을때 마다 변경

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return console.log("accessToken이 없다.");

    let cancel = false;
    spotifyWebApi.searchTracks(search).then((res) => {
      if (cancel) return;
      //쿼리를 수행해 Spotify와 내가 원하는것을 할 수 있도록 하자.(트랙 검색)
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]); // 검색 쿼리가 변경될 때마다 or 액세스토큰이 변경될 때마다 검색에 사용할 useEffect

  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control
        type="search"
        placeholder="Search Songs/Aritists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </Container>
  );
}
