import React from 'react'
// props를 통해 컴포넌트에게 값전달하기
// 조건부 렌더링
function Hello({color, name, isSpecial }) {
    return (
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            안녕하세요 {name} 
        </div>
    )
}
Hello.defaultProps = {
    name: '이름없음'
}
export default Hello
// 조건부 렌더링 2가지 방법
// 삼항연산자 는 조건마다 다르게 랜더링 할때!
// && 연산자는 같은 거 뿌릴때, 보이고 안보이게만 할때

// {isSpecial ? <b>*</b> : null} -> 삼항연산자, isSpecial이 true면 * false 면 null
// {isSpecial && <b>*</b>}-> && 연산자, isSpecial이 트루면 <b>*</b> false면 감추기
