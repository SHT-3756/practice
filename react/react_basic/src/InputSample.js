import React, { useState } from "react";
// Input 상태 관리 해주기
function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value)
  }
  const onReset =() =>{
    setText("");
  }

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
