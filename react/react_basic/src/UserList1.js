import React,{useEffect} from "react";
// useRef 로 컴포넌트 안의 변수 만들기

/* useRef Hook은 DOM 선택 용도 이외에 다른 용도가 한가지 더 있다.
바로! 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 관리하는 것.

useRef 로 관리하는 변수는 값이 바뀐다고 컴포넌트가 리렌더링 되지 않는다.
리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업테이트된 상태를 조회할 수 있는데,
useRef 로 관리하고있는 변수는 설정 후 바로 조회 가능하다.
1. setTimeout, setInterval을 통해서 만들어진 id
2. 외부 라이브러리를 사용해 생성된 인스턴스
3. scroll 위치

우리는 App 컴포넌트에서 useRef를 사용해 변수를 관리해볼거다.

아까 작성한 UserList.js 를 보면 UserList 컴포넌트 내부에서 배열을 직접 선언해 사용했는데!
이 배열을 App 에서 선언하고 UserList에게 props로 전달을 해주겠다.
 
*/
/*추가: onRemove , 배열에서 항목 제거하기, onToggle 로 기본 active true인 것을 초록색으로 표시하고 클릭하면 해당하는 토글의 색도 초록으로 변하게 구성*/
function User({ user1, onRemove, onToggle }) {
  useEffect(() => {
    console.log(user1);
    
  });
  return (
    <div>
      <b style={{ cursor: "pointer", color: user1.active ? 'green' : 'black' }} onClick={()=> onToggle(user1.id)}>
        {user1.username}
      </b>
      <span>({user1.email})</span>
      <button onClick={() => onRemove(user1.id)}>삭제</button>
    </div>
  );
}
function UserList1({ AProps, onRemove, onToggle }) {
  return (
    <div>
      {AProps.map((Bprops) => (
        <User user1={Bprops} key={Bprops.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default UserList1;
