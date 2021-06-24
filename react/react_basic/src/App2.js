import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList1 from './UserList1';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

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
                    user.id === action.id ? { ...user, active: !user.active } : user 
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

function App2() {
    const [{ username, email }, onChange, reset] = useInputs({
      username: '',
      email: ''
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
  
    const { members } = state;
  
    const onCreate = useCallback(() => {
      dispatch({
        type: 'CREATE_USER',
        user: {
          id: nextId.current,
          username,
          email
        }
      });
      reset();
      nextId.current += 1;
    }, [username, email, reset]);
  
    const onToggle = useCallback(id => {
      dispatch({
        type: 'TOGGLE_USER',
        id
      });
    }, []);
  
    const onRemove = useCallback(id => {
      dispatch({
        type: 'REMOVE_USER',
        id
      });
    }, []);
  
    const count = useMemo(() => countActiveUsers(members), [members]);
    return (
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList1 AProps={members} onToggle={onToggle} onRemove={onRemove} />
        <div>활성사용자 수 : {count}</div>
      </>
    );
  }
  
  export default App2;