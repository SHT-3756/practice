import firebase from "firebase";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import MainPage from "./components/mainPage/mainPage";
import { setUser, clearUser } from "./modules/index";
function App() {
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        history.push("/login");
        dispatch(clearUser());
      }
    });
  }, []);
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  );
}

export default App;
