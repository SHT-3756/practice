import React from "react";
import Login from "./Login";

const code = new URLSearchParams(window.location.search).get("code");

export default function Main() {
  return (
    <div>
      <Login />
      code? <Main code={code} />:<Login />;
    </div>
  );
}
