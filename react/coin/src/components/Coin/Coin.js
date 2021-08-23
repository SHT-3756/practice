import React, { useContext } from "react";
import "./Coin.css";
// import { CoinControls } from "./CoinControls";
import { GlobalContext } from "../../context/GlobalContext";

export const Coin = ({
  // name,
  // image,
  // symbol,
  // price,
  // volume,
  // priceChange,
  // marketcap,
  coin,
}) => {
  const { addMylist, mylist, removeMylist } = useContext(GlobalContext);

  let storedCoin = mylist.find((o) => o.coin.id === coin.id);

  const mylistDisabled = storedCoin ? true : false;

  const removeDisabled = storedCoin ? false : true;
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coin.image} alt="crypto" />
          <h1>{coin.name}</h1>
          <p className="coin-symbol">{coin.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${coin.current_price}</p>
          <p className="coinvolume">${coin.total_volume.toLocaleString()}</p>
          {coin.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">
            MKT Cap: ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
      {/* <CoinControls coin={coin} /> */}
      <button
        disabled={mylistDisabled}
        onClick={() =>
          addMylist({
            coin,
            // name,
            // image,
            // symbol,
            // price,
            // volume,
            // priceChange,
            // marketcap,
          })
        }
      >
        관심
      </button>
      <button disabled={removeDisabled} onClick={() => removeMylist(coin.id)}>
        삭제
      </button>
    </div>
  );
};
