// App.js1 는 컴포넌트 상태관리를 useReducer로 사용하였고
// App.js는 useState로 상태를 관리하였다.
// 둘중에 뭘 사용해서 상태관리 하든 상관없다. 상황에 맞게 쓰자
/* 예 ) 컴포넌트에 관리하는 값이 딱 하나고, 그 값이 단순한 숫자, 문자열 또는 boolean 값이라면 확실히 useState가 편하다. 
        
        const [value, setValue] = useState(true);
        ----------------------------------------
        setUser(users => users.concat(user));
        setInputs({
            username: '',
            email: ''
        });
*/
import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList1 from "./UserList1";
import CreateUser from "./CreateUser";
import Counter1 from "./Counter1"; 
import App from "./App";

function countActiveUsers(members) {
  console.log('활성 사용자 수 세는중...');
  return members.filter(user => user.active).length;
}
const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    members: [
        {
            id: 1,
            username: "SHT",
            email: "SHT@naver.com",
            active: true
          },
          {
            id: 2,
            username: "AAA",
            email: "AAA@naver.com",
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

function reducer(state, action){
    switch(action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                members: state.members.concat(action.user)
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                members: state.members.map(user =>
                    user.id === action.id ? {...user, active: !user.active } : user 
                )
            };
        case 'REMOVE_USER':
            return {
                ...state,
                members: state.members.filter(user => user.id !== action.id)
            };
            default:
                return state;
    }
}

function App1() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);


    const { members } = state;
    const { username, email } = state.inputs;

    const onChange = useCallback(e=> {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);

    const onCreate = useCallback(()=> {
        dispatch({
            type: 'CREATE_USER',
            user:{
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
    }, [username, email]);

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
    },[]);

    const count = useMemo(() => countActiveUsers(members), [members])
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList1 AProps={members} onToggle={onToggle} onRemove={onRemove}/>
      <div>활성사용자 수 : {count}</div>
      <hr />
      <Counter1 />
    </>
  );
}

export default App1;
