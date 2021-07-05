import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer); //스토어를 만들어 준다.
// console.log(store.getState()); //스토의 현재 상태를 확인한다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// Provider 로 store을 넣어서 App 을 감싸게 되면 우리가 렌더링하는 어떤 컴포넌트에서도 리덕스 스토어에 접근 가능하게 도와주는거다.
reportWebVitals();
