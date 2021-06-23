import React, { useReducer, useMemo } from 'react';
import UserList2 from './UserList2';
import CreateUser2 from './CreateUser';

// Context API 를 사용해 전역 상태 관리
function countActiveUsers(members) {
    console.log('활성 사용자 수 세는중...');
    return members.filter(user => user.active).length;
}
const initialState = {
    members: [
        {
            id: 1,
            username: "SHT",
            email: "SHT@naver.com",
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: "BBB",
            email: "BBB@naver.com",
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        
        case 'CREATE_USER':
            return {
                members: state.members.concat(action.user)
            };
        case 'TOGGLE_USER':
            return {
                members: state.members.map(user => 
                    user.id === action.id ? { ...user, active: !user.aactive } : user 
                    )
            };
        case 'REMOVE_USER':
            return {
                members: state.members.filter(user => user.id !== action.id)
            };
        default:
            return state;
    }
}
// UserDispatch 라는 이름으로 내보내준다.
export const UserDispatch = React.createContext(null);

function App3() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const { members } = state;
  
    const count = useMemo(() => countActiveUsers(members), [members]);
    return (
      <UserDispatch.Provider value={dispatch}>
        <CreateUser2 />
        <UserList2 AProps={members} />
        <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
    );
  }
  
  export default App3;