// ComponentDidCatch로 에러 잡아내기/ Sentry 연동
/* ComponentDidCatch라는 생명주기 메서드를 사용해 리액트 애플리케이션에서 발생하는 에러를 처리할 방법을 알아보자*/
/*만약 return <User /> 이렇게 (props를 정확히 안써주고) 써주면  화면이 에러페이지가 뜨고 에러페이지를 끄면 흰페이지만 나오게 된다.
서비스를 사용하는 사용자가 이런 경험을 안겪게 해줘야 한다.
1. 흰화면 대신 에러발생했는다는 것을 알려주는 방법
2. 어떤상황에 또 이런 페이지가 발생하는지 
3. 에러를 방지하는 방법을 알아보자!
 */
import React from 'react'
import User from './User'
function App6() {
    const user = [
        {
            id: 1,
            username: 'SHT',
        },
        {
            id: 2,
            username: 'SHT2',
        },
    ]
    return (
        <div>
            <User user={user} />
            <p>와우</p>
        </div>
    )
}

export default App6
