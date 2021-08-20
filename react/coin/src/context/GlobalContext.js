import React, { createContext, useReducer, useEffect } from "react";

//초기화
const initialState = {
  mylist: localStorage.getItem("mylist")
    ? JSON.parse(localStorage.getItem("mylist"))
    : [],
};

//context 만들기
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(state.mylist));
  }, [state]);

  //액션
  const addMylist = (coin) => {
    dispatch({ type: "ADD_MYLIST", payload: coin });
  };
  return (
    <GlobalContext.Provider value={{ mylist: state.mylist, addMylist }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

//리듀서

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MYLIST":
      return { ...state, mylist: [action.payload, ...state.mylist] };

    default:
      return state;
  }
}
