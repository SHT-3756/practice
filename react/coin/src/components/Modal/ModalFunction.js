import React, { useState } from "react";
import Modal from "react-modal";
import { BsFillEyeFill } from "react-icons/bs";
import "./Modal.css";

export const ModalFunction = ({ coin }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "60%",
      height: "70%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
    },
  };
  Modal.setAppElement("#root");
  // Modal.setAppElement(document.getElementById("root"));
  return (
    <>
      <div onClick={setModalIsOpenToTrue} className="ctrl-btn">
        <BsFillEyeFill />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="ModalContent" onClick={setModalIsOpenToFalse}>
          <div className="img">
            <img src={`${coin.coin.image}`} alt={`${coin.coin.name}`} />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="cols">{coin.coin.name}</th>
                <th scope="cols">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ath</th>
                <td>{coin.coin.ath}</td>
              </tr>
              <tr>
                <th scope="row">ath_change_percentage</th>
                <td>{coin.coin.ath_change_percentage}</td>
              </tr>
              <tr>
                <th scope="row">ath_date</th>
                <td>{coin.coin.ath_date}</td>
              </tr>
              <tr>
                <th scope="row">atl</th>
                <td>{coin.coin.atl}</td>
              </tr>
              <tr>
                <th scope="row">atl_change_percentage</th>
                <td>{coin.coin.atl_change_percentage}</td>
              </tr>
              <tr>
                <th scope="row">atl_date</th>
                <td>{coin.coin.atl_date}</td>
              </tr>
              <tr>
                <th scope="row">circulating_supply</th>
                <td>{coin.coin.circulating_supply}</td>
              </tr>
              <tr>
                <th scope="row">current_price</th>
                <td>{coin.coin.current_price}</td>
              </tr>
              <tr>
                <th scope="row">fully_diluted_valuation</th>
                <td>
                  {coin.coin.fully_diluted_valuation
                    ? coin.coin.fully_diluted_valuation
                    : "null"}
                </td>
              </tr>
              <tr>
                <th scope="row">high_24h</th>
                <td>{coin.coin.high_24h}</td>
              </tr>
              <tr>
                <th scope="row">low_24h</th>
                <td>{coin.coin.low_24h}</td>
              </tr>
              <tr>
                <th scope="row">last_updated</th>
                <td>{coin.coin.last_updated}</td>
              </tr>
              <tr>
                <th scope="row">market_cap</th>
                <td>{coin.coin.market_cap}</td>
              </tr>
              <tr>
                <th scope="row">market_cap_change_24h</th>
                <td>{coin.coin.market_cap_change_24h}</td>
              </tr>
              <tr>
                <th scope="row">market_cap_change_percentage_24h</th>
                <td>{coin.coin.market_cap_change_percentage_24h}</td>
              </tr>
              <tr>
                <th scope="row">market_cap_rank</th>
                <td>{coin.coin.market_cap_rank}</td>
              </tr>
              <tr>
                <th scope="row">max_supply</th>
                <td>{coin.coin.max_supply ? coin.coin.max_supply : "null"}</td>
              </tr>
              <tr>
                <th scope="row">price_change_24h</th>
                <td>{coin.coin.price_change_24h}</td>
              </tr>
              <tr>
                <th scope="row">price_change_percentage_24h</th>
                <td>{coin.coin.price_change_percentage_24h}</td>
              </tr>
              <tr>
                <th scope="row">currency</th>
                <td>{coin.coin.currency ? coin.coin.currency : "null"}</td>
              </tr>
              <tr>
                <th scope="row">percentage</th>
                <td>{coin.coin.percentage ? coin.coin.percentage : "null"}</td>
              </tr>
              <tr>
                <th scope="row">times</th>
                <td>{coin.coin.times ? coin.coin.times : "null"}</td>
              </tr>
              <tr>
                <th scope="row">symbol</th>
                <td>{coin.coin.symbol}</td>
              </tr>
              <tr>
                <th scope="row">total_supply</th>
                <td>
                  {coin.coin.total_supply ? coin.coin.total_supply : "null"}
                </td>
              </tr>
              <tr>
                <th scope="row">total_volume</th>
                <td>{coin.coin.total_volume}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
};
