import React from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";

function MainPanel() {
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
        <Message />
      </div>
      <MessageForm />
    </div>
  );
}

export default MainPanel;
