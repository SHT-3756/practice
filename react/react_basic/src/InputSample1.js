import React,{useState} from 'react'
// 여러개의 Input 상태관리
/*
    input 의 개수가 여러개 됐을때는 단순히 useState와 onChange 를 여러번쓰는것이 아니라
    input 에 name을 설정하고 이벤트 발생할떄 이 값을 참조하는 것이다.
    useState에서는 문자열이 아니라 객체 형태의 상태를 관리해줘야한다.
*/
function InputSample1() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    
    
    const onChange = (e) => {
      const { value, name } = e.target; // 우선 e.target으로 name과 value 추출
      setInputs({
        ...inputs, //기존의 input 객체 복사하고
        [name]: value, // name 키를 가진 값을 value로 설정
      });
    }; ;
    
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample1
