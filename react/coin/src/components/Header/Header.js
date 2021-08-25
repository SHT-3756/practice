import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Home</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/mylist">My List</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
