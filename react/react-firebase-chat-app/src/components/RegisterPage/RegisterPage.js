import React from "react";
import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Name</label>
        <input name="name" />
        <label>Password</label>
        <input name="password" type="password" />

        <label>PasswordConfirm</label>
        <input name="password_confirm" type="password" />

        <input type="submit" />
        <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
          이미 아이디가 있다면...
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
