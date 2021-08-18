import React from "react";
import { FaEye, FaTimes } from "react-icons/fa";

export const MovieControls = ({ movie, type }) => {
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <FaEye />
          </button>
          <button className="ctrl-btn">
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};
