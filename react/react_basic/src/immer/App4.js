import React from 'react';
import produce from 'immer';
/* 리액트에서는 배열이나 객체를 업데이트할 때 직접 수정해주면 안되고 불변성을 지켜주면서 업데이트를 해야하는데 
... 연산자를 사용해 새로운 객체를 만들어야하고,
배열도 마찬가지로 push, splice 등 함수나, n번째 항목에 직접수정하면 안된다!
그래서 배열은 concat, filter, map함수를 써야한다.
하지만 이 방법으로 불변성을 지켜가면서 업데이트 하기에 코드가 복잡해진다.
그래서 immer 라이브러리를 사용하면 코드를 줄일 수 있다.  
npm i immer 설치
*/
// 그 부분이 쉬운 
// immer 이라는 라이브러리를 사용하면 
function App4() {
  const state ={
      number:1,
      dontChangeMe: 2
  };

  const nextState = produce(state, draft => {
      draft.number += 1;
  });
  console.log(nextState);
    return (
        <div>
          hi
        </div>
    )
}

export default App4
