import React from "react";
import { CoinControls } from "./CoinControls";

export const CoinCard = ({ coin }) => {
  return (
    <div className="mylist-card">
      <div className="overlay">
        <img src={`${coin.coin.image}`} alt={`${coin.coin.name}`} />
        <h3>{coin.coin.name}</h3>
        <CoinControls coin={coin} />
      </div>
    </div>
  );
};
