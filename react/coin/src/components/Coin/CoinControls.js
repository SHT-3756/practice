import React, { useContext, useState } from "react";
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

      {/* <Modal open={modalOpen} close={closeModal}>
        <h1>2. {coin.coin.current_price}</h1>
        <h1>3. {coin.coin.name}</h1>
        <h1>4. {coin.coin.market_cap}</h1>
      </Modal> */}
    </>
  );
};
