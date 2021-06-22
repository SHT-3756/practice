import React,{ useReducer } from 'react'
// useReducer 사용하기
/*
상태를 관리할 때 주로 useState를 사용했는데 useReducer 훅 함수로 상태를 관리해줄수 있다.
이렇게 하면 컴포넌트 상태의 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
상태 업데이트 로직을 컴포넌트 밖에 쓸 수도 있고 다른파일에 작성후 불러올수도 있다.
const [ state, dispatch ] = useReducer(reducer, initialState);
*/
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

function Counter1() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease =() => {
        dispatch({type: 'INCREMENT'});
    };
    const onDecrease =() => {
        dispatch({ type: 'DECREMENT'});
    };

    return (
        <div>
            <h1>{number}</h1>      
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter1
