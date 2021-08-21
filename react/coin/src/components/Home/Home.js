import React, { useState, useEffect } from "react";
import axios from "axios";
import { Coin } from "../Coin/Coin";
import "./Home.css";
export const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        // console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchHandle = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
  };
  const filteredCoins = coins.filter((coin) =>
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
            <Coin
              // coins={coin}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          </div>
        );
      })}
    </div>
  );
};
