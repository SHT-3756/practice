import React, { useContext } from "react";
import { FaEye, FaTimes } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};
