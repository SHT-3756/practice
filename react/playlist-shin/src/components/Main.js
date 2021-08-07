import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyWebApi = new SpotifyWebApi({
  clientId: "9381282f5a44490a81e1c96e2c051017",
});
export default function Main({ code }) {
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return console.log("aa");
    spotifyWebApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control type="search" placeholder="Search Songs/Aritists" />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        songs
      </div>
      <div></div>
    </Container>
  );
}
