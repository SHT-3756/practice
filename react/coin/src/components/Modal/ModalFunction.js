import React, { useState } from "react";
import Modal from "react-modal";
import { BsFillEyeFill } from "react-icons/bs";

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
      width: "50%",
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
        <div onClick={setModalIsOpenToFalse}>
          <img src={`${coin.coin.image}`} alt={`${coin.coin.name}`} />
          <div> {coin.coin.name}</div>
        </div>
      </Modal>
    </>
  );
};
