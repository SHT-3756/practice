import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { useEffect } from "react";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/action/user_action";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      //로그인 된 상태
      if (user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        //로그인 안된 상태
        history.push("/login");
      }
    });
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    );
  }
}

export default App;
