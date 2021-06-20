import React,{useState, useRef} from 'react'
// useRef 로 특정 DOM 선택하기 
/*
    JS사용할때 우리가 특정 DOM 을 선택할때 getElementById, queryselector 를 사용하는데
    리액트에서도 가끔 DOM을 직접 선택해야할 때가 있다.
    예)
     특정 엘리먼트 크기 가져오거나 설정하거나, 포커스 설정하거나
     Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리 
     또는 D3,chart.js 그래프관련 등 외부라이브러리 사용할때도 특정 DOM에 적용하기때문에
     DOM을 선택해야 하는 상황이 온다.
    
    리액트는 ref를 사용한다!
    fucntional 컴포넌트에서 ref를 사용할때에는 useRef 훅(Hook)함수를 사용하거나
    React.createRef 함수를 사용한다. 
*/
function InputSample2() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
      });
      const nameInput = useRef(); // useRef() 를 사용해 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은DOM에 ref값으로 설정 해주어야 한다. 
    
      const { name, nickname } = inputs; 
    
      const onChange = e => {
        const { value, name } = e.target; 
        setInputs({
          ...inputs, 
          [name]: value 
        });
      };
    
      const onReset = () => {
        setInputs({
          name: '',
          nickname: ''
        });
        nameInput.current.focus(); // 리셋을 한후에 nameInpput을 찾아서 포커싱해라
      };
    return (
      <div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
          ref={nameInput}/* 우리가 선택하고 싶은 DOM에 ref 값 설정 */
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
      </div>
    );
}

export default InputSample2
