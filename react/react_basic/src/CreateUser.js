import React from 'react'
/* 배열에 항목 추가하기 
배열에 새로운 항목을 추가하는 방법을 알아보자
input 2개 와 button 1개로 이루어진 CreateUser.js 를 만들고
이 컴포넌트의 상태관리를 CreateUser에서 하지 않고 부모컴포넌트App에서 하게하고,
input 의 값 과 이벤트로 등록할 함수들을 props로 넘겨받아 사용하겠다. 
*/
function CreateUser({ username, email, onChange, onCreate}) {
    return (
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>등록</button>
      </div>
    );
}

export default React.memo(CreateUser);
