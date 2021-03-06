import React, { useState, useEffect } from "react";
import axios from "axios";
import { Coin } from "../Coin/Coin";
import "./Home.css";
export const Home = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoin(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchHandle = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
  };
  const filteredCoins = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <input
          type="text"
          placeholder="검색해주세요"
          className="coin-input"
          onChange={searchHandle}
        />
      </div>

      {filteredCoins.map((coin, index) => {
        return (
          <div key={index}>
            <Coin coin={coin} />
          </div>
        );
      })}
    </div>
  );
};
