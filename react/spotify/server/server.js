require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
const lyricsFinder = require("lyrics-finder");

const app = express();
app.use(cors()); //cors의 오류가 생겨 이라이브러리만 설치해주면 해결된다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// useAuth 에서 새로고침 경로생성
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken; //리프레쉬될 토큰을 받고
  console.log("refreshToken", refreshToken);
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken, //여기에 새로고침 토큰을 패치하고 밑에 코드 추가.
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log(data.body);
      res.json({
        accessToken: data.body.access_token,
        expires_in: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expires_in: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) ||
    "No lyrics Found";
  res.json({ lyrics });
});
app.get("https://api.spotify.com/v1/me/player/devices", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
  spotifyApi.getMyDevices().then((data) => {
    const availableDevices = data.body.devices;
    console.log(availableDevices);
    res.json({ availableDevices });
  });
});
app.listen(3001);
