import React from "react";
/* 프리젠테잇널 컴포넌트 만들기
리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props로만 받아와서 사용하는 컴포넌트이다.
주로 UI를 선언하는 것에 집중한다. */
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    // e.target.value 타입은 문자열이기 때문에 숫자로 바꿔줘야 한다.
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
