import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CoinCard } from "../Coin/CoinCard";

export const Mylist = () => {
  const { mylist } = useContext(GlobalContext);

  return (
    <>
      {mylist.length > 0 ? (
        <>
          {mylist.map((coin, index) => (
            <div key={index}>
              <CoinCard coin={coin} />
            </div>
          ))}
        </>
      ) : (
        <div className="no-coins">My List 에 코인을추가해주세요</div>
      )}
    </>
  );
};
