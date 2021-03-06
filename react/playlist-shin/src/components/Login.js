import React from "react";
import "./Login.css";
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=9381282f5a44490a81e1c96e2c051017&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
export default function Login() {
  return (
    <div className="login">
      <div class="drops">
        <div class="drop" />
        <div class="drop" />
        <div class="drop" />
        <div class="drop" />
        <a className="btn" href={AUTH_URL}>
          로그인
        </a>
      </div>
    </div>
  );
}
