import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { BsFillTrashFill } from "react-icons/bs";
import { ModalFunction } from "../Modal/ModalFunction";

export const CoinControls = ({ coin }) => {
  const { removeMylist } = useContext(GlobalContext);

  return (
    <>
      <div className="inner-card-controls">
        <button className="ctrl-btn">
          <ModalFunction coin={coin} />
        </button>
        <button className="ctrl-btn" onClick={() => removeMylist(coin.coin.id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </>
  );
};
