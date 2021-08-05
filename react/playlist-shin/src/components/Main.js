import React from "react";
import useAuth from "./useAuth";
import { Container, Form } from "react-bootstrap";

export default function Main({ code }) {
  const accessToken = useAuth(code);
  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control type="search" placeholder="Search Songs/Aritists" />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        songs
      </div>
      <div></div>
    </Container>
  );
}
