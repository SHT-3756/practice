import React from "react";
import { CoinControls } from "./CoinControls";

export const CoinCard = ({ coin }) => {
  return (
    <div className="mylist-card">
      <div className="overlay">
        <img src={`${coin.coin.image}`} alt={`${coin.coin.name}`} />
        <h3>{coin.coin.name}</h3>
        <CoinControls coin={coin} />
      </div>
      {/* // <img src={`${coin.coin.image}`} alt={`${coin.coin.name}`} /> */}
      {/* <h1>1. {coin.coin.symbol}</h1>
      <h1>2. {coin.coin.current_price}</h1>
      <h1>3. {coin.coin.name}</h1>
      <h1>4. {coin.coin.market_cap}</h1>
      <h1>5. {coin.coin.market_cap_rank}</h1>
      <h1>6. {coin.coin.fully_diluted_valuation}</h1>
      <h1>7. {coin.coin.total_volume}</h1>
      <h1>8. {coin.coin.high_24h}</h1>
      <h1>9. {coin.coin.low_24h}</h1>
      <h1>10. {coin.coin.price_change_24h}</h1>
      <h1>11. {coin.coin.price_change_percentage_24h}</h1>
      <h1>12. {coin.coin.market_cap_change_24h}</h1>
      <h1>13. {coin.coin.market_cap_change_percentage_24h}</h1>
      <h1>14. {coin.coin.circulating_supply}</h1>
      <h1>15. {coin.coin.total_supply}</h1>
      <h1>16. {coin.coin.max_supply}</h1>
      <h1>17. {coin.coin.ath}</h1>
      <h1>18. {coin.coin.ath_change_percentage}</h1>
      <h1>19. {coin.coin.ath_date}</h1>
      <h1>20. {coin.coin.atl}</h1>
      <h1>21. {coin.coin.atl_change_percentage}</h1>
      <h1>22. {coin.coin.atl_date}</h1>
      <h1>23. {coin.coin.times}</h1>
      <h1>24. {coin.coin.currency}</h1>
      <h1>25. {coin.coin.percentage}</h1> */}
      {/* <h1>26. {coin.coin.last_updated}</h1> */}

      {/* <button onClick={() => removeMylist(coin.id)}>삭제</button> */}
    </div>
  );
};
