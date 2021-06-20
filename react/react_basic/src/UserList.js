import React from 'react'
// 배열 렌더링 하기
/* 
    리액트에서 배열을 랜더링 하기
*/
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}
function UserList() {
    const members = [
        {
            id: 1,
            username: 'SHT',
            email: 'shin103502@naver.com'
        },
        {
            id: 2,
            username: 'KKK',
            email: 'KKK@naver.com'
        },
        {
            id: 3,
            username: 'LLL',
            email: 'LLL@naver.com'
        }
    ];

    return (
        <div>
            {/* map()함수는 배열안의 각원소를 변환해서 새로운 배열을 만들어준다. 
            리액트에서 동적인 배열 랜더링할 때 사용한다.
            */}
            {members.map(user1 => ( // () 에 props이름=user1 이라고 함->members의배열, props(user1)에 0,1,2의 엘리먼트값이 들어가있다.
                <User user={user1} key={user1.id}/>
                // <User /> 에 props이름=(user)라고하고 값을, members.map(이 props를) 넣어준다.{user1}, 키값도 고유한 members.id를 넣어준다.
            ))}
        </div>
    )
}

export default UserList
