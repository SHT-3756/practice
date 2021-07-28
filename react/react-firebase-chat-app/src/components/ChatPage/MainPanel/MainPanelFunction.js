import React, { useState, useEffect } from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";
import firebase from "../../../firebase";
import { useSelector } from "react-redux";

function MainPanel() {
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

  const messagesRef = firebase.database().ref("messages");

  const user = useSelector((state) => state.user.currentUser);
  const chatRoom = useSelector((state) => state.chatRoom.currentChatRoom);

  useEffect(() => {
    if (chatRoom) {
      addMessagesListeners(chatRoom.id);
    }
  });
  const addMessagesListeners = (chatRoomId) => {
    let messageArray = [];
    messagesRef.child(chatRoomId).on("child_added", (DataSnapshot) => {
      messageArray.push(DataSnapshot.val());
      setMessages(messageArray);
      setMessagesLoading(false);
    });
  };

  const renderMessage = (messages) => {
    messages.length > 0 &&
      messages.map((message) => (
        <Message key={message.timestamp} message={message} user={user} />
      ));
  };
  return (
    <div style={{ padding: "2rem 2rem 0 2rem" }}>
      <MessageHeader />
      <div
        style={{
          width: "100%",
          height: "450px",
          border: "0.2rem solid #ececec",
          borderRadius: "4px",
          padding: "1rem",
          marginBottom: "1rem",
          overflow: "auto",
        }}
      >
        {renderMessage(messages)}
        <Message />
      </div>
      <MessageForm />
    </div>
  );
}

export default MainPanel;
