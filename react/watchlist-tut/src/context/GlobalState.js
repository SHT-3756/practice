import React, { createContext, useReducer, useEffect } from "react";

// initialState
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provide components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //JSON.stringify(): 문자열이 아닌 배열이 있으므로 사용해준다. 배열자체를 문자열로 변환한다.
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // action
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

// Reducer
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return { ...state, watchlist: [action.payload, ...state.watchlist] };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
