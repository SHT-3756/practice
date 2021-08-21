import React from "react";
// import CoinControls from "./CoinControls";

export const CoinCard = ({ coin }) => {
  return (
    <div>
      <img src={`${coin.image}`} alt={`${coin.name}`} />
      {/* <CoinControls /> */}
    </div>
  );
};
