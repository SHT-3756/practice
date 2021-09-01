import React, { useState, useEffect } from "react";
import axios from "axios";
export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expriresIn, setExpriresIn] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        console.log(res.data);
        //res.data 에서 확인할 수있듯이 우리가 res.data에로 받은 데이터들을 setState에 저장시켜준다.
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpriresIn(res.data.expriresIn);
        window.history.pushState({}, null, "/"); // >?뒤에 있는 코드가 안보이게  /를 밀어넣었다.
      })
      .catch(() => {
        //토큰이 만료가 되면 / 페이지로 redirect 한다.
        window.location = "/";
      });
  }, [code]);

  // 사용자가 응용프로그램을 사용하려는 경우 매시간 로그인 해야한다는 문제가 될 것이므로 자동으로 새로고침하는 코드를추가
  useEffect(() => {
    //토큰 없는 경우 또는 제시간에 만료되지않은경우 아무것도 안하는것을 return
    if (!refreshToken || !expriresIn) return;
    const interval = setInterval(() => {
      //setInterval로 새로고침 or 만료및 변경이 발생하면 새로고침이 실행되도록
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpriresIn(res.data.expriresIn);
          // window.history.pushState({}, null, "/");
        })
        .catch(() => {
          //토큰이 만료가 되면 / 페이지로 redirect 한다.
          window.location = "/";
        });
    }, (expriresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [refreshToken, expriresIn]);
  //토큰이 만료되기 직전에 새로고침토큰을 사용하여 새로고침,
  //server.js내부에 경로를 생성
  return accessToken;
}
