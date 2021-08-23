import React, { useContext } from "react";
import "./Coin.css";
import { GlobalContext } from "../../context/GlobalContext";

export const Coin = ({ coin }) => {
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
      <button
        className="ctrl-btn"
        disabled={mylistDisabled}
        onClick={() =>
          addMylist({
            coin,
          })
        }
      >
        Add
      </button>

      <button
        className="ctrl-btn"
        disabled={removeDisabled}
        onClick={() => removeMylist(coin.id)}
      >
        Delete
      </button>
    </div>
  );
};
