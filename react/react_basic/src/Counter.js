import React,{useState} from 'react'
// useState로 컴포넌트에 바뀌는 값 관리하기

function Counter() {
 const [number, setNumber] = useState(0);

    const increase = () => {
        //  함수로 등록하는 방식으로도 할수 있다.
        setNumber(preNumber => preNumber  + 1);
    }

    const decrease =() => {
        // useState의 현재상태(number)를 더해 setter에 선언하는 방법
        setNumber(number -1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}

export default Counter
