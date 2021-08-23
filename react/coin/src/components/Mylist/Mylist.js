import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CoinCard } from "../Coin/CoinCard";
import "./Mylist.css";

export const Mylist = () => {
  const { mylist } = useContext(GlobalContext);

  return (
    <div className="mylist-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My CoinList</h1>
          <span className="count-pill">
            {mylist.length} {mylist.length <= 1 ? " coin" : " coins"}
          </span>
        </div>
        {mylist.length > 0 ? (
          <div className="mylist-grid">
            {mylist.map((coin, index) => (
              <div key={index}>
                <CoinCard coin={coin} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-coins">My List 에 코인을 추가해주세요</div>
        )}
      </div>
    </div>
  );
};
