// import logo from './logo.svg';
// import './App.css';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputSample1 from "./InputSample1";
function App() {
  return (
    <>
      <Wrapper>
        <Hello name="heetae" color="blue" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
      <hr />
      <Counter />
      <hr />
      <InputSample />
      <hr />
      <InputSample1 />
      <hr />
      <InputSample2 />
    </>
  );
}

export default App;
