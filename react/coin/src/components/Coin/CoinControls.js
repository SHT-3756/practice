import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs";

export const CoinControls = ({ coin }) => {
  const { removeMylist } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      <button className="ctrl-btn" onClick={() => removeMylist(coin.coin.id)}>
        <BsFillEyeFill />
      </button>
      <button className="ctrl-btn" onClick={() => removeMylist(coin.coin.id)}>
        <BsFillTrashFill />
      </button>
    </div>
  );
};
