import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const CoinControls = ({ coin }) => {
  const { addMylist } = useContext(GlobalContext);
  return (
    <>
      <button onClick={() => addMylist(coin)}></button>
    </>
  );
};
