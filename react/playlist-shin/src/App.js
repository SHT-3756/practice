import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Login from "./components/Login";

const code = new URLSearchParams(window.location.search).get("code");
function App() {
  return code ? <Main code={code} /> : <Login />;
}

export default App;
