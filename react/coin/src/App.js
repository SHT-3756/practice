import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Mylist } from "./components/Mylist/Mylist";
import { All } from "./components/All/All";
import { Home } from "./components/Home/Home";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mylist">
              <Mylist />
            </Route>
            <Route path="/all">
              <All />
            </Route>
          </Switch>
        </Router>
      </Router>
    </GlobalProvider>
  );
}

export default App;
