import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
// spotify를 로그인 하면 로그인이 된 url 이 있는데, 페이지를 액세스할 떄마다 URL에서 코드를 가져오고 싶다.
//URLSearchParams(window.location.search).get 은 URL ?뒤 코드를 가져올 수 있다.
const code = new URLSearchParams(window.location.search).get("code");
function App() {
  //코드가 있는 경우 대쉬보드를 랜더링하고싶다.
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
