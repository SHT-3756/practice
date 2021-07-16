import React from "react";
import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import DirectMessage from "./DirectMessage";
import ChatRooms from "./ChatRooms";

function SidePanel() {
  return (
    <div
      style={{
        background: "#7b83eb",
        padding: "2rem",
        minHeight: "100vh",
        color: "white",
        minWidth: "275px",
      }}
    >
      <UserPanel />
      <Favorited />
      <ChatRooms />
      <DirectMessage />
    </div>
  );
}

export default SidePanel;
