import React, { useState, useEffect } from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import firebase from "firebase";

function ChatRooms() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const chatRoomsRef = firebase.database().ref("chatRooms");
  const [chatRooms, setChatRooms] = useState([]);

  const AddChatRoomsListeners = () => {
    const chatRoomsArray = [];

    chatRoomsRef.on("child_added", (DataSnapshot) => {
      chatRoomsArray.push(DataSnapshot.val());
      // console.log("chatRoomsArray", chatRoomsArray);
      setChatRooms(chatRoomsArray);
    });
  };

  useEffect(() => {
    AddChatRoomsListeners();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //리덕스에 있는 유저정보를 담았다.
  const user = useSelector((state) => state.user.currentUser);

  // 저장 버튼, 버튼을 누르면 제목, 설명, 유저정보가 파이어베이스에 저장되어야한다.
  const handleSubmit = (e) => {
    // 새로고침 방지
    e.preventDefault();
    //제목
    if (isFormValid(name, description)) {
      addChatRoom();
    }
  };
  const isFormValid = (name, description) => name && description;

  const renderChatRooms = (chatRooms) =>
    chatRooms.length > 0 &&
    chatRooms.map((room) => <li key={room.id}>#{room.name}</li>);

  const addChatRoom = async () => {
    //채팅방을 추가하는 기능
    const key = chatRoomsRef.push().key;
    const newChatRoom = {
      id: key,
      name: name,
      description: description,
      createBy: {
        name: user.displayName,
        image: user.photoURL,
      },
    };
    try {
      await chatRoomsRef
        .child(key)
        .update(newChatRoom)
        .then(setName(""), setDescription(""), setShow(false));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FaRegSmileWink style={{ marginRight: 3 }} />
        CHAT ROOMS
        <FaPlus
          onClick={handleShow}
          style={{ position: "absolute", right: 0, cursor: "pointer" }}
        />
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {renderChatRooms(chatRooms)}
      </ul>

      {/* modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>채팅방 만들기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>방 이름</Form.Label>
              <Form.Control
                type="text"
                placeholder="방 이름을 입력하세요."
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>방 설명</Form.Label>
              <Form.Control
                type="text"
                placeholder="방 설명을 입력하세요."
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            방 생성
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ChatRooms;
