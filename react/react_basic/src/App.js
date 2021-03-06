// import logo from './logo.svg';
// import './App.css';
import React, { useRef, useState, useMemo, useCallback } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputSample1 from "./InputSample1";
import InputSample2 from "./InputSample2";
import UserList from "./UserList";
import UserList1 from "./UserList1";
import CreateUser from "./CreateUser";
import Counter1 from "./Counter1"; 

function countActiveUsers(members) {
  console.log('활성 사용자 수 세는중...');
  return members.filter(user => user.active).length;
}
function App() {
  // CreateUser 컴포넌트에서 필요한 props 준비해준것
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = useCallback (
    e => {
      const { name, value } = e.target;
      setInputs(inputs => ({
        ...inputs,
        [name]: value,
      }));
    }, []);
  // UserList1.js 를 위한 변수
  const [members, setMembers] = useState([
    {
      id: 1,
      username: "SHT",
      email: "SHT@naver.com",
      active: true
    },
    {
      id: 2,
      username: "AAA",
      email: "AAA@naver.com",
      active: false
    },
    {
      id: 3,
      username: "BBB",
      email: "BBB@naver.com",
      active: false
    },
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const member = {
      id: nextId.current,
      username,
      email,
    };
    setMembers([...members, member]);
    /*밑의 방법으로 해도됌, 위에는 spread 연산자사용, 밑에는 concat()를 사용
     */
    // setMembers(members.concat(member));
    
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [members ,username, email ]);

  const onRemove = useCallback(
    id => {
    // user.id 가 파라미터로 일치하지 않는 원소들만 추출해서 새로운 배열만들고
    //  = user.id 가 id 인 것을 제거한다.
    setMembers(members.filter(user => user.id !== id));
  },[members]);

  const onToggle = useCallback(
    id => {
    setMembers(members =>
      members.map(user => 
        user.id === id ? { ...user, active: !user.active } : user )
    );
  },[]);
  
  const count = useMemo(()=> countActiveUsers(members), [members]); 
  
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
      <hr />
      <UserList />
      <hr />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList1 AProps={members}  onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
      <hr />
      <Counter1 />
    </>
  );
}

export default App;
