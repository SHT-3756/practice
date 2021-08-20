import React, { useContext } from "react";
import "./Coin.css";
// import { CoinControls } from "./CoinControls";
import { GlobalContext } from "../../context/GlobalContext";

export const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  const mylist = () => {};
  const { addMylist } = useContext(GlobalContext);
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coinvolume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            MKT Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
      {/* <CoinControls coin={coin} /> */}
      <button
        onClick={() =>
          addMylist({
            name,
            image,
            symbol,
            price,
            volume,
            priceChange,
            marketcap,
          })
        }
      >
        관심
      </button>
    </div>
  );
};
